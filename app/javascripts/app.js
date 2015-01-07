var $ = require('jquery');
var _ = require('underscore');

var Application = function() {

    this.initialize = function() {
        $('#input-data').on('input', this.display);
        $('#iteratee').on('input', this.display);
        $('#template').on('input', this.display);
    };

    this.display = function() {
  
        var inputdata = $('#input-data').val();
        var iteratee = eval( $('#iteratee').val() );
        var template = _.template( $('#template').val() );
        
        var models = _( inputdata.split(/\r\n?|\n/) ).map(function(element) {
            return iteratee(element);
        });

        var result = _.map( models, function(model) {
            return template(model);
        });

        $('#result').text(JSON.stringify(result) ) ;

    };
};

module.exports = new Application();

// var f = function(element) {
//   return {body: element};
// };
// f;
