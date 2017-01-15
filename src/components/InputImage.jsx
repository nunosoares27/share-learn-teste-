var React = require('react');
var Link = require('react-router').Link;

var InputImage = React.createClass({
  UpdateImagemUsera:function(){
    console.log("hey");

    this.props.onSubmit(this.refs.imagem_user);

  },
  onChange: function(){
    this.props.onChanger(this.refs.imagem_user);
  },
    render: function() {
        return (
          <form onSubmit={this.UpdateImagemUsera}>
              <div className="modal fade" id="ModalImagemPerfil" role="dialog">
                <div className="modal-dialog">


                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Mudar Foto</h4>
                    </div>
                    <div className="modal-body">
                    <div className="form-group">
                   <label >Url da imagem:</label>
                   <input type="text" className="form-control" ref="imagem_user" id="imagem_user" onChange={this.onChange} value={this.props.imagem_user}/>
                </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" type="submit" className="btn btn-default" data-dismiss="modal">Enviar</button>
                    </div>
                  </div>

                </div>
              </div>
          </form>



        );
    }

});

module.exports = InputImage;
