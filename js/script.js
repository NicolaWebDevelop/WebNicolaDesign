function sendMail(){
    


let parms= {


contact,name : document.getElementById("name").value,
contact,email : document.getElementById("contact-email").value,
subject : document-getElementById("subject").value,
contact,message : document.getElementById("contact-message").value,

}

emailjs.send("template_d0hzmad" , "wjNhjw3fZZ_2CYTYb", parms).then(alert("Email inviata con successo!"))


}
