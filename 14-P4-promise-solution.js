console.log("Before")

const p = getUser(1);

p
    .then((user) => getRepos(user.gitUser))
    .then((repos) => console.log("Repos", repos))
    .catch((error) => {
        console.log(error.message)
    })




console.log("After")

function getUser(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Reading user from db...')
            resolve({ id: 1, gitUser: 'codewithz' });
            // reject(new Error('Some Error'))
        }, 2000);
    });
}

function getRepos(user) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Getting repo details for ', user);
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Some Error'))
        }, 3000)
    })
}