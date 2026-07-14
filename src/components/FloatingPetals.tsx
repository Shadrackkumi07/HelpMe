/** Soft floating brand marks from logo.png. */
export default function FloatingPetals({ count = 10 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 97) % 100}%`,
    delay: `${(i * 1.9) % 10}s`,
    duration: `${11 + ((i * 2.3) % 8)}s`,
    drift: `${((i % 5) - 2) * 28}px`,
    size: 22 + ((i * 7) % 20),
    opacity: 0.05 + ((i % 4) * 0.025),
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal absolute top-[-40px] overflow-hidden rounded-[22%] bg-black shadow-sm"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            ["--drift" as string]: petal.drift,
            backgroundImage: "url(/logo.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
