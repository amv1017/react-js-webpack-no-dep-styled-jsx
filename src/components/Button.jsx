import React from 'react'

export default function Button({
  children,
  color,
  hoverColor,
  onClick,
  style,
}) {
  return (
    <>
      <button
        className="btn"
        style={style ? { ...style } : {}}
        onClick={onClick}
      >
        {children}
      </button>
      <style jsx>{`
        .btn {
          background-color: ${color};
          width: 90px;
          height: 30px;
          border: 0;
          border-radius: 10px;
          margin: 5px;
          color: #eee;
          font-weight: 600;
        }
        .btn:hover {
          background-color: ${hoverColor};
        }
      `}</style>
    </>
  )
}
