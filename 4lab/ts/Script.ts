import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

window.onload = (): void => {
    draw();
    let currentShape: HTMLInputElement = <HTMLInputElement> document.getElementById("shapeSelect");
    currentShape.onclick = (): void => ChangeDetailedSettings();
    function ChangeDetailedSettings(): any {
        let circle: HTMLInputElement = <HTMLInputElement> document.getElementById("circleInfo");
        let triangle: HTMLInputElement = <HTMLInputElement> document.getElementById("triangleInfo");
        let rectangle: HTMLInputElement = <HTMLInputElement> document.getElementById("triangleInfo");
        triangle.style.display = "none";
        circle.style.display = "block";
        rectangle.style.display = "none";
        switch (currentShape.value) {
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
            default :
                break;
        }
    }

    let drawButton = <HTMLElement> document.getElementById("drawButton");
    drawButton.onclick = (): void => draw();
    currentShape.onchange = (): void => ChangeDetailedSettings();

    function draw(): any {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("drawingArea");
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        let info: HTMLElement = document.getElementById("area");
        let shapeType: string = (<HTMLInputElement> document.getElementById("shapeSelect")).value;
        let fillColor: string = (<HTMLInputElement> document.getElementById("fillColor")).value;
        let borderColor: string = (<HTMLInputElement> document.getElementById("borderColor")).value;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let shape: Shape;
        switch (shapeType) {
            case "circle" :
                shape = new Circle();
                initCircle(<Circle> shape);
                break;
            case "triangle" :
                shape = new Triangle();
                initTriangle(<Triangle> shape);
                break;
            case "rectangle" :
                shape = new Rectangle();
                initRectangle(<Rectangle> shape);
                break;
            default:
                break;
        }
        shape.fillColor = fillColor;
        shape.borderColor = borderColor;
        shape.Draw(ctx);

        info.innerHTML = "Area: " + shape.CalculateArea() + "<br />Perimeter: " + shape.CalculatePerimeter();
    }

    function initCircle(shape: Circle) {
        let radius: number = parseFloat((<HTMLInputElement> document.getElementById("radius")).value);
        let posX: number = parseFloat((<HTMLInputElement> document.getElementById("circleX")).value);
        let posY: number = parseFloat((<HTMLInputElement> document.getElementById("circleY")).value);

        if (radius) { shape.radius = radius; }
        if (posX) { shape.posX = posX; }
        if (posY) { shape.posY = posY; }
    }

    function initTriangle(shape: Triangle) {
        let posX1: number = parseFloat((<HTMLInputElement> document.getElementById("triangleX1")).value);
        let posY1: number = parseFloat((<HTMLInputElement> document.getElementById("triangleY1")).value);
        let posX2: number = parseFloat((<HTMLInputElement> document.getElementById("triangleX2")).value);
        let posY2: number = parseFloat((<HTMLInputElement> document.getElementById("triangleY2")).value);
        let posX3: number = parseFloat((<HTMLInputElement> document.getElementById("triangleX3")).value);
        let posY3: number = parseFloat((<HTMLInputElement> document.getElementById("triangleY3")).value);

        if (posX1) { shape.posX1 = posX1; }
        if (posY1) { shape.posY1 = posY1; }
        if (posX2) { shape.posX2 = posX2; }
        if (posY2) { shape.posY2 = posY2; }
        if (posX3) { shape.posX3 = posX3; }
        if (posY3) { shape.posY3 = posY3; }
    }

    function initRectangle(shape: Rectangle) {
        let posX1 = parseFloat((<HTMLInputElement> document.getElementById("rectangleX1")).value);
        let posY1 = parseFloat((<HTMLInputElement> document.getElementById("rectangleY1")).value);
        let posX2 = parseFloat((<HTMLInputElement> document.getElementById("rectangleX2")).value);
        let posY2 = parseFloat((<HTMLInputElement> document.getElementById("rectangleY2")).value);

        if (posX1) { shape.posX1 = posX1; }
        if (posY1) { shape.posY1 = posY1; }
        if (posX2) { shape.posX2 = posX2; }
        if (posY2) { shape.posY2 = posY2; }
    }
};
