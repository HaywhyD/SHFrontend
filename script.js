function checkForm(){
    var nameBox = document.getElementById('name');
    var emailBox = document.getElementById('email');
    var phoneBox = document.getElementById('phone');
    var dobBox = document.getElementById('gender');
    var passwordBox = document.getElementById('password');

    if(nameBox.value === ""){
        nameBox.style.borderColor = 'red';

        return false;
    }else{
        nameBox.style.borderColor = 'rgba(128, 128, 128, 0.521)';
    }
    if(emailBox.value === ""){
        emailBox.style.borderColor = 'red';
        return false;
    }else{
        emailBox.style.borderColor = 'rgba(128, 128, 128, 0.521)';
    }
    if(phoneBox.value === ""){
        phoneBox.style.borderColor = 'red';
        return false;
    }else{
        phoneBox.style.borderColor = 'rgba(128, 128, 128, 0.521)';
    }
    if(dobBox.value === ""){
        dobBox.style.borderColor = 'red';
        return false;
    }else{
        dobBox.style.borderColor = 'rgba(128, 128, 128, 0.521)';
    }
    if(passwordBox.value === ""){
        passwordBox.style.borderColor = 'red';
        return false;
    }else{
        passwordBox.style.borderColor = 'rgba(128, 128, 128, 0.521)';
    }
    alert("Form Submitted Successfully")
    nameBox.value = "";
    emailBox.value = "";
    phoneBox.value = "";
    passwordBox.value = "";
    dobBox.value = "";
    return true;
    
}