var React = require('react');
var Nav = require('./Nav.jsx');
var EditarPerfil = require('./EditarPerfil.jsx');

var EditarPerfilPage = React.createClass({

    render: function() {
        return (


          <div>
              <Nav />
              <EditarPerfil/>

          </div>

        );
    }

});

module.exports = EditarPerfilPage;
