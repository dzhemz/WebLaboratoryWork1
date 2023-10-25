class User {
    name = null;
    phone_number = null;
    password = null;
    email = null;
    money = null;

    constructor(name, phone_number, email, password, money){
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.password = password;
        this.money = money;
    }
}

export {User}