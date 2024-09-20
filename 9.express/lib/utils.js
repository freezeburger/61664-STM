const fsPromise = require('fs/promises');

const createDirIfNotExists = (dirname) => {
    return fsPromise.access(dirname)
        .then(() => console.log(`Directory ${dirname} exists.`))
        .catch(() => fsPromise.mkdir(dirname, { recursive: true }));
}

module.exports = {
    createDirIfNotExists
}