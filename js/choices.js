class Choice {
    constructor(id, group, value, text) {
    this.id=id;
    this.group=group;
    this.value=value;
    this.text=text;
}

    choose() {
        player.chosen[this.group]=this.value
        render()
    }
}