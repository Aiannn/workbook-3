
// let dateDiff = document.getElementById("date-2").value - document.getElementById("date-1").value
// console.log(dateDiff)

function calculate() {
    let firstDate = new Date(document.getElementById("date-1").value)
    let secondDate = new Date(document.getElementById("date-2").value)
    let oneDay = 24 * 60 * 60 * 1000
    let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log(diffDays)

    let firstCheck = document.getElementById("firstCheck").checked
    let secondCheck = document.getElementById("secondCheck").checked
    let thirdCheck = document.getElementById("thirdCheck").checked

    let under25 = document.getElementById("yesRadio").checked

    
    let carRental = 29.99*diffDays 
    let options = firstCheck*3.95 + secondCheck*2.95 + thirdCheck*2.95
    let surchrgeU25 = under25*carRental*0.3
    let total = carRental + options + surchrgeU25

    document.getElementById('car-rental').innerText = carRental
    document.getElementById('options').innerText = options 
    document.getElementById('under-25').innerText = surchrgeU25
    document.getElementById('total').innerText = total

}