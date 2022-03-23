const altura = "40px";                                       // Constante altura das fichas

var cuerpo;                                                  // (CriacaoTorres01.js) Criação da Varavel que contem a apresentacao

var movimientos = 0;

var cuadro1 = new Cuadro(true);                              // (CriacaoTorres01.js) Criação da torre 1 + (CriacaoDiscosTorres02.js) Colocado true e false 
var cuadro2 = new Cuadro(false);                             // (CriacaoTorres01.js) Criação da torre 2 + (CriacaoDiscosTorres02.js) Colocado true e false 
var cuadro3 = new Cuadro(false);                             // (CriacaoTorres01.js) Criação da torre 3 + (CriacaoDiscosTorres02.js) Colocado true e false 

var fichaSeleccionada;
var origen;
var destino;

function crearDiv() {                                        // (CriacaoTorres01.js) Criacao de uma divisão (igual a tag <div> no HTML)
      var caja = document.createElement ("div");             // (CriacaoTorres01.js) Criacao da var caja para criacao das torres
      return caja;
}

function over1() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      over(cuadro1);
}

function over2() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      over(cuadro2);
}

function over3() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      over(cuadro3);
}

function over (cuadro) {                                     // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseover
      cuadro.caja.style.backgroundColor = "#ADFAFF"
}

function out1() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      out(cuadro1);
}

function out2() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      out(cuadro2);
}

function out3() {                                           // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      out(cuadro3);
}

function out (cuadro) {                                     // (CriaçãoTorresExtras03.js) Criacao de uma função tipo mouseout
      cuadro.caja.style.backgroundColor = "#ffffFF"
}

function click1() {                                         // (CriaçãoTorresExtras03.js) Inverter de falso para verdadeiro ou de verdadeiro para falso
      cuadro1.elegido = !cuadro1.elegido;
      click(cuadro1);
}

function click2() {                                         // (CriaçãoTorresExtras03.js) Inverter de falso para verdadeiro ou de verdadeiro para falso
      cuadro2.elegido = !cuadro2.elegido;
      click(cuadro2);
}

function click3() {                                         // (CriaçãoTorresExtras03.js) Inverter de falso para verdadeiro ou de verdadeiro para falso
      cuadro3.elegido = !cuadro3.elegido;
      click(cuadro3);
}

function click(cuadro) {                                   // (CriaçãoTorresExtras03.js) Preparação para frente
      if (cuadro.elegido) {
            //cuadro.caja.style.borderColor = "#ff0000";
            //alert(cuadro.tieneFichas());
            seleccionarOrigenDestino(cuadro);
      } else {
            cuadro.caja.style.borderColor = "#000";
            reiniciarOrigenDestino();
      }
}

function rellenarContenido() {                               // (CriacaoDiscosTorres02.js)  Criacao da var Array com a disposição para cada disco nas torres
      var contenido = new Array();

      for (var i = 0; i < 5; i++) {
            contenido[i] = new Relleno();                    // (CriacaoDiscosTorres02.js) Chama funcao de criacao dos tamanhos dos futuros discos, 05 unidades por torres
      }

      return contenido;
}

function rellenarFichas() {                                  // (CriacaoDiscosTorres02.js) Var Array que contem os discos iniciais colocados na ordem do menor para o maior
      var contenido = new Array();

      contenido[0] = new Relleno();                          // (CriacaoDiscosTorres02.js) Espaço sem disco
      contenido[1] = new FichaS();                           // (CriacaoDiscosTorres02.js) Define o disco menor para o espaco
      contenido[2] = new FichaM();                           // (CriacaoDiscosTorres02.js) Define o disco medio para o espaco
      contenido[3] = new FichaL();                           // (CriacaoDiscosTorres02.js) Define o disco grande para o espaco
      contenido[4] = new FichaXL();                          // (CriacaoDiscosTorres02.js) Define o disco extra grande para o espaco

      return contenido;
}

function FichaS() {                                          // (CriacaoDiscosTorres02.js) Criação Disco 1 - menor
      this.caja = crearDiv();
      this.caja.style.width = "10%";
      this.caja.style.height = altura;
      this.caja.style.backgroundColor = "#0088CC";
      this.caja.style.marginLeft = "auto";
      this.caja.style.marginRight = "auto";
      this.caja.style.borderRadius = "20%"
      this.valor = 0;
}

