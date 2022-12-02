function veriForm(){
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;
    if(!nom){
        alert("Veuillez renseigner votre nom");
        return false;
    }
    if(!prenom){
        alert("Veuillez renseigner votre Prénom");
        return false;
    }
    if(!email){
        alert("Veuillez renseigner votre email");
        return false;
    }
    if(!telephone){
        alert("Veuillez renseigner votre telephone");
        return false;
    }
    if(!sujet){
        alert("Veuillez renseigner votre sujet");
        return false;
    }
    if(!message || message == "Votre message"){
        alert("Veuillez renseigner votre message");
        return false;
    }
    return true;
}
function verifMessage(){
    if(this.value == "Votre message") {
        this.value = "";
    }
    else if(this.value == "")
    {
        this.value = "Votre message";
    }
};
const formulaire = document.getElementById("verif");
formulaire.addEventListener("submit", veriForm);
// Pour notre champs message
const verif_message = document.getElementById("message");
verif_message.addEventListener("click",verifMessage);
// Des qu'on quitte le champs
verif_message.addEventListener("blur",verifMessage);
verif_message.addEventListener("keyup", function(){
    let str_message = verif_message.value;
    const nombre_car = document.getElementById('cmax').value;
    let operation = nombre_car-str_message.length;
    document.getElementById("number").value = operation;
});