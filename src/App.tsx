import Sketch from "react-p5";
import p5Types from "p5";
import './App.css';

let d = 0;

const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
};

const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(d-35, p5.height/2, 70, 70);
    d = (d+3)%(p5.width+70); 
};

export default () => {
    return (
        <div className="container">
            <h1>P5 Game</h1>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};
