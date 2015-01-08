var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var ResultsView = require('./result/resultsview');
var examples =  require('./resources/examples');

var Application = function() {

    this.initialize = function() {
        $('#input-data').on('input', this.display);
        $('#iteratee').on('input', this.display);
        $('#template').on('input', this.display);
        setExamples();
        $('#input-data').trigger('input');
    };

    this.display = function() {
        var inputdata = $('#input-data').val();
        var iteratee = eval('(' +$('#iteratee').val() + ')');
        var template = _.template( $('#template').val() );
        var models = _( inputdata.split(/\r\n?|\n/) ).map(function(element) {
            return iteratee(element);
        });
        var results = _.map( models, function(model) {
            return template(model);
        });
        var resultModels = _.map(results,  function(result) {
            return new Backbone.Model({result: result});
        });
        var resultsCollection = new Backbone.Collection( resultModels );
        var resultsView = new ResultsView({collection: resultsCollection });
        $('#result').html( resultsView.render().el );
    };

    var setExamples = function() {
        $('#input-data').val( examples.input_data );
        $('#iteratee').val( examples.iteratee );
        $('#template').val( examples.template );
    };
};
module.exports = new Application();


