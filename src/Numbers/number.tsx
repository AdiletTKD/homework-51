import React from "react";

interface INumbersProps {
    number: number;
}

const Numbers: React.FC<INumbersProps> = props => {
    return (
        <div className="numbers">
            <div className="number">
                <p> {props.number} </p>
            </div>
        </div>
    )
};

export default Numbers;