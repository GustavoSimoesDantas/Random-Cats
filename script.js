async function loadCat() {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
  
      const imageUrl = data[0].url;
  
      document.getElementById("catImage").src = imageUrl;
  
    } catch (error) {
      console.log("Erro:", error);
      alert("Erro ao carregar imagem 😿. Tente novamente!");

    }
  }
  
  // carregar ao abrir a página
  loadCat();