(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['controllers/base/controller', 'models/hello-world', 'views/hello-world-view', 'views/hello-worldd-view'], function(Controller, HelloWorld, HelloWorldView, HelloWorlddView) {
    'use strict';
    var HelloController;
    return HelloController = (function(_super) {
      __extends(HelloController, _super);

      function HelloController() {
        return HelloController.__super__.constructor.apply(this, arguments);
      }

      HelloController.prototype.show = function(params) {
        this.model = new HelloWorld();
        return this.view = new HelloWorldView({
          model: this.model,
          region: 'main'
        });
      };

      HelloController.prototype.showd = function(params) {
        this.model = new HelloWorld();
        return this.view = new HelloWorlddView({
          model: this.model,
          region: 'main'
        });
      };

      return HelloController;

    })(Controller);
  });

}).call(this);
