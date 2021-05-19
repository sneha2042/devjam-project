const formVal = document.getElementById('form')
const firstnameVal = document.getElementById('firstname')
const lastnameVal = document.getElementById('lastname')
const emailVal = document.getElementById('email')
const passwordVal = document.getElementById('password')
const cpasswordVal = document.getElementById('cpassword')

//add eventsVal

form.addEventListener('submit' , (event) => {event.preventDefault();
    validate();
})

//more email validation

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}





//define the validate functions
const validate = () => {
    const formVal = document.value.trim();
const firstnameVal = document.value.trim();
const lastnameVal = document.value.trim();
const emailVal = document.value.trim();
const passwordVal = document.value.trim();
const cpasswordVal = document.value.trim();
}

//validate firstname

if(firstnameVal === ""){
    setErrorMsg(firstname , 'firstname cannot be blank');
}
else if (firstnameVal.length <= 2){
    setErrorMsg(firstname , 'firstname minimum 3 char');
}
else {
    setSuccessMsg(firstname);
}


//validate lastname

if(lastnameVal === ""){
    setErrorMsg(lastname , 'lastname cannot be blank');
}
else if (lastnameVal.length <= 2){
    setErrorMsg(lastname , 'lastname minimum 3 char');
}
else {
    setSuccessMsg(lastname);
}

//validate email

if(emailVal === ""){
    setErrorMsg(email , 'email cannot be blank');
}
else if (!isEmail(emailVal)){
    setErrorMsg(emailVal , 'Not a vaild Email');
}
else {
    setSuccessMsg(email);
}

function setErrorMsg(input , errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className ="form-control error";
    small.innerText = errormsgs;
}
