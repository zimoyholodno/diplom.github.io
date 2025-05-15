// import * as TWEEN from "@tweenjs/tween.js";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Ground } from "./Ground.jsx";
import { Physics, RigidBody } from "@react-three/rapier";
import { Player } from "./Player.jsx";
import { useFrame } from "@react-three/fiber";
import { Group } from "@tweenjs/tween.js";

const tweenGroup = new Group();

const shadowOffset = 50;

export const App = () => {
  useFrame(({ clock }) => {
    tweenGroup.update(clock.elapsed * 1000);
  });

  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={10.5} />
      <directionalLight
        castShadow
        intensity={5}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
        position={[100, 100, 0]}
      />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh castShadow receiveShadow position={[0, -2, 0]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>

      {/* <group castShadow receiveShadow position={[3, 0, -2]}>
        <WeaponModel />
      </group> */}
    </>
  );
};

export default App;
