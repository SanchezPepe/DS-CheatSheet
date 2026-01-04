export function Section({ children, className = '' }) {
  return (
    <section className={`mb-8 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`section-title ${className}`}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, className = '' }) {
  return (
    <h3 className={`section-subtitle ${className}`}>
      {children}
    </h3>
  );
}
