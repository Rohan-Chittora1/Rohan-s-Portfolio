export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-50 animate-blob"
        style={{ background: "radial-gradient(closest-side, var(--brand), transparent)" }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-50 animate-blob"
        style={{ background: "radial-gradient(closest-side, var(--brand-2), transparent)", animationDelay: "-6s" }}
      />
      <div
        className="absolute -bottom-32 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 animate-blob"
        style={{ background: "radial-gradient(closest-side, var(--brand-3), transparent)", animationDelay: "-12s" }}
      />
    </div>
  );
}
