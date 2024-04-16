const buttons = document.querySelectorAll(".bus-tickets button")
let count = 0
let coupons = ["NEW15", "Couple 20"]
const nextBtn = document.getElementById('next-btn')
const button = document.querySelector('#smoothScroll');
button.addEventListener('click', function () {
    const targetElement = document.getElementById('scrollDestination');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
function seatNumber() {
    console.log("putki")
    console.log(count)

    if (count > 0 && document.getElementById("phone-number").value !== "") {

        nextBtn.removeAttribute("disabled")
        nextBtn.style.backgroundColor = "rgb(29, 209, 0)"
        nextBtn.style.color = "white"

    }


}
const clickTickets = () => {
    const tickBtnId = document.getElementById(event.target.id)
    const btnColor = tickBtnId.style.backgroundColor;



    if (count !== 4) {
        tickBtnId.style.backgroundColor = "rgb(29, 209, 0)";
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
        const totalPrice1 = document.getElementById('total-price')
        totalPrice1.innerText = (parseInt(totalPrice1.innerText) + 550).toString()
        const totalPrice2 = document.getElementById('final-price')
        totalPrice2.innerText = (parseInt(totalPrice2.innerText) + 550).toString()
        const seatSup = document.getElementById('seatSup')
        seatSup.innerText = (parseInt(seatSup.innerText) + 1).toString()






    }
    if (count === 4) {
        applyBtn.removeAttribute("disabled")
        applyBtn.style.backgroundColor = "rgb(29, 209, 0)"
        applyBtn.style.color = "white"
        console.log(applyBtn)

    }




    seatNumber();
}


document.getElementById("phone-number").addEventListener("keydown", seatNumber)

const applyFunction = () => {
    const writtenValue = document.getElementById("apply-box").value;
    console.log(coupons[0], coupons[1])
    console.log(writtenValue)

    if (writtenValue === coupons[0]) {
        const totalPrice2 = document.getElementById('final-price')
        totalPrice2.innerText = (parseInt(totalPrice2.innerText) - ((parseInt(totalPrice2.innerText) * 15) / 100)).toString()

    } else if (writtenValue === coupons[1]) {
        const totalPrice2 = document.getElementById('final-price')
        totalPrice2.innerText = (parseInt(totalPrice2.innerText) - ((parseInt(totalPrice2.innerText) * 20) / 100)).toString()

    }

}
function nextPage() {
    if (!nextBtn.hasAttribute("disabled")) {
        window.location.href = "secondpage.html";
    }
}
const applyBtn = document.getElementById('apply-btn')
applyBtn.addEventListener("click", applyFunction)
nextBtn.addEventListener("click", nextPage);

for (i of buttons) {
    i.addEventListener("click", clickTickets)

}
