import type { ReactNode } from "react";

import Container from "@/shared/ui/Container";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default MainLayout;