	var splash ,Inicio ,Login , Registro, EnvioCodigo,RestablecerContrasena,btn_inicio,btn_registro,btn_olvidocontra ,	btn_restrarse,btn_RestablecerEnvioCodigo
,btn_RestablecerRestablecerContrasena ,btn_atras1,btn_atras2,btn_atras3,btn_atras4,btn_atras5,btn_atras6,btn_atras7,btn_atras8,btn_atras9,secciones;

var seccionActual ,seccionAnterior;

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


		btn_inicio=document.getElementById("BotonInicio");
		btn_registro=document.getElementById("BotonRegistro");
		btn_olvidocontra=document.getElementById("Olvidaste");
		btn_restrarse=document.getElementById('BotonRegistoRegistro');
		btn_RestablecerEnvioCodigo=document.getElementById("BotonRestablecerEnvioCodigo");
		btn_RestablecerRestablecerContrasena=document.getElementById("BotonRestablecerRestablecerContrasena");
		btn_atras1=document.getElementById('atras1');
		btn_atras2=document.getElementById('atras2');
		btn_atras3=document.getElementById('atras3');
		btn_atras4=document.getElementById('atras4');
		btn_atras5=document.getElementById('atras5');
		btn_atras6=document.getElementById('atras6');
		btn_atras7=document.getElementById('atras7');
		btn_atras8=document.getElementById('atras8');
		btn_atras9=document.getElementById('atras9');
		secciones=[splash,Inicio,Login,Registro,EnvioCodigo,RestablecerContrasena];
		btn_atras=document.getElementsByClassName("volver");
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
		btn_inicio.addEventListener("click",()=>{IrA(Inicio);});
		btn_registro.addEventListener("click",()=>{IrA(Registro);});
		btn_olvidocontra.addEventListener("click",()=>{IrA(EnvioCodigo);});
		btn_restrarse.addEventListener("click",()=>{IrA(Login);})
		btn_RestablecerEnvioCodigo.addEventListener("click",()=>{IrA(RestablecerContrasena);})
		btn_RestablecerRestablecerContrasena.addEventListener("click",()=>{IrA(Login);})
		btn_atras1.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras2.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras3.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras4.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras5.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras6.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras7.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras8.addEventListener("click",()=>{IrA(seccionAnterior);});
		btn_atras9.addEventListener("click",()=>{IrA(seccionAnterior);});
	


}
	function navegar(seccionparaIr,seccionparaOcultar){

			seccionparaOcultar.classList.add("ocultar");
			seccionparaIr.classList.remove("ocultar");
	}
