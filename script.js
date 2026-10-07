// CHANGE ONLY THESE TWO SETTINGS
const WHATSAPP_NUMBER="919715737056";
const GOOGLE_FORM_URL="https://forms.gle/9FuLeDEdFJSZoPUb9";

const wa=t=>`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t)}`;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function render(list){$("#productGrid").innerHTML=list.map((p,i)=>`<article class="card"><div class="photo"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span>${p.name}</span></div><div class="body"><small>${p.category}</small><h3>${p.name}</h3><p>${p.description}</p><div class="bottom"><b>${p.price}</b><button class="order" data-i="${i}">${p.price==="Quote"?"Get Quote":"Order"}</button></div></div></article>`).join("");$$(".order").forEach(b=>b.onclick=()=>{const p=list[+b.dataset.i];window.open(wa(`Hello GV3D Print! I would like to order/enquire about:\n\nProduct: ${p.name}\nListed price: ${p.price}\n\nPlease confirm availability, final price and delivery details.`),"_blank")})}
const cats=["All",...new Set(products.map(p=>p.category))];$("#filters").innerHTML=cats.map((c,i)=>`<button class="${i?"":"active"}" data-cat="${c}">${c}</button>`).join("");let active="All";
function apply(){const q=$("#search").value.toLowerCase();render(products.filter(p=>(active==="All"||p.category===active)&&(!q||(`${p.name} ${p.description} ${p.category}`).toLowerCase().includes(q))))}
$$(".filters button").forEach(b=>b.onclick=()=>{$$(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.cat;apply()});$("#search").oninput=apply;
const generic="Hello GV3D Print! I would like to enquire about your 3D printing services.";$("#topWA").href=wa(generic);$("#customWA").href=wa(generic);$("#contactWA").href=wa(generic);$("#googleForm").href=GOOGLE_FORM_URL;
$("#quote").onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);window.open(wa(`Hello GV3D Print! Custom print enquiry:\n\nName: ${d.get("name")}\nItem: ${d.get("item")}\nQuantity: ${d.get("qty")}\nMaterial: ${d.get("material")}\nDetails: ${d.get("details")||"Not specified"}\n\nI can send the model file here.`),"_blank")};$(".menu").onclick=()=>$("#nav").classList.toggle("open");$("#year").textContent=new Date().getFullYear();apply();
