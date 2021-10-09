
let D=x => new ExpantaNum(x)
let T=x => new Number(x)



function hardreset(bypass=false) {
  if (!bypass) {
  if (!confirm("Bro why?")) return
} 


	player= new Player()
	save()
	window.location.reload()
 
}
function returnwiw() {
  return x
}
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }


function RepeatBuy(x) {
      looping=true
      for (i=0;i<=player.prestige.clickmorebuy;i++) {
        Boop(x)
      }
      looping=false
    }
function updatetotal() {
  player.totalonclick=(player.buyables['Click-1'].amount.times(player.buyables['Click-2'].amount)).pow(player.buyables['Click-3'].amount)
}



function update() {
   // add();
   new Player()
    save()
  };
  
  function clicked() {
    updatetotal()
    player.clicks=player.clicks.add(player.totalonclick)
    render()
  }
 
function message(actualmessage) {
messagesplit=actualmessage.split("")
currentmessage=""
messagerepeat(actualmessage, messagesplit)
}
totalmessage="Hello Everybody!"
function messagerepeat(actualmessage, messagesplit, iteration=0) {
  
  if (typeof currentmessage == 'undefined') {
    currentmessage=messagesplit[iteration]
  } else {
    currentmessage=currentmessage+messagesplit[iteration]
  }
  console.log(currentmessage)
document.getElementById('message').innerHTML =  totalmessage+"\n"+currentmessage
iteration+=1
if (currentmessage!==actualmessage) {
  setTimeout(function(){messagerepeat(actualmessage, messagesplit, iteration)}, 200);
} else {totalmessage=totalmessage+"\n"+currentmessage}
}
  



