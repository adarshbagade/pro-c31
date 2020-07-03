class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false ,
			restitution:0.3,
			friction:0.5,
			density:1.2
			
			
			}
		//this.image = loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.r=r;
		this.image =loadImage("pentagon.png");
		//World.add(world,this.image);
		
		this.body = Bodies.circle(x,y,r);
		World.add(world,this.body);
		//this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		//World.add(world, this.body);

	}
	display()
	{
			
			var ballpos = this.body.position;		

			push()
			
			//fill("red");
			//imageMode (CENTER)
			image (this.image,ballpos.x,ballpos.y,40,40);
			
			
			pop()
			
	}

}