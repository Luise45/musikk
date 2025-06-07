const express = require("express")
const router = express.Router()
const cors= require("cors")
const app= express()
const port= process.env.port || 3000

app.use(cors())
app.use(express.json())


//data array rquired???


const data = require("./data.json")

app.get("/api/v1/data", (req, res) => {

return res.json(data)
});

// suchen mit Jahreszahl(get)

app.get("/api/v1/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
    const datas= data.find(i => i.year == yearParameter);
    if(data){

       return res.json(data);
    }
    else{
return res.status(404).json({message: "upss"})
    }
});


//Neues 'data' hinzufuegen(post)

app.post("/api/v1/data", (req, res) => {

    const newEnt = data.length > 0 ? data[data.length -1 ].year +1 : 1;
    const newData= {year: newEnt, ...req.body};
    data.push(newData);
    return res.json({message: "new Song!", data: newData});
});

//update 'data'

app.put("/api/v1/data/:year", (req, res) => {

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

app.delete("/api/v1/data/:year", (req, res) => {

    const yearParameter = Number(req.params.year);
    const dataa= data.filter(i => i.year == yearParameter);
    if(dataa.length == data.length){

        return res.status(404).json({message: "upss"});
    }
   data = dataa;
   res.json({message: "deleted!"});
});

app.listen(port, () => {
console.log('Server running on http://localhost:${port}')
});

