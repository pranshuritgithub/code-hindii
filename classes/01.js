// class User{
//     constructor(username,email,password)
//     {
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chup = new User('Prashant','pj@gmail.com',467)
// {
//     console.log(chup.encryptPassword());
//     console.log(chup.changeUsername())
// }

// behind the scene

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}


const tea = new  user('Prashant','pj@gmail.com',400)
{
    console.log(tea);
    console.log(tea.encryptPassword())
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// inheritance

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
}

const hut = new User('Prashant','pj@gmail.com',500)