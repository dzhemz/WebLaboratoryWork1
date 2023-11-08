import { index } from "./index.js";

class Purchase{
    product = null;

    setProduct(product){
        this.product = product; 
    }

    getContent(){
        let result = `<main class="container-fluid">
                        <aside class="sidebar"></aside>
                        <section class="container shadow-sm p-3 mb-3 bg-body rounded">
                            <h2 class="h3">Заказ на ${this.product.name}</h2>
                            <p class="fs-6">Цена за единицу ${this.product.price} ₽</p>
                            <div name="createPurchase" style="width=70%">
                                <label for="numberOfProducts" class="form-label">Количество</label>
                                <input class="form-control" type="text" id="numberOfProducts"></input>
                                <button type="button" class="btn btn-primary" style="margin-top:1%;" id="createPurchase">Опубликовать заказ</button>
                            </div>
                        </section>
                        <aside class="sidebar"></aside>
                        </main>`
        return result; 
    }

    configuration(){
        document.getElementById("createPurchase").addEventListener("click", () => {
            this.customConfiguration = () => {};
            if (this.user != null){
                
                console.log(this.product);
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
    }

}

export {Purchase};