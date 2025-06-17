export const Contact = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <p className="text-lg mb-6">
          We'd love to hear from you! Fill out the form below or reach us
          through the provided contact details.
        </p>

        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +91-1234567890</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};
