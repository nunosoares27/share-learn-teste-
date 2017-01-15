var Fetch = require('whatwg-fetch');

var rootUrl = 'http://josedias.zapto.org/api/';
var url = '';
var idAplicacao = '';
var textoComentario = '';
var urlBibliotecaGeral = 'biblioteca-geral/'
var id = '';
module.exports = window.Api = {
  get:function(url){
    return fetch(rootUrl + url, {

    })
    .then(function(response){
      return response.json()
    })
  },
  getBibliotecaDetalhe:function(id){
    return fetch(rootUrl + urlBibliotecaGeral + id, {
        
    })
    .then(function(response){
      return response.json()
    })
  }


};
