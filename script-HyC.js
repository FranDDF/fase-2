//Validaciones adicionales en JS para algunos input de HTML 

//Esta función reinicia el mensaje personalizado para que no quede fijado solo uno
function limpia(input) {
    input.oninput = () => {
        input.setCustomValidity("");
    };
}

//Validación para nombre
let inputName = document.getElementById("name");
inputName.oninvalid = (e) => {
    if (e.target.value.length < 5 || e.target.value.length > 50) {
        e.target.setCustomValidity("La longitud de texto debe ser mayor a 5 caracteres y menor a 50 caracteres. Solo letras.");
        console.log("La longitud de texto debe ser mayor a 5 caracteres y menor a 50 caracteres. Solo letras.");
    } else {
        e.target.setCustomValidity("");
    }
};
limpia(inputName);

//Validación para DNI
let inputDNI = document.getElementById("DNI");
inputDNI.oninvalid = (e) => {
    if (!/^\d{7,8}$/.test(inputDNI)) {
        e.target.setCustomValidity("La longitud del DNI debe ser de entre 7 y 8 dígitos. Solo números.");
        console.log("La longitud del DNI debe ser de entre 7 y 8 dígitos. Solo números.");
    } else {
        e.target.setCustomValidity("");
    }
};
limpia(inputDNI);

//Validación para teléfono
let inputTel = document.getElementById("tel");
inputTel.oninvalid = (e) => {
    if (!/^\d{8,13}$/.test(inputTel)) {
        e.target.setCustomValidity("La longitud del teléfono debe ser de entre 8 y 13 dígitos. Solo números.");
        console.log("La longitud del teléfono debe ser de entre 8 y 13 dígitos. Solo números.");
    } else {
        e.target.setCustomValidity("");
    }
};
limpia(inputTel);

//Validación para tamaño de la propiedad
let inputM2 = document.getElementById("m2");
inputM2.oninvalid = (e) => {
    if (e.target.value < 8 || e.target.value > 100) {
        e.target.setCustomValidity("Su propiedad debe ser de un mínimo de 8m2 y máximo 100m2. Solo números.");
        console.log("Su propiedad debe ser de un mínimo de 8m2 y máximo 100m2. Solo números.");
    } else {
        e.target.setCustomValidity("");
    }
};
limpia(inputM2);

let formHyC = document.getElementById("formHyC");
formHyC.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formHyC.checkValidity()) {
        let tamanioHyC = document.getElementById("m2").value;
        let resultadoCoti = document.getElementById("resultadoCoti");
        let wsp = document.getElementById("wsp");
        resultadoCoti.innerHTML = "";

        while (wsp.firstChild) {
            wsp.removeChild(wsp.firstChild);
        }

        if (tamanioHyC >= 8 && tamanioHyC < 21) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $100.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
            console.log(p.textContent);
        } else if (tamanioHyC >= 20 && tamanioHyC < 41) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $150.000";
            estilo(p);
            resultadoCoti.appendChild(p);
            console.log(p.textContent);
        } else if (tamanioHyC >= 40 && tamanioHyC < 61) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $200.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
            console.log(p.textContent);
        } else if (tamanioHyC >= 60 && tamanioHyC < 81) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $250.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
            console.log(p.textContent);
        } else if (tamanioHyC >= 80 && tamanioHyC < 101) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $300.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
            console.log(p.textContent);
        }
        else {
            let p = document.createElement("p");
            p.textContent = "Datos inválidos";
            resultadoCoti.appendChild(p);
        }
    } else {
        formAuto.reportValidity();
    }
});

function estilo(p) {
    p.style.fontFamily = "Arial";
    p.style.fontWeight = "bold";
    p.style.color = "rgb(243, 166, 24)";
    p.style.backgroundColor = "rgb(116, 125, 248)";
    p.style.border = "2px solid black";
    p.style.borderRadius = "5px";
    p.style.padding = "10px";
}




