const profile = document.querySelector(".flex-container")
const registerBtn = document.querySelector(".registerBtn")
// const confirmBtn = document.querySelector(".confirmBtn")
const changePasswordForm = document.querySelector(".changePasswordForm")
const changePasswordBtn = document.querySelector(".changePasswordBtn")
const greenSign = document.querySelectorAll("input")

const currentPasswordE1 = document.querySelector("#currentPassword");
const newPasswordE1 = document.querySelector("#newPassword");
const form = document.querySelector("#signup");

// confirmBtn.addEventListener("click", showProfile)
changePasswordBtn.addEventListener("click", changesPassword)

function changesPassword(){
    confirm("Are you sure about changing your password")
    profile.style.visibility = "hidden"
    changePasswordForm.style.visibility = "visible";
    registerForm.style.visibility = "hidden"
    document.querySelector(".password>span").textContent = document.querySelector("#newPassword").value;
}
// ==================================================

form.addEventListener("submit",function(e) {
    e.preventDefault();

    let iscurrentPasswordValid = checkCurrentPassword(),
        isIdsValid = checkNewPassword();
    let isFormValid = iscurrentPasswordValid && isIdsValid;
    if(isFormValid){
        changePasswordForm.style.visibility = "hidden";
        profile.style.visibility = "visible"
         document.querySelector(".password>span").textContent = document.querySelector("#newPassword").value;
         
    }
})
function checkNewPassword(){
    console.log('new')
    let valid = false;
    const newPass= newPasswordE1.value.trim();
    if(!isRequired(newPass)){
        showError(newPasswordE1, 'New password cannot be blank.');
    }
    else if(!isPasswordValid(newPass)){
        showError(newPasswordE1, `New password is not valid. Password should have aleast 8
        characters. It can be captial letters or special characters or numbers or mix.`)
    }
    else{
        showSuccess(newPasswordE1);
        valid = true;
    }
    return valid;
}

function checkCurrentPassword(){
    let valid = false;
    const oldPass = currentPasswordE1.value.trim();
    if(!isRequired(oldPass)){
        showError(currentPasswordE1, 'Current password cannot be blank.');
    }
    else{
        showSuccess(currentPasswordE1);
        valid = true;
    }
    return valid;
};

isRequired = value => value=== ''?false:true;
isPasswordValid=(newPass)=>{
    const re =/^[a-zA-Z\-0-9\!@#\$%\^&\*]{8,}$/;
    return re.test(newPass);
}
showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = message;
}

showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    formField.querySelector("small").textContent = "";
}





