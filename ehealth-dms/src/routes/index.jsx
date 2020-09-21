import {EhealthLayout, LegalEntityAccountComponent, IndividualAccount, Login, ResetPassword} from "components";

var indexRoutes = [
  { path: "/app", name: "Dashboard", component: EhealthLayout },
  { path: "/legal-entity-account", name: "Accounts", component: LegalEntityAccountComponent },
  { path: "/login", name: "Login", component: Login },
  { path: "/individual-account", name: "Iaccounts", component: IndividualAccount },
  { path: "/reset-password", name: "Reset", component: ResetPassword },
];

export default indexRoutes;
