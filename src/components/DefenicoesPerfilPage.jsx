var React = require('react');
var Nav = require('./Nav.jsx');
var MudarFotoSession = require('./MudarFotoSession.jsx');
var VerInformacoesPerfil = require('./VerInformacoesPerfil.jsx');

var DefenicoesPerfilPage = React.createClass({


    render: function() {

        return (


          <div>
              <Nav />

              <div className="container">
                  <div className="row">

                      <MudarFotoSession {...this.state} />

                      <VerInformacoesPerfil {...this.state} />

                  </div>
              </div>

          </div>

        );
    }

});

module.exports = DefenicoesPerfilPage;
