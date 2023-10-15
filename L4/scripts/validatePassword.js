function validatePasswords() {
    const passwordInputs = document.querySelectorAll(".password");

    const password1 = passwordInputs[0].value;
    const password2 = passwordInputs[1].value;

    if (password1 !== password2) {
        alert("Пароли не совпадают");
        return;
    }

    if (validatePassword(password1)) {alert("Вы успешно зарегистрировались");}
}


function validatePassword(str) {
    if (str.length < 8) {
        alert("Пароль должен быть больше 8 символов");
        return;
    }

    const specialCharsRegex = /[.!()&%^?=-_{}~№*"+']+/;
    if (!specialCharsRegex.test(str)) {
        alert("Пароль должен содержать хотя бы один из специальных символов .!()&%^?=-_{}~№*\"+' ");
        return;
    }

    const digitRegex = /\d/;
    if (!digitRegex.test(str)) {
        alert("Пароль должен содержать хотя бы одну цифру");
        return;
    }

    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    if (!lowercaseRegex.test(str) || !uppercaseRegex.test(str)) {
        alert("Пароль должен содержать символы разных регистров");
        return;
    }
    
    return true;
}

function validateMail(){
    const fieldMail = document.querySelector("#exampleInputEmail1");
    if (!fieldMail.value.includes("@")) { alert("Почта должна содержать @ символ");}
}


const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    validateMail();
    validatePasswords();
});
