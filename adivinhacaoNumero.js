
const numSecreto = Math.floor(Math.random() * 100) + 1; /* Gera número entre 1 e 100 */

let tentativas = 0;
const maxTentativas = 10;

function verificaPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value); /* converte o valor do input em um número inteiro */

    if (isNaN(palpite) || palpite < 1 || palpite > 100) { /* verifica se o "palpite" se não está em branco, se é menor que 1 ou maior que 100 */
        alert("Digite um número válido entre 1 e 100."); /* Obs: esse If precisa ficar antes do While, para não começar a "rodar" a contagem mesmo com o Input estando incorreto */
    return;
    }

    while (tentativas < 10){

        tentativas++;

        if (palpite === numSecreto) {
            document.getElementById("tentativas").textContent = "Essa foi sua " + tentativas + "ª tentativa.";            
            document.getElementById("resultado").textContent = "Parabéns, você acertou!!";
            break; // sai do while
        }
        else if(palpite > numSecreto){
            document.getElementById("tentativas").textContent = "Essa é sua " + tentativas + "ª tentativa.";            
            document.getElementById("resultado").textContent = "O número secreto é menor!";
            break;
        }
        else{
            document.getElementById("tentativas").textContent = "Essa é sua " + tentativas + "ª tentativa.";
            document.getElementById("resultado").textContent = "O número secreto é maior!";
            break;   
        }
    }

    if (tentativas >= maxTentativas){
        document.getElementById("tentativas").textContent = "Essa foi sua última tentativa...";
        document.getElementById("resultado").textContent = "Não foi dessa vez =/ O número secreto era " + numSecreto + ". Até a próxima!";
    }
}