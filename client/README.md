## Client side application for Algolia Search:

This project was generated with [create-instantsearch-app](https://github.com/algolia/instantsearch/tree/master/packages/create-instantsearch-app) by [Algolia](https://algolia.com). Using the following command:

```
npx create-instantsearch-app@latest client \
    --name 'algolia-instantsearch-app' \
    --template 'React InstantSearch' \
    --app-id '3EOI1GXBYR' \
    --api-key 'cf0692ba10e26a9a464cdeaff291bbb6' \
    --index-name 'movie' \
    --attributes-to-display 'title,overview,release_date' \
    --no-interactive \
    --image-attribute 'poster_path' \
    --no-installation
```

This was originally for the demo `movie` data provided in `Get Started` guide (the rocket symbol in sidebar).

### Prerequisites

For being able to install all dependencies without error, tools like `g++`, `make` etc. must be present and available on the system. In ubuntu, this can be ensured by installing the `build-essential` package.

```
sudo apt update
sudo apt install build-essential
```

Only after doing this, running `npm i` on the `client` project will work without errors. <br>

Further, if folder location is changed, the `node_modules` folder needs to be removed and `npm i` needs to be ran again. Otherwise it won't work. <br>

These are probably because the dependencies are internally heavily dependant on C++ libraries and probably get tightly bound to the installation location. <br>

### Running the project

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```
