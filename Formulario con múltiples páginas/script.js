// Función para guardar los Datos Personales
function saveDatosPersonales() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = parseInt(document.getElementById("edad").value);
    var genero = document.getElementById("genero").value;

    // Crear un objeto para almacenar los Datos Personales
    var datosPersonales = {
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad,
        Género: genero
    };

    // Guardar los Datos Personales en el almacenamiento local
    localStorage.setItem("DatosPersonales", JSON.stringify(datosPersonales));

    // Redirigir a la siguiente página (pagina2.html en este caso)
    window.location.href = 'pagina2.html';
}

// Función para agregar un familiar a la lista
function addFamiliar() {
    var nombreFamiliar = document.getElementById("nombreFamiliar").value;
    var parentesco = document.getElementById("parentesco").value;
    var edadFamiliar = parseInt(document.getElementById("edadFamiliar").value);

    var familiares = localStorage.getItem("Familiares");

    if (familiares) {
        familiares = JSON.parse(familiares);
    } else {
        familiares = [];
    }

    var nuevoFamiliar = {
        Nombre: nombreFamiliar,
        Parentesco: parentesco,
        Edad: edadFamiliar
    };

    familiares.push(nuevoFamiliar);
    localStorage.setItem("Familiares", JSON.stringify(familiares));

    // Limpiar el formulario después de agregar un familiar
    document.getElementById("nombreFamiliar").value = "";
    document.getElementById("parentesco").value = "";
    document.getElementById("edadFamiliar").value = "";
}

// Función para agregar una condición de salud preexistente
function addCondicionSalud() {
    var enfermedad = document.getElementById("enfermedad").value;
    var tiempoEnfermedad = document.getElementById("tiempoEnfermedad").value;

    var condicionesSalud = localStorage.getItem("CondicionesPreExistentes");

    if (condicionesSalud) {
        condicionesSalud = JSON.parse(condicionesSalud);
    } else {
        condicionesSalud = [];
    }

    var nuevaCondicionSalud = {
        Enfermedad: enfermedad,
        Tiempo: tiempoEnfermedad
    };

    condicionesSalud.push(nuevaCondicionSalud);
    localStorage.setItem("CondicionesPreExistentes", JSON.stringify(condicionesSalud));

    // Limpiar el formulario después de agregar una condición de salud
    document.getElementById("enfermedad").value = "";
    document.getElementById("tiempoEnfermedad").value = "";
}

// Función para agregar un internamiento
function addInternamiento() {
    var fechaInternamiento = document.getElementById("fechaInternamiento").value;
    var centroMedico = document.getElementById("centroMedico").value;
    var diagnostico = document.getElementById("diagnostico").value;

    var internamientos = localStorage.getItem("InternamientosRealizados");

    if (internamientos) {
        internamientos = JSON.parse(internamientos);
    } else {
        internamientos = [];
    }

    var nuevoInternamiento = {
        Fecha: fechaInternamiento,
        "Centro Médico": centroMedico,
        Diagnóstico: diagnostico
    };

    internamientos.push(nuevoInternamiento);
    localStorage.setItem("InternamientosRealizados", JSON.stringify(internamientos));

    // Limpiar el formulario después de agregar un internamiento
    document.getElementById("fechaInternamiento").value = "";
    document.getElementById("centroMedico").value = "";
    document.getElementById("diagnostico").value = "";
}

// Función para mostrar los datos registrados en la página de presentación
function displaySavedData() {
    // Recupera los datos almacenados en localStorage
    var datosPersonalesJSON = localStorage.getItem("DatosPersonales");
    var familiaresJSON = localStorage.getItem("Familiares");
    var condicionesSaludJSON = localStorage.getItem("CondicionesPreExistentes");
    var internamientosJSON = localStorage.getItem("InternamientosRealizados");

    var previewData = document.getElementById("previewData");

    if (datosPersonalesJSON) {
        var datosPersonales = JSON.parse(datosPersonalesJSON);
        // Muestra los datos de Datos Personales
        previewData.innerHTML += "<h2>Datos Personales</h2>";
        previewData.innerHTML += "<p>Nombre: " + datosPersonales.Nombre + "</p>";
        previewData.innerHTML += "<p>Apellido: " + datosPersonales.Apellido + "</p>";
        previewData.innerHTML += "<p>Edad: " + datosPersonales.Edad + "</p>";
        previewData.innerHTML += "<p>Género: " + datosPersonales.Género + "</p>";
    }

    if (familiaresJSON) {
        var familiares = JSON.parse(familiaresJSON);
        previewData.innerHTML += "<h2>Familiares</h2>";
        familiares.forEach(function(familiar) {
            previewData.innerHTML += "<p>Nombre: " + familiar.Nombre + "</p>";
            previewData.innerHTML += "<p>Parentesco: " + familiar.Parentesco + "</p>";
            previewData.innerHTML += "<p>Edad: " + familiar.Edad + "</p>";
        });
    }

    if (condicionesSaludJSON) {
        var condicionesSalud = JSON.parse(condicionesSaludJSON);
        previewData.innerHTML += "<h2>Condiciones Pre-Existentes de Salud</h2>";
        condicionesSalud.forEach(function(condicion) {
            previewData.innerHTML += "<p>Enfermedad: " + condicion.Enfermedad + "</p>";
            previewData.innerHTML += "<p>Tiempo con la Enfermedad: " + condicion.Tiempo + "</p>";
        });
    }

    if (internamientosJSON) {
        var internamientos = JSON.parse(internamientosJSON);
        previewData.innerHTML += "<h2>Internamientos Realizados</h2>";
        internamientos.forEach(function(internamiento) {
            previewData.innerHTML += "<p>Fecha: " + internamiento.Fecha + "</p>";
            previewData.innerHTML += "<p>Centro Médico: " + internamiento["Centro Médico"] + "</p>";
            previewData.innerHTML += "<p>Diagnóstico: " + internamiento.Diagnóstico + "</p>";
        });
    }
}

// Llama a la función para mostrar los datos registrados al cargar la página
window.onload = displaySavedData;
