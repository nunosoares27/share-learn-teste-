var React = require('react');


var MudarFotoSession = React.createClass({
  getInitialState: function(){
    return {
        listaSobre: [],
        imagem_user:''
    }
  },
  componentWillMount: function(){
    Api.get('sobre')
    .then(function(data){
      this.setState({
        listaSobre: data.data,
      })
    }.bind(this));

  },onChange: function(){
    this.setState({
      imagem_user: this.refs.imagem_user.value,
    })
  //  console.log(imagem_user);
  },
  UpdateImagemUser: function(e){
    e.preventDefault();
    console.log(this.refs.imagem_user.value);
    fetch('http://josedias.zapto.org/api/editar-perfil/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // email : this.refs.emailNovo.value,
            imagem_user: this.refs.imagem_user.value,
          // password: this.refs.passwordNova.value
          // data: data
        })
      })


    // http://josedias.zapto.org/api/editar-perfil/1
    // var e = this.refs.file;
    // var input = document.querySelector('input[type="file"]').value;
    // var file = e.target.files[0];

  },
    render: function() {

      var imageUploader = this.state.listaSobre.map(function(sobre,indexSobre){
            return (  <div key={indexSobre}>

          <div className="col-md-3 col-sm-3  col-xs-4 mudarFotoSession hidden-sm hidden-xs">

              <div className="fotoInformaPerfil">

                  <img className="imgInformaPerfil" src={sobre.imagem_user} width="100%" height="100%"/>

              </div>


              <button type="button" className="btn btnMudarFoto col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3 col-lg-6 col-lg-offset-3" data-toggle="modal" data-target="#ModalImagemPerfil">Mudar Foto</button>

  <form onClick={this.UpdateImagemUser}>
      <div className="modal fade" id="ModalImagemPerfil" role="dialog">
        <div className="modal-dialog">


          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Mudar Foto</h4>
            </div>
            <div className="modal-body">
            <div className="form-group">
           <label >Url da imagem:</label>
           <input type="text" className="form-control" ref="imagem_user" id="imagem_user" onChange={this.onChange} value={this.state.imagem_user}/>
        </div>
            </div>
            <div className="modal-footer">
              <button type="button" type="submit" className="btn btn-default" data-dismiss="modal">Enviar</button>
            </div>
          </div>

        </div>
      </div>
  </form>

          </div>

          <div className="col-sm-6 col-sm-offset-3  col-xs-6 mudarFotoSession hidden-md hidden-lg col-sm-push-3 col-xs-push-3">

              <div className="fotoInformaPerfil">

                  <img className="imgInformaPerfil" src={sobre.imagem_user} width="100%" height="100%"/>

              </div>



          </div>
          </div>

        )
      }.bind(this));

        return (
          <div>
          {imageUploader}

</div>

        );
    }

});

module.exports = MudarFotoSession;
