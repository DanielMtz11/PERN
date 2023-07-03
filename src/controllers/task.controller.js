const pool = require("../db")

const getAllTask = async(req, res, next)=>{

    try {
        const result = await  pool.query("SELECT * FROM task");
        res.status(200).json(result.rows);
        
    } catch (error) {
        // res.status(400).json(error.mesage);
        next(error);
    }
}

const getTask = async(req, res, next)=>{
    const {id} =req.params;

    try{
    
        const result =  await pool.query(`SELECT * FROM task WHERE id = $1`,[id]);    
        
        // console.log(result.rows.length);
        if(result.rows.length > 0){
            console.log(typeof(result.rows));
            res.status(200).json((result.rows));
        }
        else{
            // next(error);
            res.status(404).json("task not found")
        }
        
    }
    catch(error){
        // res.status(404).json(e.mesage);
        next(error);
        
    }
}

const createTask = async(req, res, next)=>{
    try{
        const {title, description, iscomplete} = req.body;
        
        const result = await pool.query(`INSERT INTO task (title, description, iscomplete) VALUES ($1, $2, $3) RETURNING *`
        ,[
            title,
            description,
            iscomplete
        ]);
        res.status(200).json(result.rows)
    }

    catch(error){
        next(error);}

}

const updateTask = async(req, res, next) =>
{

    try {
        const{iscomplete} = req.body;
        const {id} = req.params;
        const result = await pool.query(`UPDATE task SET iscomplete =${iscomplete} WHERE id = $1`,[id]);

        if(result.rowCount == 0){res.status(400).json("the taks doesn`t exisst");}

        else{
            res.status(200).json(("update status !!"));
        }

    } catch (error) {
        next(error);
        
    }
}

const deleteTask = async(req, res, next)=>{

    try{

        const {id} = req.params;
        const result = await pool.query(`DELETE FROM task WHERE id = $1 RETURNING *`,[id]);
        
        if(result.rowCount === 0){res.status(400).json("the taks doesn`t exisst");}

        res.status(200).json("task delete");
    }
    catch(error){
        next(error);

    }
}

module.exports ={ 
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
}