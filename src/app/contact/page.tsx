import Stamp from "./_component/stamp";

const ContactPage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen text-xl">
      <div className="absolute top-5 flex flex-col right-5">
        <Stamp title="Github" bgColor="#24292e" />
        <Stamp title="Linkedin" bgColor="#0077b5" />
        <Stamp title="G-Mail" bgColor="#ff4343" />
      </div>
    </main>
  );
};

export default ContactPage;
