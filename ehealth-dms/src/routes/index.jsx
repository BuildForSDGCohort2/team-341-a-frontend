import {EhealthLayout} from "components";
import {LandingPage} from "components";

var indexRoutes = [
  { path: "/app", name: "Dashboard", component: EhealthLayout },
  { path: "/", name: "Login", component: LandingPage },
];

export default indexRoutes;
