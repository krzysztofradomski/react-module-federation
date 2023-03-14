# Microfronteds with Vite and module federation

## Table of Contents

### 1. Introduction

### 2. Structure and setup

### 3. Host configuration and contracts

### 4. Layout and styling

### 5. Data sharing between microfrontends

### 8. Development

### 7. Deployment

### 8. Common issues

### 9. Integration of an external web app using web component

### 10. References

<br />
<br />

## 1. Introduction

This project is a proof of concept for microfrontends using Vite and module federation. It is based on the [Vite + Module Federation plugin](plugin). Host application is a React application and the microfrontends are also React applications. It contains both page and component level microfrontends. It is a runtime integration, meaning that the microfrontends can be deployed separately and the host application is responsible for loading them at runtime. The host application is also responsible for the routing and the layout of the microfrontends. <br />The microfrontends are not aware of the host application and can be deployed independently.
In this example, the micro apps and the host all run React, but it is possible to use other frameworks as well - such apps need to be built as a web component and hosted within a React container - effectively creating a mix of runtime and buildtime integration. However, since Vite supports other frameworks and the module federation plugin is seems to be compatible with Webpack module federation plugin, it might be possible to integrate other frameworks without using web component as a wrapper - but this was not tested at the time of writing.<br />
Also, the web component here was used as a simple widget and not a page level microfrontend, as this project focuses on the integration of microfrontends at page level - with each page being a separate React app.

<br />
<br />

## 2. Structure and setup

For the sake of simplicity, the project is contained in 1 repository and structured as follows:

- shell application folder
- app1 microfrontend folder
- app2 microfrontend folder
- webcomponent1 microfrontend folder

The root contains a `docker-compose` file for demonstration purpose. It contains the shell application and all the microfrontends running as separate containers. All of these are static files served by nginx. Running the `docker-compose` file makes it easy to observe the dependencies between elements of the system, and allows to change and redeploy them separately simply by rebuilding their respective docker file.
<br />
It also serves as proof of concept for the deployment of this system, as one can simply run it locally, or deploy the `docker-compose` file to a server and the system will be up and running.

<br />
<br />

### 3. Host configuration and contracts

Module federation plugin governs the communication between the host and the microfrontends. It is configured in the host application's vite.config.js file. The most important part of the config is specifying the modules (`remotes`) and common libraries (`shared`) that the host application will expose to the microfrontends. The microfrontends will then be able to import these modules and libraries from the host app.
These names and location of modules, and the common dependencies lists form the only contract between the host and the microfrontends. The `remotes` is an object with namespaces as keys, and the values must be urls where the resoures are available - here it is specified in the `.env` file and mirrored in the `docker-compose` file, but obviously a more robust solution must be used in a real environment.
<br />
<br />
Since the host is responsible for routing and building the whole structure, these modules are used in the `shell/routes.tsx` to both load the individual apps and build the navigation. Each app is loaded from its namespace declared in the `remotes` object, and accessed via the name exposed in their own module federation plugin config. Example: `shell/routes.tsx` loads an app level component on line 12

```
const ModuleMap: Record<string, Component> = {
  app1: lazy(() => import("app1/App")),
  ...
};
```

This "...`import("app1/App")`" means that the namespace declared in the `remotes` object is called `app1` and it has an export named `App`. This information must also be specified in the `app1/vite.config.js` in the `exposes` object. The `exposes` object is used to specify the modules that the host will be able to import from the microfrontend, and it's setup must be aligned with that of the host app!
<br />
Note: the `shared` object is used to specify the common dependencies that the host will expose to the microfrontends. The `shared` object is optional, but it is recommended to use it to avoid loading the same libraries multiple times, which usually leads to bugs when frameworks are loaded several times. This also needs to be aligned between the host and the microfrontends.

<br />
<br />

### 4. Layout and styling

In this simplistic example, the layout is handled by the shell app that applies a simple grid layout to the microfrontends. The microfrontends are not aware of the layout or styling. Obviously, this is not a scalable solution, but it is a good starting point for a proof of concept. In a sustainable solution, a common styling library should be used where each of the microfronteds load layout level components, or style sheets, thus ensuring that the layout is consistent across the whole system. A starting point is made where the microfrontends can load a layout component from the host app, but this is commmented out in this example as it does not work out of box the when deploying with Docker.
