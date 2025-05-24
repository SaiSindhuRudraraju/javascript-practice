/**
 * ✅ async/await in JavaScript
async/await is syntactic sugar over Promises. It makes asynchronous code look and behave more like synchronous code, which is easier to read and understand.

async keyword: Marks a function as asynchronous. It always returns a Promise.
        (makes a function return a promise)

await keyword: Pauses execution inside an async function until the Promise resolves or rejects. ( makes an async function wait for a promise)

Async doesn't have resolve or reject parameters.
Everything after Await is placed in an event queue

 */


function walkDog()
{
    return new Promise((resolve, reject) => {
            setTimeout( () => {

                const dogwalked = true;

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

async function doChores() {
  try {
    const dog = await walkDog();
    console.log(dog);

    const kitchen = await cleanKitchen();
    console.log(kitchen);

    const trash = await takeTrash();
    console.log(trash);

    console.log("✅ You completed all the chores! Take a break 😎");
  } catch (error) {
    console.error("🚨 Error:", error);
  }
}

doChores();