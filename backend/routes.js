



const express = require('express');
const router = express.Router();


const data = require('./data.json');



//data array rquired???

router.get('/data', (req, res) => {

return res.json(data)
});

// suchen mit Jahreszahl(get)

router.get("/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
   
    const datas= data.find(i => i.year == yearParameter);
    if(datas){

       return res.json(data);
    }
    else{
return res.status(404).json({message: "upss"})
    }
});


//Neues 'data' hinzufuegen(post)

router.post("/data", (req, res) => {

    const newEnt = data.length > 0 ? data[data.length -1 ].year +1 : 1;
    const newData= {year: newEnt, ...req.body};
    data.push(newData);
    return res.json({message: "new Song!", data: newData});
});

//update 'data'

router.put("/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
    const dataIndex= data.findIndex(i => i.year == yearParameter);
   
    if(dataIndex !== -1 ){
data[dataIndex] = {year: yearParameter, ...req.body}
       return res.json({message : "updated", datas: data[dataIndex]});
    }
    else{
return res.status(404).json({message: "upss"})
    }
});


//loeschen 'data' (delet)

router.delete("/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
    const dataa= data.filter(i => i.year == yearParameter);
    if(dataa.length == data.length){

        return res.status(404).json({message: "upss"});
    }
 let data = require('./data.json');
   res.json({message: "deleted!"});
});


module.exports = router;

