import {header} from './header.js';
import {footer} from './footer.js';
import {registatrion, signUp} from './singup.js';
import {singInContent, signIn} from './singin.js';
import {Account} from './account.js';


class Index {
    content = [header, footer];
    account = new Account();
    customConfiguration = () => {};
    user = null;

    stConfiguration(){

        document.getElementById("toAccount").addEventListener("click", () => {
            this.clearContent();
            this.addContent(this.account.getContent());
            this.setContent();
        });

        document.getElementById("singUp").addEventListener("click", () => {
            this.clearContent();
            this.addContent(registatrion);
            this.setContent();
            signUp();
        });

        document.getElementById("singIn").addEventListener("click", () => {
            this.clearContent();
            this.addContent(singInContent);
            this.setContent();
            signIn();
        })
    }

    clearContent(){this.content = [header, footer];}

    addContent(section){
        this.content.pop();
        this.content.push(section);
        this.content.push(footer);
    }

    setContent(){
        const div = document.createElement("div");
        div.innerHTML = this.content.join("");
        document.querySelector(".content").innerHTML = "";
        document.querySelector(".content").appendChild(div);
        this.stConfiguration();
        this.customConfiguration();
    }
}


let index = new Index();
index.addContent(index.account.getContent());
index.setContent();