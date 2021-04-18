class JapaoView {
	constructor(elemento) {
		this._elemento = elemento;
	}

	templateImgUm() {

		let template = `
	   <img class="conteudo__album" src="assets/japao/japao_01.jpg" alt="">
	   `;

	   this._elemento.innerHTML = template;
   }

   templateImgDois() {
	   let template = `
	   <img class="conteudo__album" src="assets/japao/japao_02.jpg" alt="">
	   `;

	   this._elemento.innerHTML = template;
   }

   templateImgTres() {
	   let template = `
	   <img class="conteudo__album" src="assets/japao/japao_03.jpg" alt="">
	   `;

	   this._elemento.innerHTML = template;
   }

   templateImgQuatro() {
	   let template = `
	   <img class="conteudo__album" src="assets/japao/japao_04.jpg" alt="">
	   `;

	   this._elemento.innerHTML = template;
   }

   templateImgCinco() {
	   let template = `
	   <img class="conteudo__album" src="assets/japao/japao_05.jpg" alt="">
	   `;

	   this._elemento.innerHTML = template;
   }

}