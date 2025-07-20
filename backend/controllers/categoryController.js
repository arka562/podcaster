import express from "express"
import Category from "../models/Category.js"

export const addCategory=async(req,res)=>{
  const{categoryName}=req.body;
  const cat=new Category({categoryName});
  return res.status(200).json({message:"new category created"})
}