const express = require("express")
const router = express.Router()
const studentController = require("../controllers/studentController")

router.use(express.json())

router.post('/', studentController.createStudent)
router.get('/', studentController.getAllStudents)
router.get('/:s_id', studentController.getStudentById)
router.put('/:s_id', studentController.updateStudent)
router.delete('/:s_id', studentController.deleteStudent)

module.exports = router