export function BackgroundShapes({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Large circle */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-orange-primary/5"></div>

      {/* Small circles */}
      <div className="absolute top-[20%] left-[10%] w-[5%] h-[5%] rounded-full bg-orange-secondary/10"></div>
      <div className="absolute bottom-[30%] right-[20%] w-[8%] h-[8%] rounded-full bg-orange-primary/10"></div>

      {/* Blob shape */}
      <div className="absolute -bottom-[15%] -left-[15%] w-[40%] h-[40%] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-orange-secondary/5"></div>

      {/* Pill shape */}
      <div className="absolute top-[40%] right-[5%] w-[15%] h-[5%] rounded-full bg-orange-primary/5"></div>
    </div>
  );
}
