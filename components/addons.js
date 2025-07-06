export function ChevronMenu({ title, openstate, children }) {

  return (
    <details
      open={openstate}
      className="last-of-type:mb-0 rounded-lg p-2 mt-4 bg-primary border border-border-color transition-colors hover:border-accent"
    >
      <summary className="cursor-pointer font-semibold text-lg text-text-main">
        {title}
      </summary>
      <div className="nx-p-2 text-text-secondary">
        {children}
      </div>
    </details>
  );
}