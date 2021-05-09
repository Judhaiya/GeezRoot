let closeWrapper = document.querySelector(".mobileview-close");
let openbtn = document.querySelector(".open-btn")
let closebtn=document.querySelector(".close-btn")

openbtn.addEventListener('click',showNav)
function showNav(){
  closeWrapper.style.display='block';
  openbtn.style.display='none'
}
closebtn.addEventListener('click',closeNav)
function closeNav(){
  openbtn.style.display='block';
  closeWrapper.style.display='none';
}

/*Form Validation */
let nameInput=document.querySelector(".name");
let submit = document.querySelector(".submit");
let ErrorCheck = document.querySelector(".error");
let EmailInput = document.querySelector(".email");
let ContactInput = document.querySelector(".contact")
let RandomEmpty = document.querySelector(".random-empty")
let contactCheck = document.querySelector(".contact-check")
let FirstPassword = document.querySelector(".first-password")
let CheckPassword = document.querySelector(".check-password")
let PasswordValidation = document.querySelector(".password-validation")


const Emailvalidation =EmailInput.value.match("@ .")
submit.addEventListener('click',checkSubmit)
function checkSubmit(e){
  e.preventDefault()
  if(nameInput.value === "" || EmailInput.value === "" || ContactInput.value ==="" ){
     RandomEmpty.classList.add("random-empty-block")
  
  }
  if(ContactInput.value.length > 10){
    contactCheck.classList.add("contact-check-block");
    
   ContactInput.value=""
   setTimeout(contactVerify,5000);

}
if(FirstPassword.value.length>8){
  PasswordValidation.classList.add("password-validation-block")
  setTimeout(password,5000)
}
if( EmailInput.value.match(/@./g)){
    alert('it has required parameters')
  }
  console.log(ContactInput.value.toString().length)
}
function contactVerify(){
  contactCheck.classList.remove("contact-check-block")
}
function password(){
  PasswordValidation.classList.remove("password-validation-block")
}

