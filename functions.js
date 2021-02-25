

let D=x => new ExpantaNum(x)
var clicks = D(0);
var totalonclick = D(1)
var clickadd = D(1);
var clickmultiply = D(1);
var clickexponent = D(1);

function Boop() {
  add()
  render()
};
function Boop1() {
  addclick()
  updatetotal()
  render()
  
};
function Boop2() {
  multiplyclick()
  updatetotal()
  render()
 
};
function Boop3() {
  exponentiateclick()
  updatetotal()
  render()
 
};
function updatetotal() {
  totalonclick=(clickadd.times(clickmultiply)).pow(clickexponent)
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
    document.getElementById('clicks').innerHTML = clicks
    document.getElementById('totalonclick').innerHTML = totalonclick
    document.getElementById('addclicks').innerHTML = clickadd
    document.getElementById('multiplyclicks').innerHTML = clickmultiply
    document.getElementById('exponentiateclicks').innerHTML = clickexponent
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

