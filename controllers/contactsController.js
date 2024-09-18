const getOne = (req, res) => {
    res.send('getOne');
}

const getAll = (req, res) => {
    res.send('getMany');
}


module.exports = {
    getOne, getAll
}