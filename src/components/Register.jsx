var React = require('react');
// var hashHistory = require('react-router').hashHistory;

var Register = React.createClass({
  getInitialState: function(){
    return {
        // listaSobre: [],
        username: '',
        email: '',
        password: '',
    }
  },
  componentWillMount: function(){
    // Api.get('sobre')
    // .then(function(data){
    //   this.setState({
    //     listaSobre: data.data,
    //   })
    // }.bind(this));

  },onChange: function(){
    this.setState({
      // imagem_user: this.refs.imagem_user.value,
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    })

  },
  handleSubmit: function(e){

    e.preventDefault();

    username= this.refs.username.value;
    email= this.refs.email.value;
    password= this.refs.password.value;


    fetch('http://josedias.zapto.org/api/registo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,

        })
      })

      // this.transitionTo('login');
      // hashHistory.push('login');
    // this.transitionTo('/');
  },
    render: function() {
        return (

          <form id="register-form"  onSubmit={this.handleSubmit} method="post" role="form">
            <div className="form-group">
              <input type="text" name="username" id="username" ref="username" tabIndex="1" className="form-control backgroundFormWhite" placeholder="Nome do Utilizador" onChange={this.onChange} value={this.state.username}/>
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" ref="email" tabIndex="1" className="form-control backgroundFormWhite" placeholder="Endereço de Email" onChange={this.onChange} value={this.state.email}/>
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" ref="password" tabIndex="2" className="form-control backgroundFormWhite" placeholder="Password" onChange={this.onChange} value={this.state.password}/>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Registar"/>
                </div>
              </div>
            </div>
          </form>

        );
    }

});

module.exports = Register;
