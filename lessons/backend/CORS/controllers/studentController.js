const Student = require('../models/Student')

exports.createStudent = async (req, res) => {
    const newStudent = new Student(req.body)
    await newStudent.save()
    res.status(201).json(newStudent)
}

exports.getAllStudents = async (req, res) => {
    const allStudents = await Student.find({})
    res.json(allStudents)
}

exports.getStudentById = async (req, res) => {
    const s_id = req.params.s_id
    const allStudents = await Student.findOne({ _id: s_id })
    res.json(allStudents)
}

exports.updateStudent = async (req, res) => {
    const s_id = req.params.s_id
    const updatedStudent = await Student.findOneAndUpdate({ _id: s_id },
        req.body,
        { new: true }
    )
    res.json(updatedStudent)
}

exports.deleteStudent = async (req, res) => {
    const s_id = req.params.s_id
    const allStudents = await Student.findOneAndDelete({ _id: s_id })
    res.status(204).send("Deleted Successfully")
}

