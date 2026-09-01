export default function HeritageMotif({ className = "", tone = "brown" }) {
  const fill = tone === "ivory" ? "#F7F1E3" : "#332C24";

  return (
    <svg
      viewBox="0 0 400 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 140V90h14V70h10v20h16V60h12v30h18V50h14v40h20V40l10-10 10 10v50h20V55h14v25h18V75h10v15h16V60h12v30h16V70h10v20h14v50H0Z"
        fill={fill}
      />
      <circle cx="200" cy="34" r="5" fill={fill} />
      <path d="M197 34h6v-14h-6z" fill={fill} />
    </svg>
  );
}
