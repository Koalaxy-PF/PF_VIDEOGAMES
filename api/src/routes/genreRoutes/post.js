const { Router } = require('express');
const router = Router();
const { Genre } = require('../../db');


router.post('/', async(req,res)=>{
    const { name } = req.body;
    try {
        if(name){
            await Genre.findOrCreate({
                where: { name: name }
            })
            res.send('Genre created successfully')
        }
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;