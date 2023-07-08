// Dados do JSON
var destinos = [
    {
      "id": "sa",
      "nome": "Macchu-Picchu",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/machu-picchu.jpg"
    },
    {
        "nome": "Lençóis maranhenses",
        "descricao": "fodase",
        "imagem": "../assets/images/images-destinys/lençois-maranhenses.jpg"
    },
    {
      "nome": "Ilha de páscoa",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/ilha-de-pascpa.jpg"
    },
    {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/cataratas-do-iguaçu.jpg"
    },
    {
      "nome": "Ushuaia",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/ushuaia.jpg"
    },
    {
      "nome": "Gramado",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/gramado.jpg"
    },
    {
      "nome": "Colônia del sacramento",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/colonia-del-sacramento.jpg"
    },
    {
      "nome": "Islas del rosario",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/islas-del-rosario.jpg"
    },
    {
      "nome": "Cartagena",
      "descricao": "Machu Picchu, Peru",
      "imagem": "../assets/images/images-destinys/cartagena.jpeg"
    },
    {
      "nome": "Paris",
      "descricao":"teste",
      "imagem": "../assets/images/images-destinys/paris.jpg"
    }
  ];
  
  // Função para exibir os destinos na div "all-destinos"
  function exibirDestinos(filtro) {
    var allDestinosDiv = document.getElementById("all-destinos");
    allDestinosDiv.innerHTML = ""; // Limpar destinos anteriores
  


  
    // Percorrer os destinos e criar elementos HTML
    destinos.forEach(function(destino) {
      var destinoDiv = document.createElement("div");
      destinoDiv.classList.add("destino");

      var nome = document.createElement("h2");
      nome.textContent = destino.nome;
      destinoDiv.appendChild(nome);
  
      var imagem = document.createElement("img");
      imagem.src = destino.imagem;
      destinoDiv.appendChild(imagem);
  
      
  
      allDestinosDiv.appendChild(destinoDiv);
    });
  }
  
  // Chamar a função para exibir os destinos
  exibirDestinos();

  document.getElementById("button-todos").addEventListener("click", function() {
  exibirDestinos("todos");
});
  