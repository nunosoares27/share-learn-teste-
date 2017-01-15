var React = require('react');
var Nav = require('./Nav.jsx');
var Link = require('react-router').Link;

var BotaoSeries = require('./BotaoSeries.jsx');

var BibliotecaGeralPage = React.createClass({
  getInitialState: function(){
    return {
      open:false,
      listaSerie: [],
      tituloListaSerie: 'Serie de Televisao',
      listaAplicacao: [],
    }
  },
  componentWillMount: function(){
    Api.get('biblioteca-geral')
    .then(function(data){
      this.setState({
        listaSerie: data.data2,
        listaAplicacao:data.data,
      })
    }.bind(this));

  },
  SerieClick: function(){
  //  console.log('ola da class mae');
  Api.get('biblioteca-geral?nome_series=Dexter')
  .then(function(data){
    this.setState({
      listaAplicacao: data.data2,
    })
  }.bind(this));

  },

    render: function() {

      var Teste = this.state.listaSerie.map(function(serie,indexSerie){

             return (<div key={indexSerie.toString()}>
                <BotaoSeries NomeSerie={serie.nome_series} WhenClicked={this.SerieClick}/>
                </div>
              )
        }.bind(this));

        var Teste2 =  this.state.listaAplicacao.map(function(aplicacao,indexApp){

                      return (

                        <div key={indexApp.toString()}>
                                <div className=" col-xs-6 col-sm-6">
                                    <Link to={"biblioteca-geral/" + aplicacao.id} className="thumbnail">
                                        <img src={aplicacao.imagem} alt="..." className="img-responsive"/>
                                        <div className='description'>

                                            <p className='description_content'>{aplicacao.nome}</p>

                                        </div>
                                    </Link>

                                </div>

                         </div>
                       )
                 });

        return (
          <div>
            <Nav />

            <div className="container">
                      <div className="row">
                          <div className="col-md-12 clearTop">
                              <h2>Biblioteca de Conteúdos</h2>

                          </div>
                    </div>
                </div>

            <div className="container">
                      <div className="col-md-4 col-xs-4 col-sm-4 col-lg-4">

                              <div>
                                <h3>{this.state.tituloListaSerie}</h3>

                                      {Teste}

                                   <input type="hidden" name="canalTelevisao" className="canalTelevisao"/>
                              </div>


                      </div>


               <div className="col-md-8 col-lg-8 col-xs-8 col-sm-8 thumbnailsTop">

                  {Teste2}





                      </div>


                     </div>


  </div>







        );
    }

});

module.exports = BibliotecaGeralPage;
