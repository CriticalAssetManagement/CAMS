// Route imports
import Map from "./views/Map.vue";
import UserForm from "./views/UserForm.vue";
import AreaForm from "./views/AreaForm.vue";
import AssetForm from "./views/AssetForm.vue";
import Reports from "./views/Reports.vue";

// Routing Paths
// Default "Home" to map view
export const routes = [
  {
    path: "",
    component: Map,
  },
  {
    path: "/userform",
    component: UserForm,
  },
  {
    path: "/areaform",
    component: AreaForm,
  },
  {
    path: "/assetform",
    component: AssetForm,
  },
  {
    path: "/reports",
    component: Reports,
  },
];
