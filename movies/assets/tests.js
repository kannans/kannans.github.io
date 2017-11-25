'use strict';

define('movies/tests/acceptance/movies-test', ['qunit', 'movies/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | movies');

  (0, _qunit.test)('should show movies as the home page', function (assert) {
    visit('/');

    andThen(function () {
      assert.equal(currentURL(), '/movies', "should be redirected to movies page");
    });
  });

  (0, _qunit.test)('should link about us page', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', "should navigate to to about page");
    });
  });

  (0, _qunit.test)('should link contact us page', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', "should be redirected to movies page");
    });
  });

  (0, _qunit.test)('should list available movies.', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(find('.listing').length, 3, 'should see 3 listings');
    });
  });

  (0, _qunit.test)('should filter the list of movies by city.', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'Seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function () {
      assert.equal(find('.listing').length, 1, 'should show 1 listing');
      assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
    });
  });

  (0, _qunit.test)('should show details for a specific movie', function (assert) {
    visit('/movies');
    click('a:contains("Grand Old Mansion")');
    andThen(function () {
      assert.equal(currentURL(), '/movies/grand-old-mansion', 'should navigate to show route');
      assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
      assert.equal(find('.description').length, 1, 'should list a description of the property');
    });
  });
});
define('movies/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/list-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/movies-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/movies-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/movies.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/movies/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies/index.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/movie-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/movie-type.js should pass ESLint\n\n');
  });

  QUnit.test('models/movie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/movie.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movies.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movies/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movies/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies/show.js should pass ESLint\n\n');
  });
});
define('movies/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('movies/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'movies/tests/helpers/start-app', 'movies/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('movies/tests/helpers/resolver', ['exports', 'movies/resolver', 'movies/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('movies/tests/helpers/start-app', ['exports', 'movies/app', 'movies/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('movies/tests/integration/components/list-filter-test', ['ember-qunit', 'ember-test-helpers/wait'], function (_emberQunit, _wait) {
  'use strict';

  var RSVP = Ember.RSVP;


  var ITEMS = [{ city: 'San Francisco' }, { city: 'Portland' }, { city: 'Seattle' }];
  var FILTERED_ITEMS = [{ city: 'San Francisco' }];

  (0, _emberQunit.moduleForComponent)('list-filter', 'Integration | Component | list filter', {
    integration: true
  });

  (0, _emberQunit.test)('should initially load all listings', function (assert) {
    var _this = this;

    // we want our actions to return promises,
    //since they are potentially fetching data asynchronously
    this.on('filterByCity', function () {
      return RSVP.resolve({ results: ITEMS });
    });

    // with an integration test,
    // you can set up and use your component in the same way your application
    // will use it.
    this.render(Ember.HTMLBars.template({
      "id": "1hr1VD49",
      "block": "{\"symbols\":[\"results\",\"item\"],\"statements\":[[0,\"\\n\"],[4,\"list-filter\",null,[[\"filter\"],[[25,\"action\",[[19,0,[]],\"filterByCity\"],null]]],{\"statements\":[[0,\"      \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[]]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[9,\"class\",\"city\"],[7],[0,\"\\n          \"],[1,[19,2,[\"city\"]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    return (0, _wait.default)().then(function () {
      assert.equal(_this.$('.city').length, 3);
      assert.equal(_this.$('.city').first().text().trim(), 'San Francisco');
    });
  });

  (0, _emberQunit.test)('should update with matching listings', function (assert) {
    var _this2 = this;

    this.on('filterByCity', function (val) {
      if (val === '') {
        return RSVP.resolve({
          query: val,
          results: ITEMS });
      } else {
        return RSVP.resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    });

    this.render(Ember.HTMLBars.template({
      "id": "1hr1VD49",
      "block": "{\"symbols\":[\"results\",\"item\"],\"statements\":[[0,\"\\n\"],[4,\"list-filter\",null,[[\"filter\"],[[25,\"action\",[[19,0,[]],\"filterByCity\"],null]]],{\"statements\":[[0,\"      \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[]]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[9,\"class\",\"city\"],[7],[0,\"\\n          \"],[1,[19,2,[\"city\"]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    // The keyup event here should invoke an action that will cause the list to be filtered
    this.$('.list-filter input').val('San').keyup();

    return (0, _wait.default)().then(function () {
      assert.equal(_this2.$('.city').length, 1);
      assert.equal(_this2.$('.city').text().trim(), 'San Francisco');
    });
  });
});
define('movies/tests/integration/components/movies-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var EmberObject = Ember.Object;
  var run = Ember.run;

  var movie = EmberObject.create({
    image: 'fake.png',
    title: 'test-title',
    owner: 'test-owner',
    propertyType: 'test-type',
    city: 'test-city',
    bedrooms: 3
  });

  (0, _emberQunit.moduleForComponent)('movies-list', 'Integration | Component | movies list', {
    integration: true
  });

  (0, _emberQunit.test)('should display movie details', function (assert) {
    this.set('movieObj', movie);
    this.render(Ember.HTMLBars.template({
      "id": "iAfoTp1I",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"movies-list\",null,[[\"movie\"],[[20,[\"movieObj\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
    assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner');
  });

  (0, _emberQunit.test)('should toggle wide class on click', function (assert) {
    this.set('movieObj', movie);
    this.render(Ember.HTMLBars.template({
      "id": "iAfoTp1I",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"movies-list\",null,[[\"movie\"],[[20,[\"movieObj\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
    run(function () {
      return document.querySelector('.image').click();
    });
    assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
    run(function () {
      return document.querySelector('.image').click();
    });
    assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
  });
});
define('movies/tests/integration/helpers/movie-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('movie-type', 'helper:movie-type', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "cS1u1SDl",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"movie-type\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'Standalone');
  });
});
define('movies/tests/test-helper', ['movies/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('movies/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/movies-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/movies-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/movies-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/movie-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/movie-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/movies/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movies/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/movie-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/movie-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/movies/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies/index-test.js should pass ESLint\n\n');
  });
});
define('movies/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('movies/tests/unit/controllers/movies-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:movies', 'Unit | Controller | movies', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('movies/tests/unit/controllers/movies/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:movies/index', 'Unit | Controller | movies/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('movies/tests/unit/models/movie-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('movie', 'Unit | Model | movie', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('movies/tests/unit/routes/about-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('movies/tests/unit/routes/contact-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('movies/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('movies/tests/unit/routes/movies-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:movies', 'Unit | Route | movies', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('movies/tests/unit/routes/movies/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:movies/index', 'Unit | Route | movies/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('movies/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
