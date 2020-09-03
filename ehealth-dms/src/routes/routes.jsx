import Dashboard from 'views/dashboard/Dashboard.jsx';
 
import Employee from 'views/employee/Employee.jsx';
import AddEmployee from 'views/employee/AddEmployee.jsx';
import EditEmployee from 'views/employee/EditEmployee.jsx';
import EmployeeProfile from 'views/employee/EmployeeProfile.jsx';
import Hospital from 'views/hospital/Hospital.jsx';
import AddHospital from 'views/hospital/AddHospital.jsx';
import EditHospital from 'views/hospital/EditHospital.jsx';
import AddDepartment from 'views/department/AddDepartment.jsx';
import EditDepartment from 'views/department/EditDepartment.jsx';
import AddRoom from 'views/room/AddRoom.jsx';
import EditRoom from 'views/room/EditRoom.jsx';
import AddWard from 'views/ward/AddWard.jsx';
import EditWard from 'views/ward/EditWard.jsx';

import Patient from 'views/patient/Patient.jsx';
import AddPatient from 'views/patient/AddPatient.jsx';
import EditPatient from 'views/patient/EditPatient.jsx';
import PatientAppointment from 'views/patient/PatientAppointment.jsx';
import EditPatientAppointment from 'views/patient/EditPatientAppointment.jsx';
import AdmitPatient from 'views/patient/AdmitPatient.jsx';
import EditAdmitPatient from 'views/patient/EditAdmitPatient.jsx';
import DischargePatient from 'views/patient/DischargePatient.jsx';
import EditDischargePatient from 'views/patient/EditDischargePatient.jsx';
import PatientProfile from 'views/patient/PatientProfile.jsx';

import Billing from 'views/billing/Billing.jsx';

import LabResult from 'views/laboratory/LabResult.jsx';
import EditLabResult from 'views/laboratory/EditLabResult.jsx';

import AddMedicine from 'views/medicine/AddMedicine.jsx';
import EditMedicine from 'views/medicine/EditMedicine.jsx';

var eHealthRoutes = [
  {path: "/app/dashboard", name: "Dashboard", icon: "speed", color: "#ffcdd2", badge: "", component: Dashboard},
  {
    path: "#", name: "Hospital", icon: "local_hospital", type: "dropdown", color: "#69f0ae", parentid: "hospital", open: false,
    child: [
      {path: "/app/hospital", name: "Hospital"},
      {path: "/app/add-employee", name: "Register Employee"},
      {path: "/app/edit-employee", name: "Edit Employee"},
      {path: "/app/employee-profile", name: "Employee Profile"},
      {path: "/app/add-hospital", name: "Register Hospital"},
      {path: "/app/edit-hospital", name: "Edit Hospital"},
      {path: "/app/add-department", name: "Add Department"},
      {path: "/app/edit-department", name: "Edit Department"},
      {path: "/app/add-ward", name: "Add Ward"},
      {path: "/app/edit-ward", name: "Edit Ward"},
      {path: "/app/add-room", name: "Add Room"},
      {path: "/app/edit-room", name: "Edit Room"},
    ]
  },
  {path: "/app/hospital", component: Hospital, type: "child"},
  {path: "/app/employee", component: Employee, type: "child"},
  {path: "/app/add-employee", component: AddEmployee, type: "child"},
  {path: "/app/edit-employee", component: EditEmployee, type: "child"},
  {path: "/app/employee-profile", component: EmployeeProfile, type: "child"},
  {path: "/app/add-hospital", component: AddHospital, type: "child"},
  {path: "/app/edit-hospital", component: EditHospital, type: "child"},
  {path: "/app/add-department", component: AddDepartment, type: "child"},
  {path: "/app/edit-department", component: EditDepartment, type: "child"},
  {path: "/app/add-ward", component: AddWard, type: "child"},
  {path: "/app/edit-ward", component: EditWard, type: "child"},
  {path: "/app/add-room", component: AddRoom, type: "child"},
  {path: "/app/edit-room", component: EditRoom, type: "child"},
  {
    path: "#", name: "Patients", icon: "supervisor_account", color: "#90caf9", type: "dropdown", parentid: "patient", open: false,
    child: [
      {path: "/app/patient", name: "Patient"},
      {path: "/app/register-patient", name: "Register Patient"}, 
      {path: "/app/edit-patient", name: "Edit Patient"},
      {path: "/app/patient-appointment", name: "Book Appointment"},
      {path: "/app/editpatient-appointment", name: "Edit Appointment"},
      {path: "/app/admit-patient", name: "Admit Patient"},
      {path: "/app/edit-admit-patient", name: "Edit AdmitPatient"},
      {path: "/app/discharge-patient", name: "Discharge Patient"},
      {path: "/app/edit-discharge-patient", name: "Edit DischargePatient"},
      {path: "/app/patient-profile", name: "Patient Profile"},
    ]
  },
  {path: "/app/patient", component: Patient, type: "child"},
  {path: "/app/register-patient", component: AddPatient, type: "child"},
  {path: "/app/edit-patient", component: EditPatient, type: "child"},
  {path: "/app/patient-appointment", component: PatientAppointment, type: "child"},
  {path: "/app/edit-patient-appointment", component: EditPatientAppointment, type: "child"},
  {path: "/app/admit-patient", component: AdmitPatient, type: "child"},
  {path: "/app/edit-admit-patient", component: EditAdmitPatient, type: "child"},
  {path: "/app/discharge-patient", component: DischargePatient, type: "child"},
  {path: "/app/edit-discharge-patient", component: EditDischargePatient, type: "child"},
  {path: "/app/patient-profile", component: PatientProfile, type: "child"},
  {
    path: "#", name: "Laboratory", icon: "biotech", color: "#b2dfdb", type: "dropdown", parentid: "laboratory", open: false,
    child: [
      {path: "/app/patient-lab-result", name: "Lab Analysis"},
      {path: "/app/edit-lab-result", name: "Edit Lab Result"}, 
    ]
  },
  {path: "/app/patient-lab-result", component: LabResult, type: "child"},
  {path: "/app/edit-lab-result",  component: EditLabResult, type: "child"},
  {
  path: "#", name: "Inventory", icon: "add_shopping_cart", color: "#b1bace ", type: "dropdown", parentid: "assets", open: false,
    child: [
      {path: "/app/add-medicine", name: "New Medicine"},
      {path: "/app/edit-medicine", name: "Edit Medicine"},
    ]
  },
  {path: "/app/add-medicine", component: AddMedicine, type: "child"},
  {path: "/app/edit-medicine", component: EditMedicine, type: "child"},
  {path: "/app/billing", name: "Billing", color: "#e1bee7", icon: "attach_money", badge: "", component: Billing},
  {path: "contact-us", name: "Contact Us", color: "#a1887f", icon: "contact_support", component: ""},
];
export default eHealthRoutes;
