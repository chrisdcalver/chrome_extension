
let myLeads = ["www.awesomelead.com", "www.epilead.com", "www.greatlead.com"]
let inputEl = document.getElementById("input-el").nodeValue

let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
    ulEl.innerHTML = listItems
}