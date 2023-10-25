import {header} from './header.js';
import {footer} from './footer.js';
import {User} from './user.js';
import {registatrion, signUp} from './singup.js';
import {singInContent, signIn} from './singin.js';

let content = [header, footer]
let user = null;

const addContent = (section) => {
    content.pop();
    content.push(section);
    content.push(footer);
}

const setContent = () => {
    const div = document.createElement("div");
    div.innerHTML = content.join("");
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".content").appendChild(div);
    standartConfiguration();
}

const standartConfiguration = () => {

    if (user != null){
        document.getElementById("toAccount").addEventListener("click"), () => {
            //
        }
    }

    document.getElementById("singUp").addEventListener("click", () => {
        clearContent();
        addContent(registatrion);
        setContent();
        signUp();
    });

    document.getElementById("singIn").addEventListener("click", () => {
        clearContent();
        addContent(singInContent);
        setContent();
        signIn();
    })
}

const clearContent = () => content = [header, footer];

setContent();

