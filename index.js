document.addEventListener("DOMContentLoaded",() => {
 const form = document.getElementById("guest-form")
const input = document.getElementById("guest-name")
 const guestList = document.getElementById("guest-list")
const maxGuests = 10;
form.addEventListener("submit",(e)=>{
  e.preventDefault()
    const name = input.value.trim()
    if(!name)return
  if(guestList.children.length >= maxGuests){
      alert("Guest list limit reached (10 people max).")
      return
      
    }console.log(name)
    const li = document.createElement("li")
 const guestInfo = document.createElement("span")
    guestInfo.className = "guest-info"
 guestInfo.textContent = `${name} — Not Attending`
console.log(li)
const toggleBtn = document.createElement("button")
 toggleBtn.textContent ="Toggle RSVP";
    toggleBtn.addEventListener("click", () => {
      if (guestInfo.textContent.includes("Not Attending")) {
        guestInfo.textContent = `${name} — Attending`
      } else {
        guestInfo.textContent = `${name} — Not Attending`
      }console.log(toggleBtn)
    })
const removeBtn = document.createElement("button")
removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => li.remove())
li.appendChild(guestInfo)
 li.appendChild(toggleBtn)
    li.appendChild(removeBtn)

 guestList.appendChild(li)
console.log(removeBtn)
  })
})
