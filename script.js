/* =========================================
   CENAS DO FUNDO INICIAL
========================================= */

const cenas = document.querySelectorAll(".cena");

let cenaAtual = 0;

setInterval(() => {

    cenas[cenaAtual].classList.remove("ativa");

    cenaAtual++;

    if (cenaAtual >= cenas.length) {
        cenaAtual = 0;
    }

    cenas[cenaAtual].classList.add("ativa");

}, 8000);


/* =========================================
   ELEMENTOS
========================================= */

const btnIniciar =
    document.getElementById("btnIniciar");

const transicao =
    document.getElementById("transicao");

const telaInicial =
    document.getElementById("telaInicial");

const selecaoPersonagem =
    document.getElementById("selecaoPersonagem");

const personagens =
    document.querySelectorAll(".personagem");

const containerPersonagens =
    document.querySelector(".personagens");


/* =========================================
   ELEMENTOS DA HISTÓRIA
========================================= */

const historia =
    document.getElementById("historia");

const imagemHistoria =
    document.getElementById("imagemHistoria");

const historiaPersonagem =
    document.getElementById("historiaPersonagem");

const tituloHistoria =
    document.getElementById("tituloHistoria");

const textoHistoria =
    document.getElementById("textoHistoria");

const opcoes =
    document.getElementById("opcoes");


/* =========================================
   PERSONAGEM ESCOLHIDO
========================================= */

let personagemEscolhido = null;


/* =========================================
   BOTÃO INICIAR
========================================= */

btnIniciar.addEventListener("click", () => {

    btnIniciar.disabled = true;

    transicao.classList.add("ativa");


    setTimeout(() => {

        document.querySelector(
            ".texto-transicao"
        ).textContent =
            "SELECIONE SEU PERSONAGEM";

    }, 700);


    setTimeout(() => {

        telaInicial.style.display = "none";

        transicao.classList.remove("ativa");

        selecaoPersonagem.classList.add("ativa");

    }, 1800);

});


/* =========================================
   HISTÓRIA DA SIX
========================================= */

