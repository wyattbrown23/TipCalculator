function calculateTip()
{
    var billBeforeTip = document.getElementById("billbeforetip").value;
    var serviceRating = document.getElementById("servicerating").value;

    if (billBeforeTip == "" || serviceRating == 0) 
    {
        alert("Please enter values");
        return;
    }
    billBeforeTip = parseFloat(billBeforeTip);
    var tipAmount = billBeforeTip*serviceRating;
    tipAmount = Math.round(tipAmount * 100)/100;
    tipAmount = tipAmount.toFixed(2);

    var totalBill = parseFloat(billBeforeTip)  + parseFloat(tipAmount);
    totalBill = Math.round(totalBill*100)/100;
    totalBill = totalBill.toFixed(2);

    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = tipAmount;

    document.getElementById("totalbill").style.display = "block";
    document.getElementById("bill").innerHTML = totalBill;
};

// document.getElementById("totaltip").style.display="none";
// document.getElementById("tip").style.display = "none";

// document.getElementById("totalbill").style.display = "none";
// document.getElementById("bill").style.display = "none";

document.getElementById("calculate").onclick = function() 
    {
        calculateTip();
    };

