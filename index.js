const count = document.getElementById("count-el");
const incrementButton = document.getElementById("increment-btn");
const saveButton = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el")

let num = 0;

incrementButton.addEventListener("click", (event) => {
	num++;
	count.innerText = num;
});

saveButton.addEventListener("click", (event) => {
	let save = count.innerText;
	saveEl.innerText += " " + save + " - ";
	console.log(count);
	num = 0;
	count.innerText = 0;
})
