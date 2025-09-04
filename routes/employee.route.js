import express from 'express';
import employeeModel from '../models/employee.model.js';

const Router = express.Router();

//create employee
Router.post("/",async(req,res) => {
    try{
        const employee = await employeeModel.create(req.body)
        res.status(201).json(employee)

    }catch(error){
        res.status(400).json({message:error.message})
    }
});

//Read employee all/
Router.get("/", async(_req,res) => {
    try{

        const employees = await employeeModel.find();
        res.json(employees)

    }catch(error){
        res.status(500).json({message:error.message});
    }
} );

//Read employee by id
Router.get("/:id", async(req,res) =>{
    try{
        const employee = await employeeModel.findById(req.params.id);
        if(!employee) return res.status(404).json({message: "Employee not found"});
        res.json(employee);

    }catch(error){
        res.status(500).json({message:error.message})   
    }
});

//update employee
Router.put("/:id", async(req,res) => {
    try{
        const updatedemployee = await employeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedemployee) return res.status(404).json({message:"Employee not found"});
        res.status(200).json({message:"new employee updated",updatedemployee});
    }catch(error){
        res.status(400).json({message:error.message})
    }
});

Router.delete("/:id", async(req,res) =>{
    try{
        const deletedEmployee = await employeeModel.findByIdAndDelete(req.params.id);
        if(!deletedEmployee) return res.status(404).json({message:"Employe not found"});
        res.json({message:"This employee has been deleted ",deletedEmployee})

    }catch(error){
        res.status(500).json(error.message)
    }
});

export default Router;

