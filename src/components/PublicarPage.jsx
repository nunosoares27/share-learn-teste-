var React = require('react');
var Nav = require('./Nav.jsx');


var PublicarPage = React.createClass({
  getInitialState: function(){
    return {
        // listaSobre: [],
        nome: '',
        descricao: '',
        idade: '',
        ref_id_series: '',
        imagem: '',
        ficheiro_inicial: '',
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
      nome: this.refs.nome.value,
      descricao: this.refs.descricao.value,
      idade: this.refs.idade.value,
      ref_id_series: this.refs.ref_id_series.value,
      imagem: this.refs.imagem.value,
      ficheiro_inicial: this.refs.ficheiro_inicial.value,

    })
  
  },
  CriaApp: function(e){
    e.preventDefault();
    nome = this.refs.nome.value;
    descricao= this.refs.descricao.value;
    idade= this.refs.idade.value;
    ref_id_series= this.refs.ref_id_series.value;
    imagem= this.refs.imagem.value;
    ficheiro_inicial= this.refs.ficheiro_inicial.value;

    // alert(nome);
    // alert(descricao);
    // alert(idade);
    // alert(ref_id_series);
    // alert(imagem);
    // alert(ficheiro_inicial);


    fetch('http://josedias.zapto.org/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          descricao: descricao,
          idade: idade,
          ref_id_series: ref_id_series,
          imagem: imagem,
          ficheiro_inicial: ficheiro_inicial,

        })
      })


    // http://josedias.zapto.org/api/editar-perfil/1
    // var e = this.refs.file;
    // var input = document.querySelector('input[type="file"]').value;
    // var file = e.target.files[0];

  },
    render: function() {
        return (
          <div>
            <Nav />

            <div className="container">
              <div className="row">

                <form onSubmit={this.CriaApp}>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3 clearTop">

                  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">

                   <input type="text" ref="nome" className="form-control" placeholder="Nome da aplicação" onChange={this.onChange} value={this.state.nome}/>

                  </div>


                  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">

                  <input type="text" ref="imagem" className="form-control" placeholder="Url da imagem da aplicação"  onChange={this.onChange} value={this.state.imagem}/>

                  </div>

                  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">

                  <input type="text" ref="ficheiro_inicial" className="form-control" placeholder="Url do video da aplicação"  onChange={this.onChange} value={this.state.ficheiro_inicial}/>

                  </div>

                  <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">

                  <input type="text" ref="idade" className="form-control" placeholder="Idade" onChange={this.onChange} value={this.state.idade}/>

                  </div>

                  <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">

                  <input type="text" ref="ref_id_series" className="form-control" placeholder="Id da Serie" onChange={this.onChange} value={this.state.ref_id_series}/>

                  </div>


                  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">

                  <textarea ref="descricao" className="form-control" placeholder="Descrição da aplicação" rows="3" onChange={this.onChange} value={this.state.descricao}/>

                  </div>

                  <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="submit" className="btn btnMudarFoto col-xs-6 col-sm-6 col-md-6 col-lg-6">Enviar</button>
                    </div>

                    </div>
                    </form>

            </div>
            </div>




</div>

        );
    }

});

module.exports = PublicarPage;
