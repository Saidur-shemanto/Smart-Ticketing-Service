const buttons = document.querySelectorAll(".bus-tickets button")
let count = 0
const clickTickets = () => {
    const tickBtnId = document.getElementById(event.target.id)
    const btnColor = tickBtnId.style.backgroundColor;


    if (count < 4) {
        tickBtnId.style.backgroundColor = "green";
        tickBtnId.style.color = "white";
        count++
        const ticketNumber = document.getElementById("seat-number")
        const seatNumber = parseInt(ticketNumber.innerText) - 1
        ticketNumber.innerText = seatNumber.toString()
        const ticketBox = document.getElementById("add-tickets")
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const divParent = document.createElement('div')
        divParent.setAttribute("class", "flex justify-between")
        p1.append(tickBtnId.innerText)
        p2.append("Economy")
        p3.append("550")
        divParent.append(p1, p2, p3)
        ticketBox.append(divParent)
        const totalPrice = document.getElementById('total-price')
        totalPrice.innerText = (parseInt(totalPrice.innerText) + 550).toString()
        const seatSup = document.getElementById('seatSup')
        seatSup.innerText = (parseInt(seatSup.innerText) + 1).toString()






    }


}
for (i of buttons) {
    i.addEventListener("click", clickTickets)
}
