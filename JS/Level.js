class Level{
    constructor(arr){
       this.data = arr;
       this.gapBetween =gb
       this.paths;
       this.t=new tiles
    //  var d= this.data
    //    var graph = new Graph(
    //    d
    // );
    // console.log("grid "+graph.grid)
    // var start = graph.grid[0][9];
    // var end = graph.grid[10][1];
    // this.result = astar.search(graph, start, end);
    // console.log("result "+this.result)
    
    //this.highlight(result[0].x, result[0].y)
       // this.data=arr;
    
    }
    display(){
        var arr=this.data
        var gapBetween=this.gapBetween
        for(var i=0; i<arr.length;i++){
            for(var j=0; j<arr[i].length;j++){
               switch (arr[i][j]) {
                   case (10):
                       this.t.wall1( gapBetween *(j+1),gapBetween*(i+1))
                       break;
                    case (11):
                        this.t.wall2( gapBetween *(j+1),gapBetween*(i+1))
                        break;
                    case (12):
                        this.t.wall3( gapBetween *(j+1),gapBetween*(i+1))
                        break;
                    case (13):
                        this.t.wall4( gapBetween *(j+1),gapBetween*(i+1))
                        break;
                    case(1):
                        this.t.ground( gapBetween *(j+1),gapBetween*(i+1))
                        break;
                   default:
                       break;
               }

            }
        }
     
      // this.highlight(mouseX, mouseY,true)
      }
    
    highlightPath(){ 
        if(this.result!=[])
                {var r=this.result
                this.highlight(1,3,false)
            for (let i = 0; i < r.length; i++) {
                this.highlight(r[i].y, r[i].x,false)
                // console.log(r[i].x, r[i].y,false)
                //this.highlight(1,i,false)
            }
         }
    }
    highlight(x,y,mouse=false) {
        
        var gapBetween=this.gapBetween,ax,ay,d=this.data
        if(mouse==true) 
        {// x+=gapBetween/2;y+=gapBetween/2;
        x=mouseX + gapBetween/2,y=mouseY+ gapBetween/2
         if(mouse&&x>gapBetween*d[0].length+2||y>gapBetween*d.length+1||x<gapBetween||y<gapBetween){
             return;
         }
 
          ax=int(map(x,gapBetween,gapBetween*d[0].length,1,d[0].length,true))
          ay=int(map(y,gapBetween,gapBetween*d.length,1,d.length,true))
        //   this.path(ay,ax)
        }
        else if(!mouse){ 
            ax=x+1;ay=y+1;
        }
        if(keyDown=="SPACE"){
            console.log("ax: "+ax,"ay: "+ay)
        }
         push()
         rectMode(CENTER)     
         fill(255,200,0,100)
        strokeWeight(gapBetween*0.08)
         stroke("#A7FF0A");
        ellipse(ax*gapBetween,ay*gapBetween,gapBetween,gapBetween,20)
         rect(ax*gapBetween,ay*gapBetween,gapBetween,gapBetween,20)
         pop()
        
     }
     update(){

     }
    wall(x,y){
        push()
        fill(0)
        rectMode(CENTER)
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        pop()
    }
    path(x,y){
        var d= this.data
        var graph = new Graph(
        tp(this.data)
     );

     console.log("grid "+graph.grid,"x:"+x,"y: "+y)
     var start = graph.grid[0][9];
     var end = graph.grid[x][y];
     this.result = astar.search(graph, start, end);
    }
    
}

function gi(x,y,mouse=true){
    var gapBetween=gb
    var d=level.data
    if(mouse==true) 
    {// x+=gapBetween/2;y+=gapBetween/2;
    x=mouseX + gapBetween/2,y=mouseY+ gapBetween/2
     if(mouse&&x>gapBetween*d[0].length+2||y>gapBetween*d.length+1||x<gapBetween||y<gapBetween){
         
     }

      ax=int(map(x,gapBetween,gapBetween*d[0].length,1,d[0].length,true))
      ay=int(map(y,gapBetween,gapBetween*d.length,1,d.length,true))
  
    }
    ax--;ay--
    var a={x:ax,y:ay};
    return a;
}
function tp(arr){ 
    var tarr = arr;
    // tarr.forEach((i)=>{ 
    //     i.forEach((j)=>{
    //         if(j==0){
    //             j=1;
    //         }
    //         else{ 
    //             j=0;
    //         }
    //     })
    // })
    console.log(arr,tarr)
    for (let i = 0; i < tarr.length; i++) {
        for(let j = 0;j < tarr[i].length; j++)
         {
              if(tarr[i][j]>0){tarr[i][j]=0}
              else if(tarr[i][j]==0){tarr[i][j]=1}
        }
    }
    console.log(arr,tarr)
    return tarr;
}
