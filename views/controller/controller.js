var mongoose = require('mongoose');
const Task = require('../model/model');

 exports.getall = async function(req, res){
  console.log("INside getall");
  await Task.find({}, function(err, task){
    if(err)
      res.send(err);
    res.json(task);
   })
 }

 exports.save = async function(req, res){
   var newtask = new Task(req.body);
   console.log(req.body);
   try {
    const save = await newtask.save({new: true});
    return res.status(200).json({data: save});
   } catch (e) {
     console.log("Error is", e);
   }
   
   
 }

 exports.getbyid = function(req, res){
   Task.findById(req.params.taskid, function(err, task){
    if(err)
      res.send(err);
    res.json(task);
   })
 }

 exports.update = function(req, res){
   Task.findOneAndUpdate({_id: req.params.taskid}, req.body, {new: true},function(err, task){
    if(err)
      res.send(err);
    res.json(task);
   })
 }

 exports.delete = function(req, res){
   Task.remove({
     _id: req.params.taskid
   }, function(err, task){
    if(err)
      res.send(err);
    res.json(task);     
   })
 }