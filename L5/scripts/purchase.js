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
                            <form name="createPurchase" style="width=70%">
                                <label for="numberOfProducts" class="form-label">Количество</label>
                                <input class="form-control" type="text" id="numberOfProducts">
                                <button type="button" class="btn btn-primary">Опубликовать заказ</button>
                            </form>
                        </section>
                        <aside class="sidebar"></aside>
                        </main>`
        return result; 
    }

}

export {Purchase};