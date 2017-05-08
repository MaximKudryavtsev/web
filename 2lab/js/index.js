window.onload = function()
{
    draw();
};

function draw()
{
    var circle = document.getElementById("circleInfo");
    var triangle = document.getElementById("triangleInfo");
    var rectangle = document.getElementById("rectangleInfo");
    var shapeSelect = document.getElementById("shapeSelect");
    var startDrawButton = document.getElementById("drawButton");
    triangle.style.display = "block";
    circle.style.display = "none";
    rectangle.style.display = "none";
    shapeSelect.onchange = function()
    {
        switch (shapeSelect.value) 
            {
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
    startDrawButton.onclick = function()
    {
        switch (shapeSelect.value) 
            {
                case "circle" :
                    //alert("draw circle");
                    drawFigure("circle");
                    break;
                case "triangle" :
                    alert("draw triangle")
                    break;
                case "rectangle" :
                    //alert("draw rectangle")
                    drawFigure("rectangle");
                    break;
            }
    }


}


function drawFigure(name)
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
        "circleY": document.getElementById("circleY"),
        "shapeSelect": document.getElementById("shapeSelect"),
        "colculating": document.getElementById("colculating")
    };
    var canvas = document.getElementById("drawingArea");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (name)
    {
        case "circle":
            drawCircle(ctx, elements);
            break;
        case "rectangle":
            drawRectangle(ctx, elements);
            break;
    }
}

function drawCircle(ctx, elements)
{
    var circle = new Circle();
    circle.setRadius(elements.radius.value);
    circle.setX(elements.circleX.value);
    circle.setY(elements.circleY.value);
    circle.setFillColor(elements.fillColor.value);
    circle.setBorderColor(elements.borderColor.value);
    circle.draw(ctx);
    console.log(elements.circleX.value, elements.circleY.value, elements.radius.value);
}

function drawRectangle(ctx, elements)
{
    var rectangle = new Rectangle();
    rectangle.setX1(elements.rectangleX1.value);
    rectangle.setY1(elements.rectangleY1.value);
    rectangle.setX2(elements.rectangleX2.value);
    rectangle.setY2(elements.rectangleY2.value);
    rectangle.setFillColor(elements.fillColor.value);
    rectangle.setBorderColor(elements.borderColor.value);
    rectangle.draw(ctx);
}