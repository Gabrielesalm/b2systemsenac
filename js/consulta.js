const TIPO_CAMPO_NUMERICO = "numerico";
const TIPO_CAMPO_TEXTO = "texto";
const TIPO_CAMPO_DATA = "data";

function atualizaTipoConsulta() {
    // LISTA DE TIPOS POSSIVEIS
    // NUMERICO
    // STRING/TEXTO
    // DATA
    // data-tipo-codigoConsulta="integer"
    const campoValor = document.querySelector("#filtroConsulta").value;
    const campoConsulta = document.querySelector("#" + campoValor);
    const tipoCampoConsulta = campoConsulta.getAttribute("data-tipo");

    console.log("data: " + tipoCampoConsulta);

    atualizaListaOperadoresConsulta(tipoCampoConsulta);
}

function atualizaListaOperadoresConsulta(tipoCampoConsulta) {
    const operadores = document.querySelector("#operadorConsulta");
    operadores.innerHTML = "";
    operadores.innerHTML += `<option value='todos'>Todos</option>`;

    if (tipoCampoConsulta === TIPO_CAMPO_NUMERICO) {
        operadores.innerHTML += `<option value='igual' selected>Igual</option>`;
    } else if (tipoCampoConsulta === TIPO_CAMPO_TEXTO) {
        operadores.innerHTML += `<option value='contem' selected>Contém</option>`;
    }
}
atualizaTipoConsulta();

function onlyNumbers(text) {
    // Replace regex '/[^0-9]/g'
    text = text.replace(/[^0-9]/g, "");

    return text;
}
