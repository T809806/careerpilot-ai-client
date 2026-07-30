const Contact = () => {

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4">

       <h1 className="text-center text-5xl font-bold text-violet-700"> Contact Us </h1>
       <p className="mt-5 text-center text-gray-600">
          We'd love to hear from you.

        </p>

  <div className="mt-14 grid gap-10 md:grid-cols-2">

     <div className="rounded-3xl bg-white p-8 shadow-lg">

         <h2 className="text-2xl font-bold text-violet-700">  Get in Touch </h2>

    <div className="mt-8 space-y-5">

              <p>
                📧 support@careerpilotai.com
              </p>

              <p>
                📍 Dhaka, Bangladesh
              </p>

              <p>
                📞 +880 1234-567890
              </p>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border p-3"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border p-3"
              />

              <button
                className="w-full rounded-xl bg-violet-700 py-3 font-semibold text-white hover:bg-orange-500"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
       </div>
    </section>
  );
};

export default Contact;