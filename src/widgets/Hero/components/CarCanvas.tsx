import type { JSX } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Center } from "@react-three/drei"; // Добавили Center

function Model({ url }: { url: string }): JSX.Element {
  const { scene } = useGLTF(url);
  // Принудительно отцентруем саму сцену модели
  return <primitive object={scene} />;
}

interface CarCanvasProps {
  modelPath: string;
}

export function CarCanvas({ modelPath }: CarCanvasProps): JSX.Element {
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[520px] cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={[1, 2]}
        // Увеличим дистанцию камеры, чтобы она видела модель целиком
        camera={{ position: [0, 2, 8], fov: 45 }} 
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          {/* Center принудительно ставит модель в координаты [0,0,0] */}
          <Center>
            <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera>
              <Model url={modelPath} />
            </Stage>
          </Center>
        </Suspense>

        <OrbitControls
          makeDefault
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}