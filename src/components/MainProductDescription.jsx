var React = require('react');
var MainProductDescription = React.createClass({

    render: function() {
        return (<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 main-product-description">
            <div className="user-block">
                <img className="img-circle" src={this.props.imagemUser}/>
                <span className="span-azul content-spacing">{this.props.creatorUsername} </span>
                <span className="span-cinzento">- 1 h</span>
                <br/>
                 <span className="span-cinzento content-spacing">Submeteu uma aplicação: </span>
                 <span className="span-azul">{this.props.nome}</span>
                 <hr/>
            </div>

            <div className="content-preview">
              <div>
                <img className="img-responsive" src={this.props.imagem}/>

                <div className="descript-caption">
                    <h4>{this.props.nome}</h4>

                    <h4>{this.props.descricao}</h4>
                </div>
                </div>
            </div>

            <div className="content-preview-bottom">

            <span className="span-cinzento pull-right">Denunciar publicação</span>
            </div>

        </div>

        );
    }

});

module.exports = MainProductDescription;
