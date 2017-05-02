var DEFAULT_X1 = 50,
    DEFAULT_Y1 = 50,
    DEFAULT_X2 = 150,
    DEFAULT_Y2 = 100;
function Rectangle()
{
    Shape.apply(this, arguments);
    this.x1 = DEFAULT_X1;
    this.y1 = DEFAULT_Y1;
    this.x2 = DEFAULT_X2;
    this.y2 = DEFAULT_Y2;
    this.widthRectangle = function()
    {
        return Math.abs(this.x2 - this.x1);
    };
    this.heightRectangle = function()
    {
        return Math.abs(this.y2 - this.y1);
    };
    this.setX1 = function (x)
    {
        this.x1 = x;
    };
    this.setY1 = function (y)
    {
        this.y1 = y;
    };
    this.setX2 = function (x)
    {
        this.x2 = x;
    };
    this.setY2 = function (y)
    {
        this.y2 = y;
    };
}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.x1, this.y1, this.getWidth(), this.getHeight());
    ctx.strokeStyle = this.getBorderColor();
    ctx.lineWidth = 3;
    ctx.strokeRect(this.x1, this.y1, this.getWidth(), this.getHeight());
    ctx.closePath();
};

Rectangle.prototype.calculateArea = function()
{
    return this.widthRectangle() * this.heightRectangle();
};

Rectangle.prototype.calculatePerimetr = function()
{
    return 2 * (this.widthRectangle() + this.heightRectangle())
};