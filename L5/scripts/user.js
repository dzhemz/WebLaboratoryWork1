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
}

export {User}