var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var Login = React.createClass({
    handleSubmit: function(){
       hashHistory.push('/');
      // this.transitionTo('/');
    },
    render: function() {
        return (

          <form id="login-form" onSubmit={this.handleSubmit} method="post" role="form">
            <div className="form-group">
              <input type="text" name="username" id="username" tabIndex="1" className="form-control backgroundFormWhite" placeholder="Username" value=""/>
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" tabIndex="2" className="form-control backgroundFormWhite" placeholder="Password"/>
            </div>
            <div className="form-group text-center">
              <a href="" tabIndex="5" className="forgot-password"><span className="corazul">Esqueceu-se da password?</span></a>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Login"/>
                </div>
              </div>
            </div>
          </form>
        );
    }

});

module.exports = Login;
