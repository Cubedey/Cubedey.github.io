var dynamicElements= []
var dynamicValues= []

function addDynamicElement(id) {
  // Incase you just want an element in reference.
  this.dynamicElements[id] = document.getElementById(id);
}

function addDynamicValue(id, attribute, value, relativeplayerid, classification) {
  this.addDynamicElement(id);
  this.dynamicValues[id]=({id: id, attribute: attribute, value: value, relativeplayerid: relativeplayerid, classification:classification});
}
function render() {
  updatetotal()
  /*costtypeset()
  showtype=[
    "addclickcost", player.clicks.clicks.gte(10), false,
    "multclickcost", player.clicks.clicks.gte(250), false,
    "expclickcost", player.clicks.clicks.gte(10000), false,
    "homeswitchbutton", player.clicks.clicks.gte(1e60), false,
    "prestigeswitchbutton", player.clicks.clicks.gte(1e60), false,
    "upgrade:1", T(player.chosen[0])==1, false,
    "upgrade:2", player.prestige.upgradesbought[0]==1, false,
    "upgrade:3", player.prestige.upgradesbought[1]==1, false,
    "upgrade:4", player.prestige.upgradesbought[2]==1, false,
    "upgrade:5", player.prestige.upgradesbought[3]==1, false,
    "choice:1,0", player.chosen[0]+""==D(0)+"", true,
    "choice:2,0", player.chosen[0]+""==D(0)+"", true,
    "autobuyon", T(player.chosen[0])==1, false,
    "shiftbuyon", player.prestige.upgradesbought[4]==true, false,
    "autobuyertext", T(player.chosen[0])==1, false,
  ]*/
  
for (let dValue in this.dynamicValues) {
  if (this.dynamicElements[dValue] == null) continue;
  // If the element doesn't exist, skip it.
  
  if (isFunction(eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockcond"))) {
    if (eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockcond()") || 
    eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockbefore")
    ) {
  
      dynamicElements[dValue]["style"] = "display:inline"
      eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockbefore = true")
    } else (
      dynamicElements[dValue]["style"] = "display:none")
  } else {
if (eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockcond") || 
  eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockbefore")
  ) {

    dynamicElements[dValue]["style"] = "display:inline"
    eval(this.dynamicValues[dValue].classification+"['"+this.dynamicValues[dValue].relativeplayerid+"']"+".unlockbefore = true")
  } else (
    dynamicElements[dValue]["style"] = "display:none")
  }
  
  if (this.dynamicElements[dValue][this.dynamicValues[dValue].attribute] == this.dynamicValues[dValue].value()) continue;
  // If the attribute hasn't changed, skip it.

  this.dynamicElements[dValue][this.dynamicValues[dValue].attribute] = this.dynamicValues[dValue].value();
  // Updates the value.

}





  buttonnamelist=[
"Add AutoBuyer ",
"Multiply AutoBuyer ",
"Exponent AutoBuyer ",
 "Click Buyables Don't Cost Anything ",
  "Click Multiple "]
   checkifshown()
    stagesofformula=[
    player.buyables['Click-1'].amount.valueOf(),
    player.buyables['Click-1'].amount.valueOf()+"*"+player.buyables['Click-2'].amount.valueOf(),
    "("+player.buyables['Click-1'].amount.valueOf()+"*"+player.buyables['Click-2'].amount.valueOf()+")^"+player.buyables['Click-3'].amount.valueOf()]
    resourcechecklist=[player.buyables['Click-1'].amount,player.buyables['Click-2'].amount,player.buyables['Click-3'].amount]
    document.getElementById('clicksnum').innerHTML = player.clicks.toFixed(2)
    for (keyd in stagesofformula) {
        if (resourcechecklist[keyd].gt(1)) {
       document.getElementById('formula').innerHTML = (stagesofformula[keyd])
      }
    }
    //set classes to html stuff
    for (choice in player.choices) {
     if (player.chosen[player.choices[choice].group]!==0) {
      document.getElementById("choice-"+player.choices[choice].id.toString()).style.display =  "none"
      
     } else {      
      document.getElementById("choice-"+player.choices[choice].id.toString()).innerHTML = player.choices[choice].text
    }
      
    }
    for (layerbutton in player.layerbuttons) {
      if (player.layerbuttons[layerbutton].unlocked==true || player.layerbuttons[layerbutton].req()) {
        document.getElementById("layerbutton-"+player.layerbuttons[layerbutton].id.toString()).innerHTML = player.layerbuttons[layerbutton].text
      } else {      
     document.getElementById("layerbutton-"+player.layerbuttons[layerbutton].id.toString()).style.display =  "none"       
}
     }
    document.getElementById('prestigepoints').innerHTML =  player.prestige_points.toFixed(2)
    document.getElementById('prestigerequirement').innerHTML =  player.prestige_resetbase

    document.getElementById('totalonclick').innerHTML = player.totalonclick.toFixed(2)
    /*
    document.getElementById('upgrade:1').innerHTML =  buttonnamelist[3]+getcostbuyables(3)+"p"+" "+geteffectautobuyers(0).div(1000)+"s"
    document.getElementById('upgrade:2').innerHTML =  buttonnamelist[4]+getcostbuyables(4)+"p"+" "+geteffectautobuyers(1).div(1000)+"s"
    document.getElementById('upgrade:3').innerHTML =  buttonnamelist[5]+getcostbuyables(5)+"p"+" "+geteffectautobuyers(2).div(1000)+"s"
    document.getElementById('upgrade:4').innerHTML =  buttonnamelist[6]//+//getcost(6)+"p"
    document.getElementById('upgrade:5').innerHTML =  buttonnamelist[7]+getcostbuyables(7)+"p"+" "+player.prestige.clickmorebuy+"x"*/
    
    
    
    //document.getElementById('shiftbuyon').innerHTML =  ", ClickMultiple(Shift): "+tenxbuy
    //document.getElementById('autobuyon').innerHTML =  "AutoBuyers(A): "+autobuyon
     //<span id="autobuyon">False,</span><span id="shiftbuyon">False</span>
    document.getElementById('message').innerHTML =  totalmessage

  };


  function setcolors() {
    if (!(!document.getElementById("backgroundcolor").value)) {
      document.body.style.setProperty("--backgroundcolor", document.getElementById("backgroundcolor").value)
    }
    if (!(!document.getElementById("textcolor").value)) {
      document.body.style.setProperty("--textcolor", document.getElementById("textcolor").value)
    }
  }
  function resetcolors() {
    document.body.style.setProperty('--backgroundcolor',"black")
    document.body.style.setProperty("--textcolor", "#39FF14")
  }

function checkifshown() {
for (y in showtype) { 
if (y % 3 == 0) {  
  var z = document.getElementById(showtype[y])
  if (showtype[D(y).add(2)]) {
    if (showtype[D(y).add(1)]) {
      z.style.display = "inline"
      player.showtyperevealed[D(y).div(3)]=true
    } else {
      z.style.display = "none"
    }
  }else if (player.showtyperevealed[D(y).div(3)]) {
    z.style.display = "inline"
  } else if (showtype[D(y).add(1)]) {
    z.style.display = "inline"
    player.showtyperevealed[D(y).div(3)]=true
  } else {
    z.style.display = "none"
  }
}
 }
}
function hideallshown() {
  for (y in showtype) { 
    if (y % 3 == 0) {
      var z = document.getElementById(showtype[y])
      z.style.display = "none"
    }
  }
}
