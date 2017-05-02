var DEFAULT_RADIUS = 40,
    DEFAULT_X = 100,
    DEFAULT_Y = 100;
function Circle()
{
    Shape.apply(this, arguments);
    this.radius = DEFAULT_RADIUS;
    this.x = DEFAULT_X;
    this.y = DEFAULT_Y;
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
    }
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(ctx)
{
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};

Circle.prototype.calculateArea = function()
{
    return Math.round(Math.PI * Math.pow(this.radius, 2))
};

Circle.prototype.calculatePerimetr = function()
{
    return Math.round(2 * Math.PI * this.radius)
};