//  try this window.onload

// Getting script atributes
var currentScript = document.getElementById("buttons-script");
var ButtonColor = currentScript.getAttribute("button-color");
var ButtonWidth = currentScript.getAttribute("button-width");
var ButtonHeight = currentScript.getAttribute("button-height");
var BackgroundColor = currentScript.getAttribute("background-color");
var ButtonLink = currentScript.getAttribute("button-link");
var ButtonVariation = currentScript.getAttribute("button-variant");
var FontSize = currentScript.getAttribute("font-size");
//var IconsColor = currentScript.getAttribute("Icons-color");


// Including CSS
var cssId = 'myCss';  
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '/buttons-embedded/button-style.css'; 
    link.media = 'all';
    head.appendChild(link); 
}


var div2 = document.createElement('div');  
div2.className = "div2" ;
div2.id = "div2";
div2.style.color= ButtonColor;
div2.style.height = ButtonHeight;
div2.style.width = ButtonWidth;
div2.style.backgroundColor = BackgroundColor + "!important"; 

// Button title
var h2 = document.createElement('h2');
h2.innerHTML= "GET AN ESTIMATE OVER VIDEO CHAT";
h2.setAttribute("id", "naslov");
h2.className = "naslov";
//h2.style.textAlign = "center";
h2.style.fontSize = FontSize;

// Line break
var linebreak = document.createElement('br');   
		
// Button div creating
var SvgDiv = document.createElement('div');	
SvgDiv.setAttribute("id", "surveybot-svg");



// SVG Icons URL	
SvgUrl = "/buttons-embedded/img/button-icons-" + ButtonVariation;
SvgUrlBtn = "/buttons-embedded/img/buttons-" + ButtonVariation;

//SVG Buttons URL


// SVG Icons load function
function loadSvg(selector, target) {
  var target = document.querySelector(selector);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", SvgUrl + ".svg", true);
    ajax.send();
    // Append the SVG to the target
    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText;
	  
	  
	var Icncolor = currentScript.getAttribute("Icon-color");
	var Arrowcolor = currentScript.getAttribute("Arrow-color");
	var g1 = document.getElementById("g1");
	g1.style.fill = Icncolor;
	var g2 = document.getElementById("g2");
	g2.style.fill = Arrowcolor;
    }	
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + target + ".png' />";
  }
}	


// LOAD BUTTON SVG 
function loadSvgBtn(selector1, target1) {
  var target1 = document.querySelector(selector1);

  // If SVG is supported
  
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax1 = new XMLHttpRequest();
    ajax1.open("GET", SvgUrlBtn + ".svg", true);
    ajax1.send();
    ajax1.onload = function(e) {
      target1.innerHTML = ajax1.responseText;
    
	var SvgButtColor = currentScript.getAttribute("SvgButton-color");
	var g11 = document.getElementById("g11");
	g11.style.fill = SvgButtColor;
	}	
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + target + ".png' />";
  }
}	

// ========= Vertical SVG Picture if diw width is less than 0.35
function loadSvgVertical(selector2, target2) {
  var target2 = document.querySelector(selector2);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", SvgUrl + "-v.svg", true);
    ajax2.send();
    // Append the SVG to the target
    ajax2.onload = function(e) {
    target2.innerHTML = ajax2.responseText;
	  
	var Icncolor = currentScript.getAttribute("Icon-color");
	var Arrowcolor = currentScript.getAttribute("Arrow-color");
	var g1 = document.getElementById("g1");
	g1.style.fill = Icncolor;
	var g2 = document.getElementById("g2");
	g2.style.fill = Arrowcolor;
	}	
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + target2 + ".png' />";
  }
}	
// ===== Horizontal pictures for extra long width =====
function loadSvgHorizontal(selector3, target3) {
  var target3 = document.querySelector(selector3);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax3 = new XMLHttpRequest();
    ajax3.open("GET", SvgUrl + "-h.svg", true);
    ajax3.send();
	// Append the SVG to the target
    ajax3.onload = function(e) {
    target3.innerHTML = ajax3.responseText;
	     
	var Icncolor = currentScript.getAttribute("Icon-color");
	var Arrowcolor = currentScript.getAttribute("Arrow-color");
	
	var g1 = document.getElementById("g1");
	g1.style.fill = Icncolor;
	var g2 = document.getElementById("g2");
	g2.style.fill = Arrowcolor;
	}	
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + target2 + ".png' />";
  }
}
//======== fourth  version PICS ======
function loadSvg4(selector4, target4) {
  var target4 = document.querySelector(selector4);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax4 = new XMLHttpRequest();
    ajax4.open("GET", SvgUrl + "-4.svg", true);
    ajax4.send();
	// Append the SVG to the target
    ajax4.onload = function(e) {
    target4.innerHTML = ajax4.responseText;
	     
	var Icncolor = currentScript.getAttribute("Icon-color");
	var Arrowcolor = currentScript.getAttribute("Arrow-color");
	
	var g1 = document.getElementById("g1");
	g1.style.fill = Icncolor;
	var g2 = document.getElementById("g2");
	g2.style.fill = Arrowcolor;
	}	
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + target2 + ".png' />";
  }
}

