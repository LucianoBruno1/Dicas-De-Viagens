
var destinos = [
    {
      "id": "sa",
      "nome": "Macchu-Picchu",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/machu-picchu.jpg",
      "continente": "América do Sul"
    },
    {
        "nome": "Lençóis maranhenses",
        "descricao": "fodase",
        "imagem": "../assets/images/images-destinys/lençois-maranhenses.jpg",
        "continente": "América do Sul"
    },
    {
      "nome": "Ilha de páscoa",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/ilha-de-pascpa.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/cataratas-do-iguaçu.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Ushuaia",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/ushuaia.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Gramado",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/gramado.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Colônia del sacramento",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/colonia-del-sacramento.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Islas del rosario",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/islas-del-rosario.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Cartagena",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/cartagena.jpeg",
      "continente": "América do Sul"
    },
    {
      "nome": "Paris",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/Paris.jpg",
      "continente": "Europa"
    },
    {
      "nome": "Uyuni",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/uyuni.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Torres del paine",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/torres-del-paine.jpg",
      "continente": "América do Sul"
    },
    {
      "nome": "Peyto lake",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/lago-peyto.jpg",
      "continente": "América do Norte"
    },
    {
    "nome": "Cataratas do niágara",
    "descricao":"teste",
    "imagem": "../assets/images/images-destinys/cataratas-do-niagara.jpg",
    "continente": "América do Norte"
    },
    {
      "nome": "Grand canyon",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/grand-canyon.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Cancún",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/cancun.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Vancouver",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/vancouver.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Yellowstone national park",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/Yellowstone.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Banff national park",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/banff.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Zion national park",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/zion.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Los cabos",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/loscabos.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Miami beach",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/miamibeach.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Ilha de Roatan",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/ilhaderoatan.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Monte verde",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/monteverde.jpg",
      "continente": "América do Norte"
    },
    {
      "nome": "Cordilheira dos andes",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/andes.jpg",
      "continente": "América do Sul"
    }
  ];
  
  // Função para exibir os destinos na div "all-destinos"
  function exibirDestinos(filtro) {
    var allDestinosDiv = document.getElementById("all-destinos");
    allDestinosDiv.innerHTML = "";
  
    destinos.forEach(function(destino) {
      if (!filtro || destino.continente === filtro) {
        var destinoDiv = document.createElement("div");
        destinoDiv.classList.add("destino");
  
        var nome = document.createElement("h2");
        nome.textContent = destino.nome;
        destinoDiv.appendChild(nome);
  
        var imagem = document.createElement("img");
        imagem.src = destino.imagem;
        destinoDiv.appendChild(imagem);
  
        allDestinosDiv.appendChild(destinoDiv);
      }
    });
  }
  exibirDestinos();
  
  var filtroBtns = document.querySelectorAll(".filtro-btn");

filtroBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var filtro = btn.getAttribute("data-filtro");
    exibirDestinos(filtro);
  });
});



