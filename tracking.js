document.getElementById("trackBtn").addEventListener("click", function () {
    let orderNumber = document.getElementById("orderNumber").value;
    let orderStatus = document.getElementById("orderStatus");
    let progressBar = document.getElementById("progressBar");
    let estimatedTime = document.getElementById("estimatedTime");

    if (orderNumber === "") {
        alert("⚠️ Please enter your order number.");
        return;
    }

    let statusList = ["📦 Order Placed", "👨‍🍳 Preparing", "🚗 Out for Delivery", "🏠 Delivered"];
    let progressValues = ["25%", "50%", "75%", "100%"];
    let estimatedTimes = ["20-25 mins", "15-20 mins", "5-10 mins", "Delivered"];

    let randomIndex = Math.floor(Math.random() * 4);

    orderStatus.innerHTML = `<p>${statusList[randomIndex]}</p>`;
    progressBar.style.width = progressValues[randomIndex];
    estimatedTime.innerHTML = `⌛ Estimated Delivery: ${estimatedTimes[randomIndex]}`;
});
