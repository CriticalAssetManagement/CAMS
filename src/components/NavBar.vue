<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>
        <h3>Critical Asset Management System</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          elevation="0"
          v-for="item in navItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      navItems: [
        { title: "Home", path: "/" },
        { title: "User Form", path: "/userform" },
        { title: "Area Form", path: "/areaform" },
        { title: "Asset Form", path: "/assetform" },
        { title: "Reports", path: "/reports" },
      ],
    };
  },
};
</script>

<style>
.v-tabs-bar {
  float: right !important;
}
</style>
