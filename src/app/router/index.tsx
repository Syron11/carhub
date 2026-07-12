import { createBrowserRouter } from "react-router-dom";

//  Новый правильный импорт
import { HomePage } from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);