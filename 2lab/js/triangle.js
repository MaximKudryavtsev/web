var DEFAULT_TRIANGLE_X1 = 100,
    DEFAULT_TRIANGLE_Y1 = 100,
    DEFAULT_TRIANGLE_X2 = 100,
    DEFAULT_TRIANGLE_Y2 = 300,
    DEFAULT_TRIANGLE_X3 = 300,
    DEFAULT_TRIANGLE_Y3 = 300;

function Triangle()
{
    Shape.apply(this, arguments);
    this.x1 = DEFAULT_TRIANGLE_X1;
    this.y1 = DEFAULT_TRIANGLE_Y1;
    this.x2 = DEFAULT_TRIANGLE_X2;
    this.y2 = DEFAULT_TRIANGLE_Y2;
    this.x3 = DEFAULT_TRIANGLE_X3;
    this.y3 = DEFAULT_TRIANGLE_Y3;

    this.setX1 = function(x)
    {
        this.x1 = x;
    };
    this.setY1 = function(y)
    {
        this.y1 = y;
    };
    this.setX2 = function(x)
    {
        this.x2 = x;
    };
    this.setY2 = function(y)
    {
        this.y2 = y;
    };
    this.setX3 = function(x)
    {
        this.x3 = x;
    };
    this.setY3 = function(y)
    {
        this.y3 = y;
    };
    this.getSideLength = function(x1, y1, x2, y2)
    {
        return Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)))
    };
    this.sideLength1 = this.getSideLength(this.x1, this.y1, this.x2, this.y2);
    this.sideLength2 = this.getSideLength(this.x1, this.y1, this.x3, this.y3);
    this.sideLength3 = this.getSideLength(this.x2, this.y2, this.x3, this.y3);
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x3, this.y3);
    ctx.closePath();
    ctx.fillColor = this.getFillColor();
    ctx.fill();
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();


};

Triangle.prototype.calculateArea = function()
{
    this.semiperimetr = Math.round((this.sideLength1 + this.sideLength2 + this.sideLength3) / 2);
    return Math.round(Math.sqrt(this.semiperimetr * (this.semiperimetr - this.sideLength1) *
                                         (this.semiperimetr - this.sideLength2) *
                                         (this.semiperimetr - this.sideLength3)));
};

Triangle.prototype.calculatePerimeter = function()
{
    return this.sideLength1 + this.sideLength2 + this.sideLength3;
};