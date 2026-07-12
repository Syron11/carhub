import type { JSX } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

// Компонент, который отвечает за рендеринг самой 3D-сетки
function Model({ url }: { url: string }): JSX.Element {
  // useGLTF кэширует модель, чтобы она не загружалась заново при перерендере
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface CarCanvasProps {
  modelPath: string;
}

export function CarCanvas({ modelPath }: CarCanvasProps): JSX.Element {
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[520px] cursor-grab active:cursor-grabbing">
      {/* Canvas — это холст WebGL, где отрисовывается 3D графика */}
      <Canvas
        dpr={[1, 2]} // Оптимизация под Retina и 4K дисплеи
        camera={{ fov: 45, position: [0, 0, 5] }}
      >
        {/* Базовый рассеянный свет вокруг машины */}
        <ambientLight intensity={0.5} />
        
        {/* Suspense нужен, чтобы сайт не падал, пока файл качается в браузере */}
        <Suspense fallback={null}>
          {/* 
            shadows="contact" включает мягкие контактные тени под колесами.
            adjustCamera={true} автоматически подстроит камеру под масштаб твоей модели, 
            чтобы она не казалась слишком крошечной или огромной.
          */}
          <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera>
            <Model url={modelPath} />
          </Stage>
        </Suspense>

        {/* Настройки управления мышкой/пальцем */}
        <OrbitControls
          enableZoom={false} // Запрещаем приближение, чтобы случайно не залететь внутрь фар
          autoRotate // Машина будет плавно крутиться сама
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2} // Запрещает камере уходить под "пол"
        />
      </Canvas>
    </div>
  );
}