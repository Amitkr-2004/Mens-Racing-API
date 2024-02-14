const express=require("express")
const router=new express.Router();
const MensRanking=require("../models/mens")
//We Will Handle The Post Request

router.post("/mens",async(req,res)=>{
    try{
        const AddingMens=new MensRanking(req.body);
        console.log(req.body)
        const result=await AddingMens.save();
        res.status(201).send(result);
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get("/mens",async(req,res)=>{
    try{
        const result=await MensRanking.find({}).sort({"ranking":1})
        res.send(result);
    }
    catch(e){
        res.status(400).send(e)
    }
})
 
//Finding by name
// router.get("/mens/:name",async(req,res)=>{
//     try{
//         const name=req.params.name;
//         const result=await MensRanking.find({name})
//         res.send(result);
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })

//finding by ID individually
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findById({_id})
        res.send(result);
    }
    catch(e){
        res.status(400).send(e)
    }
})

//updating by ID
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(result);
    }
    catch(e){
        res.status(500).send(e)
    }
})

//Finding By Id and Delete
router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await MensRanking.findByIdAndDelete(_id);
        res.send(result);
    }
    catch(e){
        res.status(500).send(e)
    }
})

module.exports=router