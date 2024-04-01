import { Commands, Context } from "@vaadin/router";
import { MyAppPage1 } from "./page1";

export * from "./home";
export * from "./page1";
export * from "./app";

export const routes = [
  {
    path: "/",
    component: "my-app",
    children: [
      { path: "/", component: "my-app-home" },
      {
        path: "/page1/:name?",
        action: (context: Context, commands: Commands) => {
          const name: string = (context.params.name as string) || "World";
          const page1 = commands.component(
            "my-app-page1"
          ) as unknown as MyAppPage1;
          page1.name = name;

          return page1;
        },
      },
      {
        path: "/page2",
        children: () => import("./page2").then((module) => module.routes),
      },
    ],
  },
];
