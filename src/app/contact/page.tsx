"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";


const ContactPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <style jsx>{`
        .wrapper {
          height: 200px;
          width: 300px;
          background-color: #3760c9;
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
          border-top: 100px solid #658ced;
          transform: rotateX(0deg);
          z-index: 3;
          transition-delay: 0.75s;
        }

        /* Lid when opened */
        .lid.two {
          border-top: 100px solid #3760c9;
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
          border-right: 150px solid #c4dff0;
          border-bottom: 100px solid #c4dff0;
          border-left: 150px solid #a4d4f2;
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
        <div className="letter absolute  !bg-gray-200 dark:!bg-white text-black">
          <div className="gap-y-2 absolute top-3 right-2  flex flex-col">
            <Link
              href="https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225/"
              target="_blank"
            >
              <LinkedInLogoIcon className="text-black" />
            </Link>
            <Link href="https://github.com/SaiThihaK" target="_blank">
              <GitHubLogoIcon className="text-black" />
            </Link>
          </div>
          <div className="p-3 flex flex-col justify-start gap-y-1">
            <p className="text-sm !text-start font-dancing tracking-wider">
              Sai Thiha Kyaw
            </p>

            <p className="text-sm font-dancing tracking-wider">
              w:saithihak2@gmail.com
            </p>
            <p className="text-sm font-dancing tracking-wider">
              p:+66842270764
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
