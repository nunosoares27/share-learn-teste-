var React = require('react');
var Link = require('react-router').Link;

var EditarPerfil = React.createClass({
    getInitialState: function(){
        return {
          data: [],
          novoNome: "",
          emailNovo: "",
          passwordNova: "",
          repetirEmail:""
        };
    },
    onChange: function(){
      // var val = e.target.value;
      // this.setState({value: e.target.value});

      this.setState({
        novoNome: this.refs.novoNome.value,
        emailNovo: this.refs.emailNovo.value,
        passwordNova: this.refs.passwordNova.value,
        repetirEmail: this.refs.repetirEmail.value,
      })
    },
    onSubmit: function(e){
        e.preventDefault();
        var data ={
          email : this.refs.emailNovo.value,
          username: this.refs.novoNome.value,
          password: this.refs.passwordNova.value
        };
        // fetch('http://josedias.zapto.org/api/editar-registo/1', {
        //     method: 'PATCH',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: new FormData(data)
        //   });
          fetch('http://josedias.zapto.org/api/editar-registo/1', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                // email : this.refs.emailNovo.value,
                username: this.refs.novoNome.value,
                // password: this.refs.passwordNova.value
                // data: data
              })
            })
            fetch('http://josedias.zapto.org/api/editar-registo/1', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email : this.refs.emailNovo.value,
                  // username: this.refs.novoNome.value,
                  // password: this.refs.passwordNova.value
                  // data: data
                })
              })
              fetch('http://josedias.zapto.org/api/editar-registo/1', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    // email : this.refs.emailNovo.value,
                    // username: this.refs.novoNome.value,
                    password: this.refs.passwordNova.value
                    // data: data
                  })
                })
        return (
          console.log(data)

        );
    },
    render: function() {
        return (
          <div className="container editarPerfilbg">
           <div className="row">

              <div className="col-md-6">

               <Link to="defenicoesperfil"><i className="fa fa-pencil-square-o fabook fa-3x aumenta"></i></Link>
              <Link to="editarperfil"><i className="fa fa-gear fagear fa-3x aumenta active"></i></Link>

              <form onSubmit={this.onSubmit}>

                    <span className="span-cinzento alterarNome">Alterar o nome:</span>

                  <div className="form-group espaco">
            <input type="text" name="novoNome" id="novoNome" ref="novoNome" tabIndex="1" className="form-control" placeholder="Novo Nome" onChange={this.onChange} value={this.state.novoNome}/>
                  </div>


                  <span className="span-cinzento alterarEmail">Alterar o e-mail:</span>

                  <div className="form-group espaco">
            <input type="text" name="emailNovo" id="emailNovo" ref="emailNovo" tabIndex="1" className="form-control" placeholder="Novo E-mail" onChange={this.onChange} value={this.state.emailNovo}/>
                  </div>

                  <div className="form-group espaco">
            <input type="text" name="repetirEmailNovo" id="repetirEmailNovo" ref="repetirEmail" tabIndex="1" className="form-control" placeholder="Repetir E-mail" onChange={this.onChange} value={this.state.repetirEmail}/>
                  </div>

                  <span className="span-cinzento alterarPassword">Alterar password:</span>


                   <div className="form-group espaco">
            <input type="password" name="passwordNova" id="passwordAntiga" ref="passwordNova" tabIndex="1" className="form-control" placeholder="Nova Password" onChange={this.onChange} value={this.state.passwordNova}/>
                  </div>




                     <button className="btn btnSubmeterEditarPerfil" >Submeter</button>
                       </form>
               </div>

               <div className="col-md-6"></div>

              </div>


         </div>

        );
    }

});

module.exports = EditarPerfil;
