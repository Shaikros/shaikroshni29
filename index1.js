const express= require('express');
const reuest=require('request');

const app = express();
app.get('/',(req,res)=>{
    let city=req.query.city;
    var request=require('request');
    request(
        'api.openweathermap.org/data/2.5/weather?q=${city}&appid=b96aee8606b9d38038ccc6efbcf2c6c1',
        function9error,response,body){
            let data =JSON.parse(body)
            if(response.statusCode===200){
                res.send('The weather in your city "${city}" is ${body.list[0].weather[0].description}')
            }
        }
    )
});
app.listen(3000,()=>console.log)
app.listen(3000,()=>console.log('server started on port 3000'));
app.listen(3000,()=>console.log)
app.listen(3000,()=>console.log('About Us: Name:Simmi Company:XYZ'));
app.listen(3000,()=>console.log)
app.listen(3000,()=>console.log('About Us: Name:Simmi Company:XYZ'));
