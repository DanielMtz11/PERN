const taskRoutes = require("./taks.routes");

const taskRouter =(app)=>{
    app.use(taskRoutes);
}

module.exports = taskRouter;