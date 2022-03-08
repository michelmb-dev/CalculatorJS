const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".btn")
const clean = document.querySelector(".btn--clean")
const result = document.querySelector(".btn--equal")
const sqrt = document.querySelector(".btn--sqrt")
const percent = document.querySelector(".btn--percent")

/**
 * Get button values on click
 */
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		let value = e.target.dataset.num
		if (display.value === "ERROR") {
			display.value = ""
		}
		display.value += value
	})
})

/**
 * Clean the display
 */
clean.addEventListener("click", (e) => (display.value = ""))

/**
 * Calc and display result
 */
result.addEventListener("click", () => {
	try {
		if (!display.value || display.value === "") {
			return
		} else {
			let res = eval(display.value)
			display.value = res
		}
	} catch (err) {
		display.value = "ERROR"
	}
})

/**
 * Calc square root and display result
 */
sqrt.addEventListener("click", () => {
	try {
		if (!display.value || display.value === "ERROR" || isNaN(display.value)) {
			display.value = ""
		} else {
			let res = Math.sqrt(display.value)
			display.value = res
		}
	} catch (err) {
		display.value = "ERROR"
	}
})

/**
 * Calc percent and display result
 */
percent.addEventListener("click", () => {
	try {
		if (!display.value || display.value === "ERROR") {
			display.value = ""
		} else {
			let res = eval(display.value) / 100
			display.value = res
		}
	} catch (err) {
		display.value = "ERROR"
	}
})
