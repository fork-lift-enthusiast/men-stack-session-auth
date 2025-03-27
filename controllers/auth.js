import { Router } from "express";

const router = Router()

// list our routs 
router.get("/sign-up", (req,res)=>{
    res.render("auth/sign-up")
})

export default  router;

