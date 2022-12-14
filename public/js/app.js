

//Dom manipulation
const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.getElementById("message-1")
const messageTwo = document.getElementById("message-2")
const infoMsg = document.querySelector(".instructions")


messageOne.textContent = ""
messageTwo.textContent = ""


weatherForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const location = search.value
    
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast
            infoMsg.textContent = ""
        }
    })
})
    
})

weatherForm.addEventListener("keyup", (e)=> {
    if(e.keyCode === 13) {
        e.preventDefault()
    const location = search.value
    
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast
            infoMsg.textContent = ""
        }
    })
})
    }
});