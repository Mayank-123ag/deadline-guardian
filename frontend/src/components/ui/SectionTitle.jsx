function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;