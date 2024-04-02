import { Commands, Context } from "@vaadin/router";

export * from "./home";
export * from "./page1";
export * from "./app";

function parseSearchParams(search: string) {
  const params: { [key: string]: any } = {};

  const inter = new URLSearchParams(search).entries();
  let next = inter.next();

  while (!next.done) {
    if (params[next.value[0]]) {
      if (Array.isArray(params[next.value[0]])) {
        params[next.value[0]].push(next.value[1]);
      } else {
        params[next.value[0]] = [params[next.value[0]], next.value[1]];
      }
    } else {
      params[next.value[0]] = next.value[1];
    }
    next = inter.next();
  }

  return params;
}

/**
 * This method reads the search string and route params and injects them into the component as properties.
 * The component can be any component that has properties that match the search string or route params.
 *
 * @param component component name to be instanciated
 * @returns component instance with properties set
 */
function injectComponentsInput(component: string) {
  return (context: Context, commands: Commands) => {
    const inputs = {
      ...context.params,
      ...parseSearchParams(context.search),
    };

    const element = commands.component(component) as any;

    for (const key in inputs) {
      element[key] = inputs[key];
    }

    return element;
  };
}

export const routes = [
  {
    path: "/",
    component: "my-app",
    children: [
      { path: "/", component: "my-app-home" },
      {
        path: "/page1/:name?",
        action: injectComponentsInput("my-app-page1"),
      },
      {
        path: "/page2",
        children: () => import("./page2").then((module) => module.routes),
      },
    ],
  },
];
