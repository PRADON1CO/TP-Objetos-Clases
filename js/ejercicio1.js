const auto ={
    color: 'rojo',
    marca:  'Toyota',
    modelo: 'Corolla',
    encendido: false,

    encender: function(){
        this.encendido = true;
        document.write('<p>El auto está encendido</p>')
    },
    apagar: function() {
        this.encendido =  false;
        document.write('<p>El auto se apagaó</p>');
    }
}

auto.encender();
auto.apagar();