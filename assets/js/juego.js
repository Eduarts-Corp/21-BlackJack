
let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;

// REFERENCIAS DEL HTML

const btnPedir             = document.querySelector('#btnPedir');
const btnDetener           = document.querySelector('#btnDetener');
const btnNuevo             = document.querySelector('#btnNuevo');
const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHtml           = document.querySelectorAll('small');


// FUNCION PARA CREAR UNA BARAJA

const crearDeck = () => {

    for (let i = 2; i <= 10; i++){
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }   
    
    deck = _.shuffle(deck);
    console.log(deck);
    return (deck);
}

crearDeck();

// ESTA FUNCION ME PERMITE TOMAR UNA CARTA.

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay Cartas en el Deck';
    }

    const carta = deck.pop();
    
    return carta;
}

// peridrCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0,carta.length-1);// Metodo que regresa un string cortado
    return (isNaN(valor)) ? // operadores Ternarios
        (valor == 'A') ? 11 : 10 // Operador ternario de Up
        : valor * 1; // En caso que sea numero lo convierte

}

//TURNO DE LA CAMOPUTADORAAAA.( se disparara cuando Jugador pierde o llega a 21 o cuando toca btn-Detener)

const turnoComputadora = (puntosMin) => { // Neces un argum que seran los pts min para que me acerque al jugador
    
    do {
    
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);

        puntosHtml[1].innerText = puntosComputadora; // Creamos la var arriba
    
        /*  Ahora ya suma en el contador pero no aparecen las cartas
        Como podria hacer para eso.? */

        const imgCarta = document.createElement('img'); // asi se crea la imagen pero solo la imagen
        // ahora necesito la fuente de donde sacarla asi que 
        imgCarta.src = `/assets/cartas/cartas/${carta}.png`; // Asu me aparece la carta enorme para ello le ponemos la clase de abajo
        imgCarta.classList.add('carta'); // De esta manera ya tendremos nuestra carta pequeña
        divCartasComputadora.append(imgCarta);

        if (puntosMin > 21) { // Aqui lo que se dice es que si el jug saca mas de 21 no tiene sentido seguir con el ciclo
            break;
        }    

    } while ((puntosComputadora < puntosMin) && (puntosMin <= 21));
    
    
    
    setTimeout(() => { /*  Esta es una funcion Callback para sacar un mensaje en caso de cualquier evento
                          para este caso al final se ve un 40 que son los mseg que se toma para que salga el msj  */
        
    if (puntosComputadora === puntosMin) {
        alert('Empate tecnico - Juega De Nuevo')
    } else if (puntosMin > 21) {
        alert('Perdiste, Computadora gana - Juega de Nuevo')
    } else if (puntosComputadora > 21) {
        alert('Ganaste - Computadora Loca - Juega de Nuevo')
    } else {
        alert('Computadora Mala Ganaaaaaaaaa');
    }

    
    }, 40 );

    

}

// EVENTOS.

btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);

    puntosHtml[0].innerText = puntosJugador; // Creamos la var arriba
    
    /*  Ahora ya suma en el contador pero no aparecen las cartas
    Como podria hacer para eso.? */

    const imgCarta = document.createElement('img'); // asi se crea la imagen pero solo la imagen
    // ahora necesito la fuente de donde sacarla asi que 
    imgCarta.src = `/assets/cartas/cartas/${carta}.png`; // Asu me aparece la carta enorme para ello le ponemos la clase de abajo
    imgCarta.classList.add('carta'); // De esta manera ya tendremos nuestra carta pequeña
    divCartasJugador.append(imgCarta);

    // Aca ahora necesito saber si el jugador ya sobrepasa los 21 puntos entonces ponemo lo sig.

    if (puntosJugador > 21) {
        console.warn('Lo siento Perdiste'); //Ok y en ese momento debo poder Bloquear el btn pedir y eso se hace asi.
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador); // Aca en este caso voy a llamar a que juegue la computadora
        
        // Ok Ahora vamos a hacer que si el Jugador llega a 21 tambien pare y accidental/ no toque mas el btn
    
    } else if (puntosJugador === 21) {
        console.warn(' 21 Geniaaaaaal !!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador); // De igual Manera si el jugador llega a 21 llamara a que juegue la computadora
    }

});
    
// Aca tenemos los eventos para el boton de Detener el Juego


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);

    
    // Aca tenemos el Boton para borrar todo y restablecer los valores por defecto de alguna manera.
        
    
        btnNuevo.addEventListener('click', () => {
        
        console.clear(); // Esto casi de ultimo se hizo para limpiar la consola de Basura
            
            deck = []; // con esto vaciamos el deck ya que paso lo que sucedio al principio qiue se acumularon 200 cartas en el nuevo deck
            
        deck = crearDeck(); // Con esto creamos un nuevo deck aleatorio

        puntosJugador = 0;
        puntosComputadora = 0;
        
        puntosHtml[0].innerText = 0; // Los contadores de puntos los devuelve a 0
        puntosHtml[1].innerText = 0; // Los contadores de puntos los devuelve a 0

        divCartasComputadora.innerHTML = ''; // Desaparece las imagenes de las cartas de la mesa
        divCartasJugador.innerHTML = ''; // Desaparece las imagenes de las cartas de la mesa

        btnPedir.disabled = false; // Habilita de nuevo el boton de pedir
        btnDetener.disabled = false; // habilita de nuevo el boton de detener

        
     });



});

