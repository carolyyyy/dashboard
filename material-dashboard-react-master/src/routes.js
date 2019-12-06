/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import Assignment from "@material-ui/icons/Assignment";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import AppPage from "views/App/App.js";
import UserPage from "views/App/User.js";
import FeaturePage from "views/Feature/Feature.js";
import FeatureDetail from "views/Feature/FeatureDetail.js";
import RulePage from "views/Rule/Rule.js";
import RuleDetail from "views/Rule/RuleDetail.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/app",
    name: "App",
    icon: Home,
    component: AppPage,
    layout: "/admin",
    invisible: false,
    
  },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  //   invisible: true
  // },
  {
    path: "/user",
    name: "User",
    icon: Person,
    component: UserPage,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/features",
    name: "Features",
    icon: LibraryBooks,
    component: FeaturePage,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/features_detail",
    name: "FeatureDetail",
    icon: LibraryBooks,
    component: FeatureDetail,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/rule",
    name: "Rule",
    icon: Assignment,
    component: RulePage,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/rule_detail",
    name: "RuleDetail",
    icon: Assignment,
    component: RuleDetail,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/app_user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    invisible: true
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
