var React = require('react');
var Link = require('react-router').Link;

var VerInformacoesPerfil = React.createClass({
  getInitialState: function(){
    return {
        listaSobre: [],
        area_formacao:"",
        data_nascimento:"",
        localidade: "",
        nacionalidade:"",
        descricao:"",
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
    // var val = e.target.value;
    // this.setState({value: e.target.value});

    this.setState({
      area_formacao: this.refs.area_formacao.value,
      data_nascimento: this.refs.data_nascimento.value,
      localidade: this.refs.localidade.value,
      nacionalidade: this.refs.nacionalidade.value,
      descricao: this.refs.descricao.value,
    })
  },
  onSubmit: function(e){
      e.preventDefault();
      var data ={
        area_formacao: this.refs.area_formacao.value,
        data_nascimento: this.refs.data_nascimento.value,
        localidade: this.refs.localidade.value,
        nacionalidade: this.refs.nacionalidade.value,
        descricao: this.refs.descricao.value
      };
      fetch('http://josedias.zapto.org/api/editar-perfil/1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            // email : this.refs.emailNovo.value,
            area_formacao: this.refs.area_formacao.value,
            // password: this.refs.passwordNova.value
            // data: data
          })
        })
        fetch('http://josedias.zapto.org/api/editar-perfil/1', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              // email : this.refs.emailNovo.value,
              data_nascimento: this.refs.data_nascimento.value,
              // password: this.refs.passwordNova.value
              // data: data
            })
          })
          fetch('http://josedias.zapto.org/api/editar-perfil/1', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                // email : this.refs.emailNovo.value,
                localidade: this.refs.localidade.value,
                // password: this.refs.passwordNova.value
                // data: data
              })
            })
            fetch('http://josedias.zapto.org/api/editar-perfil/1', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  // email : this.refs.emailNovo.value,
                  nacionalidade: this.refs.nacionalidade.value,
                  // password: this.refs.passwordNova.value
                  // data: data
                })
              })
              fetch('http://josedias.zapto.org/api/editar-perfil/1', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    // email : this.refs.emailNovo.value,
                    descricao: this.refs.descricao.value,
                    // password: this.refs.passwordNova.value
                    // data: data
                  })
                })
      // console.log(data);
},
    render: function() {

        return (
          <div>


          <div className="col-md-7 col-sm-7 col-xs-7 col-lg-7 verInformacoesPerfilSession">
              <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6">

               <Link to="defenicoesperfil"><i className="fa fa-pencil-square-o fabook fa-3x aumenta active" id="btn_defenicoesperfil1"></i></Link>

            <Link to="editarperfil"><i className="fa fa-gear fagear2 fa-3x" id="btn_editarperfil1"></i></Link>
              <form onSubmit={this.onSubmit}>
               <div >
                      <input type="text" name="area_formacao" id="InfoPerfil_AreaFormacao" ref="area_formacao" tabIndex="1" className="form-control" placeholder="Área de Formação" onChange={this.onChange} value={this.state.area_formacao}/>
                  </div>
                  <div >
                      <input type="text" name="data_nascimento" id="InfoPerfil_DataNascimento" ref="data_nascimento" tabIndex="1" className="form-control" placeholder="Data de Nascimento" onChange={this.onChange} value={this.state.data_nascimento}/>
                  </div>
                  <div >
                      <input type="text" name="localidade" id="InfoPerfil_Localidade" tabIndex="1" ref="localidade" className="form-control" placeholder="Localidade" onChange={this.onChange} value={this.state.localidade}/>
                  </div>
                  <div >
                      <input type="text" name="nacionalidade" id="InfoPerfil_Nacionalidade" tabIndex="1" ref="nacionalidade" className="form-control" placeholder="Nacionalidade" onChange={this.onChange} value={this.state.nacionalidade}/>
                  </div>
                  <div >
                      <input type="text" name="descricao" id="InfoPerfil_Descricao" tabIndex="1" ref="descricao" className="form-control" placeholder="Descrição" onChange={this.onChange} value={this.state.novoNom}/>
                  </div>
                    <button className="btn btnSubmeterDefenicoesPerfil" >Submeter</button>
                  </form>
              </div>
              {this.state.listaSobre.map(function(sobre,indexSobre){
                return (  <div key={indexSobre}>
                    <div className="col-md-6 col-lg-6 posicionaspan">
                    <span className="span-cinzento " id="textoPerfilCampo3">{sobre.area_formacao}</span><br/>
                    <span className="span-cinzento " id="textoPerfilCampo4">{sobre.data_nascimento}</span><br/>
                    <span className="span-cinzento " id="textoPerfilCampo5">{sobre.localidade}</span><br/>
                    <span className="span-cinzento " id="textoPerfilCampo6">{sobre.nacionalidade}</span><br/>
                    <span className="span-cinzento" id="textoPerfilCampo7">{sobre.descricao}</span>
                    </div>

                  </div>
                  )
                  })}



          </div>



</div>



        );
    }

});

module.exports = VerInformacoesPerfil;
