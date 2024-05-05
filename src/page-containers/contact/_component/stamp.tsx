import React from "react";
type Props = {
  title: string;
  bgColor: string;
}; // Empty interface for now, can be used for future props
const borderColor = "#47647e"; // Define color for easy modifications and consistency
const Stamp = ({ title, bgColor }: Props) => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative">
        <div
          className="flex items-center justify-center w-40 h-40 rounded-full"
          style={{ border: `6px solid ${borderColor}` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full flex justify-center items-center">
            <div
              className="w-[90%] text-center text-white   font-bold text-lg border-2 py-2"
              style={{
                backgroundColor: bgColor,

                zIndex: "9",
                clipPath:
                  "polygon(100% 0, 87% 48%, 100% 100%, 0% 100%, 13% 50%, 0% 0%)",
                transform: "rotate(10deg)",
              }}
            >
              {title.toUpperCase()}
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
              style={{ border: `5px solid ${borderColor}` }}
            >
              {/* Smaller inner circle */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                style={{ border: `3px solid ${borderColor}` }}
              >
                {/* Innermost circle with text */}
                <div
                  className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                  style={{ border: `1px solid ${borderColor}` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stamp;
