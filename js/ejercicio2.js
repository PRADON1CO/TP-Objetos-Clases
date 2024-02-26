const cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      this.saldo += cantidad;
      document.write(`<p>Se ha ingresado ${cantidad} a la cuenta.</p>`);
    },
  
    extraer: function(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        document.write(`<p>Se ha extraído ${cantidad} de la cuenta.</p>`);
      } else {
        document.write(`<p>Saldo insuficiente.</p>`);
      }
    },
  
    informar: function() {
      document.write(`<p>Titular: ${this.titular}</p>`);
      document.write(`<p>Saldo: ${this.saldo}</p>`);
    }
  };
  
  cuenta.informar();
  cuenta.ingresar(1000);
  cuenta.ingresar(2000);
  cuenta.extraer(500);
  cuenta.informar();