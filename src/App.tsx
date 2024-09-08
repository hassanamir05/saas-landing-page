import { Navbar } from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HeroSection,
  AboutUs,
  CallToAction,
  Footer,
  GetStarted,
  Questions,
  Testimonials,
  Full,
} from "./Pages";
import { AppLayout } from "./Layout/AppLayput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Full />,
      },
      {
        path: "why-project",
        element: <AboutUs />,
      },
      {
        path: "solution",
        element: <CallToAction />,
      },
      {
        path: "pricing",
        element: <GetStarted />,
      },
      {
        path: "resources",
        element: <Questions />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
