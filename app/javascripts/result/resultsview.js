var _ = require('underscore');
var Backbone = require('backbone');

var TEMPLATE = _.template(
    '<div><%= result  %></div>'
);

var ResultView = Backbone.View.extend({
    tagName: 'li',
    className: 'result',
    template: TEMPLATE,
    render: function() {
        var template = this.template( this.model.toJSON() );
        this.$el.html( template );
        return this;
    }
});

var ResultsView = Backbone.View.extend({
    tagName: 'ul',
    id: 'results',
    render: function() {
        this.collection.each(function(result) {
            var resultView = new ResultView({model:  result });
            this.$el.append( resultView.render().el );
        }, this);
        return this;
    }
});

module.exports = ResultsView;
