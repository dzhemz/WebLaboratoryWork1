class Account {
    user = null;
    isWorker = false;
    main = null;

    constructor (main){
        this.main = main;
    }

    setUser(newUser){
        this.user = newUser;
    }
    
    getContent(){
        if (this.user == null){
            return `<main class="container-fluid">
                        <aside class="sidebar"></aside>
                        <section id="accountInfo" class="container shadow-sm p-3 mb-3 bg-body rounded">
                        <h2 class="h3">Информация об аккаунте</h2>
                        <p class="fs-4">Вы не вошли в аккаунт</p>
                        </section>
                    </main>`;
        }

        else if (!this.isWorker) {
            let result = [`<main class="container-fluid">
                          <section id="accountInfo" class="container shadow-sm p-3 mb-3 bg-body rounded">
                          <h2 class="h3">Ваш аккаунт</h2>
                          <p class="fs-4">${this.user.name}</p>
                          <p class="fs-6">Ваша электронная почта ${this.user.email}</p>
                          <p class="fs-6">Баланс ${this.user.money} ₽</p>
                          </section>`]
            
            result.push(this.generateBody());
            result.push(`<aside class="sidebar"></aside>
                        </main>`);
        
            return result.join("\n");
        }
    }

    generateBody(){
        let result = [`<section id="ordersInfo" class="container shadow-sm p-3 mb-3 bg-body rounded">`,
                        `<div class="accordion" id="accordionPurchase">`];

        result.push(this.user.orders.map( elem => {
            return ` <div class="accordion-item">
            <h2 class="accordion-header" id="heading${elem.id}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${elem.id}" aria-expanded="false" aria-controls="collapse${elem.id}">
                ${elem.product} в количестве ${elem.number} шт. 
              </button>
            </h2>
            <div id="collapse${elem.id}" class="accordion-collapse collapse" aria-labelledby="heading${elem.id}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Подробная информация о заказе</strong>
                <p class="fs-6">Сумма заказа ${elem.totalPrice}₽</p>
                <p class="fs-6">Исполнитель ${elem.worker==="Nobody"?"Не назначен":elem.worker }</p>
                <p class="fs-6">Статус заказа: ${elem.status}</p>
            </div>
          </div>`;
            }
        ).join("\n"));
        
        result.push('</div>',
            `</section>`);

        return result.join("\n");
    }
}

export {Account};