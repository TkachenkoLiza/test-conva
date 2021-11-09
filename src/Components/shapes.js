import React from 'react';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';

const Shapes = () => {
    return (
        <Stage width={window.innerWidth/2} height={window.innerHeight}>
            <Layer>
                <Rect
                    x={20}
                    y={50}
                    width={100}
                    height={100}
                    fill="red"
                    shadowBlur={10}
                    stroke="black"
                />
                <Circle 
                    x={600} 
                    y={100} 
                    radius={50} 
                    fill="green" 
                    stroke="blac"
                />
                <Line
                    x={20}
                    y={500}
                    points={[0, 0, 100, 0, 100, 100]}
                    tension={0.5}
                    closed
                    stroke="black"
                    fillLinearGradientStartPoint={{ x: -50, y: -50 }}
                    fillLinearGradientEndPoint={{ x: 50, y: 50 }}
                    fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
                />
                <Line
                    x={500}
                    y={450}
                    points={[0, 0, 100, 150]}
                    stroke="blue"
                    strokeWidth="15"
                    lineCap="round"
                />
            </Layer>
        </Stage>
    )
}

export default Shapes;