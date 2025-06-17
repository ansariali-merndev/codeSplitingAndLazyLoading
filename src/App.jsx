import { Layout } from "./app/Layout";
import { Home } from "./pages/Home";
// import About from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { SignIn } from "./pages/SignIn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const About = lazy(() => wait(3000).then(() => import("./pages/About")));

const Contact = lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact }))
);

const SignIn = lazy(() =>
  import("./pages/SignIn").then((module) => ({ default: module.SignIn }))
);

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
