class Product {
    
    products = [];

    setProducts(products){
        this.products = products; 
    }

    getContent(){
        let result = [`<main class="container-fluid">`,
                      `<aside class="sidebar"></aside>`];

        
        result.push(this.products.map(elem => {
            let miniResult = [`<section class="container shadow-sm p-3 mb-3 bg-body rounded">`];
            miniResult.push(`<p class="fs-6">Название ${elem.name}</p>`);
            miniResult.push(`<p class="fs-6">Цена ${elem.price}</p>`);
            miniResult.push(`<p class="fs-6">Категория ${elem.nameCategory}`);
            miniResult.push(`<button type="button" id="buy${elem.id}" class="btn btn-primary">Купить</button>`)
            miniResult.push(`</section>`);
            return miniResult.join("\n");
        }
            ));
        result.push(`</main>`);
    }

    configuration(){
        this.products.forEach(elem => {
            document.getElementById(`buy${elem.id}`).addEventListener("click", () => {})
        })
    }
}

export {Product};