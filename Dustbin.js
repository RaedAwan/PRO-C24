class DustBin {
    constructor( x, y){ 
    this.x = x;
    this.y = y;
    this.dustbinWidth = 200;
    this.dustbinHeight = 213;
    this.wallThickness = 20;
    this.image = loadImage("dustbingreen.png");
    this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {istatic:true});

    this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,
          this.wallThickness, this.dustbinHeight, {istatic:true});

          this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2,
            this.wallThickness, this.dustbinHeight, {istatic: true});

            World.add(world, this.bottomBody);
            World.add(world, this.leftWallBody);
            World.add(world, this.rightWallBody);


    }
    display(){
        var posBottom = this.bottomBody.position;

        push()
        translate(posBottom.x, posBottom.y+10);
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        pop()
    }

}