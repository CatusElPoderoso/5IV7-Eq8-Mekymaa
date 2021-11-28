

// texto
const textoH = document.querySelector( '#textoH' );
const textoP = document.querySelector( '#textoP' );


// ahoraBtn
const ahoraBtn = document.querySelector( '#ahoraBtn' );


// bx
const img = document.querySelector( '.img' );
const imgBx = document.querySelector( '.imgBx' );
const formBx = document.querySelector( '.formBx' );


// form
const usuario = document.querySelector( '#usuario' ).value;
const clasificacion = document.querySelector( '#clasificacion' );


// validacionClasificacion
const validacionClasificacion = () => {

    if ( clasificacion.value ) {
        console.log( 'Ya tienes una clasificaci&oacute;n' );
        textoP.innerHTML = `Mira nada m&aacute;s lo que has encontrado. Aqu&iacute; podr&aacute;s <br>ver tus datos, modificarlos y ver tu mejor puntaje <br>sacado hasta el momento`;
        ahoraBtn.href = '/jugar';
        ahoraBtn.innerHTML = 'Continue playing';
        img.style.display = 'block';
        img.querySelector( 'img' ).src = '/static/images/perfil1.png';
        imgBx.style.display = 'none';
        formBx.style.display = 'flex';
    } else {
        console.log( 'No tienes una clasificaci&oacute;n' );
        textoP.innerHTML = `Mira nada m&aacute;s lo que has encontrado. Aqu&iacute; podr&aacute;s <br>ver tus datos, modificarlos y ver tu mejor puntaje <br>sacado hasta el momento, pero... ¿Por qu&eacute; <br>no has jugado a&uacute;n?`;
        ahoraBtn.href = '/jugar';
        ahoraBtn.innerHTML = 'Start top play';
        clasificacion.placeholder = 'Ops! you have not played'
        img.style.display = 'block';
        img.querySelector( 'img' ).src = '/static/images/perfil2.png';
        imgBx.style.display = 'none';
        formBx.style.display = 'flex';
    }

};
validacionClasificacion();


// validacionUsuario
const validacionUsuario = () => {

    if ( !usuario) {
        console.log( 'No estas registrado!' );
        textoH.innerHTML = 'Your need to register';
        textoP.innerHTML = `Mmm al parecer no est&aacute;s registrado, ¿Qu&eacute; te <br>parece si comenzamos tu registro para que puedas <br>ver tu clasificaci&oacute;n en Mekymaa?`;
        ahoraBtn.href = '/iniciarCuenta';
        ahoraBtn.innerHTML = 'Go to login';
        img.style.display = 'none';
        imgBx.style.display = 'block';
        formBx.style.display = 'none';
    } else {
        textoH.innerHTML = `Hi ${ usuario }`
    }

};
validacionUsuario();



