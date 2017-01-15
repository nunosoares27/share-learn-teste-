var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var Login = require('./Login.jsx');
var Register = require('./Register.jsx');

var LoginRegisterPage = React.createClass({

  getInitialState: function () {
 return { login: true};
},
    clickLogin: function() {
        // this.setState({registar: this.state.registar===false});
        this.setState({login:!this.state.login});
},

    render: function() {
        return (


          <div>


                <div className="container bgLogin">
                <div className="row">

                <div className="ajustalogo">Share<span className="corazul">&</span>Learn</div>


                <div className="col-md-6 col-md-offset-3 loginRow">
                  <div className="panel panel-login">
                    <div className="panel-heading">
                      <div className="row">
                        <div className={"col-xs-6 btnSpecial "+(this.state.login ? 'active':'')} id="login-form-link">
                          <a onClick={this.clickLogin} ><span className="alinhalogin brancoactive">Entrar</span></a>
                        </div>
                        <div className={"col-xs-6 btnSpecial "+(this.state.login ? '':'active')} id="register-form-link">
                          <a onClick={this.clickLogin}><span className="alinhalogin brancoactive">Registar</span></a>
                        </div>
                      </div>
                      <hr/>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-lg-12">

                        {this.state.login ? <Login /> : <Register />}


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        );
    }

});

module.exports = LoginRegisterPage;
