"use strict";



define('movies/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('movies/app', ['exports', 'movies/resolver', 'ember-load-initializers', 'movies/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('movies/components/list-filter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    classNames: ['list-filter'],
    value: '',

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.get('filter')('').then(function (allResults) {
        _this.set('results', allResults.results);
      });
    },


    actions: {
      handleFilterEntry: function handleFilterEntry() {
        var _this2 = this;

        var filterInputValue = this.get('value');
        var filterAction = this.get('filter');
        filterAction(filterInputValue).then(function (filterResults) {
          if (filterResults.query === _this2.get('value')) {
            _this2.set('results', filterResults.results);
          }
        });
      }
    }
  });
});
define("movies/components/movies-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    isWide: false,
    actions: {
      toggleMovieView: function toggleMovieView() {
        this.toggleProperty("isWide");
      }
    }
  });
});
define('movies/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('movies/controllers/movies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    actions: {
      filterByCity: function filterByCity(param) {
        if (param !== '') {
          return this.get('store').query('movie', { city: param }).then(function (results) {
            return { query: param, results: results };
          });
        } else {
          return this.get('store').findAll('movie').then(function (results) {
            return { query: param, results: results };
          });
        }
      }
    }
  });
});
define('movies/controllers/movies/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    actions: {
      filterByCity: function filterByCity(param) {
        if (param !== '') {
          return this.get('store').query('movie', { city: param }).then(function (results) {
            return { query: param, results: results };
          });
        } else {
          return this.get('store').findAll('movie').then(function (results) {
            return { query: param, results: results };
          });
        }
      }
    }
  });
});
define('movies/helpers/app-version', ['exports', 'movies/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('movies/helpers/movie-type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.movieType = movieType;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var helper = Ember.Helper.helper;


  var MovieTypes = ['Condo', 'Townhouse', 'Apartment'];

  function movieType(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        movieType = _ref2[0];

    if (MovieTypes.includes(movieType)) {
      return 'Community';
    }

    return 'Standalone';
  }

  exports.default = helper(movieType);
});
define('movies/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('movies/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('movies/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'movies/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('movies/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('movies/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('movies/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'movies/config/environment', 'movies/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize() {
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('movies/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('movies/initializers/export-application-global', ['exports', 'movies/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('movies/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('movies/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('movies/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("movies/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('movies/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.namespace = '/api';

    var movies = [{
      type: 'movies',
      id: 'grand-old-mansion',
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        "property-type": 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
      }
    }, {
      type: 'movies',
      id: 'urban-living',
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        "property-type": 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
      }
    }, {
      type: 'movies',
      id: 'downtown-charm',
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        "property-type": 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
      }
    }];

    this.get('/movies', function (db, request) {
      if (request.queryParams.city !== undefined) {
        var filterdMovies = movies.filter(function (i) {
          return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return { data: filterdMovies };
      } else {
        return { data: movies };
      }
    });

    this.get('/movies/:id', function (db, request) {
      return { data: movies.find(function (movie) {
          return request.params.id === movie.id;
        }) };
    });
  };
});
define("movies/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('movies/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('movies/models/movie', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr(),
    owner: _emberData.default.attr(),
    city: _emberData.default.attr(),
    propertyType: _emberData.default.attr(),
    image: _emberData.default.attr(),
    bedrooms: _emberData.default.attr(),
    description: _emberData.default.attr()
  });
});
define('movies/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('movies/router', ['exports', 'movies/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');

    this.route('movies', function () {
      this.route('show', { path: '/:movie_id' });
    });
  });

  exports.default = Router;
});
define('movies/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('movies/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define("movies/routes/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    beforeModel: function beforeModel() {
      this.replaceWith("/movies");
    }
  });
});
define('movies/routes/movies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('movies/routes/movies/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return this.get('store').findAll('movie');
    }
  });
});
define('movies/routes/movies/show', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('movie', params.movie_id);
    }
  });
});
define('movies/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("movies/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "889RM1Wi", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"About Super Movies\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"The Super movies website is a delightful project created to explore HD movies in social sites.\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\" By building this site using Ember frameworks. This site for learning purpose.\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\" All provided contents, videos, links, images grabed from social site.\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\" If any problem  kindly reach me here\"],[8],[0,\"\\n  \"],[6,\"a\"],[9,\"href\",\"http://github.com/kannans\"],[7],[0,\"@KannanSV\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/about.hbs" } });
});
define("movies/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rtUAYNQl", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[7],[0,\"\\n        \"],[6,\"em\"],[7],[0,\"SuperMoviesHD\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"links\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"about\"],null,{\"statements\":[[0,\"        About\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"contact\"],null,{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/application.hbs" } });
});
define("movies/templates/components/list-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RCJSdJlz", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"input\",null,[[\"value\",\"key-up\",\"class\",\"placeholder\"],[[20,[\"value\"]],[25,\"action\",[[19,0,[]],\"handleFilterEntry\"],null],\"light\",\"Filter By City\"]]],false],[0,\"\\n\"],[11,1,[[20,[\"results\"]]]]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/components/list-filter.hbs" } });
});
define("movies/templates/components/movies-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uZmneWu6", "block": "{\"symbols\":[],\"statements\":[[6,\"article\"],[9,\"class\",\"listing\"],[7],[0,\"\\n  \"],[6,\"a\"],[10,\"class\",[26,[\"image \",[25,\"if\",[[20,[\"isWide\"]],\"wide\"],null]]]],[3,\"action\",[[19,0,[]],\"toggleMovieView\"]],[7],[0,\"\\n  \"],[6,\"img\"],[10,\"src\",[26,[[20,[\"movie\",\"image\"]]]]],[9,\"alt\",\"\"],[7],[8],[0,\"\\n   \"],[6,\"small\"],[7],[0,\"Watch movie\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[4,\"link-to\",[\"movies.show\",[20,[\"movie\"]]],null,{\"statements\":[[1,[20,[\"movie\",\"title\"]],false]],\"parameters\":[]},null],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"detail owner\"],[7],[0,\"\\n    \"],[6,\"span\"],[7],[0,\"Owner:\"],[8],[0,\" \"],[1,[20,[\"movie\",\"owner\"]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"detail type\"],[7],[0,\"\\n    \"],[6,\"span\"],[7],[0,\"Type:\"],[8],[0,\" \"],[1,[25,\"movie-type\",[[20,[\"movie\",\"propertyType\"]]],null],false],[0,\"\\n      - \"],[1,[20,[\"movie\",\"propertyType\"]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"detail location\"],[7],[0,\"\\n    \"],[6,\"span\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[20,[\"movie\",\"city\"]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"detail bedrooms\"],[7],[0,\"\\n    \"],[6,\"span\"],[7],[0,\"Number of bedrooms:\"],[8],[0,\" \"],[1,[20,[\"movie\",\"bedrooms\"]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/components/movies-list.hbs" } });
});
define("movies/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JaIl3vYq", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Contact Me\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"Super Movies representatives would love to help you\"],[6,\"br\"],[7],[8],[0,\"choose a destination\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    Super Movies HD\\n    \"],[6,\"address\"],[7],[0,\"\\n      Bangalore, India\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"http://kannansv.in\"],[7],[0,\"http://kannansv.in\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/contact.hbs" } });
});
define("movies/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RLYauq6n", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/index.hbs" } });
});
define("movies/templates/movies", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T4gAHNG4", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    We hope you find exactly what you're looking for in a place to stay.\\n  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/movies.hbs" } });
});
define("movies/templates/movies/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kLR9jB7u", "block": "{\"symbols\":[\"movies\",\"movieUnit\"],\"statements\":[[4,\"list-filter\",null,[[\"filter\"],[[25,\"action\",[[19,0,[]],\"filterByCity\"],null]]],{\"statements\":[[0,\"  \"],[6,\"ul\"],[9,\"class\",\"results\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"movies-list\",null,[[\"movie\"],[[19,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/movies/index.hbs" } });
});
define("movies/templates/movies/show", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Znp917uj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo show-listing\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"class\",\"title\"],[7],[1,[20,[\"model\",\"title\"]],false],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right detail-section\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail owner\"],[7],[0,\"\\n      \"],[6,\"strong\"],[7],[0,\"Owner:\"],[8],[0,\" \"],[1,[20,[\"model\",\"owner\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"strong\"],[7],[0,\"Type:\"],[8],[0,\" \"],[1,[25,\"movie-type\",[[20,[\"model\",\"propertyType\"]]],null],false],[0,\" - \"],[1,[20,[\"model\",\"propertyType\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"strong\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[20,[\"model\",\"city\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"strong\"],[7],[0,\"Number of bedrooms:\"],[8],[0,\" \"],[1,[20,[\"model\",\"bedrooms\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"p\"],[9,\"class\",\"description\"],[7],[1,[20,[\"model\",\"description\"]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"src\",[26,[[20,[\"model\",\"image\"]]]]],[9,\"class\",\"rental-pic\"],[7],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "movies/templates/movies/show.hbs" } });
});
define('movies/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('movies/config/environment', [], function() {
  var prefix = 'movies';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("movies/app")["default"].create({"name":"movies","version":"0.0.0+9957d727"});
}
//# sourceMappingURL=movies.map
