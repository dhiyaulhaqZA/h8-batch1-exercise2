var totalSharesInput = document.getElementById("totalSharesId")
var avgBuyPriceInput = document.getElementById("avgBuyPriceId")
var sellPriceInput = document.getElementById("sellPriceId")

document.getElementById("btnCalculateId").addEventListener("click", function(){
    var totalShares = totalSharesInput.value
    var avgBuyPrice = avgBuyPriceInput.value
    var sellPrice = sellPriceInput.value

    var gainPercent = (sellPrice - avgBuyPrice)/avgBuyPrice * 100
    var gainAmount = (sellPrice - avgBuyPrice)*totalShares

    var color
    var statusMessage

    if (gainAmount > 0) {
        color = "green"
        statusMessage = "You gain"
    } else if (gainAmount < 0) {
        color = "red"
        statusMessage = "You loss"
    } else {
        color = "black"
        statusMessage = "You gain"
    }

    var result = "<b style=\"color:" + color + "\">" + statusMessage + " Rp." + gainAmount + " (" + gainPercent.toFixed(2) + "%) </b>"
    document.getElementById("resultId").innerHTML = result
});

totalSharesInput.addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

avgBuyPriceInput.addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

sellPriceInput.addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});