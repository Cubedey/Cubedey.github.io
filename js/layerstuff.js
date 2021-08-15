
function resetlayer(x) {
  if (player[x].cost()) {
  player[x].reset()
  render()
  }
}
/*
function choice(x, y) {
  player.chosen[y]=x
  document.getElementById(choiceslist[2*y]).style.display = "none"
  document.getElementById(choiceslist[2*y+1]).style.display = "none"
render()
}

function switchtab(x) {
  for (y in tabs) {
    let z = document.getElementById(tabs[y])

    if (!(tabs[x]==tabs[y])) {
      z.style.display="none"
    } else {
      z.style.display="inline"
       if (tabs[y]=="settingsoptions") {
      document.getElementById("directorybuttons").style.display="none"

    } else {document.getElementById("directorybuttons").style.display="inline"}
    }

  }
for (x in mainshow) {
  let z = document.getElementById(ta[x])
  if (settingsshown==1) {
  settingsoptions.style.display="inline"
  z.style.display= "none"
  document.getElementById('Settings').innerHTML = "Home"
} else { z.style.display= "inline"
 settingsoptions.style.display="none"
 document.getElementById('Settings').innerHTML = "Settings"
}

}

}*/