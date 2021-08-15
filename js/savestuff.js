
function exportsave() {
  document.getElementById("exportinput").value= window.localStorage['save']
}
function importsave() {
 window.localStorage['save']=document.getElementById("importinput").value
 load()
}
function save() {
  window.localStorage['save']= JSON.stringify(undecimalize(player));
}
function load() {
  player = decimalize(
    loopAssign(player, JSON.parse(window.localStorage['save']))
  );
}
function loopAssign(x, y) {

for (var key in y) {
  try {
    if (!y.hasOwnProperty(key)) continue;
    if (typeof y[key] == "object" && !(y[key] instanceof Array) && !(y[key] instanceof ExpantaNum)) {
        loopAssign(x[key],y[key])
    }
  else if (typeof y[key] == "undefined") {}
    else {
        x[key] = y[key]
    }
  } catch(err) {
    
  }
}
return x
}
function decimalize(x) { // imma continue working
  for (var i in x) {
      if (typeof x[i] == "object" && !(x[i] instanceof ExpantaNum))
        decimalize(x[i])
      else if (typeof x[i] == 'number' || !(isNaN(parseInt(x[i])))) {
        //put stuff that cant become numbers here
       // if () {}
         {
          x[i] = D(x[i]);
          if (x[i].isNaN()) x[i] = D(0);
        }
      }
  }
  return x
}
function undecimalize(z) { // imma continue working
  let x = {}
  for (var i in z) {
      if (typeof z[i] == "object" && !(z[i] instanceof ExpantaNum)) {
        x[i] = undecimalize(z[i])
      }
      else if ((z[i] instanceof ExpantaNum)){
        x[i] = z[i].toString()
      }
      
      else x[i] = z[i]

  }
  return x
}