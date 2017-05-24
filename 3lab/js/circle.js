var DEFAULT_RADIUS = 50,
    DEFAULT_CIRCLE_X = 200,
    DEFAULT_CIRCLE_Y = 200;

function Circle()
{
    Shape.apply(this, arguments);
    this.radius = DEFAULT_RADIUS;
    this.x = DEFAULT_CIRCLE_X;
    this.y = DEFAULT_CIRCLE_Y;

    this.setRadius = function(radius)
    {
        this.radius = radius;
    };
    this.setX = function(x)
    {
        this.x = x;
    };
    this.setY = function(y)
    {
        this.y = y;
    };
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
};

Circle.prototype.calculateArea = function()
{
    return Math.round(Math.PI * Math.pow(this.radius, 2));
};

Circle.prototype.calculatePerimeter = function()
{
    return Math.round(2 * Math.PI * this.radius);
};