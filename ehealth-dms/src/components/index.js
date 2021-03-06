
import EhealthLayout from './layout/Ehealth';
import LayoutComponent from './common/layout/LayoutComponent';
import Footer from './common/footer/Footer';
import Spinner from './common/spinner/Spinner';
import Usestyles from './general/settings/Usestyles';
import { RenderMobileMenu } from './general/headerPopUp/HeaderPopUp';
import { CustomizedMenus } from './general/headerPopUp/PopUp';
import LegalEntityAccountComponent from './general/auth/legalAccount/LegalEntityAccountComponent';
import AccountPageHeader from './general/auth/legalAccount/AccountPageHeader';
import AddHospital from '../views/hospital/AddHospital';
import InitEmployee from '../views/employee/InitEmployee';
import AdminUser from '../views/adminUser/Admin';
import EntityAccountStepper from './general/auth/entityAccountStepper/EntityAccountStepper';
import IndividualAccountStepper from './general/auth/individualAccountStepper/IndividualAccountStepper';
import EntityAccount from './general/auth/accounts/EntityAccount';
import IndividualAccount from './general/auth/accounts/IndividualAccount';
import Login from './general/auth/login/Login';
import EmailConfirmation from './general/auth/emailConfirmation/EmailConfirmation';
import ResetPassword from './general/auth/forgotPassword/ResetPassword';
// import withFirebase from '../firebase/index';

export {
    EhealthLayout,
    Footer,
    AddHospital,
    InitEmployee,
    AdminUser,
    Login,
    EmailConfirmation,
    LegalEntityAccountComponent,
    Usestyles,
    EntityAccount,
    IndividualAccount,
    EntityAccountStepper,
    IndividualAccountStepper,
    AccountPageHeader,
    ResetPassword,

    CustomizedMenus,
    RenderMobileMenu,
    LayoutComponent,
    Spinner
};
