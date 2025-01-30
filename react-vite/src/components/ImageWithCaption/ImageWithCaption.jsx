export default function ImageWithCaption({ src, caption, className }) {
  return (
    <figure className={className}>
      <img src={src} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
