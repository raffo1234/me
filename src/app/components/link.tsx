export default function UnderlinedLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <a
      rel="noreferrer"
      href={href}
      target="_blank"
      title={`Rafael Meza | ${title}`}
      className="inline-block group"
    >
      <span className="block">{title}</span>
      <span className="block w-full group-hover:w-0 transition-all translate-x-0 ease-in-out h-1 bg-yellow10"></span>
    </a>
  );
}
