var React = require('react');
var Link = require('react-router').Link;

var BotaoSeries = React.createClass({
  serieSearch:function(){
    console.log("hey");
    this.props.WhenClicked();

  },
    render: function() {
        return (

          <button className="btn btn-default disabled"  onClick={this.serieSearch}>{this.props.NomeSerie}</button>

        );
    }

});

module.exports = BotaoSeries;
