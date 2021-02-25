	var splash ,Inicio ,Login , Registro, EnvioCodigo,RestablecerContrasena,Diseños,Diseño,Barra ,Calendario,btn_inicio,btn_registro,btn_olvidocontra ,	btn_restrarse,btn_RestablecerEnvioCodigo
,btn_RestablecerRestablecerContrasena , btn_iraDiseno, btn_SiguienteReserva, btn_Reservar1, secciones;

var seccionActual ,seccionAnterior,btnAtras ,btn_barra  ,btn_InicioBarraDesplegable ,btn_CalendarioBarraDesplegable,btn_LogoutBarraDesplegable;
let idEnClick ,srcImagen;


	window.onload=()=>{
		crearReferencias();
		agregarEventos();
		setTimeout(()=>{IrA(Login);},1700);

	}
	function crearReferencias(){

		splash=document.getElementById("splash")
		Inicio=document.getElementById("Inicio");
		Login=document.getElementById("Login");
		EnvioCodigo=document.getElementById("EnvioCodigo");
		Registro=document.getElementById("Registro");
		RestablecerContrasena=document.getElementById("RestablecerContrasena");
		Diseños=document.getElementById("Diseños");
		Diseño=document.getElementById("Diseño");
		Barra=document.getElementById("BarraDesplegable");
		Reserva=document.getElementById("Reservar");
		ReservaExitosa1=document.getElementById("ReservaExitosa");
		Calendario=document.getElementById('Calendario');


		btn_inicio=document.getElementById("BotonInicio");
		btn_registro=document.getElementById("BotonRegistro");
		btn_olvidocontra=document.getElementById("Olvidaste");
		btn_restrarse=document.getElementById('BotonRegistoRegistro');
		btn_RestablecerEnvioCodigo=document.getElementById("BotonRestablecerEnvioCodigo");
		btn_RestablecerRestablecerContrasena=document.getElementById("BotonRestablecerRestablecerContrasena");
		btnAtras=document.getElementsByClassName("volver");

		btn_atras=document.getElementsByClassName("volver");
		btn_verDiseno=document.getElementsByClassName("BotonEstudioInicio");
		btn_iraDiseno=document.getElementsByClassName("BotonVerDieño");
		btn_SiguienteReserva=document.getElementById("BotonSiguienteDiseño");
		btn_barra=document.getElementsByClassName('barra');
		btn_InicioBarraDesplegable=document.getElementById("BotonInicioBarraDesplegable");
		btn_Reservar1=document.getElementById("BotonReservarReservar");
		btn_CalendarioBarraDesplegable=document.getElementById('BotonCalendarioBarraDesplegable');
		btn_LogoutBarraDesplegable=document.getElementById("BotonLogoutBarraDesplegable");

		secciones=[splash,Inicio,Login,Registro,EnvioCodigo,RestablecerContrasena,Diseños,Diseño,Barra,Reserva,ReservaExitosa1,Calendario];
}

	function ocultarsecciones(){

		for(i in secciones){
			secciones[i].classList.add("ocultar");
		}
	}

	function IrA(seccion){

		ocultarsecciones();
		seccion.classList.remove("ocultar");
		seccionAnterior=seccionActual;
		seccionActual=seccion;
	}

	function agregarEventos(){
		btn_registro.addEventListener("click",()=>{IrA(Registro);});
		btn_olvidocontra.addEventListener("click",()=>{IrA(EnvioCodigo);});
		btn_restrarse.addEventListener("click",()=>{IrA(Login);})
		btn_RestablecerEnvioCodigo.addEventListener("click",()=>{IrA(RestablecerContrasena);})
		btn_RestablecerRestablecerContrasena.addEventListener("click",()=>{IrA(Login);})
		btn_SiguienteReserva.addEventListener("click",()=>{IrA(Reserva);})
		btn_InicioBarraDesplegable.addEventListener("click",()=>{IrA(Inicio);})
		btn_CalendarioBarraDesplegable.addEventListener("click",()=>{IrA(Calendario);})
		btn_Reservar1.addEventListener("click",()=>{IrA(ReservaExitosa1);})
		btn_LogoutBarraDesplegable.addEventListener("click",()=>{IrA(Login);});

		for (var i = 0; i < btnAtras.length; i++) {
			btnAtras[i].addEventListener("click",()=>{IrA(seccionAnterior);});
	}
		for (var i = 0; i < btn_verDiseno.length; i++) {
		btn_verDiseno[i].addEventListener("click",()=>{IrA(Diseños);});
		}

		for (var i = 0; i < btn_iraDiseno.length; i++) {
			btn_iraDiseno[i].addEventListener("click",()=>{IrA(Diseño);});
		}

		for (var i = 0; i < btn_barra.length; i++) {
			btn_barra[i].addEventListener("click",()=>{IrA(Barra);})
		}

}
	function navegar(seccionparaIr,seccionparaOcultar){

			seccionparaOcultar.classList.add("ocultar");
			seccionparaIr.classList.remove("ocultar");
	}

	function GuardarID(ideste){
		idEnClick=ideste
	srcImagen =traerImagen(idEnClick);
	}

	function traerImagen(idBoton){
		var ImagenAtraer
		if(idBoton=="Diseño1"){

				ImagenAtraer = "IMG/tatto1.png";
		}
		else if (idBoton=="Diseño2"){

			ImagenAtraer = "IMG/tatto2.png";
		}
		else {
			ImagenAtraer = "IMG/tatto3.png";
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

	function InicioSesion(UsuarioEmpieza,ContraseñaUsuario){
				var usuarioQuemado="Admin"
				var contraseQuemada="Admin"

				if(UsuarioEmpieza==usuarioQuemado && contraseQuemada==ContraseñaUsuario){
					btn_inicio.addEventListener("click",()=>{IrA(Inicio);});
				}
				else {
						alert("Datos Incorrectos");
				}
	}
