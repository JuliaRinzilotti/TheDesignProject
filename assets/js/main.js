let mail = document.getElementById("email")
let subscribedEmail = document.getElementById("subscribedEmail")
let beforeSubscription = document.getElementById("beforeSubscription")
let afterSubscription = document.getElementById("afterSubscription")


function subscribe() {
    console.log(mail.value)
    subscribedEmail.innerHTML = (mail.value)
    subscribedEmail.style.fontSize = "2rem"
    subscribedEmail.style.color = "#ff3571"
    beforeSubscription.style.display = "none"
    afterSubscription.style.display = "block"
}

function backToMainPage() {
    beforeSubscription.style.display = "block"
    afterSubscription.style.display = "none"
}