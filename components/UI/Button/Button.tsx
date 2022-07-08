import React from "react";

interface ButtonProps {
    content:string,
    type:string,
    glass?: boolean,
    onButtonClick(): void;
}

const Button: React.FC<ButtonProps> = ({content,type,glass,onButtonClick}) => {
   
    return (
      <>
        {type === "main" && (
          <button
            className={`btn bg-main-500 border-none ${glass?"glass":""}`}
            onClick={onButtonClick}
          >
            {content}
          </button>
        )}
      </>
    );
}

export default Button;