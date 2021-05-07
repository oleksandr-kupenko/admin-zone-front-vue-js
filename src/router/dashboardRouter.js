import Profile from "../components/dashboard/Profile/Profile";
import Search from "../components/dashboard/Search/Search";
import PersonalInfo from "../components/dashboard/Profile/PersonalInfo";
import AccauntInfo from "../components/dashboard/Profile/AccauntInfo";
import ResultUsersList from "../components/dashboard/Search/ResultUsersList";
import ResultMap from "../components/dashboard/Search/ResultMap";
import AdminZone from "../components/dashboard/AdminZone/AdminZone";

const dashboarPagesRoutes = [
  {
    path: "/profile/:id",
    component: Profile,
    meta: {
      title: "Profile of user",
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/search",
    component: Search,
    meta: {
      title: "Search",
    },
    children: [
      { path: "/search/", component: ResultUsersList },
      { path: "/search/map", component: ResultMap },
    ],
  },
  {
    path: "/admin/:page",
    query: { search: ":search" },
    component: AdminZone,
    meta: {
      title: "Admin zone",
    },
  },
  {
    path: "/admin",
    component: AdminZone,
    meta: {
      title: "Admin zone",
    },
  },
];

export default dashboarPagesRoutes;
