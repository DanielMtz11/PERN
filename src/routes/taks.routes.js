const { Router} = require("express");
const {getAllTask,getTask, createTask, updateTask,deleteTask,getIndex} = require("../controllers/task.controller");

const router = Router();


//obtener 
router.get("/", getIndex)
router.get("/tasks", getAllTask);
router.get("/tasks/:id", getTask);

//crear
router.post("/tasks", createTask);
router.put("/tasks/:id",updateTask);
router.delete("/tasks/:id", deleteTask );


module.exports = router 