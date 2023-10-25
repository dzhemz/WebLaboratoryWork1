import {validateMail, validateCurrentPasswords} from './validatePasswords.js'

const registatrion = `
<main class="container-fluid">
<form name="registration">
  <div class="mb-3">
    <label for="first_name" class="form-label">Имя</label>
    <input class="form-control" type="text" id="first_name">
  </div>

  <div class="mb-3">
    <label for="last_name" class="form-label">Фамилия</label>
    <input class="form-control" type="text" id="last_name">
  </div>

  <div class="mb-3">
  <label for="phone_number" class="form-label">Номер телефона</label>
  <input class="form-control" type="text" id="phone_number">
</div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" id="password1">Пароль</label>
    <input type="password" class="form-control password" id="exampleInputPassword1">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label" id="password2" >Подтвердите пароль</label>
    <input type="password" class="form-control password" id="exampleInputPassword2">
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
  </div>

  <button type="submit" class="btn btn-primary" id="submit">Зарегистрироваться</button>
</form>
</main>
`
const signUp = () => {
  //
  setButtonSingUpEvent();   
}

const setButtonSingUpEvent = () => {
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        validateMail();
        validateCurrentPasswords();});
}


export {registatrion, signUp};
