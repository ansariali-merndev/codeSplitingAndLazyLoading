import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="h-[30vh] flex items-center justify-center">
            <h2 className="text-2xl">Loading....</h2>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
