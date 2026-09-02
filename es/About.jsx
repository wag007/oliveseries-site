
const PARAGRAPHS = [
  "Olive lleva a profesores y expertos a los bares. Cuarenta minutos de una charla de verdad, y luego todos discuten sobre ella en la segunda ronda.",
  "Sin entradas, sin diapositivas, sin acreditación colgando del cuello. Llega pronto si quieres sitio para sentarte.",
  "Todas las charlas son gratis. Madrid, la mayoría de los jueves, desde las 20:00.",
];

function About({ open, onClose }) {
  const { Overlay } = window.OliveDesignSystem_d726ce;
  return <Overlay open={open} onClose={onClose} paragraphs={PARAGRAPHS} style={{ position: "fixed" }} />;
}
Object.assign(window, { About });
