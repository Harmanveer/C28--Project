class mango
{
    constructor(x,y)
    {
        var options=
        {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2,
        }

        this.body = Bodies.rectangle(x, y, 20, 50, options);
        this.width = 20;
        this.height = 50;
        this.image = loadImage("Sprites/mango.png");
        World.add(world, this.body);
    }
    display()
    {
        imageMode(CENTER)
        image(this.image, this.x, this.y, this.width, this.height);
    }
}