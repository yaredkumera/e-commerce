function InputGenerator({ name, type, setValue, value, placeholder, id, STYLE }) {
  return (
    <div className="form-group grid gap-2">
      <label htmlFor={id} className="text-semibold text-gray-500">{name}</label>
      <input
        id={id}
        className={STYLE}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default InputGenerator;