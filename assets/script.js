let investAmount = document.getElementById('investAmount')
let totalProfit = document.getElementById('totalProfit')
let sharingRatio = document.getElementById('sharingRatio')
let inputButton = document.getElementById('input-button')

let sharingAmountContainer = document.getElementById('sharingAmount-container')
let paybackAmountContainer = document.getElementById('paybackAmount-container')

inputButton.addEventListener("click", function() {
    let i = Number(investAmount.value)
    let t = Number(totalProfit.value)
    let s = Number(sharingRatio.value)

    let sharingAmount, paybackAmount
    sharingAmount = t*s/100
    paybackAmount = i + sharingAmount

    sharingAmountContainer.innerText = (Math.round(sharingAmount)).toString()
    paybackAmountContainer.innerText = (Math.round(paybackAmount)).toString()
})