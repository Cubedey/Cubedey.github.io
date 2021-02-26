

let D=x => new ExpantaNum(x)
var clicks = D(0);
var totalonclick = D(1)
var clickadd = D(1);
var clickmultiply = D(1);
var clickexponent = D(1);
var buttonnamelist=["Add Click ","Multiply Click ","Exponentiate Click "]
var donebefore=[0,0,0]
function checkifshown() {
var reqs=[10,250,10000]
var showtype=["addclickcost","multclickcost","expclickcost"]
for (y in showtype) 
{ var z = document.getElementById(showtype[y]);
if (clicks.gte(reqs[y])) {
 z.style.display = "inline";
 donebefore[y]=1
} else if(donebefore[y]==0) z.style.display = "none";
}
}
function Boop() {
  add()
  render()
};
function Boop1(x) {
  if (!clicks.gte(getcost(x))) {return}
  clicks=clicks.sub(getcost(x))
  addclick()
  updatetotal()
  render()
  
};
function Boop2(x) {
  if (!clicks.gte(getcost(x))) {return}
  clicks=clicks.sub(getcost(x))
  multiplyclick()
  updatetotal()
  render()
 
};
function Boop3(x) {
  if (!clicks.gte(getcost(x))) {return}
  clicks=clicks.sub(getcost(x))
  exponentiateclick()
  updatetotal()
  render()
 
};
function getcost(x) {
  var costlist=[10,500,20000]
var increaseratelist=[1.1,1.5,D(3).pow(clickexponent)]
  var costtype=[clickadd,clickmultiply,clickexponent]
return (D(costlist[x]).times(D(increaseratelist[x]).pow(costtype[x].sub(1)))).round()

}
function updatetotal() {
  totalonclick=(clickadd.times(clickmultiply)).pow(clickexponent).round()
}
function add() {
  //let input=document.getElementById('input').value;
  //if(isNaN(input)||!input) {input=1};
 clicks=clicks.add(totalonclick)
}
function addclick() {
 clickadd=clickadd.add(1)
}
function multiplyclick() {
clickmultiply=clickmultiply.add(1)
}
function exponentiateclick() {
clickexponent=clickexponent.add(1)
}
function update() {
   // add();
    save()
  };
  
 function render() {
   checkifshown()
    document.getElementById('clicks').innerHTML = clicks
    document.getElementById('totalonclick').innerHTML = totalonclick
    document.getElementById('addclicks').innerHTML = clickadd
    document.getElementById('multiplyclicks').innerHTML = clickmultiply
    document.getElementById('exponentiateclicks').innerHTML = clickexponent
    document.getElementById('addclickcost').innerHTML = buttonnamelist[0]+getcost(0)
    document.getElementById('multclickcost').innerHTML =  buttonnamelist[1]+getcost(1)
    document.getElementById('expclickcost').innerHTML =  buttonnamelist[2]+getcost(2)
  };

function save() {
  let data={
    clicks:clicks.valueOf(),
    totalonclick:totalonclick.valueOf(),
    clickadd:clickadd.valueOf(),
    clickmultiply:clickmultiply.valueOf(),
    clickexponent:clickexponent.valueOf(),
  };
  window.localStorage['save']=JSON.stringify(data);
  console.log(window.localStorage['save'])
}
function load() {
  console.log(window.localStorage['save'])
if (!window.localStorage['save']) {
  return}
let data=JSON.parse(window.localStorage['save']);
clicks=D(data.clicks)
totalonclick=D(data.totalonclick)
clickadd=D(data.clickadd)
clickmultiply=D(data.clickmultiply)
clickexponent=D(data.clickexponent)
}

