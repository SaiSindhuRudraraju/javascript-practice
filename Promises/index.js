/**
 *  Promise = An object that manages asynchronous operations.
 *            Wrap a Promise Object around {asynchronous code}
 *            " I promise to return a value"
 *            PENDING -> RESOLVED or REJECTED
 *            new Promise((resolve, reject) => {asynchronous code})
 * 
 * DO THESE CHORES IN ORDER
 * 1. Walk the dog
 * 2. Clean the kitchen
 * 3. take out the trash
 */

//Here we want to perform asynchronous operations. So using setTimeOut. here below, we ended up using callback hell. Instead of this we can use promises., we use method chaining. we method chain out pormises

/*
function walkDog(callback)
{
    setTimeout( () => {
        console.log("You walk the dog 🐕‍🦺");
        callback();
    }, 1500);
}

function cleanKitchen(callback)
{
    setTimeout( () => {
        console.log("You clean the kitchen 🧹");
        callback();
    }, 2500);
}

function takeTrash(callback)
{
    setTimeout( () => {
        console.log("You Take out the trash 🗑️");
        callback();
    }, 500);
}

walkDog( () => {
    cleanKitchen( () => {
        takeTrash( () => console.log(`You finished all the chores!! Take break`));
    })
})

*/

function walkDog()
{
    return new Promise((resolve, reject) => {
            setTimeout( () => {

                const dogwalked = false;

                if(dogwalked){
                    resolve("You walk the dog 🐕‍🦺");
                }
                else{
                    reject("You did not walked the dog");
                }
        }, 1500);
    });
}

function cleanKitchen()
{
    return new Promise((resolve, reject) => {
            setTimeout( () => {

                const cleanedkitchen = true;
                
                if(cleanedkitchen){
                    resolve("You clean the kitchen 🧹");
                }
                else{
                    reject("You did not cleaned the kitchen");
                }
        }, 2500);
    });
}

function takeTrash()
{
    return new Promise((resolve, reject) => {
            setTimeout( () => {

                const tooktrash = true;

                if(tooktrash){
                    resolve("You Take out the trash 🗑️");
                }
                else{
                    reject("You did not took the trash out");
                }
        }, 1500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen() })
         .then(value => {console.log(value); return takeTrash() })
         .then(value => {console.log(value); return console.log(`You completed with all the chores!! Take Break`) })
         .catch(error =>  console.error(error));