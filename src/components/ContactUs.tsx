function ContactUs() {
  return (
    <section className="relative bg-blue-50 py-20 px-6">
      {/* Grid container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-semibold text-gray-600 uppercase">Contacto</h4>
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mt-2">Titulo de contacto</h2>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-xl">📍</div>
              <div>
                <h5 className="font-semibold text-lg text-gray-900">Ubicacion</h5>
                <p className="text-gray-600">La Barbacoa, C. Luna, El Limón 32000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-xl">✉️</div>
              <div>
                <h5 className="font-semibold text-lg text-gray-900">Como podemos ayudarte?</h5>
                <p className="text-gray-600">info@yourdomain.com</p>
                <p className="text-gray-600">contact@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Floating Form */}
        <div className="lg:absolute lg:right-0 lg:top-1/2 lg:translate-y-[-50%] w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Full Name*</label>
              <input
                type="text"
                placeholder="Adam Gelius"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email*</label>
              <input
                type="email"
                placeholder="example@yourmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone*</label>
              <input
                type="tel"
                placeholder="+885 1254 5211 552"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Message*</label>
              <textarea
                rows={4}
                placeholder="Type your message here"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-full hover: cursor-pointer transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs