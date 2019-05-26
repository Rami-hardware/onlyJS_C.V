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

//create i with class mail
var i1_node =document.createElement("i");
div3_node.setAttribute("class","fas fa-envelope-open");
div3_node.appendChild(i1_node);

//create i with class loction
var i2_node =document.createElement("i");
//div3_node.setAttribute("class","col");
div3_node.appendChild(i2_node);

//create i with class phone
var i3_node =document.createElement("i");
//div3_node.setAttribute("class","col");
div3_node.appendChild(i3_node);


//create i with class twitter
var i4_node =document.createElement("i");
//div3_node.setAttribute("class","col");
div3_node.appendChild(i4_node);












