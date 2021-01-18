var ss;
function putElemOnPageCSS(){
    lastlink = document.querySelectorAll("link[rel='stylesheet']").length;
    if(lastlink>0) 
        document.getElementsByTagName("head")[0].insertBefore(ss,document.querySelectorAll("link[rel='stylesheet']")[lastlink-1].nextSibling);
    else if((document.getElementsByTagName("style").length) > 0) 
        document.getElementsByTagName("head")[0].insertBefore(ss,document.getElementsByTagName("style")[0].nextSibling);
    else
        document.getElementsByTagName("head")[0].appendChild(ss);
} 

ss = document.createElement("link");
ss.type = "text/css";
ss.rel = "stylesheet";
ss.href = "../css/style-reserved.min.css";                  
putElemOnPageCSS();

var po;
var lastscript;
function putElemOnPageJS() {
    lastscript = document.querySelectorAll("head script").length;
    if (lastscript > 0) {
        document.getElementsByTagName("head")[0].insertBefore(po, document.querySelectorAll("head script")[lastscript - 1].nextSibling);
    }
}

po = document.createElement("script");
po.type = "text/javascript";
po.async = false;
po.src = "../js/lib/require.min.js";
po.setAttribute("data-main", "../js/config.min.js");
putElemOnPageJS();



