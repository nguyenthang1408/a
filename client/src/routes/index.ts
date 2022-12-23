import { config } from "../config/config";
import Home from "../pages/Home/Home";
import About from "../pages/About/about";
import Details from "../pages/details/details";

const routes = [
  { path: config.home, component: Home },
  { path: config.about, component: About },
  { path: config.details, component: Details },
];

export default routes;
