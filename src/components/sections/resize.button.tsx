import React from "react";


interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode; // type cho component
    btnStyle?: React.CSSProperties; // type cho css
    onClick?: () => void;
}
const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        <button onClick={onClick} className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;