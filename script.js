
let pedra            = 0;
let papel            = 0; 
let tesoura          = 0;
let adversario       = 0;
let pontosPlayer1    = 0;
let pontosPlayer2    = 0;
let mensagemAlerta   = 'Escolha entre pedra, papel e tesoura!';
let placarPlayer1    = document.getElementById('player1');
let placarPlayer2    = document.getElementById('player2');
let imagemPlayer1    = document.getElementById('imgP1');
let imagemPlayer2    = document.getElementById('imgP2');
let pastaImagem      = "./imagens/";
let refBotaoPedra    = document.getElementById('pedra');
let refBotaoPapel    = document.getElementById('papel');
let refBotaoTesoura  = document.getElementById('tesoura');

function destacarBotao(){
    pedra === 1 ? refBotaoPedra.style = "background-color: red" : refBotaoPedra.style = "background-color: blue";
    //TRABALHAR EM UMA LÓGICA LIMPA PARA ESTA FUNÇÃO QUE DESTACA O BOTÃO SELECIONADO
}

function escolheuPedra(){
    limpaEscolha();
    mudarImagemP1();
    mudarImagemP2();
    pedra = 1;
    destacarBotao();
    // console.log(pedra);
    computador();
    
};

function escolheuPapel(){
    limpaEscolha();
    mudarImagemP1();
    mudarImagemP2();
    papel = 2;
    // console.log(papel);
    computador();
};

function escolheuTesoura(){
    limpaEscolha();
    mudarImagemP1();
    mudarImagemP2();
    tesoura = 3;
    // console.log(tesoura);
    computador();
};

function computador(){
    if(pedra != 0 || papel != 0 || tesoura !=0){
        sorteio =  Math.random() * (3 - 0) + 1;
        adversario = Math.trunc(sorteio);
    }
};

function decisaoPedra(){ 
    if(adversario === 3){
        //console.log('ganhou');
        pontosPlayer1 += 1; 
    } else if(adversario === 2){
        //console.log('perdeu');
        pontosPlayer2 += 1;
      } else if(adversario === 1){
        // console.log("empate");
        } 
};

function decisaoPapel(){
    if(adversario === 1){
        //console.log('ganhou');
        pontosPlayer1 += 1; 
    } else if( adversario === 3){
        // console.log('perdeu');
        pontosPlayer2 += 1;
      } else if(adversario === 2){
        // console.log("empate");
        }
};

function decisaoTesoura(){
    if(adversario === 2){
        //console.log('ganhou');
        pontosPlayer1 += 1; 
    } else if( adversario === 1){
        //console.log('perdeu');
        pontosPlayer2 += 1;
      } else if(adversario === 3){
        //console.log("empate");
        }
};;
//CRIAR APENAS UMA FUNÇÃO DE DECISÃO 
function decisao(){
    
};

function limpaEscolha(){
    pedra      = 0;
    papel      = 0;
    tesoura    = 0;
    adversario = 0;
};

function atualizaplacar(){
    placarPlayer1.innerText = pontosPlayer1.toString();
    placarPlayer2.innerText = pontosPlayer2.toString();  
};

function mudarImagemP1(){
    pedra != 0 ? imagemPlayer1.src = `${pastaImagem}pedra_esq.png` : papel != 0 ? imagemPlayer1.src = `${pastaImagem}papel_esq.png` : tesoura != 0 ? imagemPlayer1.src = `${pastaImagem}tes_esq.png` : imagemPlayer1.src = `${pastaImagem}vazio.png`;
    
};

function mudarImagemP2(){
    adversario === 1 ? imagemPlayer2.src = `${pastaImagem}pedra_dir.png` : adversario === 2 ? imagemPlayer2.src = `${pastaImagem}papel_dir.png` : adversario === 3 ? imagemPlayer2.src = `${pastaImagem}tes_dir.png` : imagemPlayer2.src = `${pastaImagem}vazio.png`;
};

function jokenpo(){
    pedra != 0 ? decisaoPedra() : papel != 0 ? decisaoPapel() : tesoura != 0 ? decisaoTesoura() : alert(mensagemAlerta);
    //computador();
    mudarImagemP1();
    mudarImagemP2();
    limpaEscolha();
    atualizaplacar();
    //ESTRURAR ESTA FUNÇÃO
};