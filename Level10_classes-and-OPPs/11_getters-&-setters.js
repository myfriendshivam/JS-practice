class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    // if you get the value
    get password(){
        return this._password.toUpperCase()
    }
    // if you set the value
    set password(value){
        this._password = value
    }

}

const shivam  = new User("shivam@gmail.com", "abc")
console.log(shivam.password);
// we create a class then some member information don,t show anyone or if seen the user then some token show

