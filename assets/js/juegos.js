
// TODO ESTE CODIGO SE FUE A LA ÑOÑA PORQUE 
// NO ENCONTRE UN ERROR MUY SENCILLO



let deck        = []; // Con esto vamos a crear el deck

let tipos       = ['C', 'D', 'H', 'S']; /* esta seria una manera para poner los tipos de cartas sin hacer 
                                           concatenaciones con + sino que dentro del mismo For vamos a poner
                                           un for of como se ve abajo  linea 24*/

let especiales  = ['A','J','Q','K']; // con este vamos a crear las cartas que nos faltan que serian las de letras


// let puntosJugador = 0;
//     puntosComputadora = 0;

// Referencial del HTML.
// const btnPedir = document.querySelector('#btnPedir');



// Esta funcion crea una nueva Baraja o deck

const crearDeck = () => {

    for (let i = 2; i <= 10; i++){ // Let i es donde inicializamos que seria la carta 2 <=10 la carta mayor y i++ para increment
        for (let tipo of tipos) { // Este seria el for dentro del otro for para el tipo de carta
            deck.push(i + tipo );   /*aqui ya no concatenariamos con + C y copiar aabjo y esto mismo y cambiar la letra sino que
                                    para este caso cambiamos + tipo  */
          
            
        } 
    for (let tipo of tipos) { // Lo Mismo de arriba este seria el for para el tipo de carta y abajo como para la letra
        for (let esp of especiales) { // es otro for of de especiales para ponerle el tipo de letra  
            deck.push( esp + tipo );  // aqui no seria i sino el esp
            }
        }   // OK SI VEMOS YA ESTAN LAS CARTAS PERO EN ORDEN Y COMO NECESITAMOS QUE NOS DE CARTAS EN DESORDEN
            // ES NECESARIO ACUDIR A UNA LIBRERIA EXTERNA QUE ES EL UNDERSCORE E IMPORTARLA DESDE EL INDEX
        
    }

    // console.log(deck); // Deck ordenado

    deck = _.shuffle(deck);  // Aqui es donde trabajamos con el underscore para hacerlo aleatorio
    console.log(deck); /*Como el suffle nos retorna otro arreglo lo ponemos como esta en la linea
                        31, por eso la variable no la camnbiamos*/
       
    return deck;
}

    crearDeck();


    
// // // Esta funcion me permite tomar una nueva carta.

const pedirCarta = () => {

// //     if (deck.length === 0) { // Ponemos esta condicion ya que si llega la baraja a 0 ya no puedo 
// //         throw 'No hay mas cartas en el Deck'; // pedir mas cartas asi que deberia parar el juego
// //     }
    const carta = deck.pop(); // con el metodo .pop extaemos la ultima carta y al imprimir las barjas
// //                               // Podemos ver que se extarjo efectivamente esa carta
       
    console.log(deck);
    console.log(carta);
    
    return carta;
        
    }                      
                 
// //     //Anteriormente pedimos una carta perom ahora necesito saber cual es esa carta por lo cual 
// //     //tengo que hacer la siguinete funcion.
    
// // const valorCarta = (carta) => { // Ahora necesito extraer el valor y despues el tipo y lo puedo hacer con:
    
// //     const valor = carta.substring(0, carta.length - 1);
// //     return (isNaN(valor)) ? // Se evalua ese valor y si no es un numero pasa a la sig linea
// //         (valor === 'A') ? 11 : 10 // y aqui dice como no es un num es letra pero si es = A pongale eso
// //         : valor * 1; // y en  caso de ser un numero como es string lo multip x 1 y lo convierte

// // }

// // //EVENTOS.

// // btnPedir.addEventListener('click', () => {
    
// //     const carta = pedirCarta();
   
// //     puntosJugador = puntosJugador + valorCarta(carta);

// //     console.log( puntosJugador );

// // });













// //     //     /* TODO ESTE CODIGO AQUI ABAJO SE RESUME EN LAS LINEAS 70 A 72 */

// // //     // const valor = carta.substring(0, carta.length - 1);//este metod substring y le digo 0 (posc) y
// // //                               // carta.length-1 que es lo largo del valor menos la letra practicamente.
      
// // //     // let puntos = 0;   // este puntos no lo voy a necesitar ya que voy a retornar directamente el valor
    
    
// // //     // if ( isNaN (valor)) { //isNaN =funcion Is not a number o si no es un numero y entre parentesis a evaluar
       
// // //         // puntos = (valor === 'A') ? 11 : 10; // con este operador ternario decimos para el tema de las letras
// // // //                                             // si el valor es igual a A vale 11 si no vale 10 osea cualquier letra

// // // //     } else { 
       
// // // //         puntos = valor * 1; // tomamos ese valor y lo metemos en una var puntos pero ojo eso es un string pero
// // // //                         //para convertirlo lo multiplicamos por 1
// // // //     }

// // // //     console.log( puntos );

// // // // 























































