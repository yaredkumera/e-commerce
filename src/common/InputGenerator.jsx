function InputGenerator({ label, name, type, setValue, onChange, value, placeholder, id, STYLE }) {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e)
    } else if (setValue) {
      setValue(e.target.value)
    }
  }

  return (
    <div className="form-group grid gap-2">
      {label && <label htmlFor={id} className="font-semibold text-gray-500">{label}</label>}
      <input
        id={id}
        name={name}
        className={STYLE+" focus:border-green-400"}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default InputGenerator;