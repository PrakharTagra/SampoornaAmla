export default function IconButton({ as: Tag = "button", className = "", children, label, ...props }) {
  return (
    <Tag
      aria-label={label}
      className={`inline-flex items-center justify-center h-9 w-9 rounded-sm text-brown hover:bg-brown/5 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
