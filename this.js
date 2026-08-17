// This keyword in javascript 

const student = {
    name: "Rahul",

    showName: function () {
        console.log(this.name);
    }
};

student.showName();


// const user = {
//     name: "Aman",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// user.greet();


const user = {
    name: "Aman",

    greet: function () {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

user.greet();

