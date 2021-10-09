class Player {
    constructor() {
        this.reset();
    }
    reset() {
    
    this.loaded=0;

    this.clicks=D(0);
    this.totalonclick=D(1);
    //this.clickadd=D(1);
    //this.clickmultiply=D(1);
    //this.clickexponent=D(1);

    this.prestige_points=D(0);
    this.prestige_resetbase=D(1e30);
    this.clickaddauto=D(0);
    this.clickmultiplyauto=D(0);
    this.clickexponentauto=D(0);
    this.clickmorebuy=D(1);
    
    this.buyables = {};
                                         //id,text,max_level,base_cost,cost_increase,currency,currency_name,effect_scaling=1,unlockcond=true,unlockbefore=false,amount=D(0)
    this.buyables["Click-1"]= new Buyable("Click-1","Add Click", -1, 10, 1.1, "clicks", "c",1,true,true,D(1))
    this.buyables["Click-2"]= new Buyable("Click-2","Multiply Click", -1, 500, 1.5, "clicks", "c",1,() => (this.clicks.gte(250)), false, D(1))
    this.buyables["Click-3"]= new Buyable("Click-3","Exponentiate Click", -1, 20000, () => (D(3).pow(this.buyables['Click-3'].amount)), "clicks", "c",1,() => (this.clicks.gte(5000)),false,D(1))
    this.buyables["Prestige-1"]= new Buyable("Prestige-1","Multiple Buyer", -1, 1, 1.1, "prestige", "p",1,() => (this.chosen[0]==1),false,D(1),"exponential")
    this.buyables["Prestige-2"]= new Buyable("Prestige-2","Add Autobuyer", -1, 1, 1.1, "prestige", "p",.5,() => (this.chosen[0]==1),false,D(1),"exponential")
    this.buyables["Prestige-3"]= new Buyable("Prestige-3","Multiply Autobuyer", -1, 1, 1.25, "prestige", "p",.625,() => (this.chosen[0]==1),false,D(1),"exponential")
    this.buyables["Prestige-4"]= new Buyable("Prestige-4","Exponent Autobuyer", -1, 1, 1.5, "prestige", "p",.75,() => (this.chosen[0]==1),false,D(1),"exponential")

    this.choices = {};

    this.choices["Prestige-1"]= new Choice("Prestige-1",0, 1, "Automation")
    this.choices["Prestige-2"]= new Choice("Prestige-2",0, 2, "Prestigous")

    this.chosen=Array(this.choices.length);

    this.layerbuttons = {};
//id, layer, text, req, unlocked
    this.layerbuttons["Click"]= new LayerButton("Click", "clickdisplay","Home", () => (this.clicks.gte(this.prestige_resetbase)),false)
    this.layerbuttons["Click-Settings"]= new LayerButton("Click-Settings", "clickdisplay","Home", true,true)
    this.layerbuttons["Settings"]= new LayerButton("Settings", "settingsoptions","Settings", true,true)
    this.layerbuttons["Prestige"]= new LayerButton("Prestige", "prestigedisplay","Prestige", () => (this.clicks.gte(this.prestige_resetbase)),false)
    //this.layerbuttons["Home"]= new LayerButton("Home", "clickdisplay","Home", () => true,true)




   /* reset() {
    this.player.clicks.clicks=D(0);
        this.player.clicks.totalonclick=D(1)
        this.player.buyablesbought[0]=D(1)
        this.player.buyablesbought[1]=D(1)
        this.player.buyablesbought[2]=D(1)
        this.player.prestige.points=player.prestige.points.add(1)
   
    this.resetcost=D(1e60)
    cost() {
      if (player.clicks.clicks.gte(player.prestige.resetcost)) {
        return true
      } else return false
    } 
    }*/
    }

    }

    var player = new Player();

setInterval(function() { tick(); }, 1000);
load()
//function addDynamicValue(id, attribute, value, relativeplayerid, classification) {
for (let key of Object.keys(player.buyables)) {
  addDynamicValue("buyable-"+player.buyables[key].id, "innerHTML", () => (player.buyables[key].getbuyableeffect()+' '+player.buyables[key].text+' '+player.buyables[key].getbuyablecost().toFixed(2)+player.buyables[key].currency_name), player.buyables[key].id, "player.buyables")
}

    if (player.loaded==0) {
    player.loaded=1
    hideallshown();
};
render()
    function tick() {
  //  console.log(window.localStorage['save'])
render();
update();    
}
//setInterval(function() { autobuy(0); }, geteffectautobuyers(0))
//setInterval(function() { autobuy(1); }, geteffectautobuyers(1))
//setInterval(function() { autobuy(2); }, geteffectautobuyers(2))

var autobuylist=["clickadd","clickmultiply","clickexponent"]
//var autobuythings=[buybuyables,buybuyables,buybuyables,]
var autobuyers=["upgrade:1","upgrade:2","upgrade:3",]
var costtype=[]
var buttonnamelist=["Add Click ",
"Multiply Click ",
"Exponentiate Click ",
"Add AutoBuyer ",
"Multiply AutoBuyer ",
"Exponent AutoBuyer ",
 "Click Buyables Don't Cost Anything ",
  "Click Multiple "]
var showtype
var backgroundcolor = "black";
var textcolor = "#39FF14";

layers=["clicks","prestige"]
var choiceslist=["choice:1,0","choice:2,0"]
var tabs=Array(player.layerbuttons.length)

function settabnames() {
  var index=0
  for (id in player.layerbuttons) {
    tabs[index]=player.layerbuttons[id].layer
    index+=1
  }
}
settabnames()
var looping=false

