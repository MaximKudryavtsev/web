var DEFAULT_RECTANGLE_X1 = 200,
    DEFAULT_RECTANGLE_Y1 = 200,
    DEFAULT_RECTANGLE_X2 = 400,
    DEFAULT_RECTANGLE_Y2 = 400;

function Rectangle()
{
    Shape.apply(this, arguments);
    this.x1 = DEFAULT_RECTANGLE_X1;
    this.y1 = DEFAULT_RECTANGLE_Y1;
    this.x2 = DEFAULT_RECTANGLE_X2;
    this.y2 = DEFAULT_RECTANGLE_Y2;

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
    this.widthRectangle = function()
    {
        return Math.abs(this.x2 - this.x1);
    };
    this.heightRectangle = function()
    {
        return Math.abs(this.y2 - this.y1);
    };
}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.x1, this.y1, this.widthRectangle(), this.heightRectangle());
    ctx.strokeStyle = this.getBorderColor();
    ctx.strokeRect(this.x1, this.y1, this.widthRectangle(), this.heightRectangle());
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