let valores = [];
function inserir() {
    for (i = 0; i != "end"; i++) {
        valores[i] = prompt("Qual o valor da venda " + (i + 1) + ":")
        let bol = prompt("Tem mais vendas a registrar? (Digite sim ou não)")
        if (bol = "sim") {
        
        }
        else {
            i = "end"
        }
    }
}



let despesa = [];

function inserirdes() {
    for (i = 0; i != "encerrar"; i++) {
        despesa[i] = prompt("Qual o valor da despesa " + (i + 1) + ":")
        let bol = prompt("Tem mais despesa a registrar? (Digite sim ou não)")
        if (bol = "sim") {

        }
        else if ("não") {
            i = "encerrar"
        }
    }
}


let mvendas

function mostrarv() {
    for (i = 0; i < valores.length; i++) {

        mvendas += i + 1 + " - " + valores[i];
        alert("suas vendas são\n" + mvendas)
    }

}



let sdespesa
function mostrard() {
    for (i = 0; i < despesa.length; i++) {

        sdespesa += i + 1 + " - " + valores[i];
        alert("suas despesas são\n" + sdespesa)
    }

}



let menu = 0

while(menu == 0){
menu = prompt(
    "Menu:\n" +
    "a) inserir valor de venda\n" +
    "b) ver status das vendas do dia\n" +
    "c) inserir valor de despesa\n" +
    "d) ver total de despesas do dia\n" +
    "e) encerrar"
)

if (menu = "a") {
    inserir(valores)
    menu = 0
}

else if (menu = "c") {
    inserirdes(despesa)
    menu = 0
}



else if (menu = "e") {
    menu = 1
}
}