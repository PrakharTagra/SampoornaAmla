const VARIANTS = {
  primary: "bg-forest text-ivory hover:bg-forest-50 border border-forest",
  secondary: "bg-transparent text-forest border border-forest hover:bg-forest hover:text-ivory",
  ghost: "bg-transparent text-brown border border-brown/20 hover:border-brown/50",
  gold: "bg-gold text-ivory border border-gold hover:bg-gold-200",
};

const SIZES = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-3.5",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium tracking-wide transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
