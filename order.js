document.addEventListener("DOMContentLoaded", function () {
    let orderForm = document.getElementById("orderForm");
    let successMessage = document.getElementById("successMessage");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let selectedFoods = [];

        document.querySelectorAll(".food-item input[type='checkbox']:checked").forEach((item, index) => {
            let foodName = item.value;
            let size = document.querySelectorAll(".food-size")[index].value;
            let quantity = document.querySelectorAll(".food-quantity")[index].value;
            selectedFoods.push(`${foodName} (${size}) x${quantity}`);
        });

        if (name && phone && address && selectedFoods.length > 0) {
            successMessage.innerHTML = `✅ Order Placed Successfully! <br> Your Order: ${selectedFoods.join(", ")} <br> 🚀 Your food is on the way!`;
            successMessage.style.display = "block";
            orderForm.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 4000);
        } else {
            alert("Please fill all fields and select at least one food item.");
        }
    });
});