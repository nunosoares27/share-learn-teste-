var React = require('react');
var ReactDOM = require('react-dom');
var render = require('react-dom').render;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var LandingPage = require('./components/LandingPage.jsx');
var LoginRegisterPage = require('./components/LoginRegisterPage.jsx');
var EditarPerfilPage = require('./components/EditarPerfilPage.jsx');
var DefenicoesPerfilPage = require('./components/DefenicoesPerfilPage.jsx');
var CronologiaPage = require('./components/CronologiaPage.jsx');
var PublicarPage = require('./components/PublicarPage.jsx');
var SobrePage = require('./components/SobrePage.jsx');
var BibliotecaPessoalPage = require('./components/BibliotecaPessoalPage.jsx');
var BibliotecaDetalhePage = require('./components/BibliotecaDetalhePage.jsx');
var BibliotecaGeralPage = require('./components/BibliotecaGeralPage.jsx');
 // ReactDOM.render(<LandingPage />, document.getElementById('app'));
// ReactDOM.render(<LoginRegisterPage />, document.getElementById('app'));
// ReactDOM.render(<DefenicoesPerfilPage />, document.getElementById('app'));
// ReactDOM.render(< EditarPerfilPage />, document.getElementById('app'));


render((
  <Router history={hashHistory}>
    <Route path="/" component={BibliotecaGeralPage}/>
      <Route path="login" component={LoginRegisterPage}/>
      <Route path="editarperfil" component={EditarPerfilPage}/>
      <Route path="defenicoesperfil" component={DefenicoesPerfilPage}/>

      <Route path="cronologia" component={CronologiaPage}/>
      <Route path="publicar" component={PublicarPage}/>
      <Route path="sobre" component={SobrePage}/>
      <Route path="biblioteca" component={BibliotecaGeralPage}/>
      <Route path="bibliotecapessoal" component={BibliotecaPessoalPage}/>
        <Route path="biblioteca-geral/:id" component={BibliotecaDetalhePage}/>



  </Router>
), document.getElementById('app'));
