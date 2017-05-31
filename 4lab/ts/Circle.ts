const DEFAULT_CIRCLE_FILL_COLOR: string = "#ff0";
const DEFAULT_CIRCLE_BORDER_COLOR: string = "#0f0";
const DEFAULT_CIRCLE_RADIUS: number = 20;
const DEFAULT_CIRCLE_X: number = 100;
const DEFAULT_CIRCLE_Y: number = 100;

import {Shape} from "./Shape";

class Circle extends Shape {
    private _posX: number;
    private _posY: number;
    private _radius: number;

    constructor() {
        super();
        this.fillColor = DEFAULT_CIRCLE_FILL_COLOR;
        this.borderColor = DEFAULT_CIRCLE_BORDER_COLOR;
        this.radius = DEFAULT_CIRCLE_RADIUS;
        this.posX = DEFAULT_CIRCLE_X;
        this.posY = DEFAULT_CIRCLE_Y;
    }
    public CalculateArea(): number {
        let tmp: string = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        return parseFloat(tmp);
    }
    public CalculatePerimeter(): number {
        let tmp: string = (2 * Math.PI * this.radius).toFixed(2);
        return parseFloat(tmp);
    }
    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();
    }
    set posX(x: number) {
        this._posX = x;
    }
    get posX(): number {
        return this._posX;
    }
    set posY(y: number) {
        this._posY = y;
    }
    get posY(): number {
        return this._posY;
    }
    set radius(radius: number) {
        this._radius = radius;
    }
    get radius(): number {
        return this._radius;
    }
}

export {Circle};
