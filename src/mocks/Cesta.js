import logo from '../../assets/logo.png';

import Itens from '../../assets/Itens';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta"
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha",
        preco: "R$40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: Itens.tomate
            },
            {
                nome: "Brócolis",
                imagem: Itens.brocolis
            },
            {
                nome: "Batata",
                imagem: Itens.batata
            },
            {
                nome: "Pepino",
                imagem: Itens.pepino
            },
            {
                nome: "Abóbora",
                imagem: Itens.abobora
            },
        ]
    }
}

export default cesta;