import React, { useState } from 'react';
import { Stage, Layer, Text } from 'react-konva';

const TextDragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false);
    return (
                <Stage width={window.innerWidth/2} height={window.innerHeight}>
                    <Layer>
                        <Text
                            text="Hello! Please move this text"
                            fontSize={30}
                            x={100}
                            y={200}
                            draggable
                            fill={isDragging ? "green" : "black"}
                            onDragStart={() => {
                                setIsDragging(true);
                            }}
                            onDragEnd={() => {
                                setIsDragging(false);
                            }}
                        />
                    </Layer>
                </Stage>
    );
};

export default TextDragAndDrop;
