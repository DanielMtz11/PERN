
const errorMessage =(app) =>{

    app.use((err,req,res,next)=>{
        return res.json({
            message: err.message
        });
    });

};


module.exports = errorMessage