
let myLeads = ["www.awesomelead.com", "www.epilead.com", "www.greatlead.com"]
let inputEl = document.getElementById("input-el").nodeValue

let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})

// Log out the items in the myLeads array using a for loop

for (i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i]
}