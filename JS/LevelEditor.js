function mouseClicked(){ 
    var i=gi(mouseX, mouseY)
   //  console.log(i)
    // level.path(i[0],i[1])
    // console.log(i,"hello world")
    level.data[i.y][i.x]=activeBlock
    // var turn =activeBlock
    // if(turn ===10){turn=1}
    //       else if(turn ===1){turn=10}
    //     activeBlock=turn
  }
  function levelEditorRun(){ 
      
      switch (activeBlock) {
          case 10:
            level.t.wall1(500,200)
              break;
          case 11: 
            level.t.wall2(500,200)
            break;
          case 12: 
            level.t.wall3(500,200)
            break;
          case 13:
              level.t.wall4(500,200)
              break;
          case 1: 
            noFill()
            ellipse(500,160,20,40)
            level.t.ground(500,200)
            break;
          default:
              break;
      }
      
  }
  function keyPressed(){
      switch (keyCode) {
          case 49:
              activeBlock=1
              break;
          case 50:
              activeBlock=10
              break;
          case 51:
              activeBlock=11
              break;
          case 52:
              activeBlock=12
              break;
          case 53:
              activeBlock=13
              break;
          default:
              break;
      }
  }
var path='Levels'
var saveButton;
  function saveLevel(name){
      database.ref(path+'/'+name).update({
          data:level.data
      })
  }
 function showSave(){
    saveButton.style('width', '200px');
    saveButton.style('height', '40px');
    saveButton.style('background', 'lightblue');
    saveButton.position(500,400)
    saveButton.mousePressed(()=>{
        var name=prompt("Name The Level")
        saveLevel(name)
    })
}