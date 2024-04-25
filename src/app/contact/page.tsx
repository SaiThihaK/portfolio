"use client";
import Stamp from "./_component/stamp";

const ContactPage = () => {
  return (
    <div className="grid grid-col-1">
      <div className="flex justify-center items-center w-full h-screen text-xl">
        {/* <div className="absolute top-5 flex flex-col right-5">
          <Stamp title="Github" bgColor="#24292e" />
          <Stamp title="Linkedin" bgColor="#0077b5" />
          <Stamp title="G-Mail" bgColor="#ff4343" />
        </div> */}
        <style jsx>{`
          .lid {
            transform-origin: top;
            transition: transform 0.25s linear;
          }
          .lid.one {
            transition-delay: 0.75s;
          }
          .lid.two {
            transition-delay: 0.5s;
          }
          .letter {
            transition: transform 0.5s, width 0.5s, height 0.5s;
            transition-delay: 0.4s; /* Applied when hover starts */
          }
          .wrapper:hover .lid.one {
            transform: rotateX(90deg);
            transition-delay: 0s;
          }
          .wrapper:hover .lid.two {
            transform: rotateX(180deg);
            transition-delay: 0.25s;
            z-index: 0;
          }
          .wrapper:hover .letter {
            transform: translateY(-50px);
            transition-delay: 0.5s;
          }
          .letter:hover {
            trannsition: transform height 0.3s width 0.3s ease !important;
          }
        `}</style>
        <div className="wrapper h-[200px] w-[300px] relative flex center justify-center shadow-xl">
          <div className="lid one absolute h-full w-full top-0 left-0 border-r-[150px] border-transparent border-solid border-b-[100px] border-l-[150px] origin-top ease-linear border-t-[100px] border-t-[#658ced] rotate-0 z-[3]"></div>
          <div className="lid two absolute h-full w-full top-0 left-0 border-r-[150px] border-transparent border-solid border-b-[100px] border-l-[150px] origin-top border-t-[100px] ease-linear  border-t-[#3760C9] z-[1]"></div>
          <div className="envelope absolute w-full h-full top-0 left-0 border-t-[100px] border-t-transparent border-r-[150px] border-r-[#C4DFF0] border-b-[#C4DFF0] border-b-[100px] border-l-[150px] border-l-[#a4d4f2] z-[2]"></div>
          <div className="letter absolute top-0 w-[90%]  bg-gray-100 dark:bg-white rounded-[15px] hover:!w-full hover:!min-h-[300px] md:hover:!w-[500px] md:hover:!min-h-[500px] hover:!z-[4] hover:!translate-y-[-20vh]">
            <p className="text-center text-xl mt-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
