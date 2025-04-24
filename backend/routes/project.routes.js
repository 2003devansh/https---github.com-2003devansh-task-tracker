const express = require('express') ;
const {createProject,getProject} = require('../controllers/project.controller') ;
const router = express.Router() ;
const {Protect, protect} = require("../utils/authMiddleware")

router.post('/create',protect,createProject);
router.get('/',protect,getProject) ;

module.exports = router ; 