interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="py-12 mb-12 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-sans)", color: "var(--color-heading)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "var(--color-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
