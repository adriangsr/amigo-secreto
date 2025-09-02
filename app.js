
let amigos = [];

// Funcion para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    //Validacion del nombre
    if (nombre === "") {
        alert("Por favor ingrese un nombre")
        return;
    }

    // Agrega el amigo al arreglo
    amigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    // Mostrar lista actualizada
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista(){
    // Selecciona la lista
    let lista = document.getElementById("listaAmigos");
    // Limpia la lista
    lista.innerHTML = "";
    // Recorre el arreglo
    amigos.forEach(function(nombre) {

        //Crear un <li> por cada amigo
        let li = document.createElement("li");
        li.textContent = nombre;

        // Agregarlo a la lista <ul>
        lista.appendChild(li);
    })
}

// Funcion para sortear amigos
function sortearAmigo() {
    // Validar que haya amigos
    if (amigos.length === 0) {
        alert ("No hay amigos que mostrar. Por favor agregue al menos uno.");
        return;
    }
    // Generar indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";

    // Mostrar el resultado con mensaje descriptivo
    document.getElementById("resultado").innerHTML = `<p>El amigo secreto sorteado es ${amigoSorteado}</p>`;
}