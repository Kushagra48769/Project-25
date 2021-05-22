class Paper{
	constructor(x,y,r){
        
		var options = {
            isStatic:false,
			'density':1.2,
            'friction': 0,
            'restitution':0.3 
	  }
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x,this.y, (this.r-20)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
            ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
            imageMode(CENTER);
			image(this.image, 0,-this.r-110/2);
			pop()
			this.keyPressed();
			}

 keyPressed(){

		if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:145});
	}
}
			
			
	}
