class LayerButton {
    constructor(id, layer, text, req, unlocked){
      this.id=id;
      this.layer=layer;
      this.text=text;
      this.req=req;
      this.unlocked=unlocked;
    }
    switchtab() {
        for (let tab in tabs) {
          let z = document.getElementById(tabs[tab])
          console.log(this.layer)

          if (!(tabs.find(element => element == this.layer)==tabs[tab])) {
            z.style.display="none"
          } else {
            z.style.display="inline"
             if (tabs[tab]=="settingsoptions") {
            document.getElementById("directorybuttons").style.display="none"
      
          } else {document.getElementById("directorybuttons").style.display="inline"}
          }
        }
    }
}