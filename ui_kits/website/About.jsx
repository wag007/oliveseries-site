
const PARAGRAPHS = [
  "Olive puts professors and experts in bars. Forty minutes of a real lecture, then everyone argues about it over the second round.",
  "No tickets, no slides, no badge on a lanyard. Turn up early if you want a stool.",
  "Every talk is free. Madrid, most Thursdays, from 20:00.",
];

function About({ open, onClose }) {
  const { Overlay } = window.OliveDesignSystem_d726ce;
  return <Overlay open={open} onClose={onClose} paragraphs={PARAGRAPHS} style={{ position: "fixed" }} />;
}
Object.assign(window, { About });
