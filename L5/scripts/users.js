import {User} from './user.js';
import {orders} from './orders.js';

const user = new User("Виктор Иванов", "victorIvanov@mail.ru", "11111111Az!", 400000, (orders.get(1)));
const users = [user];

export {users};