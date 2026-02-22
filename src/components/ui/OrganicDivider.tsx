interface OrganicDividerProps {
  variant?: "wave" | "hills" | "roots";
  flip?: boolean;
  className?: string;
  fillColor?: string;
}

export function OrganicDivider({
  variant = "wave",
  flip = false,
  className = "",
  fillColor = "currentColor",
}: OrganicDividerProps) {
  const paths = {
    wave: "M0,64 C320,120 480,0 720,48 C960,96 1200,20 1440,64 L1440,128 L0,128 Z",
    hills: "M0,96 C240,40 480,100 720,60 C960,20 1200,80 1440,48 L1440,128 L0,128 Z",
    roots: "M0,80 Q180,40 360,72 T720,56 T1080,80 T1440,64 L1440,128 L0,128 Z",
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        fill={fillColor}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
