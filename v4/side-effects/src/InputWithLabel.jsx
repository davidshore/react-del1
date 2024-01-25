export default function InputWithLabel({
  value,
  placeholder,
  id,
  onInputChange,
  type,
  children,
}) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onInputChange}
        type={type}
      />
    </>
  );
}
