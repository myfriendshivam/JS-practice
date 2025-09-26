// Using Object to create get and set
const User = {
    _email: 'Chai@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

// Es22 Proposal for private class fileds 