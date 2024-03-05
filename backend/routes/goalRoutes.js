const express = require('express')
const router = express.Router()
const {getGoals, updatedGoal, setGoals, deleteGoals} = require('../controller/goalController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect,updatedGoal)


module.exports = router