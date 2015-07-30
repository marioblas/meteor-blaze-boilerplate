# Meteor boilerplate

A starting point for Meteor applications with a basic folder structure and some files.

## Packages & libs

##### Development
- [meteorhacks:npm](https://github.com/meteorhacks/npm)
- [fourseven:scss](https://github.com/fourseven/meteor-scss) *(with autoprefixer and sourcemaps)*
- [include-media](https://github.com/eduardoboucas/include-media)

##### Routing
- [iron:router](https://github.com/iron-meteor/iron-router)

##### Velocity testing tools
- [sanjo:jasmine](https://github.com/sanjo/meteor-jasmine)
- [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter/)

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
└── tests/                      # Local test code
    └── jasmine/
    	├── client/
        └── server/
```

## License

MIT © [marioblas](https://github.com/marioblas)
