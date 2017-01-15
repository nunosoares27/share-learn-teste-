var React = require('react');
var MainProductComment = React.createClass({

    render: function() {
      var Comentarios = this.props.comentarios.map(function(comentario){
                  return (<div className="user-block2">
                        <img className="img-circle" src={comentario.usernameImagem}/>
                        <span className="hidden" key={comentario.idComentario.toString()}>{comentario.idComentario}</span>
                        <span className="span-azul content-spacing">{comentario.username}</span>
                        <br/>
                        <div className="comentario">
                            <span className="span-cinzento">{comentario.comentario}</span>
                        </div>
                         <hr/>
                    </div>
                  )
                    })

        return (                  <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 main-product-comment">
                              <span className="span-cinzento content-spacing">vêr mais 1 comentário</span>
                              <span className="span-cinzento pull-right content-spacing">4 comentários</span>

                            {Comentarios}

                              <div className="user-block2">
                                  <img className="img-circle" src={this.props.usernameImagem} />

                                  <input type="text" className="form-control caixaComentario" placeholder="Escreva aqui o seu comentário"/>
                              </div>






                </div>

        );
    }

});

module.exports = MainProductComment;
