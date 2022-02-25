const p = new Promise((resolve, reject) => {
    //Asychrounous code goes here

    setTimeout(() => {
        console.log('....Some Asyc work happening here...')
        // resolve({ id: 1, name: 'ZN' })
        reject(new Error("Some issue in the async work!!"))
    }, 3000)

})

p
    .then((result) => {
        console.log('Success from Promise', result)
    })
    .catch((error) => {
        console.log('Error from promise', error.message)
    })