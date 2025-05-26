//---------navbar-------------//
// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
//dark and light mode
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if Dark Mode is saved in Local Storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = `<i class="fas fa-moon"></i>`; // Moon Icon for Dark Mode
    }

    // Toggle Theme on Button Click
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Save Theme Preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.innerHTML = `<i class="fas fa-moon"></i>`; // Moon Icon
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.innerHTML = `<i class="fas fa-sun"></i>`; // Sun Icon
        }
    });
});
// Sticky Navbar Scroll Effect
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar .classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//---------------menu---------//
document.addEventListener("DOMContentLoaded", function () {
    let selectedItems = [];
    let totalAmount = 0;
    let billDetails = [];

    const checkboxes = document.querySelectorAll(".menu-item input[type='checkbox']");
    const orderNowBtn = document.getElementById("orderNow");
    const billBtn = document.getElementById("viewBill");
    const billSection = document.getElementById("billSection");

    // ✅ Checkbox Selection Logic
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const itemName = this.parentElement.querySelector("h3").textContent;
            const itemPrice = parseInt(this.parentElement.querySelector("p").textContent.replace("₹", ""));

            if (this.checked) {
                selectedItems.push({ name: itemName, price: itemPrice });
                totalAmount += itemPrice;
            } else {
                selectedItems = selectedItems.filter(item => item.name !== itemName);
                totalAmount -= itemPrice;
            }

            orderNowBtn.disabled = selectedItems.length === 0;
        });
    });

    // ✅ Order Now Button Click
    orderNowBtn.addEventListener("click", function () {
        if (selectedItems.length === 0) return alert("⚠️ Please select at least one item.");

        // 🪑 Seat Number Popup
        let seatNumber = prompt("🪑 Enter Seat Number (or leave blank to skip):");
        seatNumber = seatNumber ? `Seat No: ${seatNumber}` : "No Seat Assigned";

        /* ✅ Order Confirmation
        let confirmOrder = confirm("✅ Confirm your order?");
        if (!confirmOrder) return;*/

        // 🔹 Add items to bill
        billDetails.push({ seat: seatNumber, items: [...selectedItems], total: totalAmount });

        // Reset Selection
        selectedItems = [];
        totalAmount = 0;
        checkboxes.forEach(checkbox => (checkbox.checked = false));
        orderNowBtn.disabled = true;

        alert("🎉 Order Confirmed!");
        billBtn.disabled = false;
    });

    // ✅ Show Bill Summary
    billBtn.addEventListener("click", function () {
        if (billDetails.length === 0) return alert("⚠️ No orders placed yet.");

        let billHTML = `<h2 class="bill-heading">M.K. Bakers and Restaurant</h2>`;
        billHTML += `<h3 class="bill-subheading">Bill</h3>`;
        billHTML += `<div class="bill-content">`;

        billDetails.forEach((order, index) => {
            billHTML += `<div class="bill-order">
                <h4>Order ${index + 1} (${order.seat})</h4>`;
            order.items.forEach(item => {
                billHTML += `<p>🍽️ ${item.name} - ₹${item.price}</p>`;
            });
            billHTML += `<strong>Total: ₹${order.total}</strong></div>`;
        });

        // ✅ Payment Options
        billHTML += `<div class="payment-options">
            <button id="onlinePay">💳 Online Pay</button>
            <button id="cashPay">💵 Cash Pay</button>
        </div>`;

        // ✅ Download & Print Buttons (Small Icons)
        billHTML += `<div class="bill-actions">
            <button id="downloadBill" class="icon-btn">📥</button>
            <button id="printBill" class="icon-btn">🖨️</button>
        </div>`;

        billSection.innerHTML = billHTML;
        billSection.style.display = "block";

        // ✅ Download Functionality (Save Bill as Image)
        document.getElementById("downloadBill").addEventListener("click", function () {
            html2canvas(billSection).then(canvas => {
                let link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "Bill.png";
                link.click();
                alert("📁 Bill saved in your device. Check Downloads/Gallery.");
            });
        });

        // ✅ Print Functionality (Check Printer Connection)
        document.getElementById("printBill").addEventListener("click", function () {
            if (navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) {
                alert("⚠️ Printing not supported on mobile devices!");
                return;
            }

            navigator.permissions.query({ name: "printer" }).then(result => {
                if (result.state === "granted" || result.state === "prompt") {
                    window.print();
                } else {
                    alert("🖨️ No Printer Found! Please connect a printer first.");
                }
            }).catch(() => {
                alert("🖨️ No Printer Found! Please connect a printer first.");
            });
        });

        // ✅ Payment Handling
        document.getElementById("onlinePay").addEventListener("click", function () {
            alert("✅ Payment Successful! Thank you for your order.");
        });

        document.getElementById("cashPay").addEventListener("click", function () {
            alert("💵 Pay cash at the counter.");
        });
    });
});
