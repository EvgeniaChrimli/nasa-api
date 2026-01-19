import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../shared/UI/Header";

export const Route = createRootRoute({
  component: RootLayout,
});

//для еще одного слоя создаю например __guest.tsx и GuestLayout

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
