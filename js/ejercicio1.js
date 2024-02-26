const auto ={
    color: 'rojo',
    marca:  'Toyota',
    modelo: 'Corolla',
    encendido: false,

    encender: function(){
        this.encendido = true;
        document.write('El auto está encendido')
    },
    apagar: function() {
        this.encendido =  false;
        document.write('El auto se apagaó');
    }
}

auto.encender();
auto.apagar();