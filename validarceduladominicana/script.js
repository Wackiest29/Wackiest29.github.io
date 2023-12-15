document.addEventListener("DOMContentLoaded", function () {
    const cedulaInput = document.getElementById("cedulaInput");
    const validarButton = document.getElementById("validarButton");
    const resultado = document.getElementById("resultado");

    validarButton.addEventListener("click", function () {
        const cedula = cedulaInput.value.trim();
        if (validaCedula(cedula)) {
            resultado.innerHTML = "Cédula válida";
            resultado.classList.add("valid");
            resultado.classList.remove("invalid");
        } else {
            resultado.innerHTML = "Cédula no válida";
            resultado.classList.add("invalid");
            resultado.classList.remove("valid");
        }
    });

    /* Función para validar una cédula dominicana */
    function validaCedula(ced) {
        // Remover guiones si los hay
        ced = ced.replace(/-/g, '');

        // Verificar que la cédula tenga 11 dígitos
        if (ced.length !== 11) {
            return false;
        }

        var cedula = ced.substr(0, 10);
        var verificador = ced.substr(10, 1);
        var suma = 0;

        for (var i = 0; i < cedula.length; i++) {
            var mod = (i % 2 === 0) ? 1 : 2;
            var res = cedula[i] * mod;

            if (res > 9) {
                res = res.toString();
                var uno = parseInt(res[0]);
                var dos = parseInt(res[1]);
                res = uno + dos;
            }

            suma += parseInt(res);
        }

        var elNumero = (10 - (suma % 10)) % 10;

        // Comprobar si el dígito verificador es igual al cálculo y que no comience con "000"
        return elNumero === parseInt(verificador) && cedula.substr(0, 3) !== "000";
    }
});
