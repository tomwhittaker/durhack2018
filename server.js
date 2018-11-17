class Event {
  constructor(eventName, company, location,time,date) {
    this.eventName = eventName;
    this.company = company;
    this.location = location;
    this.time = time;
    this.date = date;
  }
}

var events = [];
var campusRep = ["Tom Whittaker"];


const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.post('/addEvent', (request, response) => {
  console.log(request.body)
  var eventName=request.body.eventName;
  var company=request.body.company;
  var location=request.body.location;
  var time=request.body.time;
  var date=request.body.date;
  if (parseInt(date.substring(0,1)) > 12){
  	res = date.split("/")
  	date = res[1] + "/" + res[0] + "/" + res[2]
  }
  var event = new Event(eventName,company,location,time,date)
  events.push(event);
  console.log("Event Added: "+eventName);
  console.log(events)
  response.end("yes");
})

app.get('/events', (request, response) => {
	var d = new Date();
	var n = d.getTime();
  // for (var i = events.length-1; i>=0; i--){
  // 	if (Date.parse(events[i]['date']) > n){
  // 		events.splice(i)
  // 		console.log('del')
  // 	}
  // }
  response.send(JSON.stringify(events))
})

app.post('/rep', (request, response) => {
	console.log(request.body.userName)
  if (campusRep.includes(request.body.userName)){
  	result = {"result":"true"}
  	response.send(JSON.stringify(result))
  } else {
  	result = {"result":"false"}
  	response.send(JSON.stringify(result))
  }
  
})



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})