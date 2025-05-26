document.addEventListener("DOMContentLoaded", function () {
    let totalPrice = 0;
    const orderList = document.getElementById("order-list");
    const totalElement = document.getElementById("total-price");
    const orderSummary = document.querySelector(".order-summary");
    const paymentSection = document.querySelector(".payment-section");

    document.getElementById("add-to-cart").addEventListener("click", function () {
        const foodSelect = document.getElementById("food-select");
        const selectedFood = foodSelect.options[foodSelect.selectedIndex];
        const foodName = selectedFood.value;
        const size = document.querySelector('input[name="size"]:checked').value;
        const price = size === "half" ? parseInt(selectedFood.getAttribute("data-half")) : parseInt(selectedFood.getAttribute("data-full"));
        const quantity = parseInt(document.getElementById("quantity").value);

        if (quantity < 1) {
            alert("Please select a valid quantity.");
            return;
        }

        const itemTotal = price * quantity;
        totalPrice += itemTotal;
        totalElement.innerText = totalPrice;

        const listItem = document.createElement("li");
        listItem.innerText = `${foodName} (${size}) x ${quantity} = ₹${itemTotal}`;
        orderList.appendChild(listItem);

        orderSummary.style.display = "block";
    });

    document.getElementById("order-now").addEventListener("click", function () {
        if (totalPrice > 0) {
            alert("✅ Order Confirmed! Proceed to Payment.");
            paymentSection.style.display = "block";
        } else {
            alert("⚠️ Please add items to cart before ordering.");
        }
    });

    document.getElementById("online-pay").addEventListener("click", function () {
        alert("✅ Payment Successful! Your order is placed.");
    });

    document.getElementById("cash-pay").addEventListener("click", function () {
        alert("✅ Order confirmed! Pay in cash at the restaurant.");
    });
});