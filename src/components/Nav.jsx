var React = require('react');
var Link = require('react-router').Link;


var Nav = React.createClass({

  getInitialState: function () {
    return { navStatus: "", listaSobre: [], };
},
componentWillMount: function(){
  Api.get('sobre')
  .then(function(data){
    this.setState({
      listaSobre: data.data,
    })
  }.bind(this));

},
navClose(e) {
  e.stopPropagation();
  this.setState({
      navStatus: ""
  });
},
navOpen(e) {
  e.stopPropagation();
  this.setState({
      navStatus: "SidebarOpen"
  });
},

    render: function() {

        return (<div>
          <nav className="navbar navbar-inverse navbar-fixed-top ">
             <div className="container">
               <div className="navbar-header">

                 <Link to="/" className="navbar-brand">
                <img className="logo" alt="Share&Learn" src="../public/imagens/ShareLearn.png"/>
                   </Link>
               </div>
               <div className="collapse navbar-collapse">
                 <ul className="nav navbar-nav pull-right">
                   <li ><Link to="/" activeClassName="active"><i className="fa fa-home fa-4x"></i></Link></li>
                   <li ><Link to="publicar" activeClassName="active"><i className="fa fa-cloud-upload fa-4x"></i></Link></li>
                   <li onClick={this.navOpen}><a ><i className="fa  fa-ellipsis-v fa-4x"></i></a></li>
                 </ul>
               </div>
             </div>
           </nav>


           <div className="container">
               <div className="row espaco">
                   <div id="menu-lateral" className="col-xs-8 col-sm-6 col-md-6 col-lg-4 col-xs-offset-4 col-sm-offset-6 col-md-offset-6 col-lg-offset-8">
                       <div className="fotoMenu col-lg-10 imgInformaPerfilleal">
                               <img className="img-responsive" style={{"height": "100%", "margin": "auto"}} src="https://scontent.fopo1-1.fna.fbcdn.net/v/t31.0-8/14138225_10206815728303243_8451830449780388792_o.jpg?oh=a8b616fc724d93de59839dab9776b04b&oe=58EFD220" width="150px" height="150px"/>
                       </div>

                       <ul className="lista-custom">
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="biblioteca" activeClassName="active"><i className="fa fa-book fa-2x alinhamento-menu"></i><span className="espaco-menu">&nbsp;&nbsp;Biblioteca</span></Link></li>
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="publicar" activeClassName="active"><i className="fa fa-cloud-upload fa-2x alinhamento-menu"></i> <span className="espaco-menu">Criar Conteúdo</span></Link></li>
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="sobre" activeClassName="active"><i className="fa fa-user fa-2x alinhamento-menu"></i> <span className="espaco-menu"> &nbsp;&nbsp;&nbsp;Perfil</span></Link></li>
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="login" activeClassName="active"><i className="fa fa-sign-out fa-2x alinhamento-menu"></i><span className="espaco-menu">&nbsp;&nbsp;&nbsp;Sair</span></Link></li>
                       </ul>



                   </div>

                   <div id="mySidenav" className={"sidenav "+(this.state.navStatus)}>
                       <a className="closebtn" onClick={this.navClose}>&times;</a>
                       {this.state.listaSobre.map(function(sobre,indexSobre){
                         return (  <div key={indexSobre}>
                       <div className="fotoMenu col-lg-10 imgInformaPerfilleal">
                           <img className="img-responsive" style={{"margin": "auto", "padding-top": "7.5%", "width": "60%", "height":"80%"}} src={sobre.imagem_user}/>
                           <p className="nome-user-menu">{sobre.username}</p>
                       </div>
                       </div>
                     )
                   })}
                       <ul className="lista-custom">
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="biblioteca" activeClassName="active"><i className="fa fa-book fa-2x alinhamento-menu"></i><span className="espaco-menu">&nbsp;&nbsp;Biblioteca</span></Link></li>
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="publicar" activeClassName="active"><i className="fa fa-cloud-upload fa-2x alinhamento-menu"></i> <span className="espaco-menu">Criar Conteúdo</span></Link></li>
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="sobre" activeClassName="active"><i className="fa fa-user fa-2x alinhamento-menu"></i> <span className="espaco-menu"> &nbsp;&nbsp;&nbsp;Perfil</span></Link></li>
                           <li className={"custom-menu "+(activeClassName = "active" ? "active" : "")}><Link to="login" activeClassName="active"><i className="fa fa-sign-out fa-2x alinhamento-menu"></i><span className="espaco-menu">&nbsp;&nbsp;&nbsp;Sair</span></Link></li>
                       </ul>
                   </div>

               </div>

           </div>

           </div>
        );
    }

});

module.exports = Nav;
