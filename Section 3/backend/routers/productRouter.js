const {Router} = require('express');
const Model = require('../models/productModel')

const router = Router();

router.post('/add', (req,res) => {
    console.log(req.body);

    new Model(req.body).save()

    .then((result) => {
        res.json(result)        
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });

    // res.send('response from /product/add')

})

router.get('/getall', (req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.get('/getbyproductName/:productName', (req,res) => {
    Model.find({product_name : req.params.productName})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
})

router.delete('/delete/:productid',(req,res) => {
    Model.findByIdAndDelete(req.params.productid)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;