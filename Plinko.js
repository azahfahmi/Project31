class Plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,10);
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.width, this.height);
      }
}