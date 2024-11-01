let chave = "Nome 1";
let chave2 = "Email 1";
let i = 0;

function ConsultaDados()
{
   document.getElementById("resultado").innerHTML = localStorage.getItem(chave) + " - " + localStorage.getItem("Email" + i);
}

function AtualizaDados()
{
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    LimparCampos();
}

function LimparCampos()
{
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

function InsertData()
{
    i = i + 1;
    localStorage.setItem("Nome" + i, document.getElementById("nome").value);
    localStorage.setItem("Email" + i, document.getElementById("email").value);
    LimparCampos();
}

function ViewAllData()
{
    let resultado = "";

    for(let indice = 1; indice <= i; indice++)
    {
        resultado += localStorage.getItem("Nome" + indice) + " - " + localStorage.getItem ("Email" + indice) + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;

}

function DeleteData()
{
    localStorage.removeItem("Nome " + document.getElementById("indice").value);
    localStorage.removeItem("Email " + document.getElementById("indice").value);
    document.getElementById("indice").value = "";

}