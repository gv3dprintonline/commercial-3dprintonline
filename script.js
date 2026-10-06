// ===== GV3D PRINT SETTINGS =====
// Replace these two values before publishing.
const WHATSAPP_NUMBER = "919XXXXXXXXX"; // country code + number, digits only
const GOOGLE_FORM_URL = "https://forms.google.com/"; // replace with your actual Google Form link

const wa = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const generic = `Hello GV3D Print! I would like to enquire about your 3D printing services.`;

["navWA","customWA","ctaWA"].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.href=wa(generic);
});
document.getElementById("formLink").href=GOOGLE_FORM_URL;

document.querySelectorAll(".order").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const item=btn.dataset.item, price=btn.dataset.price;
    window.open(wa(`Hello GV3D Print! I want to order:\n\nProduct: ${item}\nListed price: ${price}\n\nPlease confirm availability, final price and delivery/collection details.`),"_blank");
  });
});

document.getElementById("quote").addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(e.target);
  const msg=`Hello GV3D Print! I would like a custom 3D printing quotation.

Name: ${d.get("name")}
Item: ${d.get("item")}
Quantity: ${d.get("qty")}
Material: ${d.get("material")}
Colour: ${d.get("colour")}
Deadline: ${d.get("deadline")}
Details: ${d.get("details") || "Not specified"}

I can send the STL/3MF/OBJ file here.`;
  window.open(wa(msg),"_blank");
});

const filters=[...document.querySelectorAll(".filter")];
const cards=[...document.querySelectorAll(".card")];
function apply(){
  const active=document.querySelector(".filter.active").dataset.filter;
  const q=document.getElementById("search").value.toLowerCase().trim();
  cards.forEach(c=>{
    const okCat=active==="all"||c.dataset.cat===active;
    const okSearch=!q||c.dataset.name.includes(q);
    c.style.display=okCat&&okSearch?"":"none";
  });
}
filters.forEach(f=>f.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));f.classList.add("active");apply()}));
document.getElementById("search").addEventListener("input",apply);
document.querySelector(".hamburger").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();

if(WHATSAPP_NUMBER.includes("X")){
  document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener("click",e=>{
    e.preventDefault(); alert("Replace WHATSAPP_NUMBER in script.js with your actual WhatsApp number before publishing.");
  }));
}
