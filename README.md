# Meteor boilerplate

A starting point for Meteor applications with a basic folder structure and some files.

## Packages & libs

> Insecure and autopublish packages are removed.

> Unfortunately no autoprefix plugin is available at this moment...
> See [this](https://github.com/meteor/meteor/issues/5219)

### Development
- [meteorhacks:npm](https://github.com/meteorhacks/npm)
- [fourseven:scss](https://github.com/fourseven/meteor-scss) *(with sourcemaps)*
- [chalk](https://github.com/chalk/chalk) *(enabled)*

### Routing
- [kadira:flow-router](https://github.com/kadirahq/flow-router)

### Rendering and Layout Management
- [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)

### UI & UX
- [include-media](https://github.com/eduardoboucas/include-media)

### Velocity testing tools
- [sanjo:jasmine](https://github.com/sanjo/meteor-jasmine)
- [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter/)

### Performance monitoring
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
│       ├── application/        # App layouts
│       ├── includes/           # Includes like footer, header...
│       ├── shared/             # Contains loading template, 404...
│       └── ... 	
│			
├── lib/                        # Common code for client and server
│   ├── collections/            # Common collections
│   ├── helpers/                # Common helpers
│   └── router.js               # Routes
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
├── packages.json               # npm modules used by meteorhacks:npm package
├── scss.json                   # Sass config used by fourseven:scss package
└── settings.json               # Configuration data to be passed to meteor --settings
```

## Run your app

`npm start` - starts your meteor server with settings.json

## License

MIT © [marioblas](https://github.com/marioblas)
