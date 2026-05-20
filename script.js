let cart = [];

/* CUSTOMER DATABASE */

let customers = [

{
name:"Falak General Stores",
phone:"9368890158",
address:"Jogeshwari"
},

{
name:"Omair Medical",
phone:"Not Available",
address:"Near Salman Medical, Jogeshwari"
},

{
name:"Gurukripa Pan Bidi Shop",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Alete Sweet Stores",
phone:"9870203313",
address:"Near Usha Pan Bidi Shop"
},

{
name:"Usha Pan Shop",
phone:"Not Available",
address:"Amboli"
},

{
name:"Bhavani Ramji Stores",
phone:"Not Available",
address:"Amboli"
},

{
name:"Umar Bakery And General Stores",
phone:"7304821412",
address:"Near Central Society Medical, Bhawani Mata Road, Amboli"
},

{
name:"Jay Shri Store",
phone:"Not Available",
address:"Near Maa Laxmi General Store"
},

{
name:"Ramdev Super Market",
phone:"Not Available",
address:"Veera Desai Road"
},

{
name:"Salman Medical",
phone:"Not Available",
address:"Near Omair Medical, Jogeshwari"
},

{
name:"Aasha General Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"Sangeeta Store",
phone:"Not Available",
address:"Near Hardik General Store"
},

{
name:"Popular Dairy",
phone:"Not Available",
address:"SV Road"
},

{
name:"KGN Stores",
phone:"7409538409",
address:"Near Yash Grain Store, Haji Gafoor Lane, Amboli"
},

{
name:"Yash Grain Stores",
phone:"8898419927",
address:"Near Medicare Medical, Sugra Bai Chawl, Amboli"
},

{
name:"Sahyog Medical",
phone:"Not Available",
address:"Not Available"
},

{
name:"Badiram Chaurasiya",
phone:"9038841837",
address:"Near Arwah Dairy, Jogeshwari Flyover, Near Jogeshwari Dhaba"
},

{
name:"Aarey Stall",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Best Nagar Grahak Sahkari Sanstha",
phone:"8419938710",
address:"Opposite Galat Oil Depot, Best Nagar"
},

{
name:"Shree Sai Kirana Stores",
phone:"8355849241",
address:"MHB Colony Chawl 2"
},

{
name:"Honey Bakery",
phone:"9833752799",
address:"Jai Matadi Marg, Near ATC TVS Showroom"
},

{
name:"Shivshakti Medical",
phone:"9167458756",
address:"Near Bharat Bakery"
},

{
name:"Bharat Bakery And General Store",
phone:"Not Available",
address:"Motilal Nagar 1, Road No 1, Goregaon"
},

{
name:"Naaz Bakery And General Stores",
phone:"8356141741",
address:"Best Nagar"
},

{
name:"SK Balaji Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"JK Store",
phone:"Not Available",
address:"Bhagat Singh Nagar"
},

{
name:"Krishna Medical",
phone:"Not Available",
address:"Vivek College, Siddharth Nagar, Goregaon"
},

{
name:"Sagar Bakery",
phone:"Not Available",
address:"Satkar Road"
},

{
name:"National Dairy",
phone:"Not Available",
address:"Near Sagar Bakery, Jogeshwari"
},

{
name:"Shree Ganesh Medical",
phone:"8655490337",
address:"Yadav Nagar, Jogeshwari"
},

{
name:"SR Kirana Store (Sonairam)",
phone:"8291076308",
address:"Shakar Road, Makoi Chawl, Near Amar Yadav Davakhana, Jogeshwari Station"
},

{
name:"Anshika Dairy",
phone:"8850990317",
address:"Opposite SR Kirana Store (Sonairam)"
},

{
name:"Om Sai Marketing",
phone:"Not Available",
address:"Near Ganesh Medical"
},

{
name:"Salim Khan General Stores",
phone:"Not Available",
address:"Near Rite Medical 2"
},

{
name:"New Hindustan Bakery",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"NR Gupta Kirana Store",
phone:"Not Available",
address:"Opposite Persia Darbar"
},

{
name:"Venus Chemist",
phone:"Not Available",
address:"Markaz Views, SV Road, Jogeshwari Main Signal"
},

{
name:"Al Sana Store",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Prince Bakery",
phone:"Not Available",
address:"Near National Super Market, Aksa Masjid Road"
},

{
name:"Javed General Store",
phone:"9833495520",
address:"Behind HP Petrol Pump, Near Salman Medical"
},

{
name:"Amber Super Market",
phone:"Not Available",
address:"Amrut Nagar Colony, Near A To Z Store, Jogeshwari West"
},

{
name:"Patel Bakery",
phone:"9967442095",
address:"Jogeshwari"
},

{
name:"Ayat General Store",
phone:"Not Available",
address:"Near Good Luck Bakery, Amrut Nagar, Ashnaya Apartment"
},

{
name:"Lucky General Stores",
phone:"Not Available",
address:"Near Goodluck Bakery"
},

{
name:"New Carona Medical",
phone:"Not Available",
address:"Near Danish"
},

{
name:"A To Z General Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"Simnani Medical",
phone:"Not Available",
address:"Near Jogeshwari Station"
},

{
name:"Arwah Dairy",
phone:"Not Available",
address:"Jogeshwari Station"
},

{
name:"Metro Mini Mart",
phone:"Not Available",
address:"Near Arwah Dairy, Kohinoor Apartment, Station Road"
},

{
name:"Shree Kharghar",
phone:"9619193389",
address:"Plot No 72, Near Ambe Mata Mandir, 1 No Road, Near Station"
},

{
name:"Laxmi Mart",
phone:"9322215925",
address:"Jawahar Nagar, Near Jain Mandir Bus Stop"
},

{
name:"Pragati Super Mart",
phone:"Not Available",
address:"Goregaon West, Jawahar Nagar"
},

{
name:"Bhakti Corner",
phone:"9167080256",
address:"Near Tirupati General Store"
},

{
name:"Ratna Farsan And Dry Fruits",
phone:"Not Available",
address:"Jawahar Nagar"
},

{
name:"Ashtvinayak Food Spot",
phone:"9920206022",
address:"Jawahar Nagar, Near Ratna Farsan"
},

{
name:"Kiran General Store And Mangalore Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"Shiv Medical",
phone:"9772197690",
address:"Near MK Gupta General Store"
},

{
name:"Betsa Kerala Mart",
phone:"Not Available",
address:"MG Road, Behind Manthan Hotel"
},

{
name:"Sai Super Market",
phone:"9930700701",
address:"Near Betsa Kerala Mart"
},

{
name:"Al Sifa General Store",
phone:"7666931515",
address:"Near Beet Chowki"
},

{
name:"SN General Store",
phone:"9867320532",
address:"Motilal Nagar No 2, MG Road, Khandaan Gully"
},

{
name:"Apna Bakery",
phone:"6396283030",
address:"Near Uncle Shop, Khandaan Gully"
},

{
name:"Uncle Shop",
phone:"7900066618",
address:"Motilal Nagar, Road No 3, Badi Masjid"
},

{
name:"Royal Bakery",
phone:"8279509033",
address:"Near Uncle Shop"
},

{
name:"Maharashtra Pan Bidi",
phone:"Not Available",
address:"Near Apna Bakery, Goregaon West, Moti Nagar No 2"
},

{
name:"Rubi Store",
phone:"Not Available",
address:"Goregaon West"
},

{
name:"Rathore Medical",
phone:"Not Available",
address:"Ram Mandir West Station Road, Near 2 Minutes"
},

{
name:"Gulshan Bakery Stores",
phone:"6393367883",
address:"Shop No 14, Sagar CHS, MMRDA Colony, Ram Mandir Road, Opposite Sangam Provision"
},

{
name:"Danish Bakery And General Store",
phone:"9870828954",
address:"Ram Mandir Road, Shop No 11, Near Gudiya General Store"
},

{
name:"New Jugnu",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Jai Bhavani Dairy",
phone:"9082039302",
address:"Near Mahadev Dairy, Ram Mandir Road"
},

{
name:"Mahadev Dairy Farm",
phone:"885301275",
address:"Shivdham Co Op Housing Society, MMRDA Complex, Opposite Aman Store"
},

{
name:"Laxmi Dairy",
phone:"8445725121",
address:"Near Jai Ambika Stationery"
},

{
name:"Utkarsh Medical",
phone:"Not Available",
address:"Ram Mandir Road"
},

{
name:"Mr Mart",
phone:"Not Available",
address:"Near Sidra General Store"
},

{
name:"Sidra Store",
phone:"Not Available",
address:"Near Ambika Store"
},

{
name:"Jai Ambika Stationery Store",
phone:"Not Available",
address:"Ram Mandir Road, Near Utkarsh Medical"
},

{
name:"Naba Medical",
phone:"Not Available",
address:"Near Laxmi Dairy"
},

{
name:"New Ratnadeep Store",
phone:"Not Available",
address:"Goregaon West, SV Road, Near Gokul Restaurant And Bar"
},

{
name:"Corner Stone",
phone:"Not Available",
address:"Dindoshi, Gokuldham"
},

{
name:"Nagrik Dhanaya",
phone:"9819069820",
address:"Gokuldham Market, Near Hariom Medical, Goregaon East"
},

{
name:"Ashtvinayak General Store",
phone:"Not Available",
address:"Amboli, Near Ambe Chemist"
},

{
name:"Bhavani General Store",
phone:"9892869384",
address:"Near Sumit Pan Shop And Bhavani Ramji Store, Kevni Pada, Amboli"
},

{
name:"Sumit Pan Shop",
phone:"Not Available",
address:"Amboli"
},

{
name:"Nandu Stores",
phone:"Not Available",
address:"Shree Rameshwar Society, Near Radiant Smiles"
}

];

