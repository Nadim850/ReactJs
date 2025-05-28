import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Github, { githubInfoLoader } from "./components/Social/Github";
import User from "./components/user/User";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="user/:id" element={<User />}></Route>
      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader}
      ></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
