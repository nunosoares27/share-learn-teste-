var React = require('react');
var Nav = require('./Nav.jsx');
var Link = require('react-router').Link;

var BibliotecaDetalhePage = React.createClass({
  getInitialState: function(){
    return {
      Detalhe: [],

    }
  },componentWillMount: function(props){
    id = this.props.params.id;
    Api.getBibliotecaDetalhe(id)
    .then(function(data){
      this.setState({
        Detalhe: data.data,
      })
    }.bind(this));

  },
    render: function() {
        return (
          <div>
            <Nav />




                <div className="container bibliotecaDetalhe">
                    <div className="row">



                  <div >

                        <div className=" col-xs-4 col-sm-4">
                            <a  className="thumbnail">
                                <img src={this.state.Detalhe.imagem} alt="..." className="img-responsive"/>
                                <div className='description'>

                                    <p className='description_content'>{this.state.Detalhe.nome}</p>

                                </div>
                            </a>

                        </div>

                        <div className=" col-xs-8 col-sm-8 description-biblioteca-detalhe">
                                <i className="fa fa-pencil fa-2x edit-pencil"></i>
                                <br/>
                                <span className="span-cinzento">Descrição: </span>
                                <br/><br/>
                                <span className="span-cinzento">{this.state.Detalhe.descricao}</span>


                                <hr/>
                                <span className="span-cinzento">Idade: {this.state.Detalhe.idade}</span>
                            </div>
                            </div>



                </div>


    </div>


</div>


        );
    }

});

module.exports = BibliotecaDetalhePage;
