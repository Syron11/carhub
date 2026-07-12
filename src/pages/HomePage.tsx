import type { JSX } from "react";
import MainLayout from "@/app/layouts/MainLayout";
// 1. Исправили импорт на именованный (в фигурных скобках)
import { Hero } from "@/widgets/Hero"; 

// 2. Добавили явную типизацию возвращаемого значения JSX.Element и именованный экспорт
export function HomePage(): JSX.Element {
  return (
    <MainLayout>
      <main>
        <Hero />
      </main>
    </MainLayout>
  );
}