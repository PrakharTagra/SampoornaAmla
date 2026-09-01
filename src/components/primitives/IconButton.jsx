export default function IconButton({ as: Tag = "button", className = "", children, label, ...props }) {
  return (
    <Tag
      aria-label={label}
      className={`inline-flex items-center justify-center h-9 w-9 rounded-sm text-brown hover:bg-brown/5 transition-[background-color,transform] duration-200 active:scale-[0.94] motion-reduce:active:scale-100 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