/* CUSTOMER AUTOFILL */

function showCustomerSuggestions(){

let input =
document.getElementById("name")
.value
.toLowerCase();

let box =
document.getElementById(
"customerSuggestions"
);

box.innerHTML = "";

if(input.length < 1)return;

customers.forEach(customer=>{

if(
customer.name
.toLowerCase()
.includes(input)
){

box.innerHTML += `

<div
class="customer-suggestion"
onclick='selectCustomer(
${JSON.stringify(customer)}
)'
>

${customer.name}

</div>

`;

}

});

}

function selectCustomer(customer){

document.getElementById("name").value =
customer.name;

document.getElementById("phone").value =
customer.phone;

document.getElementById("address").value =
customer.address;

document.getElementById(
"customerSuggestions"
).innerHTML = "";

}

/* SEARCH PRODUCTS */

function searchProducts(){

let input =
document
.getElementById("searchInput")
.value
.toLowerCase();

let products =
document
.querySelectorAll(".product");

products.forEach(product=>{

let text =
product.innerText.toLowerCase();

if(text.includes(input)){

product.style.display="block";

}else{

product.style.display="none";

}

});

}

/* CATEGORY FILTER */

function filterCategory(category){

let sections =
document.querySelectorAll(".category-section");

if(category==="all"){

sections.forEach(section=>{

section.style.display="block";

});

return;

}

sections.forEach(section=>{

if(section.classList.contains(category)){

section.style.display="block";

}else{

section.style.display="none";

}

});

}

