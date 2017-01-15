var React = require('react');
var Nav = require('./Nav.jsx');

var Api = require('./Api.jsx');
var MainProductDescription = require('./MainProductDescription.jsx');
var MainProductComment = require('./MainProductComment.jsx');


var LandingPage = React.createClass({

  getInitialState: function(){
    return {

    aplicacoes: [],
    textoComentario: '',
    idAplicacao: '',

    }
  },
  componentWillMount: function(){
    Api.get('landingpage')
    .then(function(data){
      this.setState({
        aplicacoes: data.data
      })
    }.bind(this));
  },
  handleSubmit : function (e){
      e.preventDefault();
      textoComentario = this.refs.textoComentario.value;
      id = this.refs.idAplicacao.value = ida;
      console.log(id);
      console.log(textoComentario);
      fetch('http://josedias.zapto.org/api/landingpage', {
          method: 'POST',
          crossOrigin: true,
          redirect: 'follow',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ref_id_aplicacao: id,
            comentarios_texto: textoComentario,
          })
        }).then(function(responseObj) {
         console.log('status: ', responseObj.status);
         console.log(responseObj);
       }.bind(this));

  },
    render: function() {
        return (<div>
                <Nav />

                <div className="container">

                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 content-margin-top">
                        <h3>Todos os conteúdos</h3>
                        </div>

            </div>

              <div className="container">

                       {this.state.aplicacoes.map(function(aplicacao,listaApp){
                             return (<div key={listaApp.toString()}>


                          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 main-product-description">
                              <div className="user-block">

                              {aplicacao.app_tem_users.map(function(temUser,listaUser){

                                return (

                                  <div key={listaUser.toString()}>
                                  <img className="img-circle" src={temUser.imagem_user}/>
                                  <span className="span-azul content-spacing">{temUser.username} </span>

                                  </div>
                                )
                                      })}


                                  <span className="span-cinzento">- {aplicacao.created_at}</span>
                                  <br/>
                                   <span className="span-cinzento content-spacing">Submeteu uma aplicação: </span>
                                   <span className="span-azul">{aplicacao.nome}</span>
                                   <hr/>
                              </div>


                              <div className="content-preview">
                                <div>
                                  <img className="img-responsive" src={aplicacao.imagem}/>

                                  <div className="descript-caption">
                                      <h4>{aplicacao.nome}</h4>

                                      <h4>{aplicacao.descricao}</h4>
                                  </div>
                                  </div>
                              </div>

                              <div className="content-preview-bottom">

                              <span className="span-cinzento pull-right">Denunciar publicação</span>
                              </div>

                          </div>


                                    <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 main-product-comment">
                                                          <span className="span-cinzento content-spacing">vêr mais 1 comentário</span>
                                                          <span className="span-cinzento pull-right content-spacing">4 comentários</span>


                                                          {aplicacao.app_tem_comentarios.map(function(comentario,listaComentario){
                                                              return (
                                                              <div key={listaComentario.toString()}>
                                                          <div className="user-block2">
                                                                <img className="img-circle" src=""/>
                                                                <span className="span-azul content-spacing">Maria Leal</span>
                                                                <br/>
                                                                <div className="comentario">
                                                                    <span className="span-cinzento">{comentario.comentarios_texto}</span>
                                                                </div>
                                                                 <hr/>
                                                            </div>
                                                              </div>
                                                          )
                                                          })}




                                                              <div className="user-block2">
                                                                  <img className="img-circle" src="" />
                                                                  <form onSubmit={this.handleSubmit}>
                                                                    {ida = 1+listaApp}
                                                                  <div>
                                                                      <input type="hidden" ref="idAplicacao" value={ida} />
                                                                      <input type="text" ref="textoComentario" className="form-control caixaComentario"/>
                                                                  </div>


                                                                  </form>
                                                              </div>

                                            </div>

                                            </div>


                          );
                        }, this)}




        </div>

</div>

        );
        }
  });

module.exports = LandingPage;