// Appending elemetns into the container
	var parentDiv = document.getElementById("surveybot-button");
	var sp2 = document.getElementById("surveybot-link");
	//`sp2.style.height = ButtonWidth;
	//document.getElementById("surveybot-link").style.width = ButtonWidth;
	 //sp2.setAttribute("class", "button-" + ButtonVariation);

	div2.appendChild(h2) + "\n";
	//div2.appendChild(linebreak);
	div2.appendChild(SvgDiv);
	//div2.appendChild(linebreak);
	//div2.appendChild(sp2);	 
	parentDiv.insertBefore(div2, sp2);
	//div2.appendChild(linebreak);
	


	var but = document.createElement("IMG");
	but.setAttribute("class", ButtonLink);
	but.setAttribute("alt", "ButtonLink");


// Load SVG with Ajax
loadSvg("#surveybot-svg", SvgUrl);
loadSvgBtn("#surveybot-link", SvgUrlBtn);
//sp2.style.backgroundImage = loadSvgBtn;
// Calculating width and height
	 
var DivWidt = document.getElementById("div2").getBoundingClientRect().width;
var DivHeight = document.getElementById("div2").getBoundingClientRect().height;

var result =  DivWidt / DivHeight;
var resultW =  DivHeight / DivWidt;
if (result < 0.35 ) {
	  
	alert(result + "RESOULT < 0.35");
	//Making Var
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;		
	var naslov = document.getElementById("naslov");
	var x = document.getElementById('div2').clientHeight;
	var z = 0.65 * x;
	var svgPic = document.getElementById("surveybot-svg");
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	// Load SVG Pic and Butt
	loadSvgVertical("#surveybot-svg", SvgUrl + "-v.svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	// Property	
	fontSize = (parseInt(DivWidt) / 10 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	naslov.style.marginTop = "16%";
	svgPic.style.marginTop = "5%";
	svgPic.style.marginBottom = "20%";
	var y = document.getElementById("surveybot-svg").style.height = z + "px";
	// Button property
	
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	child.style.width = "110%";
	child.style.marginLeft = "-9px";
	// If div2  height less than 350px 
		
	} 
else if (result > 0.35 && result < 0.7){
		console.log(result + "RESULT 0.35-0.7 ");
	// Load SVG Pic and Butt
	loadSvg4("#surveybot-svg", SvgUrl + "-4.svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	// Count Title FOnt
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;		
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 12 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	//Coutn SVG Image property
	var x = document.getElementById('div2').clientHeight;
	var z = 0.6 * x;
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = "3%";
	svgPic.style.marginBottom = "2%";
	var y = document.getElementById("surveybot-svg").style.height = z + "px";

	// Button property
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	child.style.maxWidth = "50%"
	// If div2  height less than 350px 
		if (x < 350){
			var svgPic = document.getElementById("surveybot-svg");
			svgPic.style.marginTop = "3%";
			svgPic.style.marginBottom = "0.5%";
			var svgLink = document.getElementById("surveybot-link");
			svgLink.style.marginTop = "-15px";
			surveybot-link 
		}
	}	
else if (result > 0.7 && result < 0.9){
	console.log(result + "RESULT 0.7-0.9");
	//Load picture & button
	loadSvg("#surveybot-svg", SvgUrl);
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	// H2 Style
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 12 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	// Svg pic prop
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = DivHeight / 16 + "px";
	svgPic.style.marginBottom = "2%";
	
	// Button prop
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);	
	//  ====== WRONG LAYER!!!!! 
	var x = document.getElementById('div2').clientHeight;
	var y = document.getElementById("Layer_4"); // not layer 4!!!!
	var z = 0.6 * x;
	naslov.style.marginTop = x / 12 + "px";
	child.style.marginBottom = x / 12 + "px";
	y.style.maxHeight = z + "px";
	//naslov.style.marginTop = x / 12 + "px";
}
else if (result >= 0.9 && result <= 1){
	console.log(result + "RESULT 0.9-1 ");
	// Load SVG Pic and Butt
	loadSvg("#surveybot-svg", SvgUrl + ".svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	// Count Title FOnt
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;		
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 14 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	//Coutn SVG Image property
	var x = document.getElementById('div2').clientHeight;
	var z = 0.5 * x;
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = "5%";
	svgPic.style.marginBottom = "2%";
	var y = document.getElementById("surveybot-svg").style.height = z + "px";

	// Button property
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	child.style.marginTop = "-" + x / 14 + "px";
	b.appendChild(child);
	// If div2  height less than 350px 
	}	
else if (result > 1 && result <= 1.2){
	console.log(result + "RESULT 1-1.2 ");
	// Load SVG Pic and Butt
	loadSvg("#surveybot-svg", SvgUrl + ".svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	// Count Title FOnt
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;		
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 14 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	//Coutn SVG Image property
	var x = document.getElementById('div2').clientHeight;
	var z = 0.45 * x;
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = "3%";
	svgPic.style.marginBottom = "2%";
	var y = document.getElementById("surveybot-svg").style.height = z + "px";

	// Button property
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	child.style.marginTop = "-" + x / 14 + "px";
	b.appendChild(child);
	// If div2  height less than 350px 
	}	
else if (result > 1.2 && result < 1.6){
	console.log(result + "RESULT 1.21-1.6");
	//document.getElementById("icon").className = "button-variation-" + ButtonVariation;
	//document.getElementById("div2").style.height = "304px";
	//loadSvg("#surveybot-svg", SvgUrl);
	loadSvg("#surveybot-svg", SvgUrl + ".svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	// Count Title FOnt
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;		
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 20 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	//Coutn SVG Image property
	var x = document.getElementById('div2').clientHeight;
	var z = 0.4 * x;
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = "3%";
	svgPic.style.marginBottom = "2%";
	var y = document.getElementById("surveybot-svg").style.height = z + "px";

	// Button property
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	child.style.marginTop = "-" + x / 14 + "px";
	b.appendChild(child);
	child.style.width = "60%";
	child.style.display ="inline-block";
	//naslov.style.marginTop = x / 12 + "px";
}
else if (result > 1.61 && result < 2){
	console.log(result + "RESULT 1.61-2");
	loadSvgHorizontal("#surveybot-svg", SvgUrl + "-h.svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 18 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	
	var svgPic = document.getElementById("surveybot-svg");
	
	//svgPic.style.marginTop = DivHeight / 16 + "px";
	//svgPic.style.marginBottom = "2%";
	//svgPic.style.marginTop = DivHeight / 9 + "px";
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	
	var x = document.getElementById('div2').clientHeight;
	if ( x > 350){
		alert("vece IF");
		var naslov = document.getElementById("naslov");
		var child = document.getElementById("surveybot-link");
		var y = document.getElementById("Layer_1_h");
		var z = 0.65 * x;
		var svgPic = document.getElementById("surveybot-svg");
		svgPic.style.marginTop = "4%";
		svgPic.style.marginBottom = "2%";
		naslov.style.marginTop = x / 12 + "px";
		child.style.marginBottom = x / 12 + "px";
		naslov.style.fontSize = x / 10 + "px";
		y.style.maxHeight = z + "px";
		child.style.maxWidth = "50%";
	}
	
	else {
		alert("ELSE");
		var naslov = document.getElementById("naslov");
		var child = document.getElementById("surveybot-link");
		naslov.style.fontSize = x / 10 + "px";
		naslov.style.marginTop = x / 12 + "px";
		naslov.style.marginBottom = "15px";
		child.style.width = "60%";
		child.style.marginBottom = x / 10 + "px";
		child.style.marginTop = "-2%";
		y.style.maxHeight = z + "px";
		
	}
	
	
	
	
}

else if (result >= 2 && result < 3 ){
	console.log(result + "RESULT 2 - 3 ");
	loadSvgHorizontal("#surveybot-svg", SvgUrl + "-h.svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 18 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	
	var svgPic = document.getElementById("surveybot-svg");
	
	//svgPic.style.marginTop = DivHeight / 16 + "px";
	//svgPic.style.marginBottom = "2%";
	//svgPic.style.marginTop = DivHeight / 9 + "px";
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	
	var x = document.getElementById('div2').clientHeight;
	if ( x > 350){
		console.log("vece IF");
		var naslov = document.getElementById("naslov");
		var child = document.getElementById("surveybot-link");
		var y = document.getElementById("Layer_1_h");
		var z = 0.65 * x;
		var svgPic = document.getElementById("surveybot-svg");
		svgPic.style.marginTop = "4%";
		svgPic.style.marginBottom = "2%";
		naslov.style.marginTop = x / 12 + "px";
		child.style.marginBottom = x / 12 + "px";
		naslov.style.fontSize = x / 10 + "px";
		y.style.maxHeight = z + "px";
		child.style.maxWidth = "50%";
	}
	else {
		alert("ELSE");
		var naslov = document.getElementById("naslov");
		var child = document.getElementById("surveybot-link");
		naslov.style.fontSize = x / 10 + "px";
		naslov.style.marginTop = x / 12 + "px";
		naslov.style.marginBottom = "5px";
		child.style.width = "50%";
		child.style.marginBottom = x / 10 + "px";
		child.style.marginTop = "-2%";
		y.style.maxHeight = z + "px";
		
	}
	
	
	
	
}
else if (result > 3 ){
	console.log(result + "RESULT 3+");
	//creating needed variables 
	var svgPic = document.getElementById("surveybot-svg");
	var naslov = document.getElementById("naslov");
	var child = document.getElementById("surveybot-link");
	var y = document.getElementById("Layer_1_h");
	var divNaslov = document.createElement('div');  
divNaslov.className = "divNaslov" ;
divNaslov.id = "divNaslov";
	//Insert h2 into div because on this relation is different composition of elements
	div2.appendChild(divNaslov);
	div2.insertBefore(divNaslov, svgPic);	
	divNaslov.appendChild(naslov);
	
	//document.getElementbyId('divNaslov').appendChild(naslov);
	loadSvgHorizontal("#surveybot-svg", SvgUrl + "-h.svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	
	//Properties 
	div2.style.display = "inline-flex";
	div2.style.alignItems = "center";
	divNaslov.style.width = "20%";
	divNaslov.style.float = "left";
	divNaslov.style.textAlign = "center";
	divNaslov.style.marginLeft =  "2%";
	fontSize = (parseInt(DivWidt) / 48 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	//naslov.style.marginTop = "7%";
	naslov.style.fontFamily = "Arial";
	svgPic.style.width = "55%";	
	/*svgPic.style.marginLeft = "2%";*/	
	child.style.width = "18%";	
	
	//child.style.marginTop = "25px"; 	
	
	//svgPic.style.marginTop = "4%";
		//svgPic.style.marginBottom = "2%";
	//svgPic.style.marginTop = DivHeight / 16 + "px";
	//svgPic.style.marginBottom = "2%";
	//svgPic.style.marginTop = DivHeight / 9 + "px";
	var a = document.getElementById("surveybot-button");
	
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);		
		var child = document.getElementById("surveybot-link");
		var y = document.getElementById("Layer_1_h");
		var z = 0.65 * x;		
		child.style.marginBottom = x / 12 + "px";		
		//y.style.maxHeight = z + "px";
		child.style.maxWidth = "50%";	
}
else {
	console.log(result + " ELSE");
	//document.getElementById("icon").className = "button-variation-" + ButtonVariation;
	//document.getElementById("div2").style.height = "304px";

	
	loadSvg("#surveybot-svg", SvgUrl);
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 12 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	//child.style.marginBottom = "5%";
	child.style.marginTop = "-25px";	
	svgPic.style.marginTop = DivHeight / 16 + "px";
	//svgPic.style.marginBottom = "2%";	
	var x = document.getElementById('div2').clientHeight;
	var y = document.getElementById("Layer_4");
	var z = 65 / 100 * x;
	naslov.style.marginTop = x / 12 + "px";
	//child.style.marginTop = "-10px";
	
	y.style.maxHeight = z + "px";
	}


	

var x = document.getElementById("surveybot-button");
var child = document.getElementById("surveybot-link");
x.removeChild(child);
var y = document.getElementById("div2");
y.appendChild(child);







