/*
28 elememts in page;
11 css style ;
4 awsome font ;
add events ;
just that ;

ALL THAT IN JAVASCRIPT ONLY NOTHIG ELSE;
HAVE FUN;
*/
//find body
var body_node = document.body;
body_node.style.backgroundColor = "#33355B";

//create div with class container 
var div1_node =document.createElement("div");
div1_node.setAttribute("class","container");
div1_node.style.backgroundColor = "white";
body_node.appendChild(div1_node);
//create div with class row
var div2_node =document.createElement("div");
div2_node.setAttribute("class","row");
div1_node.appendChild(div2_node);
//create div with class column
var div3_node =document.createElement("div");
div3_node.setAttribute("class","col");
div2_node.appendChild(div3_node);
//create div with class column
var div4_node =document.createElement("div");
div4_node.setAttribute("class","col");
div2_node.appendChild(div4_node);
//create div with class column
var div5_node =document.createElement("div");
div5_node.setAttribute("class","col");
div2_node.appendChild(div5_node);

/*

icons

*/

// mail
//create div with class row
var div6_node =document.createElement("div");
div6_node.setAttribute("class","row ");
div3_node.appendChild(div6_node);
//create i with class mail
var i1_node = document.createElement("i");
i1_node.setAttribute("class","fa fa-envelope fa-5x");
div6_node.appendChild(i1_node);
//style
div6_node.style.backgroundColor = "#EDD4ED";
div6_node.style.width = "1140px";
div6_node.style.position = "absolute";



//loction
//create div with class row
var div7_node =document.createElement("div");
div7_node.setAttribute("class","row");
div3_node.appendChild(div7_node);
//create i with class loction
var i2_node = document.createElement("i");
i2_node.setAttribute("class","fa fa-location-arrow fa-5x");
div7_node.appendChild(i2_node);
//style
div7_node.style.backgroundColor = "#EEBFED";
div7_node.style.width = "1140px";
div7_node.style.position = "absolute";
div7_node.style.top = "240px";


//phone
//create div with class row
var div8_node =document.createElement("div");
div8_node.setAttribute("class","row");
div3_node.appendChild(div8_node);
//create i with class phone
var i3_node = document.createElement("i");
i3_node.setAttribute("class","fa fa-phone fa-5x");
div8_node.appendChild(i3_node);
//style
div8_node.style.backgroundColor = "#89B0D8";
div8_node.style.width = "1140px";
div8_node.style.position = "absolute";
div8_node.style.top = "160px";

//twitter
//create div with class row
var div9_node =document.createElement("div");
div9_node.setAttribute("class","row");
div3_node.appendChild(div9_node);
// create i with class twitter
var i4_node = document.createElement("i");
i4_node.setAttribute("class","fab fa-twitter fa-5x");
div9_node.appendChild(i4_node);
//style
div9_node.style.backgroundColor = "#BAE8ED";
div9_node.style.width = "1140px";
div9_node.style.position = "absolute";
div9_node.style.top = "80px";

/*

info box

*/
//box
var div10_node = document.createElement("div");
div4_node.appendChild(div10_node);
//style
div10_node.style.backgroundColor = "#EAEBEB";
div10_node.style.marginLeft = "-303px";
div10_node.style.marginRight = "80px";
div10_node.style.marginBottom = "50px";
//h1
var h1_node = document.createElement("h1");
h1_node.setAttribute("title" , "proflie name");
h1_node.innerText  = "rami \n dannah";
div10_node.appendChild(h1_node);
//style 
//h1_node.style.fontFamily = "";