/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
      this.modelo.agregarPregunta(pregunta, respuestas);
  },

  borrarPregunta: function(id) {
    var id = parseInt($('.list-group-item.active').attr('id'));
      if (!isNaN(id)){
    this.modelo.borrarPregunta(id);
      }
  },

  editarPregunta: function() {
    this.modelo.editarPregunta();
    },
  agregarVoto: function(pregunta,respuestaSeleccionada) {
    this.modelo.agregarVoto(pregunta,respuestaSeleccionada);
  },
};



