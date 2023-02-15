
  console.log('teste')
  
  const cookieImg = document.querySelector(".cookie");
  const cardDiv = document.querySelector(".card");
  const luckCardDiv = document.querySelector(".luck-card");

  cookieImg.addEventListener("click", () => {
    console.log("Clicou na imagem do cookie");
    cardDiv.classList.toggle("hide");
    luckCardDiv.classList.toggle("hide");
  });

