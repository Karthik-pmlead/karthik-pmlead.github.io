export default function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="platform-section">
      <h2 className="platform-section-title">{title}</h2>
      <div className="platform-section-content">{children}</div>
    </section>
  );
}
