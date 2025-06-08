import { useRef } from "react";
import { MdOutlinePersonOutline, MdOutlineEmail } from "react-icons/md";

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // tu lógica para enviar email
};

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  return (
    <section className="relative h-[100vh] w-full bg-emerald-600" id="contact-us">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 z-0">
          
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full max-w-md bg-white p-8 rounded-xl shadow-lg z-10 mx-4 md:mx-16 lg:mx-36">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Envíanos un mensaje
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center text-sm text-slate-800"
          >
            <p className="text-xs bg-ecolodge text-white font-medium px-3 py-1 rounded-full">
              Contáctanos
            </p>
            <h1 className="text-4xl font-bold py-4 text-center">
              Para saber más de ti
            </h1>
            <p className="max-md:text-sm text-gray-500 pb-10 text-center">
              O simplemente contáctenos manualmente a través de{" "}
              <a
                href="mailto:contacto@claveverde.com"
                className="text-ecolodge hover:underline"
              >
                contacto@claveverde.com
              </a>
            </p>

            <div className="max-w-96 w-full px-4">
              <label htmlFor="name" className="font-medium">
                Nombre Completo
              </label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-1 focus-within:ring-ecolodge transition-all overflow-hidden">
                <MdOutlinePersonOutline size={"20px"} />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="h-full px-2 w-full outline-none bg-transparent"
                  placeholder="Introduce tu nombre completo"
                  required
                />
              </div>

              <label htmlFor="email-address" className="font-medium mt-4">
                Correo Electrónico
              </label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-1 focus-within:ring-ecolodge transition-all overflow-hidden">
                <MdOutlineEmail size={"20px"} />
                <input
                  type="email"
                  id="email-address"
                  name="user_email"
                  className="h-full px-2 w-full outline-none bg-transparent"
                  placeholder="Introduce tu correo electrónico"
                  required
                />
              </div>

              <label htmlFor="message" className="font-medium mt-4">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-1 focus-within:ring-ecolodge transition-all"
                placeholder="Introduce tu mensaje"
                required
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-1 mt-5 bg-primary hover:opacity-90 cursor-pointer text-white py-2.5 w-full rounded-full transition"
              >
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
