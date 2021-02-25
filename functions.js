

let D=x => new ExpantaNum(x)
var clicks = D(0);
function Boop() {
  add()
  render()
 
};
function add() {
  let input=document.getElementById('input').value;
  if(isNaN(input)||!input) {input=1};
 clicks=clicks.add(input)
}
function update() {
    add();
    save()
  };
  
 function render() {
    document.getElementById('Clic').innerHTML = clicks
 
  };

function save() {
  let data={
    clicks:clicks,



  }
  window.localStorage['save']=JSON.stringify(data)
}
function load() {
  console.log(window.localStorage['save'])
if (!window.localStorage['save']) {
  return}
let data=JSON.parse(window.localStorage['save']);
clicks=data.clicks
}

