var nomeSeries = ["Ted Lasso", "Sandman", "Locke & Key", "Stranger Things"];

var imagemSeries = [
  "https://br.web.img3.acsta.net/pictures/20/07/16/10/21/4967802.jpg",
  "https://johto.legiaodosherois.com.br/wp-content/uploads/2022/08/legiao_LtcSosmAT5R9.jpg",
  "https://br.web.img3.acsta.net/pictures/19/12/05/09/21/1289844.jpg",
  "https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
];
var linkSerie = [
  "https://tv.apple.com/br/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy",
  "https://www.netflix.com/br/title/81150303",
  "https://www.netflix.com/br/title/80241239",
  "https://www.netflix.com/br/title/80057281"
];

var containerSeries = document.getElementById("containerSeries");

function exibirSeriesNaTela() {
  containerSeries.innerHTML = "";
  for (var i = 0; i < nomeSeries.length; i++) {
    containerSeries.innerHTML += `  
                          <div class="serie">
                          <img src= "${imagemSeries[i]}" class"=imagens">
                          <a href= "${linkSerie[i]}" target="_blank">${nomeSeries[i]}</a>
                          </div>
    `;
  }
}

exibirSeriesNaTela();

function adicionarSerieNaTela() {
  let nomeDaSerie = document.getElementById("nomeSerie").value;
  let linkStream = document.getElementById("LinkStream").value;
  let linkImagem = document.getElementById("ImagemSerie").value;

  if (nomeSeries.includes(nomeDaSerie)) {
    alert("Essa série já está na lista!");
  } else {
    nomeSeries.push(nomeDaSerie);
    linkSerie.push(linkStream);
    imagemSeries.push(linkImagem);
    exibirSeriesNaTela();
  }
}