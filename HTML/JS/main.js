var splash ,inicio ,login, registro, envioCodigo,restablecerContrasena,disenos,diseno,barra ,calendario,btn_inicio,btn_registro,btn_olvidocontra ,	btn_restrarse,btn_restablecerenvioCodigo
,btn_restablecerContrasena , btn_LogoutbarraDesplegable, btn_iraDiseno, reserva, btn_Siguientereserva, btn_iniciobarraDesplegable, btn_reservar1, btn_calendariobarraDesplegable;
var secciones;
let fechaSeparada;
var seccionActual ,seccionAnterior,btnAtras ,btn_barra  ,btn_iniciobarraDesplegable ,btn_calendariobarraDesplegable,btn_LogoutbarraDesplegable;
let idEnClick ,srcImagen;
localStorage.setItem("user", "Adm");
localStorage.setItem("contra", "Adm");
localStorage.removeItem("nombreRegistrol");
localStorage.removeItem("usuarioRegistrol");
localStorage.removeItem("correoRegistrol");
localStorage.removeItem("contrasenaRegistrol");
	window.onload=()=>{
		crearReferencias();
		agregarEventos();
		setTimeout(()=>{irA(login);},1700);
		comprobarlocalstorage();

	}
	function actualizarVista(seccion, imagen,idboton){
		//CambiarSrc();
		var element = $(imagen);
        element.src = traerImagen(idboton);
        irA($(seccion));
				srcImagen=element.src
	}
	function guardarImagen(imagenId){

	}
	function actualizarVista2(seccion, imagen){
		//CambiarSrc();
		var element = $(imagen);
				element.src = srcImagen;
				irA($(seccion));
	}

	function crearReferencias(){

		splash=document.getElementById("splash")
		inicio=document.getElementById("inicio");
		login=document.getElementById("login");
		envioCodigo=document.getElementById("envioCodigo");
		registro=document.getElementById("registro");
		restablecerContrasena=document.getElementById("restablecerContrasena");
		disenos=document.getElementById("disenos");
		diseno=document.getElementById("diseno");
		barra=document.getElementById("barraDesplegable");
		reserva=document.getElementById("reservar");
		reservaExitosa1=document.getElementById("reservaExitosa");
		calendario=document.getElementById('calendario');


		btn_inicio=document.getElementById("botoninicio");
		btn_registro=document.getElementById("botonregistro");
		btn_olvidocontra=document.getElementById("olvidaste");
		btn_restrarse=document.getElementById('botonRegistoregistro');
		btn_restablecerenvioCodigo=document.getElementById("botonrestablecerenvioCodigo");
		btn_restablecerContrasena=document.getElementById("botonrestablecerrestablecerContrasena");
		btnAtras=document.getElementsByClassName("volver");

		btn_atras=document.getElementsByClassName("volver");
		btn_verDiseno=document.getElementsByClassName("botonEstudioinicio");
		btn_iraDiseno=document.getElementsByClassName("botonVerDieno");
		btn_Siguientereserva=document.getElementById("botonSiguientediseno");
		btn_barra=document.getElementsByClassName('barra');
		btn_iniciobarraDesplegable=document.getElementById("botoninicioBarraDesplegable");
		btn_reservar1=document.getElementById("botonreservarreservar");
		btn_calendariobarraDesplegable=document.getElementById('botoncalendarioBarraDesplegable');
		btn_LogoutbarraDesplegable=document.getElementById("botonLogoutBarraDesplegable");

		secciones=[splash,inicio,login,registro,envioCodigo,restablecerContrasena,disenos,diseno,barra,reserva,reservaExitosa1,calendario];
		console.log(secciones)
}

	function ocultarsecciones(){

		for(i in secciones){
			secciones[i].classList.add("ocultar");
		}
	}

	function irA(seccion){

		ocultarsecciones();
		seccion.classList.remove("ocultar");
		seccionAnterior=seccionActual;
		seccionActual=seccion;
	}

	function agregarEventos(){
		btn_registro.addEventListener("click",()=>{irA(registro);});
		btn_olvidocontra.addEventListener("click",()=>{irA(envioCodigo);});
		btn_restrarse.addEventListener("click",()=>{irA(login);})
		btn_restablecerenvioCodigo.addEventListener("click",()=>{irA(restablecerContrasena);})
		btn_restablecerContrasena.addEventListener("click",()=>{irA(login);})
		btn_Siguientereserva.addEventListener("click",()=>{irA(reserva);})
		btn_iniciobarraDesplegable.addEventListener("click",()=>{irA(inicio);})
		btn_reservar1.addEventListener("click",()=>{irA(reservaExitosa1);})
		btn_LogoutbarraDesplegable.addEventListener("click",()=>{irA(login);});

		for (var i = 0; i < btnAtras.length; i++) {
			btnAtras[i].addEventListener("click",()=>{irA(seccionAnterior);});
	}
		for (var i = 0; i < btn_verDiseno.length; i++) {
		btn_verDiseno[i].addEventListener("click",()=>{irA(disenos);});
		}

		for (var i = 0; i < btn_iraDiseno.length; i++) {
			btn_iraDiseno[i].addEventListener("click",()=>{irA(diseno);});
		}

		for (var i = 0; i < btn_barra.length; i++) {
			btn_barra[i].addEventListener("click",()=>{irA(barra);})
		}

}
	function navegar(seccionparaIr,seccionparaOcultar){

			seccionparaOcultar.classList.add("ocultar");
			seccionparaIr.classList.remove("ocultar");
	}

	function GuardarID(ideste){
		idEnClick=ideste

	}

	function traerImagen(idboton){
		var ImagenAtraer
		if(idboton==1){

				ImagenAtraer = "img/tatto1.png";
		}
		else if (idboton==2){

			ImagenAtraer = "img/tatto2.png";
		}
		else {
			ImagenAtraer = "img/tatto3.png";
		}
		return ImagenAtraer
	}

	function $(element_id)
			 {
					 return document.getElementById(element_id);
			 }
	function CambiarSrc(element_id)
        {
			var src =srcImagen;
            var element = $(element_id);
            element.src = src;
        }

	function inicioSesion(UsuarioEmpieza,ContrasenaUsuario){
				var usuarioQuemado="Admin"
				var contraseQuemada="Admin"

				if(UsuarioEmpieza==usuarioQuemado && contraseQuemada==ContrasenaUsuario){
					btn_inicio.addEventListener("click",()=>{irA(inicio);});
				}
				else {
						alert("Datos Incorrectos");
				}
	}
	function comprobarlocalstorage(){
		if (typeof(Storage) !== "undefined") {
    // LocalStorage disponible
		console.log("disponible")
} else {
    // LocalStorage no soportado en este navegador
}

	}

	function iniciosesionlocalstorage(user,contrasena){

		if(user==localStorage.getItem("user")&&contrasena==localStorage.getItem("contra")){
			btn_inicio.addEventListener("click",()=>{irA(inicio);});
		}
		else if(user==localStorage.getItem("usuarioRegistrol")&&contrasena==localStorage.getItem("contrasenaRegistrol")) {
			btn_inicio.addEventListener("click",()=>{irA(inicio);});
		}
		else {
			alert("Datos Incorrectos");
		}
	}
	function registarmeClick(nombreRegistro,usuarioRegistro,correoRegistro,contrasenaRegistro){


		localStorage.setItem("nombreRegistrol", nombreRegistro);
		localStorage.setItem("usuarioRegistrol", usuarioRegistro);
		localStorage.setItem("correoRegistrol", correoRegistro);
		localStorage.setItem("contrasenaRegistrol", contrasenaRegistro);
	}

	function almacenarFecha(fecha){
		localStorage.setItem("fechaAlmacenada",fecha)
		separarFechaAlmacenada(fecha)
	}
	function separarFechaAlmacenada(fecha){
		fechaSeparada=fecha.split("-")
		localStorage.setItem("ano",fechaSeparada[0])
		if(fechaSeparada[1]=="01"){
			localStorage.setItem("mes","enero")
		}
		else if(fechaSeparada[1]=="02"){
			localStorage.setItem("mes","febrero")
		}
		else if(fechaSeparada[1]=="03"){
			localStorage.setItem("mes","marzo")
		}
		else if(fechaSeparada[1]=="04"){
			localStorage.setItem("mes","abril")
		}
		else if(fechaSeparada[1]=="05"){
			localStorage.setItem("mes","mayo")
		}
		else if(fechaSeparada[1]=="06"){
			localStorage.setItem("mes","junio")
		}
		else if(fechaSeparada[1]=="07"){
			localStorage.setItem("mes","julio")
		}
		else if(fechaSeparada[1]=="08"){
			localStorage.setItem("mes","agosto")
		}
		else if(fechaSeparada[1]=="09"){
			localStorage.setItem("mes","septiembre")
		}
		else if(fechaSeparada[1]=="10"){
			localStorage.setItem("mes","octubre")
		}
		else if(fechaSeparada[1]=="11"){
			localStorage.setItem("mes","noviembre")
		}
		else if(fechaSeparada[1]=="12"){
			localStorage.setItem("mes","diciembre")
		}
		localStorage.setItem("dia",fechaSeparada[2])

	}
	function actualizarCalendarioDia(seccion, imagenDia, imagenMes){
		//CambiarSrc();
		var element = $(imagenDia);
				element.innerHTML = localStorage.getItem("dia");
				actualizarCalendarioMes(seccion,imagenMes)
				irA($(seccion))
	}
	function actualizarCalendarioMes(seccion, imagen){
		//CambiarSrc();
		var element = $(imagen);

				element.innerHTML = localStorage.getItem("mes");

	}
