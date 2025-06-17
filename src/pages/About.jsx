export const About = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>

      <p className="text-lg mb-4">
        This project is created as part of a learning journey in React
        development. It demonstrates routing, component-based architecture, and
        Tailwind CSS styling.
      </p>

      <p className="text-base mb-4">
        The main goal of this site is to provide a clean and minimal UI while
        exploring the power of modern frontend tools like:
      </p>

      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>React with Functional Components</li>
        <li>Vite for blazing-fast development</li>
        <li>Tailwind CSS for utility-first styling</li>
        <li>React Router for smooth navigation</li>
      </ul>

      <p className="text-base">
        Built by a passionate developer, always eager to learn and grow. Thanks
        for visiting!
      </p>
    </section>
  );
};
