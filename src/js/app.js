const requestURL = "/files/russian-cities.json";
const list = document.querySelector(".all-city-loaded");
const citySearchInput = document.querySelector(".city-search");
const body = document.querySelector("body");
console.log(body);
let cities;
// console.log(citySearchInput);

// Выводим список городо в выпадающем меню
async function getResponse() {
	cities = await fetch(requestURL);
	cities = await cities.json();
	cities = cities.splice(0, 200); // Оставляем первые 200 значений

	for (let key in cities) {
		list.innerHTML += `
            <div class="city-item" data-id="15" data-type="city">
                <span class="city-name">${cities[key].city}</span>
                <span class="city-state">${cities[key].region}</span>
            </div>
        `;
	}
	cities = document.querySelectorAll(".city-item");
	// console.log(cities);
}

citySearchInput.addEventListener("input", (e) => {
	const value = e.target.value.toLowerCase();
	// console.log(cities);
	cities.forEach((city) => {
		const isVisible = city.innerText.toLowerCase().includes(value);
		city.classList.toggle("hide", !isVisible);
		// console.log(city);
	});
});

getResponse();

const cityButton = document.querySelector(".city");

const cityBlock = document.querySelector(".pc-city-block");
console.log(cityBlock);

cityButton.addEventListener("click", (e) => {
	cityBlock.classList.toggle("hide");
});
// body.addEventListener("click", (e) => {
// 	cityBlock.classList.add("hide");
// });
