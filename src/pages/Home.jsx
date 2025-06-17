export const Home = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">My Site Home Page</h2>

      <p className="text-lg mb-4">
        Welcome to my website! This is a simple React application where you can
        explore different pages like About, Contact, and Sign In.
      </p>

      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>✔️ Built with React and React Router</li>
        <li>✔️ Fast and lightweight setup using Vite</li>
        <li>✔️ Clean UI with no background colors</li>
      </ul>

      <p className="text-base">
        Feel free to navigate using the menu above. Hope you enjoy exploring the
        site!
      </p>
    </section>
  );
};
