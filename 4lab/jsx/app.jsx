let SelectFigure = React.createClass({
    render: function(){
        return(
            <select name="shapes" id="shapeSelect" className="shape_select form-control" >
                <option value="circle" selected>circle</option>
                <option value="triangle">triangle</option>
                <option value="rectangle">rectangle</option>
            </select>
        );
    }
})

let GeneralInfo = React.createClass({
    render() {
        return(
            <div className="general_info">
                <div>
                    <label for="fillColor">fill color</label>
                    <input type="text" id="fillColor" className="form-control" />
                    <label for="borderColor">Border color</label>
                    <input type="text" id="borderColor" className="form-control" />
                </div>
            </div>
        );
    }
});

let TriangleInfo = React.createClass({
    render() {
        return(
            <div className="triangle_info" id="triangleInfo">
                <div className="info_row">
                    <label for="triangleX1">x1</label>
                    <input type="text" id="triangleX1" className="form-control" />
                    <label for="triangleY1">y1</label>
                    <input type="text" id="triangleY1" className="form-control" />
                </div>
                <div className="info_row">
                    <label for="triangleX2">x2</label>
                    <input type="text" id="triangleX2" className="form-control" />
                    <label for="triangleY2">y2</label>
                    <input type="text" id="triangleY2" className="form-control" />
                </div>
                    <div className="info_row">
                    <label for="triangleX3">x3</label>
                    <input type="text" id="triangleX3" className="form-control" />
                    <label for="triangleY3">y3</label>
                    <input type="text" id="triangleY3" className="form-control" />
                </div>
            </div>
        );
    }
});

let CircleInfo = React.createClass({
    render() {
        return(
            <div className="circle_info" id="circleInfo">
                <div className="info_row">
                    <label for="circleX">x</label>
                    <input type="text" id="circleX" className="form-control" />
                </div>
                <div className="info_row">
                    <label for="circleY">y</label>
                    <input type="text" id="circleY" className="form-control" />
                </div>
                <div className="info_row">
                    <label for="radius">radius</label>
                    <input type="text" id="radius" className="form-control" />
                </div>
            </div>
        );
    }
});

let ReactangleInfo = React.createClass({
    render() {
        return(
            <div className="rectangle_info" id="rectangleInfo">
                <div className="info_row">
                    <label for="rectangleX1">x1</label>
                    <input type="text" id="rectangleX1" className="form-control" />
                    <label for="rectangleY1">y1</label>
                    <input type="text" id="rectangleY1" className="form-control" />
                </div>
                <div className="info_row">
                    <label for="rectangleX2">x2</label>
                    <input type="text" id="rectangleX2" className="form-control" />
                    <label for="rectangleY2">y2</label>
                    <input type="text" id="rectangleY2" className="form-control" />
                </div>
            </div>
        );
    }
});

let Calculations = React.createClass({
    render() {
        return(
            <div id="area">

            </div>
        );
    }
});


let DrawButton = React.createClass({
    render(){
        return(
            <button id="drawButton">draw</button>
        );
    }
})

let InputBlock = React.createClass({
    render() {
        return(
            <div className="input float_right">
                <SelectFigure/>
                <GeneralInfo/>
                <CircleInfo/>
                <ReactangleInfo/>
                <TriangleInfo/>
                <Calculations/>
                <DrawButton/>
                <div className="clear"></div>
            </div>

        );
    }
});

let Canvas = React.createClass({
    render() {
        return(
            <canvas id="drawingArea" className="drawing_area float_left" width="800" height="600"></canvas>
        );
    }
});

let Wrapper = React.createClass({
    render() {
        return(
            <div className="wrapper container">
                <Canvas/>
                <InputBlock/>
            </div>
        );
    }
});

ReactDOM.render(<Wrapper/>, document.getElementById('main'));