const DEFAULT_RECTANGLE_FILL_COLOR: string = "#0ff";
const DEFAULT_RECTANGLE_BORDER_COLOR: string = "#999";
const DEFAULT_RECTANGLE_X1: number = 300;
const DEFAULT_RECTANGLE_Y1: number = 50;
const DEFAULT_RECTANGLE_X2: number = 50;
const DEFAULT_RECTANGLE_Y2: number = 300;

import {Shape} from "./Shape";

class Rectangle extends Shape {
    private _posX1: number;
    private _posY1: number;
    private _posX2: number;
    private _posY2: number;

    constructor() {
        super();
        this.fillColor = DEFAULT_RECTANGLE_FILL_COLOR;
        this.borderColor = DEFAULT_RECTANGLE_BORDER_COLOR;
        this.posX1 = DEFAULT_RECTANGLE_X1;
        this.posY1 = DEFAULT_RECTANGLE_Y1;
        this.posX2 = DEFAULT_RECTANGLE_X2;
        this.posY2 = DEFAULT_RECTANGLE_Y2;
    }
    public CalculateArea(): number {
        let tmp: string = (this.CalculateWidth() * this.CalculateHeight()).toFixed(2);
        return parseFloat(tmp);
    }
    public CalculatePerimeter(): number {
        let tmp: string = (2 * (this.CalculateWidth() + this.CalculateHeight())).toFixed(2);
        return parseFloat(tmp);
    }
    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.posX1, this.posY1, this.CalculateWidth(), this.CalculateHeight());
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 5;
        ctx.strokeRect(this.posX1, this.posY1, this.CalculateWidth(), this.CalculateHeight());
        ctx.closePath();
    }
    private CalculateWidth(): number {
        return Math.abs(this.posX2 - this.posX1);
    }
    private CalculateHeight(): number {
        return Math.abs(this.posY2 - this.posY1);
    }
    set posX1(x: number) {
        this._posX1 = x;
    }
    get posX1(): number {
        return this._posX1;
    }
    set posY1(y: number) {
        this._posY1 = y;
    }
    get posY1(): number {
        return this._posY1;
    }
    set posX2(x: number) {
        this._posX2 = x;
    }
    get posX2(): number {
        return this._posX2;
    }
    set posY2(y: number) {
        this._posY2 = y;
    }
    get posY2(): number {
        return this._posY2;
    }
}

export {Rectangle};
