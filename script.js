
const webhook="PASTE_DISCORD_WEBHOOK";

const admins=["Farm","Oxi-Wanteed13","SuperCAT71"];
const dev=["𝔏𝔢 𝔯𝔬𝔲𝔱𝔦𝔢𝔯 𝔡𝔲 87"];

const currentUser="Farm";

const drivers=[
{name:"Farm",role:"Patron"},
{name:"Oxi-Wanteed13",role:"Co-Patron"},
{name:"SuperCAT71",role:"Manager"},
{name:"𝔏𝔢 𝔯𝔬𝔲𝔱𝔦𝔢𝔯 𝔡𝔲 87",role:"D2"},
{name:"Mr_Wolf",role:"D2"}
];

const container=document.getElementById("drivers");

if(container){

drivers.forEach(d=>{

let div=document.createElement("div");
div.className="driver";
div.innerHTML=`🚛 ${d.name}<br>${d.role}`;
container.appendChild(div);

});

}

function isAdmin(){

return admins.includes(currentUser)||dev.includes(currentUser)

}

function createConvoy(){

if(!isAdmin()){
alert("Accès refusé")
return
}

const depart=document.getElementById("depart")?.value;
const arrivee=document.getElementById("arrivee")?.value;
const date=document.getElementById("date")?.value;
const heure=document.getElementById("heure")?.value;
const serveur=document.getElementById("serveur")?.value;

fetch(webhook,{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
content:`🚛 FarmOtor's Transport

PROGRAMME CONVOI

Départ : ${depart}
Arrivée : ${arrivee}

Date : ${date}
Heure : ${heure}

Serveur : ${serveur}`
})
});

alert("Programme envoyé sur Discord")

}

function addDriver(){

if(!isAdmin()) return alert("Accès refusé")

let name=prompt("Nom du chauffeur")

if(name){
drivers.push({name:name,role:"Conducteur"})
alert("Chauffeur ajouté")
}

}

function removeDriver(){

if(!isAdmin()) return alert("Accès refusé")

let name=prompt("Nom du chauffeur à supprimer")
alert("Suppression simulée pour "+name)

}

function testWebhook(){

fetch(webhook,{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
content:"Test Webhook FarmOtor's Transport"
})
})

alert("Webhook envoyé")

}
