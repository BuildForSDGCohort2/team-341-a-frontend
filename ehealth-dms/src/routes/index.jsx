import {EhealthLayout, LegalEntityAccountComponent, IndividualAccount, Login, ResetPassword, EmailConfirmation} from "components";

var indexRoutes = [
  { path: "/app", name: "Dashboard", component: EhealthLayout },
  { path: "/legal-entity-account", name: "Accounts", component: LegalEntityAccountComponent },
  { path: "/login", name: "Login", component: Login },
  { path: "/individual-account", name: "Iaccounts", component: IndividualAccount },
  { path: "/reset-password", name: "Reset", component: ResetPassword },
  { path: "/confirm-email", name: "ConfirmEmail", component: EmailConfirmation },
];

export default indexRoutes;
