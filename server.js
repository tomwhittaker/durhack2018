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


const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

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
  var event = new Event(eventName,company,location,time,date)
  events.push(event);
  console.log("Event Added: "+eventName);
  console.log(events)
  response.end("yes");
})

app.get('/events', (request, response) => {
  response.send(JSON.stringify(events))
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})