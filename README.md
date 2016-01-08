# Meteor boilerplate<img src="https://cloud.githubusercontent.com/assets/3719969/11635449/c7f63236-9d0e-11e5-848c-e9b3c7012768.png" width="40">

[![MIT License](https://img.shields.io/npm/l/ghooks.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/marioblas/meteor-boilerplate.svg?style=flat-square)](https://david-dm.org/marioblas/meteor-boilerplate)
[![devDependency Status](https://david-dm.org/marioblas/meteor-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/marioblas/meteor-boilerplate#info=devDependencies)

A starting point for Meteor applications with a basic folder structure and some files.

## Quick start

```sh
$ npm install
$ npm start
```

## Commands

- `npm start` - start your meteor server with settings-development.json
- `npm run lint -s` - lint all javascript files manually

> Note that *-s* option is a shortcut for *--loglevel=silent* that makes the log output a little tidier and hides npm errors if the script exits with an error status (non-zero exit code).

## Packages & libs

> *insecure* and *autopublish* packages are removed.

> *standard-minifiers* core package is removed in favor of *seba:minifiers-autoprefixer*, read [this discussion](https://github.com/meteor/meteor/issues/5219) about minifiers.

### Development
- [meteorhacks:npm](https://github.com/meteorhacks/npm)
- [fourseven:scss](https://github.com/fourseven/meteor-scss) *(with sourcemaps)*
- [seba:minifiers-autoprefixer](https://atmospherejs.com/seba/minifiers-autoprefixer) *(standard minifiers + autoprefixer)*
- [chalk](https://github.com/chalk/chalk) *(enabled)*
- [reactive-var](http://docs.meteor.com/#/full/reactivevar_pkg)

### Routing
- [kadira:flow-router](https://github.com/kadirahq/flow-router)
- [arillo:flow-router-helpers](https://github.com/arillo/meteor-flow-router-helpers)

### Rendering and Layout Management
- [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)
- [meteorhacks:fast-render](https://github.com/kadirahq/fast-render)

### User accounts
- [accounts-password](http://docs.meteor.com/#/full/accounts_api)

### UI & UX
- [include-media](https://github.com/eduardoboucas/include-media)

### Velocity testing tools
- [sanjo:jasmine](https://github.com/sanjo/meteor-jasmine)
- [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter)

### Debugging & Performance monitoring
- [kadira:debug](https://github.com/kadirahq/meteor-debug)
- [meteorhacks:kadira](https://github.com/meteorhacks/kadira)

## Folder structure

```
.
├── client/                     # Client folder
│   ├── compatibility/          # Legacy libraries that expect to be global
│   ├── lib/                    # Code for the client to be loaded first
│   │   ├── helpers/
│   │   └── vendors/
│   ├── startup/                # Meteor.statup functions that will run as soon as the DOM is ready
│   ├── stylesheets/            # Sass files
│   └── templates/              # Contains all templates
│       ├── authenticated/      # Templates for logged-in users
│       ├── globals/            # Templates used globally like footer, header, loading template, 404...
│       ├── layouts/            # App layouts
│       └── public/             # Public templates  
│
├── lib/                        # Common code for client and server
│   ├── collections/            # Common collections
│   ├── helpers/                # Common helpers
│   └── routes/                 # Routes
│
├── packages/                   # npm modules defined in packages.json will be automatically added here
│   └── npm-container/
│
├── private/                    # Private files that you don't want to be accessible from the outside
│
├── public/                     # Public files like images, fonts, favicons...
│   ├── favicons/
│   ├── fonts/
│   └── images/
│
├── server/                     # Server folder
│   ├── fixtures/               # Fixture data
│   ├── lib/                    # Code for the server to be loaded first
│   │   └── helpers/
│   ├── methods/                # Meteor.methods definitions
│   ├── publications/           # Meteor.publish definitions
│   └── startup/                # Meteor.startup functions that will run when on server startup
│
├── tests/                      # Local test code
│   └── jasmine/
│       ├── client/
│       └── server/
│
├── package.json                # Defines project contents and useful scripts
├── packages.json               # npm modules used by meteorhacks:npm package
├── postcss.json                # Autoprefixer config
└── settings-development.json   # Configuration data to be passed to meteor --settings
```

## Settings

Don't push keys in your code, push them in settings file.

- `settings-development.json` should only contain values used for **testing**.
- `settings-production.json` should only contain values used in **production**.

For security purposes `settings-production.json` is *ignored* to prevent from being stored into version control.

An example of production file with Kadira keys:
```json
{
  "kadira": {
    "appId": "<appId>",
    "appSecret": "<appSecret>"
  }
}
```

> Read [this article](http://joshowens.me/environment-settings-and-security-with-meteor-js) for more info about Meteor settings.

## Recommended coding style

| Language | Style guide | Linter |
| -------- | ----------- | ------ |
| Sass | [Sass guidelines](http://sass-guidelin.es/) | [SCSS-Lint](https://github.com/brigade/scss-lint) |
| JavaScript | [Airbnb](https://github.com/airbnb/javascript) | [ESLint](http://eslint.org) |

## License

MIT © [marioblas](https://github.com/marioblas)
