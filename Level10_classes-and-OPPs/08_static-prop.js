// Static Properties

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const shivam = new User("Shivam")
// console.log(shivam.createId());

// ham creatId harkishi object ko nhi dena chahte he jo user class se instantiate (create by) hua he. -> Then use static keyword

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
console.log(iphone.createId());
