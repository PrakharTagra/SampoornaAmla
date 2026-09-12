export default function Card({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag
      className={`bg-ivory-50 border border-brown/10 rounded-md shadow-card ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
