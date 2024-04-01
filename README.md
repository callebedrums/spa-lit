# spa-lit

Single Page Application implemented using Lit.

## Env

- Node 18.19.1
- npm 10.2.4

## Quick start

```bash
# clone repository to local machine
git clone git@github.com:callebedrums/spa-lit.git

# change to project rood folder
cd spa-lit

# install dependencies
npm install

# build project
npm run build

# start running locally in dev mode
npm run dev
```

## About

This project is a Proof of Concept on how to implement a Single Page Application using lit library to generate the Web Components.

Lit allows us to create Web Components to manage the User Interface.

The @vaadin/router is being used as the router library to manage the navigation and pages for the SPA.

@vaadin/router allows us to specify components to be displayed when a specific route is active.

And we can also nest sub-routes and sub-components to increase flexbility and usability.

### App map

- / => app.ts
- --- / => my-app-home
- --- /page1 => my-app-page1
- --- /page2 => my-app-page2
- ------- / => my-app-sub-page1
- ------- /sub-page2 => my-app-sub-page2

_app.ts_ works like a layout shell. It provides the initial header with navigation to its children pages. As it is mapped to the root route, it will always be present in the page.
It will receive the children route's components as a children component.

_my-app-home_ is the home page and it is mapped to the root route of the _'/'_ route.

_my-app-page1_ is the component that display the _Page 1_ and it is mapped to the route _'/page1'_.

_my-app-page2_ is the component that display the _Page 2_ and it is mapped to the route _'/page2'_. It is also the parent of other routes and it works as the layout shell for its children routes.

_my-app-sub-page1_ is the component that display the _Sub Page 1_ and it is mapped to the root route _'/'_ of _page2_. Its full route is _'/page2'_

_my-app-sub-page2_ is the component that display the _Sub Page 2_ and it is mapped to the route _'/sub-page2'_ of _page2_. Its full route is _'/page2/sub-page2'_

### Page Components

The @vaading/router router library allows us to define components as the route rendering part. This components follow the same implementation as any other Web Component, but they need to be treated in a special way.
Usually, their reusability is limited, since it is coupled tied to the SPA structure. We should view this page components as our SPA pages.

We can increase their reusability by having the state stored in the URL and maping the state as inputs to the page component.

## References

- [@vaadin/router documentation](https://vaadin.github.io/router/vaadin-router/)
- [@vaadin/router demos](https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos)
