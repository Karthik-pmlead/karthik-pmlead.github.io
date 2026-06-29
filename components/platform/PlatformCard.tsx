import Link from "next/link";

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

      <Link href={href} className="learn-more">
        Learn More →
      </Link>
    </div>
  );
}
