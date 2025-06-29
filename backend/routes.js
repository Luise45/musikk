

const express = require('express')

const cors= require("cors")
const app=express()
const port=process.env.port|| 3000
const fs= require("fs")
const data = require('./data.json')



app.use(cors())
app.use(express.json())

app.listen(port,(err)=>{
    console.log('Server is runinng on port ${port}');
})




app.get('/api/v1/data', (req, res) => {

return res.json(data)
});

// suchen mit Jahreszahl(get)

app.get("/api/v1/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
    const datas= data.find(item => item.year == yearParameter);
       return res.json(datas);
   
});


//Neues 'data' hinzufuegen(post)

app.post("/api/v1/data", (req, res) => {

    const newEnt = data[data.length -1 ].year +1;
    delete req.body.year;
    const newData= Object.assign({year: newEnt},req.body);
    data.push(newData);
    return res.json({message: "new Song!", data: newData});


    fs.writeFile("./data.json", JSON.stringify(data), (err,data)=>{
    if(err) return res.json(err)
return res.json({Message:"New Order is created succesfully"})
})
});


//update 'data'

app.put("/api/v1/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
    const dataIndex= data.findIndex(item => item.year == yearParameter);
   data.splice(dataIndex,1,{...req.body})

   fs.writeFile("./data.json", JSON.stringify(data), (err, data)=>{
    if(err) return res.json(err)
return res.json({Message:"New Order is updated succesfully"})
})
});



//loeschen 'data' (delet)

app.delete("/api/v1/data/:year", (req, res) => {

    const yearParameter2 = Number(req.params.year);
    const dataa= data.filter(item => item.year == yearParameter2);
   
   
    fs.writeFile("./data.json", JSON.stringify(dataa), (err, data)=>{
        if(err) return res.json(err)
    return res.json(dataa)
    })
   
});




