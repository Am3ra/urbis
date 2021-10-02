const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/pages",
    component: () => import("src/layouts/discover.vue"),
    children: [
      { path: "/discover", component: () => import("pages/discover.vue") },
      { path: "/forum", component: () => import("pages/forum.vue") },
      { path: "/info", component: () => import("pages/discover.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
