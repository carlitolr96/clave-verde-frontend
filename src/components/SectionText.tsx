import Word from "./Word";

const paragraph = `Sesion de prueba Scroll Effect   `;

const SectionText = () => {
  return (
    <main className="bg-primary" id="experience-sesion">
      <Word value={paragraph} />
    </main>
  );
};

export default SectionText;
