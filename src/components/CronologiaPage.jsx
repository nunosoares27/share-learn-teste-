var React = require('react');
var Nav = require('./Nav.jsx');
var Link = require('react-router').Link;

var MainProductDescription = require('./MainProductDescription.jsx');
var MainProductComment = require('./MainProductComment.jsx');


var CronologiaPage = React.createClass({
  getInitialState: function(){
    return {
      imagem: 'https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/14324377_1593206650984034_5364824937241263307_o.jpg?oh=d14bd66774bcec2f91f9e75701ce00ec&oe=58F6DDF7',
      imagemUser: 'https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/15591461_634901276720390_581611070925092973_o.jpg?oh=54d350424a0240c1c892db936d9c1897&oe=58E9D2AA',
      creatorUsername: 'Nuno Soares ',
      nome: 'Quizz Pata',
      descricao: 'Quizz referente episodio 2',
      imagem: 'https://i.ytimg.com/vi/PtjBq2eD9ps/hqdefault.jpg',
      username: 'Maria Almeida',
      usernameImagem:'https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/14138225_10206815728303243_8451830449780388792_o.jpg?oh=a8b616fc724d93de59839dab9776b04b&oe=58EFD220',
      comentarios: [
        {
        idComentario: 1,
        username: 'Maria Almeida',
        usernameImagem:'https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/14138225_10206815728303243_8451830449780388792_o.jpg?oh=a8b616fc724d93de59839dab9776b04b&oe=58EFD220',
        comentario: 'Esta aplicação de Quizz é bastante interessante e os meus alunos acharam estremamente divertida.',
      },{
        idComentario: 2,
        username: 'Nuno Soares',
        usernameImagem:'https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/15591461_634901276720390_581611070925092973_o.jpg?oh=54d350424a0240c1c892db936d9c1897&oe=58E9D2AA',
        comentario: 'Obrigado pelo feedbeck positivo. O objectivo é que as nossas crianças possam ter uma melhoria na aprendizagem',
      },
    ],

    }
  },
    render: function() {
        return (
          <div>
            <Nav />

              <div className="row">
                  <div className="col-md-12">
                      <div className="cover-info">
                          <div className="img-capa"></div>
                          <div className="img-profile">
                              <img className="img-responsive2" src={this.state.usernameImagem}/>
                          </div>

                          <div className="navbar-secundario">
                              <ul className="nav navbar-nav paddingbarramenu hidden-xs">
                                  <li className="custom-second-menu large-menu-text"><Link to="defenicoesperfil" className="large-menu-text"><i className="fa fa-pencil-square-o fa-3x"></i>&nbsp; Editar</Link></li>
                                  <li className="custom-second-menu active"><Link to="cronologia" className="large-menu-text"><i className="fa fa-bars fa-3x faActive"></i> Cronologia</Link></li>
                                  <li><Link to="sobre" className="custom-second-menu large-menu-text"><i className="fa fa-user fa-3x"></i>&nbsp; Sobre</Link></li>
                                  <li><Link to="bibliotecapessoal" className="custom-second-menu large-menu-text"><i className="fa fa-book fa-3x"></i>&nbsp; Biblioteca Pessoal</Link></li>
                              </ul>

                              <ul className="nav navbar-nav paddingbarramenu hidden-sm hidden-md hidden-lg">
                                  <li><Link to="defenicoesperfil" className="custom-second-menu large-menu-text"><i className="fa fa-pencil-square-o fa-1x"></i>&nbsp; Editar</Link></li>
                                  <li className="custom-second-menu active"><Link to="cronologia" className="large-menu-text"><i className="fa fa-bars fa-1x faActive"></i>&nbsp; Cronologia</Link></li>
                                <li><Link to="sobre" className="custom-second-menu large-menu-text"><i className="fa fa-user fa-1x"></i>&nbsp; Sobre</Link></li>
                                  <li><Link to="bibliotecapessoal" className="custom-second-menu large-menu-text"><i className="fa fa-book fa-1x"></i>&nbsp; Biblioteca Pessoal</Link></li>
                              </ul>

                          </div>

                    </div>
                  </div>
                  </div>



        <div className="container">

                  <MainProductDescription {...this.state} />


                  <MainProductComment {...this.state} />



    </div>

</div>

        );
    }

});

module.exports = CronologiaPage;
