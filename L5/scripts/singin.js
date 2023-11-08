import { User } from "./user.js";
import {index} from "./index.js"

class signIn{
  main = null;
  constructor(main){
    this.main = main;
  }
        singInContent = `
      <main class="container-fluid">
      <aside class="sidebar"></aside>
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

        <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck2">
        <label class="form-check-label" for="exampleCheck2">Я сотрудник</label>
        </div>

        <button type="submit" class="btn btn-primary" id="sing_in_btn">Войти</button>
      </form>
      <aside class="sidebar"></aside>
      </main>
      `;

      signIn = () => {
          this.setButtonSingInEvent();
      }

      setButtonSingInEvent = () => {
          const sing_in_button = document.querySelector("#sing_in_btn");
          sing_in_button.addEventListener("click", (e) => {
              e.preventDefault();
              let email = document.getElementById("exampleInputEmail1").value;
              let password = document.getElementById("exampleInputPassword1").value;
              let singInUser = new User(null, email, password, null, null);
              const user = index.users.find((elem) => singInUser.equals(elem));

              if (user !== undefined) {
                index.setUser(user);
                index.account.setUser(user);
                index.clearContent();
                index.addContent(index.account.getContent());
                index.setContent();
              }
              else {
                alert("Такого пользователя нет");
              }
          })
      }
}
export {signIn};