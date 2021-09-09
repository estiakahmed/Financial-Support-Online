function getGet() { var prmstr = window.location.search.substr(1); return prmstr !== null && prmstr !== "" ? transformToAssocArray(prmstr) : {}; }
function transformToAssocArray( prmstr ) { var params = {}; var prmarr = prmstr.split("&"); for ( var i = 0; i < prmarr.length; i++) { var tmparr = prmarr[i].split("="); params[tmparr[0]] = tmparr[1]; } return params; }
var params=getGet();
var keys = Object.keys(params);
var values = Object.values(params);
var qs = "";
for(i=0;i<keys.length;i++){
    s = i<1 ? "?" : "&";
    qs+= s+keys[i]+"="+values[i];
}
var url = "https://financialsupportonline.co.uk/form/"+qs;
console.log(url);


document.getElementById("firstcheckbbtn").onclick = function () {
    location.href = "https://financialsupportonline.co.uk/form/?firstName=Riccardo&lastName=May&phone=07777777778&email=riccardo@monetise.co.uk&source=new-source&clickid=123456";
};
document.getElementById("secondcheckbtn").onclick = function () {
    location.href = "https://financialsupportonline.co.uk/form/?firstName=Riccardo&lastName=May&phone=07777777778&email=riccardo@monetise.co.uk&source=new-source&clickid=123456";
};
document.getElementById("peacecheck").onclick = function () {
    location.href = "https://financialsupportonline.co.uk/form/?firstName=Riccardo&lastName=May&phone=07777777778&email=riccardo@monetise.co.uk&source=new-source&clickid=123456";
};
document.getElementById("fourthbtn").onclick = function () {
    location.href = "https://financialsupportonline.co.uk/form/?firstName=Riccardo&lastName=May&phone=07777777778&email=riccardo@monetise.co.uk&source=new-source&clickid=123456";
};
document.getElementById("financialbutton").onclick = function () {
    window.location.href = "https://financialsupportonline.co.uk/form/?firstName=Riccardo&lastName=May&phone=07777777778&email=riccardo@monetise.co.uk&source=new-source&clickid=123456";
};



