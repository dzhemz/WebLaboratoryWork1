import {header} from './header.js';
import {footer} from './footer.js';
import {registatrion, signUp} from './singup.js';
import {signIn} from './singin.js';
import {Account} from './account.js';
import {Communicator} from './communication.js';
import { orders } from './orders.js';
import { users } from './users.js';
import { Product } from './product.js';
import { Purchase } from './purchase.js';

class Index {
    orders = orders;
    purchase = new Purchase();
    product = new Product();
    users = users;
    content = [header, footer];
    account = new Account(this);
    communicator = new Communicator(this);
    signIn = new signIn(this);
    customConfiguration = () => {};
    user = null;

    stConfiguration(){

        document.getElementById("toAccount").addEventListener("click", () => {
            this.clearContent();
            this.addContent(this.account.getContent());
            this.setContent();
        });

        document.getElementById("findElements").addEventListener("click", () => {
            this.clearContent();
            const element = document.getElementById("elementsToFind").value;
            this.product.setProducts([]);
            this.product.findProducts(element);
            this.customConfiguration =  () => {
                this.product.products.forEach(elem => {
                    document.getElementById(`buy${elem.id}`).addEventListener("click", () => {
                        this.purchase.setProduct(elem);
                        this.clearContent();
                        this.addContent(this.purchase.getContent());
                        this.customConfiguration = () => {
                            document.getElementById("createPurchase").addEventListener("click", () => {
                                this.customConfiguration = () => {};
                                if (this.user != null){
                                    const order = {
                                         id: this.user.orders.length + 1,
                                         number:parseInt(document.getElementById(`numberOfProducts`).value), 
                                         clientName:this.user.name, worker:"Не установлен", 
                                         status:"Не подтверждён",
                                         product:elem.name,
                                         totalPrice: parseInt(document.getElementById(`numberOfProducts`).value) * elem.price};
                                    
                                    if (order.totalPrice > index.user.money){
                                        alert("Не достаточно средств для создания заказа");
                                    }
                    
                                    else{
                                        this.user.money -= order.totalPrice;
                                        this.user.addOrder(order);
                                        this.account.setUser(this.user);
                                        this.clearContent();
                                        this.addContent(this.account.getContent());
                                        this.setContent();
                                    }
                                    
                                }
                            else{
                                alert("Вы не вошли в аккаунт");
                            }
                            })
                        };
                        this.setContent();
                    })
                })
            };
            
            this.addContent(this.product.getContent());
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
            this.addContent(this.signIn.singInContent);
            this.setContent();
            this.signIn.signIn();
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

    setUser(user){
        this.user = user;
    }
}


const index = new Index();
index.addContent(index.account.getContent());
index.setContent();
export {index};