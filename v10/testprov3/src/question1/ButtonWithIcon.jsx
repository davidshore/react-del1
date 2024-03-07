export default function ButtonWithIcon({ title, icon }) {
  return (
    <button className="flex items-center p-2 border border-black">
      {icon}
      {title}
    </button>
  );
}
