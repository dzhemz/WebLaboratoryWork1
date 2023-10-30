class User {
    name = null;
    phone_number = null;
    password = null;
    email = null;
    money = null;
    orders = []

    constructor(name, phone_number, email, password, money, orders){
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.password = password;
        this.money = money;
        this.orders = orders;
    }
}

export {User}