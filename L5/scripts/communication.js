class Communicator {

    main = null;
    constructor(main){
        this.main = main;
    }

/*
    #products = [];

    #createRequest() {
        var Request = false;
        if (window.XMLHttpRequest) Request = new XMLHttpRequest();
        else if (window.ActiveXObject) {
            try { Request = new ActiveXObject("Microsoft.XMLHTTP");}    
            catch (CatchException){ Request = new ActiveXObject("Msxml2.XMLHTTP");}
        }
    
        if (!Request) alert("Невозможно создать XMLHttpRequest");
        return Request;
    }

    #sendRequest(r_method, r_path, r_args, r_handler) {
        var Request = CreateRequest();
        if (!Request) return;
        
        Request.onreadystatechange = function(){
            if (Request.readyState == 4) r_handler(Request);
        }
        
        if (r_method.toLowerCase() == "get" && r_args.length > 0) r_path += "?" + r_args;
        
        Request.open(r_method, r_path, true);
        
        if (r_method.toLowerCase() == "post") {
            Request.setRequestHeader("Content-Type","application/json; charset=utf-8");
            Request.send(r_args);
        }
        else if (r_method.toLowerCase() == "put"){
            Request.setRequestHeader("Content-Type", "application/json; charset=uft-8");
            Request.send(r_args);
        }
        else { Request.send(null);}
    } 

    #setProducts(Request){
        this.#products = eval("(" + Request.responseText + ")");
    }

    getProducts(){
        return this.#products;
    }

    setExecutor(name, id){
        this.#sendRequest("put", "localhost:8080/setExecutor/" + name, ["id=" + id], ()=>{});
    }

    setStatusOrder(orderId, statusId){
        this.#sendRequest("put", "localhost:8080/setStatusOrder/" + orderId, ["statusId=" + statusId], ()=>{});
    }

    createOrder(order){
        this.#sendRequest("post", "localhost:8080/createOrder/" + order.getClient(), 
        ["orderProduct=" + order.getProduct, "orderNumber=" + order.getNumber(), "orderDateExe=" + order.getDateOfExecution()]);
    }

    findProducts(name){
        this.#sendRequest("get", "localhost:8080/findProducts/" + name, [], this.#setProducts);
    }

    createNewUser(user){
        this.#sendRequest("post", "localhost:8080/createNewClient/" + user.name, 
        ["userPhone="+user.phone_number,
         "userEmail=" + user.email,
         "userPassword=" + user.password,
         "userMoney=" + user.money], () => {})
    }

    createNewWorker(user){
        this.#sendRequest("post", "localhost:8080/createNewWorker/" + user.name,
        ["userPhone="+user.phone_number,
        "userEmail="+user.email,
        "userPassword="+user.password,
        "userMoney="+user.money], () => {})
    }
    */


    async makeApiRequest(address, argument, type_method, new_body, controller) {
        const response = await fetch(`http://localhost:8080/${address}/${argument}`, {method: type_method, headers: {'Content-Type': 'application/json'}, body: new_body});
        response.then(controller);
    }

}

export {Communicator};