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

let formAuto = document.getElementById("formAuto");
formAuto.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formAuto.checkValidity()) {
        let anioCA = document.getElementById("anioA").value;
        let resultadoCoti = document.getElementById("resultadoCoti");
        let wsp = document.getElementById("wsp");
        resultadoCoti.innerHTML = "";

        while (wsp.firstChild) {
            wsp.removeChild(wsp.firstChild);
        }

        if (anioCA >= 2000 && anioCA < 2006) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $20.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
            console.log(p.textContent);
        } else if (anioCA >= 2006 && anioCA < 2010) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $20.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
        } else if (anioCA >= 2010 && anioCA < 2015) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $20.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
        } else if (anioCA >= 2015 && anioCA < 2020) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $20.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
        } else if (anioCA >= 2020 && anioCA <= 2024) {
            let p = document.createElement("p");
            p.textContent = "Cotización: cuota mensual de $20.000";
            wsp.textContent = "Contactar ejecutivo";
            estilo(p);
            resultadoCoti.appendChild(p);
            wsp.appendChild(butt);
            wsp.href = "https://web.whatsapp.com/";
            wsp.className = "button";
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




