function sendEmail(){
    const templateParams ={
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        subject : document.querySelector("#subject").value,
        message : document.querySelector("#message").value,
    };
    emailjs.send("service_eikmk88","template_djw8htp",templateParams)
    .then(()=> alert("Email sent!").catch(()=>alert("Email not sent. Please try again.")));

}