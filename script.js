function checkForm(){
    var nameBox = document.getElementById('name');
    var emailBox = document.getElementById('email');
    var phoneBox = document.getElementById('phone');
    var dobBox = document.getElementById('dob');
    var passwordBox = document.getElementById('password');

    if(nameBox.value === ""){
        nameBox.style.borderColor = 'red';

        return false;
    }else{
        nameBox.style.borderColor = 'black';
    }
    if(emailBox.value === ""){
        emailBox.style.borderColor = 'red';
        return false;
    }else{
        emailBox.style.borderColor = 'black';
    }
    if(phoneBox.value === ""){
        phoneBox.style.borderColor = 'red';
        return false;
    }else{
        phoneBox.style.borderColor = 'black';
    }
    if(dobBox.value === ""){
        dobBox.style.borderColor = 'red';
        return false;
    }else{
        dobBox.style.borderColor = 'black';
    }
    if(passwordBox.value === ""){
        passwordBox.style.borderColor = 'red';
        return false;
    }else{
        passwordBox.style.borderColor = 'black';
    }
    alert("Form Submitted Successfully")
    nameBox.value = "";
    emailBox.value = "";
    phoneBox.value = "";
    passwordBox.value = "";
    dobBox.value = "";
    return true;
    
}