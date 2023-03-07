## Module federation with React and Vite

#

This is a proof of concept, or rather a test, of building microfrontends with `React` and `Vite`, build around the `vite-plugin-federation` plugin.

The system consists of 2 microfrontends, `app1`, `app2`, and a `shell` that serves as a container for the microfrontends.
`app1` and `app2` are simple SPA apps, and `shell` is the host app responsible for layout and routing.

Look for scripts in the root package.json to run the project.
Also, each microfrontend has its own package.json with its own scripts, so you can run them individually.

Note: the `main` branch is a very simplistic example, the `dev` branch is a more complex example the apps dockerized and some more features.
