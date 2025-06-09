import { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlinePersonOutline, MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_CONTACT,
  EMAIL_PUBLIC_KEY,
} from "../utils/emailConfig";

function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_CONTACT, form.current!, EMAIL_PUBLIC_KEY)
      .then(
        () => {
          toast.success("¡Formulario enviado con éxito!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          toast.error("Error al enviar el formulario.");
        }
      );
  };

  return (
    <section
      className="relative h-[100vh] bg-slate-300 py-20 px-6 md:px-16 lg:px-36 w-full text-gray-800 pt-16 pb-5"
      id="contact-us"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        <div className="flex flex-col justify-center">
          <p>Mapa</p>
        </div>

        <div className="lg:absolute lg:right-0 lg:top-1/2 lg:translate-y-[-5%] w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
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

              <input
                type="hidden"
                name="date"
                value={new Date().toLocaleString()}
              />

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

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default ContactUs;
