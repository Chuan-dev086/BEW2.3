import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function App() {
  const [student, setStudent] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  // Handle closing of the modal
  const handleClose = () => setShowModal(false);
  // Handle opening the modal and setting the details of existing student
  const handleShow = (student) => {
    setCurrentStudent(student);
    setShowModal(true);
  };

  const updateStudent = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:3000/student/${currentStudent._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentStudent),
      },
    );
    const data = await response.json();
    setStudent(
      student.map((student) =>
        student._id === currentStudent._id ? data : student,
      ),
    );
    handleClose();
  };

  const deleteStudent = async (s) => {
    const response = await fetch(`http://localhost:3000/student/${s._id}`, {
      method: "DELETE",
    });
    setStudent(student.filter((student) => student._id !== s._id));
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("http://localhost:3000/student");
      const data = await response.json();
      setStudent(data);
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    console.log(student);
  }, [student]);

  const addStudent = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
    const data = await response.json();
    console.log(data);
    setStudent([...student, data]);
  };

  return (
    <>
      <h1>First time calling API in React</h1>
      <h3>List of students</h3>
      <ol>
        {student.map((s) => (
          <li key={s._id}>
            <h2>{s.name}</h2>
            <p>{s.age}</p>
            <p>{s.grade}</p>
            <Button variant="primary" onClick={() => handleShow(s)}>
              Edit Student
            </Button>
            <Button variant="danger" onClick={() => deleteStudent(s)}>
              Delete Student
            </Button>
          </li>
        ))}
      </ol>
      <div className="container">
        <form onSubmit={addStudent}>
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Age"
            value={newStudent.age}
            onChange={(e) =>
              setNewStudent({ ...newStudent, age: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) =>
              setNewStudent({ ...newStudent, grade: e.target.value })
            }
          />
          <button type="submit">Add Student</button>
        </form>
      </div>
      <div className="container">
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={updateStudent}>
              <input
                type="text"
                placeholder="Name"
                value={currentStudent.name}
                onChange={(e) => {
                  setCurrentStudent({
                    ...currentStudent,
                    name: e.target.value,
                  });
                }}
              />
              <input
                type="number"
                placeholder="Age"
                value={currentStudent.age}
                onChange={(e) => {
                  setCurrentStudent({
                    ...currentStudent,
                    age: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Grade"
                value={currentStudent.grade}
                onChange={(e) => {
                  setCurrentStudent({
                    ...currentStudent,
                    grade: e.target.value,
                  });
                }}
              />
              <button type="submit">Update Student</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default App;
