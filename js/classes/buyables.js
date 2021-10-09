function autobuy(x) {
  if (autobuyon==true) {
    if (player.prestige.upgradesbought[x]==1) {
      autobuythings[x](x+1)
    }
    }
  }

/*function Boop(x) {
 /* if (x>0) {
    
    if (!player.clicks.clicks.gte(getcost(x-1))) {return}
 
    if (player.prestige.upgradesbought[3]!==true) {
    player.clicks.clicks=player.clicks.clicks.sub(getcost(x-1))
  }
    functionlist[x]()
    updatetotal()
  } else {
    functionlist[x]()
  }
  
}*/
/*
function costtypeset() {
  costtype=[]
  for(let i=0; i<7; i++) {
    
    costtype.push(player.buyablesbought[i])
}
}
function buyablesboughtset() {
    player.buyablesbought=Array(7).fill(D(0))
}

  function getcostbuyables(x) {
    var costlist=[10,500,20000,1,1,1,1]
  var increaseratelist=[1.1,1.5,D(3).pow(player.buyablesbought[2]),1.1,1.2,1.5,1.1]
  costtypeset()
  return (D(costlist[x]).times(D(increaseratelist[x]).pow(D(costtype[x]).sub(1)))).round()
  
  }
  function geteffectautobuyers(x) {
    var upgradesspeed=[1000,1000,1000]
    var upgradeschangerate=[2,1.75,1.5]
    var upgradesnumber=[player.prestige.clickaddauto,player.prestige.clickmultiplyauto,player.prestige.clickexponentauto]
    return(D(upgradesspeed[x]).div(D(upgradeschangerate[x]).pow(upgradesnumber[x])))
  }

function buybuyables(x, y) {
  console.log(y+"")
  if (player.y.gte(getcostbuyables(x))) {
player.buyablesbought[x]=player.buyablesbought[x].add(1)
player.y=player.y.sub((getcostbuyables(x)))
if (looping!==true) {
  if (tenxbuy==true) {
RepeatBuy(x)
return
}
}
updatetotal()
render()
  }

  if (x>=0) {
    if (player.prestige.points.gte(getcostbuyables(x+3))) { 
    player.prestige.upgradesbought[x]=true
  player.prestige.points=player.prestige.points.sub(getcostbuyables(x+3))

if (x==0) {player.prestige.clickaddauto=player.prestige.clickaddauto.add(1)}
if (x==1) {player.prestige.clickmultiplyauto=player.prestige.clickmultiplyauto.add(1)}
if (x==2) {player.prestige.clickexponentauto=player.prestige.clickexponentauto.add(1)}
if (x==3) {player.prestige.clickmorebuy=player.prestige.clickmorebuy.add(1)}


}
  }
 
  render()
  }*/
  class Buyable {
    constructor(id,text,max_level,base_cost,cost_increase,currency,currency_name,effect_scaling=1,unlockcond=true,unlockbefore=false,amount=D(0),effect_type="static") {
    this.id= id;
    this.text= text;
    this.max_level=max_level;
    this.base_cost=base_cost;
    this.cost_increase=cost_increase;
    this.currency=currency;
    this.currency_name=currency_name;
    this.effect_scaling=effect_scaling;
    this.unlockcond=unlockcond;
    this.unlockbefore=unlockbefore;
    this.amount=amount;
    this.effect_type=effect_type;
    
    
    }
     getbuyablecost() {
      if (isFunction(this.cost_increase)) {
        var truecost=this.base_cost.times(this.cost_increase().pow(this.amount.sub(1)))
      } else {
        var truecost=this.base_cost.times(this.cost_increase.pow(this.amount.sub(1)))
      }
      
      return truecost;
    }
    gettruecurrency() {
      return eval("player."+this.currency)
    }
    canbuy() {
      if (D(this.gettruecurrency()).gte(this.getbuyablecost())) {
        return true
      } else return false
    }
    buy() {
      if (this.canbuy()) {
        eval("player."+this.currency+" = "+ "D("+eval("player."+this.currency).sub(this.getbuyablecost())+")")
        this.amount=this.amount.add(1)
        render()

      }
    }
    getbuyableeffect() {
      if (this.effect_type=="exponential") {
        return this.effect_scaling.pow(this.amount)
      }
      if (this.effect_type=="static") {
        return this.effect_scaling.times(this.amount)
      }
     
    }
  }