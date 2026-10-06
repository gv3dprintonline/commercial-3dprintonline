// ===============================
// GV3D PRINT - EDIT THESE SETTINGS
// ===============================

// Replace this with your WhatsApp number.
// Use country code, digits only. Example: 919876543210
const WHATSAPP_NUMBER = "919715737056";

const shopName = "GV3D Print";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const price = button.dataset.price;
    const message =
`Hello ${shopName}! I would like to order/enquire about:

Product: ${product}
Listed price: ${price}

Please confirm availability, final price and delivery/collection details.`;
    window.open(whatsappUrl(message), "_blank");
  });
});

document.getElementById("quote-form").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const message =
`Hello ${shopName}! I would like a custom 3D printing quotation.

Name: ${data.get("name")}
Item: ${data.get("item")}
Quantity: ${data.get("quantity")}
Material: ${data.get("material")}
Colour: ${data.get("colour")}
Message: ${data.get("message") || "No additional message"}

I can send the STL/3MF/OBJ file on WhatsApp.`;
  window.open(whatsappUrl(message), "_blank");
});

document.getElementById("main-whatsapp").addEventListener("click", e => {
  if (WHATSAPP_NUMBER.includes("X")) {
    e.preventDefault();
    alert("Please replace WHATSAPP_NUMBER in script.js with your actual WhatsApp number.");
  }
});
document.getElementById("main-whatsapp").href = whatsappUrl("Hello GV3D Print! I would like to know more about your 3D printing products.");

document.querySelectorAll(".filter").forEach(filter => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    filter.classList.add("active");
    const selected = filter.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = selected === "all" || card.dataset.category === selected ? "" : "none";
    });
  });
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});
document.getElementById("year").textContent = new Date().getFullYear();
