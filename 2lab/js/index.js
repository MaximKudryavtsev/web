window.onload = function()
{
    var shapeSelect = document.getElementById("shapeSelect");
};

shapeSelect.onclick = function()
{
    var circle = document.getElementById("circleInfo");
    var triangle = document.getElementById("triangleInfo");
    var rectangle = document.getElementById("rectangleInfo");
    switch (shapeSelect.value) {
        case "circle" :
            circle.style.display = "block";
            triangle.style.display = "none";
            rectangle.style.display = "none";
            break;
        case "triangle" :
            circle.style.display = "none";
            triangle.style.display = "block";
            rectangle.style.display = "none";
            break;
        case "rectangle" :
            circle.style.display = "none";
            triangle.style.display = "none";
            rectangle.style.display = "block";
            break;
    }
};


function draw()
{
    var ctx = document.getElementById("drawingArea").getContext("2d");
    var elements = {
        "circle": document.getElementById("circleInfo"),
        "triangle": document.getElementById("triangleInfo"),
        "rectangle": document.getElementById("rectangleInfo"),
        "fillColor": document.getElementById("fillColor"),
        "borderColor": document.getElementById("borderColor"),
        "triangleX1": document.getElementById("triangleX1"),
        "triangleX2": document.getElementById("triangleX2"),
        "triangleX3": document.getElementById("triangleX3"),
        "triangleY1": document.getElementById("triangleY1"),
        "triangleY2": document.getElementById("triangleY2"),
        "triangleY3": document.getElementById("triangleY3"),
        "rectangleX1": document.getElementById("rectangleX1"),
        "rectangleX2": document.getElementById("rectangleX2"),
        "rectangleY1": document.getElementById("rectangleY1"),
        "rectangleY2": document.getElementById("rectangleY2"),
        "radius": document.getElementById("radius"),
        "circleX": document.getElementById("circleX"),
        "circleY": document.getElementById("circleY")
    };
    var canvas = document.getElementById("canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (shapeSelect.value)
    {
        case "circle":
            drawCircle(ctx, elements)
    }
}

function drawCircle(ctx, elements)
{
    var circle = new Circle();
    circle.setRadius(elements.radius);
    circle.setX(elements.circleX);
    circle.setY(elements.circleY);
    circle.setFillColor(elements.fillColor);
    circle.setBorderColor(elements.borderColor);
    circle.draw(ctx);
}