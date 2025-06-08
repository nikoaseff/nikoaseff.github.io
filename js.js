//////index 

//Inicio de sesión

function inicio() {
  var nombre = document.getElementById("usuario").value
  var contrasena = document.getElementById("clave").value

  if (nombre == "edu" && contrasena == "123") {
    window.location.href = "anexo (3).html"
  
  } else {
    alert("Usuario o Contraseña inválidos")
  }

}   /*no hay tanta dierencia aparte del alcance (var = global, let=local )entre var y let, solo que let es mas usado 
    y mas actual, ambas se pueden reasignar, no como const */



//////Anexo 

//IMC
function calculo1() {

    /*debemos convertir la string a float porque aunque ingrese un numero en el html, es texto*/
    let p = parseFloat(document.getElementById("peso").value) //.value extrae del input del usuario el dato uqe ingreso 
    let a = parseFloat(document.getElementById("altura").value)

    let resultado_1

    resultado_1 = p / (a * a)

    /*tofixed vuelve el resultado_1 a string, y por eso ponemos parsefloat para asegurarnos de que es un numero*/
    let redondo = parseFloat(resultado_1.toFixed(1))

    document.getElementById("resultado1").value = redondo //cambia el dato resultado a resutado_1
}


//ICA

function calculo2() {

    let c = parseFloat(document.getElementById("cintura").value)
    let e = parseFloat(document.getElementById("estatura").value)

    let resultado_2

    resultado_2 = c / e
    let redondo = parseFloat(resultado_2.toFixed(2))

    document.getElementById("resultado2").value = redondo


}

//recomendaciones 

function reco() {

    let imc = document.getElementById("sel_1").value
    let ica = document.getElementById("sel_2").value

    let rta = document.getElementById("rta")

    
     if (imc === "des" && ica === "del") {
        rta.textContent = 
            "Actividad física: Hacer ejercicio suave como caminar o hacer estiramientos. Nada de ejercicios intensos hasta recuperar un poco de peso. Lo ideal es enfocarse en movimientos que ayuden a mejorar el apetito y la fuerza.\n\n" +
            "Hidratación: Tomar agua, aunque no dé sed. De 6 a 8 vasos por día. También puede venir bien tomar jugos naturales o bebidas con electrolitos si hay debilidad.\n\n" +
            "Dieta: Comer más veces por día aunque sean porciones pequeñas. Agregar alimentos calóricos pero nutritivos como frutos secos, huevo, palta, arroz, pastas, etc.\n\n" +
            "Otra recomendación: Ir al médico o nutricionista para ver qué está causando la baja de peso. Dormir bien, evitar el estrés y tener compañía si se necesita apoyo emocional.";
    }
    else if (imc === "normal" && ica === "peso") {
        rta.textContent = 
            "Actividad física: Mantenerse en movimiento al menos 3 o 4 veces por semana. Pueden ser caminatas, bicicleta, deportes, etc. Alternar con ejercicios de fuerza o movilidad.\n\n" +
            "Hidratación: Tomar 8 vasos de agua al día o más si hace calor. Evitar gaseosas, jugos industriales o exceso de café.\n\n" +
            "Dieta: Seguir una alimentación equilibrada, sin caer en extremos. Comer frutas, verduras, proteínas, cereales integrales y poca sal y azúcar.\n\n" +
            "Otra recomendación: Hacerse chequeos una vez al año para ver que todo esté bien. Dormir bien, tener momentos de ocio y controlar el estrés.";
    }
    else if (imc === "sobrep" && ica === "sobre") {
        rta.textContent = 
            "Actividad física: Empezar con actividad moderada como caminatas largas o bici. A medida que mejora la resistencia, se puede sumar ejercicios más exigentes o fuerza.\n\n" +
            "Hidratación: Tomar bastante agua a lo largo del día. Evitar bebidas azucaradas o con alcohol. Un buen truco es tomar un vaso de agua antes de cada comida.\n\n" +
            "Dieta: Reducir porciones, evitar fritos, dulces y harinas refinadas. Comer más verduras, frutas, proteínas y cereales integrales.\n\n" +
            "Otra recomendación: Pedir ayuda profesional si se complica hacer cambios por cuenta propia. También es importante dormir bien y controlar la ansiedad.";
    }
    else if (imc === "obesidad" && ica === "gordura") {
        rta.textContent = 
            "Actividad física: Lo primero es consultar al médico. Después, empezar con ejercicios muy suaves, como caminar en superficies planas o dentro del agua. No exigir al cuerpo más de lo necesario.\n\n" +
            "Hidratación: Agua como bebida principal. Nada de gaseosas ni jugos artificiales. Tomar al menos 2 litros por día.\n\n" +
            "Dieta: Necesariamente seguir un plan alimenticio adaptado. El objetivo es bajar de peso sin dejar de comer. Priorizar verduras, proteínas magras y eliminar ultraprocesados.\n\n" +
            "Otra recomendación: Hacer controles médicos frecuentes. Si hay problemas de ansiedad o depresión, buscar apoyo psicológico. Fijarse metas reales y a corto plazo para no desmotivarse.";
    }
    else {
        alert("Esas categorías son disparejas: lea nuestra aclaración e inténtelo de nuevo.");
        rta.textContent = " ";

    }

}

//clinicas


function profesional() {

    let s = document.getElementById("sel_3").value

    if (s === "oulton") {
        window.open("https://institutoulton.com.ar/turnos/", "_blank");
    }
    if (s === "allende") {
        window.open("https://www.sanatorioallende.com/turnos-sanatorio-allende", "_blank");
    }
    if (s === "reina") {
        window.open("http://turnos.curf.com.ar/turnosonlineweb/login.html", "_blank");
    }
    if (s === "privado") {
        window.open("https://hospitalprivado.com.ar/turnos-sacar-turno-online.html", "_blank");
    }
}


//opinion 


function opinion() {

    document.getElementById("sel_4").value = ""
    document.getElementById("sel_5").value = ""
    
    document.getElementById("op").textContent = "Opinión Enviada con Éxito!!"
}
