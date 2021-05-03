let character = document.getElementById("character")

let block = document.getElementById("block")

let counter = 0

function jump() {
	if (character.classList == "animate") return
	character.classList.add("animate")
	setTimeout(() => {
		character.classList.remove("animate")
	}, 300)
}

document.onkeydown = (k) => {
	if (k.key == " ") 
		jump()
}

let checkDead = setInterval(() => {
	let characterTop = parseInt(window.getComputedStyle(character).
		getPropertyValue("top"))

	let blockLeft = parseInt(window.getComputedStyle(block).
		getPropertyValue("left"))

	if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
		block.style.animation = "none"
		block.style.display = "none"
		alert("u lose")
	} else if (block.style.display != "none") {
        counter++;
        document.getElementById("scoreSpan").innerHTML = 
			Math.floor(counter/100);
    }
}, 10);
