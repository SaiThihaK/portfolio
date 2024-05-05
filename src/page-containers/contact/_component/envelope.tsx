"use client";

const Envelope = () => {
  return (
    <div className="">
      <style jsx>{`
        .wrapper {
          height: 200px;
          width: 300px;
          background-color: #d9c8b4; /* natural envelope background */
          position: relative;
          display: flex;
          justify-content: center;
          z-index: 0;
        }

        .lid {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          border-right: 150px solid transparent;
          border-bottom: 100px solid transparent;
          border-left: 150px solid transparent;
          transform-origin: top;
          transition: transform 0.25s linear;
        }

        /* Lid when closed */
        .lid.one {
          border-top: 100px solid #e0d6c1; /* lighter shade for lid */
          transform: rotateX(0deg);
          z-index: 3;
          transition-delay: 0.75s;
        }

        /* Lid when opened */
        .lid.two {
          border-top: 100px solid #d9c8b4; /* same as the main body for continuity */
          transform: rotateX(90deg);
          z-index: 1;
          transition-delay: 0.5s;
        }

        .envelope {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          border-top: 100px solid transparent;
          border-right: 150px solid #decab6; /* natural light brown */
          border-bottom: 100px solid #decab6; /* natural light brown */
          border-left: 150px solid #cbb9a8; /* slightly darker shade for depth */
          z-index: 3;
        }

        .letter {
          position: absolute;
          top: 0;
          width: 80%;
          height: 80%;
          border-radius: 15px;
          z-index: 2;
          transition: 0.5s;
        }

        .wrapper:hover .lid.one {
          transform: rotateX(90deg);
          transition-delay: 0s;
        }

        .wrapper:hover .lid.two {
          transform: rotateX(180deg);
          transition-delay: 0.25s;
        }

        .wrapper:hover .letter {
          transform: translateY(-50px);
          transition-delay: 0.5s;
        }
      `}</style>
      <div className="wrapper !shadow-xl">
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter absolute !bg-[#d8d5d2]  text-black">
          <div className="p-3 flex flex-col justify-start gap-y-1">
            <p className="text-sm !text-start !font-semibold !font-mono tracking-wider">
              Sai Thiha Kyaw
            </p>
            <p className="text-sm tracking-wider !font-mono !font-semibold">
              w: saithihak2@gmail.com
            </p>
            <p className="text-sm !font-mono tracking-wider !font-semibold">
              p: +66842270764
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
