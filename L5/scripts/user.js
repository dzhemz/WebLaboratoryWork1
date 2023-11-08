class User {
    name = null;
    password = null;
    email = null;
    money = null;
    orders = []

    constructor(name, email, password, money, orders){
        this.name = name;
        this.email = email;
        this.password = password;
        this.money = money;
        this.orders = orders;
    }

    equals(other){
        return (this.email == other.email || this.name == other.name) && this.password == other.password;
    }

    addOrder(order){
        this.orders.push(order);
    }
}

export {User};