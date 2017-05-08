window.onload = function()
{
    draw();
};

function draw()
{
    var canvas = document.getElementById("drawingArea");
    var ctx = canvas.getContext("2d");
    var elements = {
        "circle": document.getElementById("circleInfo"),
        "triangle": document.getElementById("triangleInfo"),
        "rectangle": document.getElementById("rectangleInfo"),
        "startButton": document.getElementById("drawButton"),
        "fillColor": document.getElementById("fillColor"),
        "borderColor": document.getElementById("borderColor"),
        "rectangleX1": document.getElementById("rectangleX1"),
        "rectangleX2": document.getElementById("rectangleX2"),
        "rectangleY1": document.getElementById("rectangleY1"),
        "rectangleY2": document.getElementById("rectangleY2"),
        "radius": document.getElementById("radius"),
        "circleX": document.getElementById("circleX"),
        "circleY": document.getElementById("circleY"),
        "triangleX1": document.getElementById("triangleX1"),
        "triangleX2": document.getElementById("triangleX2"),
        "triangleX3": document.getElementById("triangleX3"),
        "triangleY1": document.getElementById("triangleY1"),
        "triangleY2": document.getElementById("triangleY2"),
        "triangleY3": document.getElementById("triangleY3"),
        "shapeSelect": document.getElementById("shapeSelect"),
        "area": document.getElementById("area"),
        "perimeter": document.getElementById("perimeter")
    };

    elements.triangle.style.display = "none";
    elements.circle.style.display = "block";
    elements.rectangle.style.display = "none";
    drawCircle(ctx, elements);
    elements.shapeSelect.onchange = function()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (shapeSelect.value) 
            {
                case "circle" :
                    elements.circle.style.display = "block";
                    elements.triangle.style.display = "none";
                    elements.rectangle.style.display = "none";
                    drawCircle(ctx, elements);
                    break;
                case "triangle" :
                    elements.circle.style.display = "none";
                    elements.triangle.style.display = "block";
                    elements.rectangle.style.display = "none";
                    drawTriangle(ctx, elements);
                    break;
                case "rectangle" :
                    elements.circle.style.display = "none";
                    elements.triangle.style.display = "none";
                    elements.rectangle.style.display = "block";
                    drawRectangle(ctx, elements);
                    break;
            }
    };

    elements.startButton.onclick = function()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (shapeSelect.value) 
            {
            case "circle":
                drawCircle(ctx, elements);
                break;
            case "rectangle":
                drawRectangle(ctx, elements);
                break;
            case "triangle":
                drawTriangle(ctx, elements);
                break;
            }
    }


}

function drawCircle(ctx, elements)
{
    var circle = new Circle();
    if (elements.radius.value)
    {
        circle.setRadius(elements.radius.value);
    }
    if (elements.circleX.value)
    {
        circle.setX(elements.circleX.value);
    }
    if (elements.circleY.value)
    {
        circle.setX(elements.circleY.value);
    }
    if (elements.fillColor.value)
    {
        circle.setFillColor(elements.fillColor.value);
    }
    if (elements.borderColor.value)
    {
        circle.setBorderColor(elements.borderColor.value);
    }
    circle.draw(ctx);
    elements.area.innerHTML = "Area of " + elements.shapeSelect.value +": " + "<b>" +circle.calculateArea() + "</b>";
    elements.perimeter.innerHTML = "Perimeter of " + elements.shapeSelect.value + ": " +  "<b>" + circle.calculatePerimetr() + "</b>";
}

function drawRectangle(ctx, elements)
{
    var rectangle = new Rectangle();
    if (elements.rectangleX1.value)
    {
        rectangle.setX1(elements.rectangleX1.value);
    }
    if (elements.rectangleY1.value)
    {
        rectangle.setY1(elements.rectangleY1.value);
    }
    if (elements.rectangleX2.value)
    {
        rectangle.setX2(elements.rectangleX2.value);
    }
    if (elements.rectangleY2.value)
    {
        rectangle.setY2(elements.rectangleY2.value);
    }
    if (elements.fillColor.value)
    {
        rectangle.setFillColor(elements.fillColor.value);
    }
    if (elements.borderColor.value)
    {
        rectangle.setBorderColor(elements.borderColor.value);
    }
    rectangle.draw(ctx);
    elements.area.innerHTML = "Area of " + elements.shapeSelect.value +": " + "<b>" + rectangle.calculateArea() + "</b>";
    elements.perimeter.innerHTML = "Perimeter of " + elements.shapeSelect.value + ": " +  "<b>" + rectangle.calculatePerimetr() + "</b>";
}

function drawTriangle(ctx, elements)
{
    var triangle = new Triangle();
    if (elements.triangleX1.value)
    {
        triangle.setX1(elements.triangleX1.value);
    }
    if (elements.triangleY1.value)
    {
        triangle.setY1(elements.triangleY1.value);
    }
    if (elements.triangleX2.value)
    {
        triangle.setX2(elements.triangleX2.value);
    }
    if (elements.triangleY2.value)
    {
        triangle.setY2(elements.triangleY2.value);
    }
    if (elements.triangleX3.value)
    {
        triangle.setX3(elements.triangleX3.value);
    }
    if (elements.triangleY3.value)
    {
        triangle.setY3(elements.triangleY3.value);
    }
    if (elements.fillColor.value)
    {
        triangle.setFillColor(elements.fillColor.value);
    }
    if (elements.borderColor.value)
    {
        triangle.setBorderColor(elements.borderColor.value);
    }
    triangle.draw(ctx);
    elements.area.innerHTML = "Area of " + elements.shapeSelect.value +": " + "<b>" + triangle.calculateArea() + "</b>";
    elements.perimeter.innerHTML = "Perimeter of " + elements.shapeSelect.value + ": " +  "<b>" + triangle.calculatePerimetr() + "</b>";
}