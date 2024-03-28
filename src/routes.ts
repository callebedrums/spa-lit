export * from "./home";
export * from "./page1";
export * from "./app";

export const routes = [
  {
    path: "/",
    component: "my-app",
    children: [
      { path: "/", component: "my-app-home" },
      { path: "/page1", component: "my-app-page1" },
      {
        path: "/page2",
        children: () => import("./page2").then((module) => module.routes),
      },
    ],
  },
];
