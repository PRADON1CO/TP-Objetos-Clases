class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    mostrarPropiedades() {
      document.write(`<p>Alto: ${this.alto}</p>`);
      document.write(`<p>Ancho: ${this.ancho}</p><br>`);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  const rectangulo1 = new Rectangulo(5, 7);
  const rectangulo2 = new Rectangulo(3, 9);
  
  rectangulo1.mostrarPropiedades();
  rectangulo2.mostrarPropiedades();
  
  rectangulo1.modificarAlto(2);
  rectangulo2.modificarAncho(3);

  document.write(`<p>Perímetro del rectángulo 1: ${rectangulo1.calcularPerimetro()}</p>`);
  document.write(`<p>Área del rectángulo 2: ${rectangulo2.calcularArea()}</p>`);

  document.write(`<br><p>Rectangulos Modificados</p>`);
  rectangulo1.mostrarPropiedades();
  rectangulo2.mostrarPropiedades();
  
  document.write(`<p>Perímetro del rectángulo 1: ${rectangulo1.calcularPerimetro()}</p>`);
  document.write(`<p>Área del rectángulo 2: ${rectangulo2.calcularArea()}</p>`);