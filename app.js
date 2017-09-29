var express = require("express");
var robot = require("robotjs");
var bodyParser = require("body-parser");
var app = express();

app.set('port',(process.env.PORT) || 5000);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
	res.render("index",{x : 0});
});


app.post("/up", function(req,res){
	robot.keyTap("audio_vol_up");
});

app.post("/down", function(req,res){
	robot.keyTap("audio_vol_down");
});

app.post("/mute", function(req,res){
	robot.keyTap("audio_mute");
});

app.post("/play", function(req,res){
	robot.keyTap("audio_play");
});

app.post("/stop", function(req,res){
	robot.keyTap("audio_stop");
});

app.post("/previous", function(req,res){
	robot.keyTap("audio_prev");
});

app.post("/next", function(req,res){
	robot.keyTap("audio_next");
});

app.post("/uparrow", function(req,res){
	robot.keyTap("up");
});

app.post("/downarrow", function(req,res){
	robot.keyTap("down");
});

app.post("/rightarrow", function(req,res){
	robot.keyTap("right");
});

app.post("/leftarrow", function(req,res){
	robot.keyTap("left");
});

app.post("/backspace", function(req,res){
	robot.keyTap("backspace");
});

app.post("/delete", function(req,res){
	robot.keyTap("delete");
});

app.post("/enter", function(req,res){
	robot.keyTap("enter");
});

app.post("/escape", function(req,res){
	robot.keyTap("escape");
});

app.post("/control", function(req,res){
	robot.keyTap("control");
});

app.post("/shift", function(req,res){
	robot.keyTap("shift");
});

app.post("/rshift", function(req,res){
	robot.keyTap("right_shift");
});

app.post("/space", function(req,res){
	robot.keyTap("space");
});

app.post("/zero", function(req,res){
	robot.keyTap("numpad_0");
});

app.post("/one", function(req,res){
	robot.keyTap("numpad_1");
});

app.post("/two", function(req,res){
	robot.keyTap("numpad_2");
});

app.post("/three", function(req,res){
	robot.keyTap("numpad_3");
});

app.post("/four", function(req,res){
	robot.keyTap("numpad_4");
});

app.post("/five", function(req,res){
	robot.keyTap("numpad_5");
});

app.post("/six", function(req,res){
	robot.keyTap("numpad_6");
});

app.post("/seven", function(req,res){
	robot.keyTap("numpad_7");
});

app.post("/eight", function(req,res){
	robot.keyTap("numpad_8");
});

app.post("/nine", function(req,res){
	robot.keyTap("numpad_9");
});

app.post("/pagedown", function(req,res){
	robot.keyTap("pagedown");
});

app.post("/rightmouse", function(req, res){
	var mouse = robot.getMousePos();
	robot.moveMouseSmooth(mouse.x+50,mouse.y);
});

app.post("/leftmouse", function(req, res){
	var mouse = robot.getMousePos();
	robot.moveMouseSmooth(mouse.x-50,mouse.y);
});

app.post("/upmouse", function(req, res){
	var mouse = robot.getMousePos();
	robot.moveMouseSmooth(mouse.x,mouse.y-50);
});

app.post("/downmouse", function(req, res){
	var mouse = robot.getMousePos();
	robot.moveMouseSmooth(mouse.x,mouse.y+50);
});

app.post("/leftclick", function(req, res){
	robot.mouseClick("left");
});

app.post("/leftdclick", function(req, res){
	robot.mouseClick("left", "double");
});

app.post("/rightclick", function(req, res){
	robot.mouseClick("right");
});

app.post("/middleclick", function(req, res){
	robot.mouseClick("middle");
});

app.post("/scrollup", function(req, res){
	robot.scrollMouse(5, 0);
});

app.post("/scrolldown", function(req, res){
	robot.scrollMouse(-5, 0);
});

app.listen(app.get('port'), '0.0.0.0' ,function(){
	console.log("Remote control started !");
});
