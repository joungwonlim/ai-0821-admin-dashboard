import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
};