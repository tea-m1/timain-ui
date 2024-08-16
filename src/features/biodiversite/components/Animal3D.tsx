import {Suspense, useState, useEffect} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";

type FoxModelProps = {
  mouseX: number;
  autoRotate: boolean;
};

const FoxModel: React.FC<FoxModelProps> = ({mouseX, autoRotate}) => {
  const {scene} = useGLTF("./crocodile2.glb");
  const [rotationY, setRotationY] = useState<number>(0);

  useFrame(() => {
    if (autoRotate) {
      setRotationY((prev) => prev + 0.005);
    } else {
      const mouseRotationY =
        (mouseX / window.innerWidth) * 2 * Math.PI - Math.PI;
      setRotationY(mouseRotationY);
    }
  });

  return <primitive object={scene} scale={2} rotation={[0, rotationY, 0]} />;
};

export const Animal3D: React.FC = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setAutoRotate(false);

      const timeout = setTimeout(() => {
        setAutoRotate(true);
      }, 2000);

      return () => clearTimeout(timeout);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 8, 10],
        fov: 25,
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <FoxModel mouseX={mouseX} autoRotate={autoRotate} />
      </Suspense>
    </Canvas>
  );
};
