const campo = document.getElementById("campo-pesquisa");
    const erroMsg = document.getElementById("erro-msg");

    campo.addEventListener("keypress", function (e) {
      if (e.key === "Enter") pesquisar();
    });

    function pesquisar() {
      const termo = campo.value.toLowerCase().trim();
      const mapas = document.querySelectorAll(".mapa");

      let encontrado = false;

      mapas.forEach((mapa) => {
        const nomePais = mapa.querySelector("h3").innerText.toLowerCase();

        if (nomePais.includes(termo)) {
          erroMsg.style.display = "none";
          mapa.scrollIntoView({ behavior: "smooth", block: "center" });
          encontrado = true;
        }
      });

      if (!encontrado) {
        erroMsg.style.display = "block";
        setTimeout(() => erroMsg.style.display = "none", 3000);
      }
    }

    function pesquisar() {
      const termo = campo.value.toLowerCase().trim();
      const mapas = document.querySelectorAll(".mapa");

      if (termo === "") {
        erroMsg.innerText = "Digite um país antes de pesquisar.";
        erroMsg.style.display = "block";
        setTimeout(() => erroMsg.style.display = "none", 3000);
        return;
      }

      let encontrado = false;

      mapas.forEach((mapa) => {
        const nomePais = mapa.querySelector("h3").innerText.toLowerCase();

        if (nomePais.includes(termo)) {
          erroMsg.style.display = "none";
          mapa.scrollIntoView({ behavior: "smooth", block: "center" });
          encontrado = true;
        }
      });

      if (!encontrado) {
        erroMsg.innerText = "País não encontrado.";
        erroMsg.style.display = "block";
        setTimeout(() => erroMsg.style.display = "none", 3000);
      }
    }

    if (nomePais.startsWith(termo))

      function pesquisar() {
        const termo = campo.value.toLowerCase().trim();
        const mapas = document.querySelectorAll(".mapa");

        if (termo === "") {
          erroMsg.innerText = "Digite um país antes de pesquisar.";
          erroMsg.style.display = "block";
          setTimeout(() => erroMsg.style.display = "none", 3000);
          return;
        }

        let encontrado = false;

        for (const mapa of mapas) {
          const nomePais = mapa.querySelector("h3").innerText.toLowerCase();

          if (nomePais.startsWith(termo)) {
            erroMsg.style.display = "none";
            mapa.scrollIntoView({ behavior: "smooth", block: "center" });
            encontrado = true;
            break; // parou no primeiro encontrado
          }
        }

        if (!encontrado) {
          erroMsg.innerText = "País não encontrado.";
          erroMsg.style.display = "block";
          setTimeout(() => erroMsg.style.display = "none", 3000);
        }
      }