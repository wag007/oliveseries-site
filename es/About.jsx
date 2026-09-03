
const PARAGRAPHS = [
  "Una hora. Un bar. Una idea que cambia cómo ves algo.",
  "Olive saca a profesores y expertos del aula y los mete en la sala de al lado — conocimiento real, formato ligero, cero postureo. No hace falta currículum, solo curiosidad.",
  "Así se siente aprender cuando nadie te está evaluando.",
];

function About({ open, onClose }) {
  const { Overlay } = window.OliveDesignSystem_d726ce;
  return <Overlay open={open} onClose={onClose} paragraphs={PARAGRAPHS} style={{ position: "fixed" }} />;
}
Object.assign(window, { About });
