// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users=[];
users.push(new User(234340, "Andriy", "Sobenko", "sobenko_and@gmail.com", 380983451981));
users.push(new User(234353, "Taras", "Klymenko", "klym_taras@gmail.com", 380983451981));
users.push(new User(346534, "Igor", "Oleksiv", "oleksivigor@gmail.com", 380984545634));
users.push(new User(544321, "Vanya", "Yaroslavenko", "vanya_yar@gmail.com", 380983451541));
users.push(new User(576767, "Petro", "Bondarenko", "bondar@gmail.com", 380504532241));
users.push(new User(345345, "Slavik", "Tarasiv", "sl_tarasiv@gmail.com", 380963455551));
users.push(new User(345324, "Oleg", "Viznuy", "viznn@gmail.com", 380673451982));
users.push(new User(568856, "Mykola", "Klymkiv", "sdgsd@gmail.com", 380982221983));
users.push(new User(879789, "Vitaliy", "Kharchishin", "vitkh@gmail.com", 380983451981));
users.push(new User(456453, "Bogdan", "Nykoliv", "bd@gmail.com", 380983458888));
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
users.filter(value => value.id % 2 === 0);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => {
    return a.id - b.id;
}));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients=[];
clients.push(new Client(345345,"client1","client_1","cl1@gmail.com",34345,[{title: 'milk',price: 22},{title: 'juice', price: 27},{title: 'coffe', price: 77}]));
clients.push(new Client(234353,"client2","client_2","cl2@gmail.com",12345,[{title: 'milk',price: 22},{title: 'juice', price: 27},{title: 'apple', price: 23},{title: 'lemon', price: 67}]));
clients.push(new Client(346534,"client3","client_3","cl3@gmail.com",33335,[{title: 'milk',price: 22}]));
clients.push(new Client(544321,"client4","client_4","cl4@gmail.com",34225,[{title: 'milk',price: 22},{title: 'juice', price: 27},{title: 'cola', price: 37}]));
clients.push(new Client(576767,"client5","client_5","cl5@gmail.com",11345,[{title: 'milk',price: 22},{title: 'juice', price: 27},{title: 'chocolate', price: 54},{title: 'ice cream', price: 34}]));
clients.push(new Client(345324,"client6","client_6","cl6@gmail.com",34545,[{title: 'juice', price: 27}]));
clients.push(new Client(568856,"client7","client_7","cl7@gmail.com",34445,[{title: 'milk',price: 22},{title: 'shake', price: 87},{title: 'juice', price: 27}]));
clients.push(new Client(568345,"client8","client_8","cl8@gmail.com",66645,[{title: 'cola', price: 27}]));
clients.push(new Client(879789,"client9","client_9","cl9@gmail.com",34575,[{title: 'milk shake',price: 88},{title: 'juice', price: 27},{title: 'lemon', price: 7}]));
clients.push(new Client(152225,"client10","client_10","cl10@gmail.com",37775,[{title: 'water', price: 14}]));
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => {
    return a.order.length - b.order.length
}));
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,graduation_year,max_speed,engine_volume){
this.model=model;
this.producer=producer;
this.graduation_year=graduation_year;
this.max_speed=max_speed;
this.engine_volume=engine_volume;

this.drive=function () {
    console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
}
this.info=function (){
    console.log(`Model - ${this.model}
        Producer - ${this.producer}
        Graduation year - ${this.graduation_year}
        Max speed - ${this.max_speed}
        Engine volume - ${this.engine_volume}`);
}
this.increaseMaxSpeed=function (newSpeed){
    this.max_speed+=newSpeed;
}
this.changeYear=function (newValue) {
this.graduation_year=newValue;
}

    this.addDriver=function (driver) {
        this.chauffeur=driver;
    }
}
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars{
    constructor(model, producer, graduation_year, max_speed, engine_volume) {
        this.model = model;
        this.producer = producer;
        this.graduation_year = graduation_year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    }
    info(){
        console.log(`Model - ${this.model}
        Producer - ${this.producer}
        Graduation year - ${this.graduation_year}
        Max speed - ${this.max_speed}
        Engine volume - ${this.engine_volume}`);
    }
    increaseMaxSpeed(newSpeed){
        this.max_speed+=newSpeed;
    }
    addDriver (driver){
        this.chauffeur=driver;
    }

}
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class popelushka{

    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let MasPopelushok = [
    p1 = new popelushka("Anya", 25, 40),
    p2 = new popelushka("Alina", 23, 41),
    p3 = new popelushka("Olya", 27, 40),
    p4 = new popelushka("Alla", 30, 42),
    p5 = new popelushka("Fiona", 22, 37),
    p6 = new popelushka("Mari", 31, 40),
    p7 = new popelushka("Zafira", 28, 39),
    p8 = new popelushka("Ella", 22, 38),
    p9 = new popelushka("Ella", 19, 37),
    p10 = new popelushka("Zlata", 29, 43)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prins {
    constructor(name, age, foundTufel) {
        this.name = name;
        this.age = age;
        this.foundTufel = foundTufel;
    }
}
let prinsKaspian=new prins("Kaspian",25,38);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popelushka of MasPopelushok) {
    if(popelushka.foot_size===prinsKaspian.foundTufel){
        console.log(`The love of a prince `);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(MasPopelushok.find(value => value.foot_size === 38));
