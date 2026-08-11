function InputGenerator({
  label,
  name,
  type,
  setValue,
  onChange,
  value,
  placeholder,
  id,
  STYLE,
}) {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    } else if (setValue) {
      setValue(e.target.value);
    }
  };

  const inputId = id || name;

  return (
    <div className="grid gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="font-medium text-xs sm:text-sm text-text-primary">
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        className={STYLE}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default InputGenerator;