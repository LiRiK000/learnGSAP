"use client";

interface ThreeProps {
  children: React.ReactNode;
}
export const Three = ({ children }: ThreeProps) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-[rgb(24,23,24)]"
      data-name="fallback-animation"
    >
      <video
        muted
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        src="/fallback-v2023-black.mp4"
      />
      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
};
