var React = require('react');
var Nav = require('./Nav.jsx');
var Link = require('react-router').Link;

var SobrePage = React.createClass({
  getInitialState: function(){
    return {
        listaSobre: [],
    }
  },
  componentWillMount: function(){
    Api.get('sobre')
    .then(function(data){
      this.setState({
        listaSobre: data.data,
      })
    }.bind(this));

  },
    render: function() {
        return (
          <div>
            <Nav />
            {this.state.listaSobre.map(function(sobre,indexSobre){
              return (  <div key={indexSobre}>
            <div className="row">
                <div className="col-md-12">
                    <div className="cover-info">
                        <div className="img-capa"></div>
                        <div className="img-profile">
                            <img className="img-responsive2" src={sobre.imagem_user}/>
                        </div>

                        <div className="navbar-secundario">
                            <ul className="nav navbar-nav paddingbarramenu hidden-xs">
                                <li className="custom-second-menu large-menu-text"><Link to="defenicoesperfil" className="large-menu-text"><i className="fa fa-pencil-square-o fa-3x"></i>&nbsp; Editar</Link></li>

                                <li><Link to="sobre" className="custom-second-menu large-menu-text"><i className="fa fa-user fa-3x"></i>&nbsp; Sobre</Link></li>
                                <li><Link to="biblioteca" className="custom-second-menu large-menu-text"><i className="fa fa-book fa-3x"></i>&nbsp; Biblioteca</Link></li>
                            </ul>

                            <ul className="nav navbar-nav paddingbarramenu hidden-sm hidden-md hidden-lg">
                                <li><Link to="defenicoesperfil" className="custom-second-menu large-menu-text"><i className="fa fa-pencil-square-o fa-1x"></i>&nbsp; Editar</Link></li>
                              <li><Link to="sobre" className="custom-second-menu large-menu-text"><i className="fa fa-user fa-1x"></i>&nbsp; Sobre</Link></li>
                                <li><Link to="biblioteca" className="custom-second-menu large-menu-text"><i className="fa fa-book fa-1x"></i>&nbsp; Biblioteca</Link></li>
                            </ul>

                        </div>

                  </div>
                </div>
                </div>


            <div className="container">
                <div className="row">


                    <div className="col-md-4 description-sobre">
                        <p className="margem-topo-sobre limite-topo">Nome: {sobre.username}</p>
                        <p className="margem-topo-sobre">E-mail: {sobre.email}</p>
                        <p className="margem-topo-sobre">Área de formação: {sobre.area_formacao}</p>
                        <p className="margem-topo-sobre">Data de nascimento: {sobre.data_nascimento}</p>
                        <p className="margem-topo-sobre">Localidade: {sobre.localidade}</p>
                        <p className="margem-topo-sobre erase">Nacionalidade: {sobre.nacionalidade}</p>
                    </div>

                    <div className="col-md-8 description-sobre-detalhe ">

                        <br/>
                        <span className="span-cinzento2">{sobre.descricao}</span>
                        <br/><br/>


                    </div>
                    </div>



                </div>



            </div>



)
})}
</div>
        );
    }

});

module.exports = SobrePage;
