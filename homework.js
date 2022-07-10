let aliyan = {
    name : "Aliyan Hussain",
    age : 20,
    email : "rohanhussain1@yahoo.com",
    speak: function() {
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`)
    }
}

let umaid = {
    name : "Umaid Hussain",
    age : 30,
    email : "rohanhussain1@yahoo.com",
    speak: function() {
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`)
    }
}


let name = "Bushra"

let rohan = {
    name : "Rohan Hussain",
    age : 23,
    email : "rohanhussain1@yahoo.com",
    siblings: [aliyan, umaid],
    speak: function() {
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`)
    }
}

let arr = [rohan, aliyan, umaid]
for( let i=0; i< arr.length; i++) {
    arr[i].speak();
}