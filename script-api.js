let llamadoAPI = document.getElementById("api");

llamadoAPI.addEventListener("click", async (e) => {
    e.preventDefault();
    let datos = "https://pokeapi.co/api/v2/pokemon/ditto";

    try {
        const response = await fetch(datos);
        if (response.status != 200) {
            throw new Error(`Error de HTTP. Status: ${response.status}`);
        }
        console.log(response);
        let contenido = document.getElementById("contenido");
        let cont = await response.text();
        contenido.innerHTML = cont;
    } catch (error) {
        contenido.innerHTML = `<p>Error al llamar a la API: ${error.message}</p>`;
    }
})
