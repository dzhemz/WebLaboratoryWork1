class Product {
    
    products = [];
    allProducts = [
    
    {id:1, name:"iPhone 15 Pro Max", price:150000, nameCategory:"Смартфоны\n"},
    {id:2, name:"Macbook M2 Air 15 \'\' ", price:150000, nameCategory:"Ноутбуки\n"},
    {id:3, name:"RTX 4090", price:100000, nameCategory:"Видеокарта\n"},
    {id:4, name:"AMD Ryzen 7950X", price:25000, nameCategory:"Процессор\n"},
    {id:5, name:"Samsung980PRONVMeM2", price: 10000, nameCategory:"SSD\n"},
    {id:6, name:"iPhone 15", price:75000, nameCategory:"Смартфоны\n"},
    {id:7, name:"iPhone 15 Plus", price:85000, nameCategory:"Смартфоны\n"},
];


    findProducts(name){
        console.log(name);
        if (name == ""){
            this.products = this.allProducts;
        }
        else {
            let right = name.length;
            while (this.products.length == 0 && right > 0){
                this.products = this.allProducts.filter(elem => elem.name.indexOf(name.substr(0, right)) != -1);
                right -=1;
            }
            console.log(this.products);
        }
    }

    setProducts(products){
        this.products = products; 
    }

    getContent(){
        let result = [`<main class="container-fluid">`,
                      `<aside class="sidebar"></aside>`];

        
        result.push(this.products.map(elem => {
            let miniResult = [`<section class="container shadow-sm p-3 mb-3 bg-body rounded">`];
            miniResult.push(`<p class="fs-6">Название ${elem.name}</p>`);
            miniResult.push(`<p class="fs-6">Цена ${elem.price} ₽.</p>`);
            miniResult.push(`<p class="fs-6">Категория ${elem.nameCategory}</p>`);
            miniResult.push(`<button type="button" id="buy${elem.id}" class="btn btn-primary">Купить</button>`)
            miniResult.push(`</section>`);
            return miniResult.join("\n");
        }
            ));
        result.push(`</main>`);
        return result.join("\n");
    }
}

export {Product};