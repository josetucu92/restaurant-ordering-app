import { menuArray } from "./data.js";

const itemMenu = document.querySelector(".menu-items");

let feedHTML = "";

menuArray.forEach((el) => {
  feedHTML += `
	<div class="item-menu">
    <p class="item-menu-img">${el.emoji}</p>
    <div class="item-menu-info">
      <h3>${el.name}</h3>
      <p>${el.ingredients}</p>
      <h4>$${el.price}</h4>
    </div>
    <div class="item-menu-btn">
			<button data-name='${el.name}' data-price='${el.price}' >+</button>
    </div>
	</div>
    `;
});

itemMenu.innerHTML = feedHTML;
