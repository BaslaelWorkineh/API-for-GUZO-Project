const express = require('express')
const router = express.Router()
const {getGoals, putGoals, setGoals, deleteGoals} = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(putGoals)


module.exports = router