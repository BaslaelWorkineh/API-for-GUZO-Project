const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}
const setGoals = (req, res) => {
    res.status(200).json({message: 'Set Goals'})
}
const putGoals = (req, res) => {
    res.status(200).json({message:`Update Goal ${req.params.id}`})
}
const deleteGoals = (req, res) => {
    res.status(200).json({message:`Update Goal ${req.params.id}`})
}

module.exports = {getGoals, setGoals, putGoals, deleteGoals}