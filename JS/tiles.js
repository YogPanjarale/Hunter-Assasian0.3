class tiles { 
    constructor(){ 
        this.gapBetween=gb;
    }
    ground(x,y){
        push()
        fill("#8D725E")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.05)
        stroke("#636361")
        rect(x, y,this.gapBetween*0.8,this.gapBetween*0.9);
        pop()
    }
    wall1(x,y){
        push()
        fill("#646464")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        rect(x, y,this.gapBetween*0.8,this.gapBetween*0.85);
        pop()
    }
    wall2(x,y){
        push()
        fill("#915C16")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        rect(x, y,this.gapBetween*0.8,this.gapBetween*0.9);
        pop()
    }
    wall3(x,y){
        push()
        fill("#F54F0A")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        rect(x, y,this.gapBetween*0.8,this.gapBetween*0.9);
        pop()
    }
    wall4(x,y){
        push()
        fill("#6C688E")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        rect(x, y,this.gapBetween*0.8,this.gapBetween*0.9);
        pop()
    }
}