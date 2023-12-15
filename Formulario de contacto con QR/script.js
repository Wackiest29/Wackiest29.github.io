document.addEventListener('DOMContentLoaded', function () {
    const inputs = [...document.querySelectorAll('input:not([type="submit"])')];
    const submit = document.getElementById('generar-qr');
    const qr = document.getElementById('qr-container');
    let phonePass = true;

    submit.addEventListener("click", function (e) {
        let canCreate = true;
        const phone = document.getElementById('telefono');
        
        if (((phone.value.slice(1, 4).includes('809')) || phone.value.slice(1, 4).includes('829') || phone.value.slice(1, 4).includes('849')) == false) {
            phonePass = false;
        } else {
            phonePass = true;
        }

        inputs.forEach(input => {
            if (!input.value) {
                canCreate = false;
                showError(input, 'Este campo es requerido');
            } else {
                hideError(input);
            }
            if (phone.value != '' && phonePass === false) {
                showError(phone, 'Ingrese un numero de telefono valido');
            }
        });

        if (canCreate === true && phonePass === true) {
            generarQR();
        }

        function generarQR() {
            const CAMPOS = ["Nombre", "Alias", "Telefono", "Correo"];
            let idx = 0;
            let datosInputs = "";

            for (const element of inputs) {
                const text = element.value;
                datosInputs += `${CAMPOS[idx]}:${text};`;
                idx++;
            }

            
            const vCardData = `BEGIN:VCARD\nVERSION:3.0\n${datosInputs}END:VCARD`;

           
            qr.innerHTML = "";

            
            const qrcode = new QRCode(qr, {
                text: vCardData,
                width: 300,
                height: 300,
            });

            
            qr.style.display = 'block';
        }

        function showError(input, message) {
            const formGroup = input.closest('.input-group');
            let error = formGroup.querySelector('.error-message');

            if (error == null) {
                error = document.createElement('span');
                error.classList.add('error-message');
                formGroup.appendChild(error);
            }

            error.textContent = message;
            input.classList.add('error');
        }

        function hideError(input) {
            const formGroup = input.closest('.input-group');
            const error = formGroup.querySelector('.error-message');
            if (error) {
                error.remove();
            }
            input.classList.remove('error');
        }

        inputs.forEach(input => {
            input.addEventListener('input', function () {
                if (this.value) {
                    hideError(this);
                } else {
                    const formGroup = this.closest('.input-group');
                    const error = formGroup.querySelector('.error-message');
                    showError(this, 'Este campo es requerido');
                }
            });
        });

        e.preventDefault();
    });
});
