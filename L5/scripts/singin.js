let singInContent = `
<main class="container-fluid">
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
  </div>

  <button type="submit" class="btn btn-primary" id="sing_in_btn">Войти</button>
</form>
</main>
`;

const signIn = () => {
    setButtonSingInEvent();
}

const setButtonSingInEvent = () => {
    const sing_in_button = document.querySelector("#sing_in_btn");
    sing_in_button.addEventListener("click", (e) => {
        e.preventDefault(); 
    })
}

export {singInContent, signIn};