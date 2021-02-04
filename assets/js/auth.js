document.getElementById("emailForm").addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting
    const email = document.getElementById("email").value;
    if(email.substring(email.length-9)==="sandi.net"){
        localStorage.setItem("userEmail", email);
        window.location="/";
    }else{
        document.getElementById("errmsg").style.display = "block";
    }
});