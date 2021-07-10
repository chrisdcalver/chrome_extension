
let myLeads = []
let inputEl = document.getElementById("input-el").nodeValue

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})