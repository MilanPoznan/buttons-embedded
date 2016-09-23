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
    link.href = 'https://gosurveybot.com/crater-stage/buttons/button-style.css'; 
    link.media = 'all';
    head.appendChild(link); 
}


var div2 = document.createElement('div');  
div2.className = "div2" ;
div2.id = "div2";
div2.style.color= ButtonColor;
div2.style.height = ButtonHeight;
div2.style.width = ButtonWidth;
div2.style.backgroundColor = BackgroundColor; 

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
SvgUrl = "/buttons/img/button-icons-" + ButtonVariation;
SvgUrlBtn = "/buttons/img/buttons-" + ButtonVariation;

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
	  
	 //document.getElementById("Layer_1").className = "button-variation-" + ButtonVariation + "-v";
	alert(result + "RESOULT < 35");
	//document.getElementById("div2").style.height = "auto";
	var DivHeight = document.getElementById("div2").getBoundingClientRect().height;
	var Count = DivHeight * 0.6;
		//alert("Vertikalna  slika!");
	loadSvgVertical("#surveybot-svg", SvgUrl + "-v.svg");
	alert("Your template will be changed");
	//document.getElementById("Layer_1_v").style.height = Count + "px";
	//document.getElementById("Layer_1_v").style.marginTop = 15 + "%";
	
	
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 10 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	naslov.style.marginTop = "15%";
	//document.getElementById("surveybot-link").style.width = ButtonWidth;
	var x = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	x.removeChild(child);
	var y = document.getElementById("div2");
	y.appendChild(child);
	
	} 
else if (result > 0.35 && result < 0.7){
	alert(result + "RESULT 0.35-0.7 ");
	var DivWidt = document.getElementById("div2").getBoundingClientRect().width;
	
	loadSvg4("#surveybot-svg", SvgUrl + "-4.svg");	
	//alert("Horizontalna slika! ");
	// document.getElementById("Layer_4").style.height = Count + "px";
	
	//var DivWidt = document.getElementById("div2").getBoundingClientRect().width;
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 10 ) + 'px';
	naslov.style.fontSize = fontSize;
	//document.getElementById("Layer_4").style.marginTop = "15px";
	document.getElementById("surveybot-link").style.width = "100%";
	//document.getElementById("surveybot-link").style.marginBottom = "30px";

	naslov.style.textAlign = "center";
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	}	
else if (result > 0.7 && result < 0.9){
	alert(result + "RESULT 0.7-0.9");
	//document.getElementById("icon").className = "button-variation-" + ButtonVariation;
	//document.getElementById("div2").style.height = "304px";
	loadSvg("#surveybot-svg", SvgUrl);
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 12 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = DivHeight / 16 + "px";
	svgPic.style.marginBottom = "2%";
	//svgPic.style.marginTop = DivHeight / 9 + "px";
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	
	
	var x = document.getElementById('div2').clientHeight;
	var y = document.getElementById("Layer_4");
	var z = 65 / 100 * x;
	naslov.style.marginTop = x / 12 + "px";
	child.style.marginBottom = x / 12 + "px";
	y.style.maxHeight = z + "px";
	//naslov.style.marginTop = x / 12 + "px";
}
else if (result > 1.1 && result < 1.6){
	alert(result + "RESULT 1.1-1.6");
	//document.getElementById("icon").className = "button-variation-" + ButtonVariation;
	//document.getElementById("div2").style.height = "304px";
	//loadSvg("#surveybot-svg", SvgUrl);
	loadSvgHorizontal("#surveybot-svg", SvgUrl + "-h.svg");	
    loadSvgBtn("#surveybot-link", SvgUrlBtn);
	var naslov = document.getElementById("naslov");
	fontSize = (parseInt(DivWidt) / 18 ) + 'px';
	naslov.style.fontSize = fontSize;
	naslov.style.textAlign = "center";
	
	var svgPic = document.getElementById("surveybot-svg");
	svgPic.style.marginTop = DivHeight / 16 + "px";
	svgPic.style.marginBottom = "2%";
	//svgPic.style.marginTop = DivHeight / 9 + "px";
	var a = document.getElementById("surveybot-button");
	var child = document.getElementById("surveybot-link");
	a.removeChild(child);
	var b = document.getElementById("div2");
	b.appendChild(child);
	child.style.maxWidth = "75%";
	
	
	var x = document.getElementById('div2').clientHeight;
	var y = document.getElementById("Layer_4");
	var z = 65 / 100 * x;
	naslov.style.marginTop = x / 12 + "px";
	child.style.marginBottom = x / 12 + "px";
	y.style.maxHeight = z + "px";
	//naslov.style.marginTop = x / 12 + "px";
}
else if (result > 2){
	alert(result + "RESULT +2");
		var DivWidt = document.getElementById("div2").getBoundingClientRect().width;

		loadSvgHorizontal("#surveybot-svg", SvgUrl + "-h.svg");	
		alert("Horizontalna slika! ");
		var surveySvg = document.getElementById("surveybot-svg");
		surveySvg.style.width = "50%";
		surveySvg.style.float = "right";
		 document.getElementById("Layer_1_h").style.height = Count + "px";
		document.getElementById("Layer_1_h").style.marginTop = "15px";
		var DivWidt = document.getElementById("div2").getBoundingClientRect().width;
		var naslov = document.getElementById("naslov");
		fontSize = (parseInt(DivWidt) / 20 ) + 'px';
		naslov.style.fontSize = fontSize;
		document.getElementById("surveybot-link").style.width = "50%";
		document.getElementById("surveybot-link").style.marginBottom = "30px";
	
	}

else {
	alert(result + " ELSE");
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







