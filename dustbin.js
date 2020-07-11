class dustbin{
    constructor(x,y){
        var options= {
            isStatic:true,
            'friction' : 1.0,
            'density': 1.0,
        }
       this.body = Bodies.rectangle(x,y,500,650,options);
       this.width = 50;
       this.height = 50;
       this.image = loadImage("dustbingreen.png");
       World.add(world, this.body);

    }
    display(){
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
    }
}