const historiaSix = [

    {
        titulo: "O DESPERTAR",

        texto:
            "Six desperta sozinha dentro de um lugar escuro e desconhecido. O silêncio é quebrado apenas pelo som distante de máquinas. Ela sente fome, mas não sabe onde está.",

        imagem:
            "https://i.pinimg.com/736x/7c/48/fe/7c48fef21ec4cc40a296ff95962c6e57.jpg",

        opcoes: [

            {
                texto: "Explorar o lugar",
                proxima: 1
            },

            {
                texto: "Permanecer escondida",
                proxima: 1
            }

        ]
    },


    {
        titulo: "A COZINHA",

        texto:
            "Six encontra um corredor que leva até uma cozinha. O cheiro de comida toma conta do ambiente. Porém, ela percebe que não está sozinha. Algo enorme se movimenta atrás de uma porta.",

        imagem:
            "https://i.pinimg.com/736x/9c/8f/69/9c8f6980d5a0b36ab1a6dbcd924799d3.jpg",

        opcoes: [

            {
                texto: "Passar silenciosamente",
                proxima: 2
            },

            {
                texto: "Procurar comida",
                proxima: 2
            }

        ]
    },


    {
        titulo: "A FUGA",

        texto:
            "Six corre pelos corredores enquanto uma criatura a procura. Ela encontra uma pequena passagem e percebe que pode se esconder ali. Os passos da criatura ficam cada vez mais próximos.",

        imagem:
            "https://i.pinimg.com/736x/db/65/0a/db650ab124871b575466ebc668223f88.jpg",

        opcoes: [

            {
                texto: "Entrar na passagem",
                proxima: 3
            },

            {
                texto: "Continuar correndo",
                proxima: 3
            }

        ]
    },


    {
        titulo: "A ESCURIDÃO",

        texto:
            "Depois de escapar, Six chega a um enorme salão. À sua frente está o caminho para continuar sua jornada. Ela sabe que ainda existem perigos à sua espera, mas não pode voltar atrás.",

        imagem:
            "https://i.pinimg.com/1200x/3f/20/e5/3f20e526ed969b00f3843057887affa9.jpg",

        opcoes: [

            {
                texto: "Continuar",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   HISTÓRIA DO MONO
========================================= */

const historiaMono = [

    {
        titulo: "A FLORESTA",

        texto:
            "Mono desperta sozinho em uma floresta silenciosa. Árvores enormes cercam o caminho e uma televisão abandonada transmite uma imagem que parece chamar por ele.",

        imagem:
            "https://i.pinimg.com/736x/af/8c/7d/af8c7ddde01e672960a35c37b00c8e1c.jpg",

        opcoes: [

            {
                texto: "Investigar a televisão",
                proxima: 1
            },

            {
                texto: "Seguir pela floresta",
                proxima: 1
            }

        ]
    },


    {
        titulo: "A CABANA",

        texto:
            "Depois de atravessar a floresta, Mono encontra uma velha cabana. O lugar parece abandonado, mas alguma coisa se move no interior. Ao entrar, ele encontra uma garota usando uma capa amarela.",

        imagem:
            "https://i.pinimg.com/736x/db/65/0a/db650ab124871b575466ebc668223f88.jpg",

        opcoes: [

            {
                texto: "Ajudar a garota",
                proxima: 2
            },

            {
                texto: "Investigar a cabana",
                proxima: 2
            }

        ]
    },


    {
        titulo: "A CIDADE PÁLIDA",

        texto:
            "Mono e Six chegam a uma cidade estranha. As ruas estão vazias e quase todas as janelas possuem televisões ligadas. Uma transmissão hipnotizante parece controlar todos que vivem naquele lugar.",

        imagem:
            "https://i.pinimg.com/736x/85/7a/88/857a88483a391c176ef4087dc183aa3f.jpg",

        opcoes: [

            {
                texto: "Seguir o sinal",
                proxima: 3
            },

            {
                texto: "Evitar as televisões",
                proxima: 3
            }

        ]
    },


    {
        titulo: "O SINAL",

        texto:
            "Mono finalmente encontra a origem da transmissão. Diante dele existe uma enorme porta cercada por uma luz estranha. O sinal parece conhecer seu nome. Ele respira fundo e decide continuar.",

        imagem:
            "https://i.pinimg.com/1200x/3f/20/e5/3f20e526ed969b00f3843057887affa9.jpg",

        opcoes: [

            {
                texto: "Entrar",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   HISTÓRIA DO THE RUNAWAY KID
========================================= */

const historiaRunawayKid = [

    {
        titulo: "AS PROFUNDEZAS",

        texto:
            "O Runaway Kid desperta em um lugar escuro e úmido. Ele não sabe exatamente onde está, mas percebe que está muito abaixo de qualquer lugar seguro. Ao longe, ele escuta o som da água.",

        imagem:
            "https://i.pinimg.com/736x/9c/8f/69/9c8f6980d5a0b36ab1a6dbcd924799d3.jpg",

        opcoes: [

            {
                texto: "Seguir pelo caminho escuro",
                proxima: 1
            },

            {
                texto: "Procurar uma saída",
                proxima: 1
            }

        ]
    },


    {
        titulo: "AS ÁGUAS",

        texto:
            "O caminho termina diante de uma enorme área alagada. A água cobre quase tudo ao redor. O garoto percebe que existem pequenos caminhos pelos quais pode avançar sem fazer muito barulho.",

        imagem:
            "https://i.pinimg.com/736x/48/76/b2/4876b25571379526474195526757c62f.jpg",

        opcoes: [

            {
                texto: "Atravessar a água",
                proxima: 2
            },

            {
                texto: "Procurar outro caminho",
                proxima: 2
            }

        ]
    },


    {
        titulo: "A CRIATURA",

        texto:
            "Enquanto atravessa as profundezas, o Runaway Kid percebe que algo enorme está se movendo dentro da água. Ele precisa continuar sem chamar atenção.",

        imagem:
            "https://i.pinimg.com/736x/db/65/0a/db650ab124871b575466ebc668223f88.jpg",

        opcoes: [

            {
                texto: "Ficar escondido",
                proxima: 3
            },

            {
                texto: "Correr até a saída",
                proxima: 3
            }

        ]
    },


    {
        titulo: "O DESTINO",

        texto:
            "Depois de escapar das profundezas, o Runaway Kid encontra um lugar silencioso. Por alguns instantes, tudo parece seguro. Mas seu caminho ainda está ligado aos segredos da Maw.",

        imagem:
            "https://i.pinimg.com/736x/9c/8f/69/9c8f6980d5a0b36ab1a6dbcd924799d3.jpg",

        opcoes: [

            {
                texto: "Continuar",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   HISTÓRIA DO LOW
========================================= */

const historiaLow = [

    {
        titulo: "O DESERTO",

        texto:
            "Low desperta em uma terra seca e silenciosa. O céu parece coberto por uma névoa interminável. Ao seu lado está seu arco. Ele não sabe como chegou ali, mas sabe que precisa encontrar um caminho para fora.",

        imagem:
            "https://i.pinimg.com/1200x/a8/7b/59/a87b5982553d59dc18cdc9f63bec4eb8.jpg",

        opcoes: [

            {
                texto: "Seguir pelas ruínas",
                proxima: 1
            },

            {
                texto: "Explorar o deserto",
                proxima: 1
            }

        ]
    },


    {
        titulo: "AS RUÍNAS",

        texto:
            "Low encontra uma antiga estrutura abandonada. As paredes estão cobertas por marcas estranhas e pequenas passagens atravessam o local. Algo parece estar observando cada movimento seu.",

        imagem:
            "https://i.pinimg.com/736x/97/b8/0b/97b80bd65893e8fca6583645e53da575.jpg",

        opcoes: [

            {
                texto: "Entrar nas ruínas",
                proxima: 2
            },

            {
                texto: "Continuar pelo lado de fora",
                proxima: 2
            }

        ]
    },


    {
        titulo: "A SOMBRA",

        texto:
            "Uma enorme sombra surge entre as construções. Low segura o arco com força. O caminho à frente está bloqueado pela criatura.",

        imagem:
            "https://i.pinimg.com/1200x/a8/7b/59/a87b5982553d59dc18cdc9f63bec4eb8.jpg",

        opcoes: [

            {
                texto: "Usar o arco",
                proxima: 3
            },

            {
                texto: "Passar escondido",
                proxima: 3
            }

        ]
    },


    {
        titulo: "O CAMINHO",

        texto:
            "Low consegue atravessar as ruínas e encontra uma passagem escondida. Do outro lado existe um caminho que parece levar para longe daquele lugar. Porém, a jornada está apenas começando.",

        imagem:
            "https://i.pinimg.com/736x/97/b8/0b/97b80bd65893e8fca6583645e53da575.jpg",

        opcoes: [

            {
                texto: "Seguir em frente",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   HISTÓRIA DA ALONE
========================================= */

const historiaAlone = [

    {
        titulo: "O LUGAR DESCONHECIDO",

        texto:
            "Alone desperta em um lugar estranho e silencioso. Ao seu redor existem estruturas antigas e corredores que parecem não ter fim. Ela segura sua ferramenta e observa o caminho à frente.",

        imagem:
            "https://i.pinimg.com/736x/48/76/b2/4876b25571379526474195526757c62f.jpg",

        opcoes: [

            {
                texto: "Explorar as estruturas",
                proxima: 1
            },

            {
                texto: "Seguir pelo corredor",
                proxima: 1
            }

        ]
    },


    {
        titulo: "A PASSAGEM",

        texto:
            "Alone encontra uma passagem bloqueada. Ao lado dela existem mecanismos antigos que parecem controlar a porta. Ela percebe que precisará usar sua inteligência para continuar.",

        imagem:
            "https://i.pinimg.com/736x/97/b8/0b/97b80bd65893e8fca6583645e53da575.jpg",

        opcoes: [

            {
                texto: "Investigar o mecanismo",
                proxima: 2
            },

            {
                texto: "Procurar outra entrada",
                proxima: 2
            }

        ]
    },


    {
        titulo: "O PERIGO",

        texto:
            "Depois de abrir a passagem, Alone percebe que não está sozinha. Uma presença se aproxima lentamente pelo corredor.",

        imagem:
            "https://i.pinimg.com/1200x/a8/7b/59/a87b5982553d59dc18cdc9f63bec4eb8.jpg",

        opcoes: [

            {
                texto: "Enfrentar o perigo",
                proxima: 3
            },

            {
                texto: "Se esconder",
                proxima: 3
            }

        ]
    },


    {
        titulo: "A SAÍDA",

        texto:
            "Alone finalmente encontra uma abertura que leva para outro lugar. Antes de atravessar, ela olha para trás. O caminho que percorreu desaparece lentamente na escuridão.",

        imagem:
            "https://i.pinimg.com/736x/48/76/b2/4876b25571379526474195526757c62f.jpg",

        opcoes: [

            {
                texto: "Continuar a jornada",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   HISTÓRIA DA THE GIRL
========================================= */

const historiaGirl = [

    {
        titulo: "A ESCURIDÃO",

        texto:
            "The Girl desperta em um lugar estranho e silencioso. A escuridão cobre tudo ao seu redor. Ela percebe que está acompanhada pelo irmão e que os dois precisam encontrar um caminho para escapar.",

        imagem:
            "https://i.pinimg.com/736x/d2/7f/36/d27f36473be71a8ce5c3f9e23ef31879.jpg",

        opcoes: [

            {
                texto: "Seguir com o irmão",
                proxima: 1
            },

            {
                texto: "Explorar o caminho",
                proxima: 1
            }

        ]
    },


    {
        titulo: "O CAMINHO",

        texto:
            "Os dois encontram uma passagem estreita entre estruturas abandonadas. Sons estranhos ecoam ao longe. The Girl percebe que alguma coisa está seguindo seus passos.",

        imagem:
            "https://i.pinimg.com/736x/d2/7f/36/d27f36473be71a8ce5c3f9e23ef31879.jpg",

        opcoes: [

            {
                texto: "Continuar em silêncio",
                proxima: 2
            },

            {
                texto: "Procurar um esconderijo",
                proxima: 2
            }

        ]
    },


    {
        titulo: "A CRIATURA",

        texto:
            "Uma criatura surge na escuridão. The Girl tenta proteger o irmão. Eles precisam atravessar o local antes que sejam encontrados.",

        imagem:
            "https://i.pinimg.com/1200x/03/8b/43/038b43d89f6425acc2df5436009f2e6f.jpg",

        opcoes: [

            {
                texto: "Correr juntos",
                proxima: 3
            },

            {
                texto: "Se esconder",
                proxima: 3
            }

        ]
    },


    {
        titulo: "A FUGA",

        texto:
            "The Girl e seu irmão conseguem escapar por uma passagem escondida. Do outro lado, existe um novo caminho esperando por eles. Mas o lugar ainda guarda muitos segredos.",

        imagem:
            "https://i.pinimg.com/736x/d2/7f/36/d27f36473be71a8ce5c3f9e23ef31879.jpg",

        opcoes: [

            {
                texto: "Continuar juntos",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   HISTÓRIA DO THE BOY
========================================= */

const historiaBoy = [

    {
        titulo: "O DESPERTAR",

        texto:
            "The Boy desperta em meio à escuridão. Ele percebe que sua irmã está por perto e imediatamente começa a procurá-la. O silêncio daquele lugar parece esconder algo perigoso.",

        imagem:
            "https://i.pinimg.com/736x/97/b8/0b/97b80bd65893e8fca6583645e53da575.jpg",

        opcoes: [

            {
                texto: "Procurar sua irmã",
                proxima: 1
            },

            {
                texto: "Explorar o local",
                proxima: 1
            }

        ]
    },


    {
        titulo: "A PROCURA",

        texto:
            "The Boy encontra marcas que parecem indicar que sua irmã passou por ali. Ele segue os sinais através de um caminho abandonado, enquanto sons estranhos surgem atrás dele.",

        imagem:
            "https://i.pinimg.com/736x/97/b8/0b/97b80bd65893e8fca6583645e53da575.jpg",

        opcoes: [

            {
                texto: "Seguir as marcas",
                proxima: 2
            },

            {
                texto: "Procurar outra passagem",
                proxima: 2
            }

        ]
    },


    {
        titulo: "O PERIGO",

        texto:
            "The Boy finalmente encontra sua irmã, mas uma criatura aparece entre eles e a saída. Os dois precisam agir rapidamente para escapar daquele lugar.",

        imagem:
            "https://i.pinimg.com/1200x/03/8b/43/038b43d89f6425acc2df5436009f2e6f.jpg",

        opcoes: [

            {
                texto: "Proteger sua irmã",
                proxima: 3
            },

            {
                texto: "Correr para a saída",
                proxima: 3
            }

        ]
    },


    {
        titulo: "JUNTOS",

        texto:
            "The Boy e sua irmã conseguem atravessar a passagem. Pela primeira vez, eles enxergam uma possível saída. Porém, a escuridão atrás deles continua se movendo.",

        imagem:
            "https://i.pinimg.com/736x/97/b8/0b/97b80bd65893e8fca6583645e53da575.jpg",

        opcoes: [

            {
                texto: "Continuar juntos",
                proxima: "final"
            }

        ]
    }

];


/* =========================================
   MOSTRAR CENA
========================================= */

function mostrarCena(historiaAtual, numero) {

    const cena =
        historiaAtual[numero];


    imagemHistoria.src =
        cena.imagem;


    tituloHistoria.textContent =
        cena.titulo;


    textoHistoria.textContent =
        cena.texto;


    opcoes.innerHTML = "";


    cena.opcoes.forEach((opcao) => {

        const botao =
            document.createElement("button");


        botao.classList.add("opcao");


        botao.textContent =
            opcao.texto;


        botao.addEventListener(
            "click",
            () => {

                if (opcao.proxima === "final") {

                    mostrarFinal();

                } else {

                    mostrarCena(
                        historiaAtual,
                        opcao.proxima
                    );

                }

            }
        );


        opcoes.appendChild(botao);

    });

}


/* =========================================
   FINAL DA HISTÓRIA
========================================= */

function mostrarFinal() {

    imagemHistoria.src =
        "https://i.pinimg.com/1200x/3f/20/e5/3f20e526ed969b00f3843057887affa9.jpg";


    historiaPersonagem.textContent =
        personagemEscolhido.toUpperCase();


    tituloHistoria.textContent =
        "A JORNADA CONTINUA";


    textoHistoria.textContent =
        "O pesadelo ainda não terminou. Há algo esperando nas profundezas da escuridão...";


    opcoes.innerHTML = "";


    const voltar =
        document.createElement("button");


    voltar.classList.add("opcao");


    voltar.textContent =
        "VOLTAR À SELEÇÃO";


    voltar.addEventListener(
        "click",
        () => {

            historia.classList.remove("ativa");

            selecaoPersonagem.classList.add("ativa");

        }
    );


    opcoes.appendChild(voltar);

}


/* =========================================
   INICIAR HISTÓRIA DA SIX
========================================= */

function iniciarHistoriaSix() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "SIX";

    mostrarCena(
        historiaSix,
        0
    );

}


/* =========================================
   INICIAR HISTÓRIA DO MONO
========================================= */

function iniciarHistoriaMono() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "MONO";

    mostrarCena(
        historiaMono,
        0
    );

}


/* =========================================
   INICIAR HISTÓRIA DO THE RUNAWAY KID
========================================= */

function iniciarHistoriaRunawayKid() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "THE RUNAWAY KID";

    mostrarCena(
        historiaRunawayKid,
        0
    );

}


/* =========================================
   INICIAR HISTÓRIA DO LOW
========================================= */

function iniciarHistoriaLow() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "LOW";

    mostrarCena(
        historiaLow,
        0
    );

}


/* =========================================
   INICIAR HISTÓRIA DA ALONE
========================================= */

function iniciarHistoriaAlone() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "ALONE";

    mostrarCena(
        historiaAlone,
        0
    );

}


/* =========================================
   INICIAR HISTÓRIA DA THE GIRL
========================================= */

function iniciarHistoriaGirl() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "THE GIRL";

    mostrarCena(
        historiaGirl,
        0
    );

}


/* =========================================
   INICIAR HISTÓRIA DO THE BOY
========================================= */

function iniciarHistoriaBoy() {

    selecaoPersonagem.classList.remove(
        "ativa"
    );

    historia.classList.add(
        "ativa"
    );

    historiaPersonagem.textContent =
        "THE BOY";

    mostrarCena(
        historiaBoy,
        0
    );

}


/* =========================================
   SELEÇÃO DOS PERSONAGENS
========================================= */

personagens.forEach((personagem) => {

    personagem.addEventListener(
        "click",
        () => {

            personagemEscolhido =
                personagem.dataset.personagem;


            console.log(
                "Personagem escolhido:",
                personagemEscolhido
            );


            personagens.forEach((p) => {

                p.classList.remove(
                    "selecionado"
                );

            });


            personagem.classList.add(
                "selecionado"
            );


            containerPersonagens.classList.add(
                "tem-selecao"
            );


            /* ===============================
               ESCOLHE A HISTÓRIA
            =============================== */

            if (
                personagemEscolhido === "six"
            ) {

                iniciarHistoriaSix();

            }


            else if (
                personagemEscolhido === "mono"
            ) {

                iniciarHistoriaMono();

            }


            else if (
                personagemEscolhido === "runaway-kid"
            ) {

                iniciarHistoriaRunawayKid();

            }


            else if (
                personagemEscolhido === "low"
            ) {

                iniciarHistoriaLow();

            }


            else if (
                personagemEscolhido === "alone"
            ) {

                iniciarHistoriaAlone();

            }


            else if (
                personagemEscolhido === "girl"
            ) {

                iniciarHistoriaGirl();

            }


            else if (
                personagemEscolhido === "boy"
            ) {

                iniciarHistoriaBoy();

            }


            else {

                alert(
                    "A história deste personagem será adicionada em breve!"
                );

            }

        }
    );

});
