import { Camera } from '@babylonjs/core/Cameras/camera';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { Axis, Space } from '@babylonjs/core/Maths/math.axis';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Scene } from '@babylonjs/core/scene';
import { WebXRImageTracking } from '@babylonjs/core/XR/features/WebXRImageTracking';
import { WebXRDefaultExperience, WebXRDefaultExperienceOptions } from '@babylonjs/core/XR/webXRDefaultExperience';
import { WebXRFeatureName } from '@babylonjs/core/XR/webXRFeaturesManager';
import '@babylonjs/loaders/glTF';
import { EngineView, useEngine } from '@babylonjs/react-native';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, ViewProps } from 'react-native';

// See https://aka.ms/babylonImageRecognition for an equivalent browser version.
async function setupXRAsync(scene: Scene, options: WebXRDefaultExperienceOptions): Promise<WebXRDefaultExperience> {
  scene.createDefaultEnvironment({ createGround: false, createSkybox: false });

  // this root node will be transformed by the image tracking module
  const root = new TransformNode("root", scene);
  root.setEnabled(false);

  // load the mesh
  const model = await SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/vintageDeskFan/", "vintageFan_animated.gltf", scene);
  model.meshes[0].parent = root;
  model.meshes[0].scaling.scaleInPlace(0.005);
  model.meshes[0].rotate(Axis.Y, Math.PI, Space.LOCAL);
  // load animations from glTF
  const fanRunning = scene.getAnimationGroupByName("fanRunning")!;

  // Stop all animations to make sure the asset it ready
  scene.stopAllAnimations();
  // run the fanRunning animation
  fanRunning.start(true);

  // initiate the xr experience helper
  const xr = await scene.createDefaultXRExperienceAsync(options);

  const featuresManager = xr.baseExperience.featuresManager;
  // initiate the image tracking feature
  const imageTracking = featuresManager.enableFeature(WebXRFeatureName.IMAGE_TRACKING,
    "latest", {
    images: [
      {
        src: "https://github.com/bghgary/MarkerTrackingDemo/raw/main/marker.png",
        estimatedRealWorldWidth: 0.2
      },
    ]
  }) as WebXRImageTracking;

  // this callback will be executed every time the image's position was updated
  imageTracking.onTrackedImageUpdatedObservable.add((image) => {
    // copy the updated transformation to the model
    root.setPreTransformMatrix(image.transformationMatrix);
    root.setEnabled(true);
  });

  return xr;
}

const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    if (engine) {
      const scene = new Scene(engine);
      setupXRAsync(scene, { disableDefaultUI: true }).then((xr) => {
        setCamera(xr.baseExperience.camera);
        xr.baseExperience.enterXRAsync("immersive-ar", "unbounded", xr.renderTarget);
      });
    }
  }, [engine]);

  return (
    <>
      <View style={props.style}>
        <EngineView camera={camera} displayFrameRate={true} />
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <EngineScreen style={{ flex: 1 }} />
      </SafeAreaView>
    </>
  );
};

export default App;
