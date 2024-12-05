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
    >
      <span className="block">{title}</span>
      <span className="block w-full h-1 bg-yellow10"></span>
    </a>
  );
}
