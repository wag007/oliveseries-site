
const PARAGRAPHS = [
  "One hour. One bar. One idea that changes how you see something.",
  "Olive brings professors and experts out of the lecture hall and into the room next to you — real knowledge, lightweight format, zero gatekeeping. You don't need credentials, just curiosity.",
  "This is what learning feels like when nobody's grading you.",
];

function About({ open, onClose }) {
  const { Overlay } = window.OliveDesignSystem_d726ce;
  return <Overlay open={open} onClose={onClose} paragraphs={PARAGRAPHS} style={{ position: "fixed" }} />;
}
Object.assign(window, { About });
