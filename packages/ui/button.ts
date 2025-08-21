import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
<<<<<<< HEAD
    <button {...props}>
      {children}
    </button>
  );
};
=======
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
>>>>>>> a80c2c5 (refactor(monorepo): PR-9 리뷰 및 개선 - UI 컴포넌트 사용 예제 추가)
