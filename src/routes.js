/*!

=========================================================
* eMIS Dashboard React - v1.0.0
=========================================================

* Abdul Manann
*/
import Dashboard from "views/Dashboard.js";
//import UserProfile from "views/UserProfile.js";
//import TableList from "views/TableList.js";
//import Typography from "views/Typography.js";
//import Icons from "views/Icons.js";
//import Maps from "views/Maps.js";
//import Notifications from "views/Notifications.js";
//import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "eMIS Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/"
  }

];

export default dashboardRoutes;
