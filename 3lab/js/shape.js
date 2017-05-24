var DEFAULT_FILL_COLOR = "#ccc";
var DEFAULT_BORDER_COLOR = "#000";

function Shape()
{
    this.fillColor = DEFAULT_FILL_COLOR;
    this.borderColor = DEFAULT_BORDER_COLOR;
    this.setFillColor = function(color)
    {
        this.fillColor = color;
    };
    this.getFillColor = function()
    {
        return this.fillColor;
    };
    this.setBorderColor = function(color)
    {
        this.borderColor = color;
    };
    this.getBorderColor = function()
    {
        return this.borderColor;
    };
}

Shape.prototype.draw = function()
{};
Shape.prototype.calculateArea = function()
{};
Shape.prototype.calculatePerimeter = function()
{};