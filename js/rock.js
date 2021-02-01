class Rock{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      this.image=loadImage("images/stone.png");
      

      World.add(world,this.body)
    }
    display(){
        var Pos = this.body.position;

        push();
        translate(Pos.x,Pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}