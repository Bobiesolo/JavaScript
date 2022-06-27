//stars_1_1
//
// let age_2 = 18;
// let age_3 = 60;
// const checkAge = function(age){
//     if (age < age_2) {
//         console.log("You don’t have access cause your age is " + age + " It’s less then")
//     } else if(age >=  age_2 & age <  age_3){
//         console.log("Welcome  !") 
//     } else if(age  > age_3){
//         console.log("Keep calm and look Culture channel")
//     }
//     else {
//         console.log("Technical work")
// }
// }

// checkAge(17)
// checkAge(28)
// checkAge(60)
// checkAge(61)

// //______________________________________________________________________________________
//Stars_1_3 
//  let age_2 = 18;
// let age_3 = 60;
// const checkAge = function(age){
//     age =Number(age)
//     console.log(age)
// if(age && !isNaN(age)) {   
//     if (age < age_2) {
//         console.log("You don’t have access cause your age is " + age + " It’s less then")
//     } else if(age >=  age_2 & age <  age_3){
//         console.log("Welcome  !") 
//     } else if(age  > age_3){
//         console.log("Keep calm and look Culture channel")
//     }
//     else {
//         console.log("Technical work")
        
// }
// }else console.log('Not an integer value')
// }


// checkAge(17)
// checkAge(28)
// checkAge(60)
// checkAge(61)
// checkAge('sss')
// checkAge('11')
// checkAge('0')
// checkAge('')
//_____________________________________________________________________________________________________________________________
//Stars 1_4
// let age_2 = 18;
// let age_3 = 60;
// const checkAge = function(age){
//     age =Number(age)
//     console.log(age)
// if(age && !isNaN(age)) {   
//     if (age < age_2) {
//         alert("You don’t have access cause your age is " + age + " It’s less then")
//     } else if(age >=  age_2 & age <  age_3){
//         alert("Welcome  !") 
//     } else if(age  > age_3){
//         alert("Keep calm and look Culture channel")
//     }
//     else {
//         alert("Technical work")
        
// }
// }else alert('Not an integer value')
// }

// let a = prompt('Enter your age')
// checkAge(a)
// let age_2 = 18;
// let age_3 = 60;

// const checkAge = function(...age){
//     age.forEach(el => {
//         if(el && !isNaN(el)) {   
//             if (el < age_2) {
//                 console.log("You don’t have access cause your age is " + el + " It’s less then")
//             } else if(el >=  age_2 & age <  age_3){
//                 console.log("Welcome  !") 
//             } else if(el  > age_3){
//                 console.log("Keep calm and look Culture channel")
//             }
//             else {
//                 console.log("Technical work")
                
//         }
//         }else console.log('Not an integer value')
//         })

//     }
    


// checkAge(17,18,23,56,61,"",'20','0',)

let age_2 = 18;
let age_3 = 60;
const div = document.getElementById('d')

const checkAge = function(...age){
    age.forEach(el => {
        if(el && !isNaN(el)) {   
            if (el < age_2) {
                div.innerHTML+= "You don’t have access cause your age is " + el + " It’s less then" + '<br/>';
            } else if(el >=  age_2 & age <  age_3){
                div.innerHTML+= "Welcome  !" + '<br/>';
            } else if(el  > age_3){
                div.innerHTML+= "Keep calm and look Culture channel" + '<br/>'+ '<br/>';
            }
            else {
                div.innerHTML+= "Technical work" + '<br/>';
                
        }
        } else div.innerHTML+= 'Not an integer value' + '<br/>';
        })

    }
    


checkAge(17,18,23,56,61,"",'20','0',)