/* ADD TO CART */

function addToCart(name,price,qty){

qty = parseInt(qty);

let existing =
cart.find(item=>item.name===name);

if(existing){

existing.qty += qty;

}else{

cart.push({
name:name,
price:price,
qty:qty
});

}

updateCart();

}

/* UPDATE CART */

function updateCart(){

let cartBox =
document.getElementById("cart");

if(!cartBox)return;

cartBox.innerHTML="";

let total = 0;

cart.forEach(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;

cartBox.innerHTML += `

<div style="
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:12px;
padding:12px;
background:rgba(255,255,255,0.08);
border-radius:12px;
gap:10px;
">

<div>

<b>${item.name}</b><br>

${item.qty} pcs

</div>

<div>

₹${subtotal}

</div>

</div>

`;

});

cartBox.innerHTML += `

<h2 style="
margin-top:20px;
text-align:right;
">

Total: ₹${total}

</h2>

`;

}

/* WHATSAPP ORDER */

function sendWhatsApp(){

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

let address =
document.getElementById("address").value;

let note =
document.getElementById("note").value;

if(name==="" || phone==="" || address===""){

alert("Please fill all customer details");

return;

}

if(cart.length===0){

alert("Cart is empty");

return;

}

let message =
`*CRAXX ORDER*%0A%0A`;

message +=
`*Customer Name:* ${name}%0A`;

message +=
`*Phone:* ${phone}%0A`;

message +=
`*Address:* ${address}%0A`;

message +=
`*Note:* ${note}%0A%0A`;

message +=
`*Order Details:*%0A`;

let total = 0;

cart.forEach(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;

message +=
`• ${item.name} × ${item.qty} pcs = ₹${subtotal}%0A`;

});

message +=
`%0A*Total Amount:* ₹${total}`;

let whatsappNumber =
"919930328353";

let url =
`https://wa.me/${whatsappNumber}?text=${message}`;

window.open(url,"_blank");

}
