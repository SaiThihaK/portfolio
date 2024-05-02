"use client";
import Link from "next/link";
import Envelope from "./_component/envelope";

const ContactPage = () => {
  const contactLink: { name: string; link: string }[] = [
    { name: "Github", link: "https://github.com/SaiThihaK" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225/",
    },
    { name: "Email", link: "saithihak2@gmail.com" },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-fit  border-gray-400 dark:border-white border-[1px] rounded-md shadow-xl dark:shadow-white shadow-black p-10">
        <div className="p-6 flex justify-between border-b-[0.5px] border-b-gray-600 flex-col md:flex-row items-center gap-4">
          <div className="w-[300px] md:w-[200px]">
            <h2 className="text-3xl font-extrabold font-mono">
              Let&apos; Create Something Greate Together
            </h2>
          </div>
          <div>
            <Envelope />
          </div>
        </div>
        <div className="flex justify-between items-center w-[300px] gap-x-4 pt-4 mx-auto">
          {contactLink.map((contact) => (
            <Link
              target="blank"
              href={`${
                contact.name === "Email"
                  ? `mailto:${contact.link}`
                  : contact.link
              }`}
              key={contact.link}
            >
              {contact.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
