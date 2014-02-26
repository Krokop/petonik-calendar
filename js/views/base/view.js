(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['handlebars', 'chaplin', 'lib/view-helper'], function(Handlebars, Chaplin) {
    'use strict';
    var View;
    return View = (function(_super) {
      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.getTemplateFunction = function() {
        var template, templateFunc;
        template = this.template;
        if (typeof template === 'string') {
          templateFunc = Handlebars.compile(template);
          this.constructor.prototype.template = templateFunc;
        } else {
          templateFunc = template;
        }
        return templateFunc;
      };

      return View;

    })(Chaplin.View);
  });

}).call(this);
