console.log("Before")

getUser(1, (user) => {
    console.log(user)

    //Getting the repos
    getRepos(user.gitUser, (repos) => {
        console.log("Repos:", repos)
    })
});

// function userCallback(user) {
//     console.log("User:", user);
// }

// function repoCallback(repos) {
//     console.log("Repositories", repos)
// }

console.log("After")

function getUser(id, callback) {

    setTimeout(() => {
        console.log('Reading user from db...')
        callback({ id: 1, gitUser: 'codewithz' });
    }, 2000);
}

function getRepos(user, callback) {
    setTimeout(() => {
        console.log('Getting repo details for ', user);
        callback(['repo1', 'repo2', 'repo3']);
    }, 3000)
}