function FichaM() {                                          // (CriacaoDiscosTorres02.js) Criação Disco 2 - medio
      this.caja = crearDiv();
      this.caja.style.width = "30%";
      this.caja.style.height = altura;
      this.caja.style.backgroundColor = "#979797";
      this.caja.style.marginLeft = "auto";
      this.caja.style.marginRight = "auto";
      this.caja.style.borderRadius = "20%"
      this.valor = 1;
}

function FichaL() {                                          // (CriacaoDiscosTorres02.js) Criação Disco 3 
      this.caja = crearDiv();
      this.caja.style.width = "50%";
      this.caja.style.height = altura;
      this.caja.style.backgroundColor = "#666666";
      this.caja.style.marginLeft = "auto";
      this.caja.style.marginRight = "auto";
      this.caja.style.borderRadius = "20%"
      this.valor = 2;
}

function FichaXL() {                                         // (CriacaoDiscosTorres02.js) Criação Disco 4 - maior 
      this.caja = crearDiv();
      this.caja.style.width = "70%";
      this.caja.style.height = altura;
      this.caja.style.backgroundColor = "#000000";
      this.caja.style.marginLeft = "auto";
      this.caja.style.marginRight = "auto";
      this.caja.style.borderRadius = "20%"
      this.valor = 3;
}

function Relleno() {                                         // (CriacaoDiscosTorres02.js) Criacao dos tamanhos dos futuros discos 
      this.caja = crearDiv();
      this.caja.style.width = "100%";
      this.caja.style.height = altura;
}

function Cuadro(cajaInicial) {                               // (CriacaoTorres01.js)Criação geral dos quadros
      this.caja = crearDiv();
      this.caja.style.width = "28%";
      this.caja.style.height = "200px";
      this.caja.style.marginLeft = "4%";
      this.caja.style.borderWidth = "2%";
      this.caja.style.border = "solid black";
      this.caja.style.borderRadius = "10%"
      this.caja.style.float = "left";
      this.elegido = false;                                  // (CriaçãoTorresExtras03.js) Adicionado o conteudo ao quadro
      this.contenido;                                        // (CriacaoDiscosTorres02.js) Adicionado o conteudo ao quadro

      if (cajaInicial) {
            this.contenido = rellenarFichas();               // (CriacaoDiscosTorres02.js) Executar se é o padrao de inicio 
      } else {
            this.contenido = rellenarContenido();            // (CriacaoDiscosTorres02.js) Executar como ficos apos as mudancas 
      }

      for (var i = 0; i < this.contenido.length; i++) {      // (CriacaoDiscosTorres02.js) Apresentar na tela a posição dos discos
            this.caja.appendChild(this.contenido[i].caja);
      }

      this.tieneFichas = function() {
            var rellenos = 0;

            for (var i = 0; i < this.contenido.length; i++) {
                  if (this.contenido[i] instanceof Relleno) {
                        rellenos++;
                  }
            }

            if (rellenos == this.contenido.length) {
                  return false;
            } else {
                  return true;
            }
      };

      this.obtenerFichaSuperior = function() {
            for (var i = 0; i < this.contenido.length; i++) {
                  if(!(this.contenido[i] instanceof Relleno)) {
                        return this.contenido[i];
                  }
            }
      };

      this.quitarFichaSuperior = function() {
            for (var i = 0; i < this.contenido.length; i++) {
                  if (!(this.contenido[i] instanceof Relleno)) {
                        fichaSeleccionada = this.contenido[i];
                        this.contenido[i] = new Relleno();
                        break;
                  }
            }
      };

      this.insertarFichaSuperior = function() {
            for (var i = this.contenido.length - 1; i >= 0; i--) {
                  if (this.contenido[i] instanceof Relleno) {
                        this.contenido[i] = fichaSeleccionada;
                        break;
                  }

            }
      };

      this.redibujarCaja = function() {
            while (this.caja.hasChildNodes()) {
                  this.caja.removeChild(this.caja.lastChild);
            }

            for (var i = 0; i < this.contenido.length; i++) {
                  this.caja.appendChild(this.contenido[i].caja);
            }
      };

}

function seleccionarOrigenDestino(cuadro) {
      if (origen == undefined) {
            if (cuadro.tieneFichas()) {
                cuadro.caja.style.borderColor = "#FF0000";
                origen = cuadro;
                origen.elegido = true;
            }
      } else if (origen != undefined && destino == undefined) {
            destino = cuadro;
            destino.elegido = true;

         if (origen != destino) {
               if (!destino.tieneFichas() || (origen.obtenerFichaSuperior().valor < destino.obtenerFichaSuperior().valor)) {
                  origen.quitarFichaSuperior();
                  origen.redibujarCaja();
                  destino.insertarFichaSuperior();
                  destino.redibujarCaja();
                  movimientos++;
                  actualizarContador();
               }
         }   
      }

      if (destino != undefined && origen != undefined) {
            reiniciarOrigenDestino();
      }

      if (comprobarVictoria()) {
            victoria();
      }
}

