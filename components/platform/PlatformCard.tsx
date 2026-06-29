type PlatformCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function PlatformCard({
  title,
  description,
  href,
}: PlatformCardProps) {
  return (
    <div className="platform-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <a href={href}>
        Learn More →
      </a>
    </div>
  );
}
