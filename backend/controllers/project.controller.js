const Project = require('../models/project.model') ;


exports.createProject = async (req,res) =>{
    try {
        const projectCount = await  Project.countDocuments({user:req.user.id});
        if(projectCount >= 4){
            return res.status(400).json({message: "Max 4 projects allowed"}) ;
        }
        const project = await Project.create({name: req.body.name , user: req.user.id}) ;
        res.status(201).json(project) ; 
    } catch (error) {
        res.status(500).json({message: 'Server error',error: error.message}) ;
    }
} ;

exports.getProject = async (req,res)=>{
    try {
        const projects = await Project.find({user: req.user.id}) ;
        res.status(200).json(projects) ;
    } catch (error) {
        res.status(500).json({message: 'Server error',error: error.message}) ;
    }
}