function comprobarVictoria() {
      if (cuadro2.contenido[0] instanceof Relleno && 
          cuadro2.contenido[1] instanceof FichaS && 
          cuadro2.contenido[2] instanceof FichaM && 
          cuadro2.contenido[3] instanceof FichaL && 
          cuadro2.contenido[4] instanceof FichaXL) {
                return true;                
          } else if (cuadro3.contenido[0] instanceof Relleno && 
            cuadro3.contenido[1] instanceof FichaS && 
            cuadro3.contenido[2] instanceof FichaM && 
            cuadro3.contenido[3] instanceof FichaL && 
            cuadro3.contenido[4] instanceof FichaXL) {
                  return true; 
            } else {
                return false;
          }
}

function victoria() {
      var textoTitulo = document.createTextNode("!Has ganado!");
      var textoSubtitulo = document.createTextNode("Movimientos utilizados: " + movimientos);
      var textoConsejo = document.createTextNode("Pulsa F5 para jugar de nuevo.");

      cuerpo.removeChild(cuadro1.caja);
      cuerpo.removeChild(cuadro2.caja);
      cuerpo.removeChild(cuadro3.caja);
      cuerpo.removeChild(document.getElementById("contador"));

      var titulo = document.createElement("h1");
      titulo.style.color = "#ff0000"
      titulo.appendChild(textoTitulo);

      var subtitulo = document.createElement("h2");
      subtitulo.appendChild(textoSubtitulo);

      var consejo = document.createElement("h3");
      consejo.appendChild(textoConsejo);

      cuerpo.appendChild(titulo);
      cuerpo.appendChild(subtitulo);
      cuerpo.appendChild(consejo)
}


function reiniciarOrigenDestino() {
      if (origen != undefined) {
            origen.caja.style.borderColor = "#000";
            origen.elegido = false;
      }
      if (destino != undefined) {
            destino.caja.style.borderColor = "#000";
            destino.elegido = false;
      }

      origen = undefined;
      destino = undefined;

      cuadro1.elegido = false;
      cuadro2.elegido = false;
      cuadro3.elegido = false;
}

function actualizarContador() {
      var parrafo = document.getElementById("contador");
      parrafo.innerHTML = "Movimientos: " + movimientos;
}

function iniciar() {                                         // (CriacaoTorres01.js)Iniciar as aplicacoes
      cuerpo = document.getElementsByTagName("body") [0];
      cuerpo.style.textAlign = "center";

      cuerpo.appendChild(cuadro1.caja);
      cuerpo.appendChild(cuadro2.caja);
      cuerpo.appendChild(cuadro3.caja);

      cuadro1.caja.addEventListener("mouseover", over1, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 1
      cuadro2.caja.addEventListener("mouseover", over2, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 2
      cuadro3.caja.addEventListener("mouseover", over3, false);  // (CriaçãoTorresExtras03.js) colocando a função mouse over para a torre 3

      cuadro1.caja.addEventListener("mouseout", out1, false);    // (CriaçãoTorresExtras03.js) colocando a função mouse out para a torre 1
      cuadro2.caja.addEventListener("mouseout", out2, false);    // (CriaçãoTorresExtras03.js) colocando a função mouse out para a torre 2
      cuadro3.caja.addEventListener("mouseout", out3, false);    // (CriaçãoTorresExtras03.js) colocando a função mouse out para a torre 3

      cuadro1.caja.addEventListener("click", click1, false);     // (CriaçãoTorresExtras03.js) inversão do quadro elegido
      cuadro2.caja.addEventListener("click", click2, false);     // (CriaçãoTorresExtras03.js) inversão do quadro elegido
      cuadro3.caja.addEventListener("click", click3, false);     // (CriaçãoTorresExtras03.js) inversão do quadro elegido

      var texto = document.createTextNode("Movimientos: " + movimientos);
      var parrafo = document.createElement("p");
      parrafo.style.clear = "both";
      parrafo.style.paddingTop = "3em";
      parrafo.setAttribute("id", "contador");
      parrafo.appendChild(texto);
      cuerpo.appendChild(parrafo);
}

window.addEventListener("load", iniciar, false);




