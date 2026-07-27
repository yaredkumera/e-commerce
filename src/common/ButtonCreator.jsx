function ButtonCreator({ icon, children, STYLE, onClick }) {
  return (
    <button onClick={onClick} className={STYLE}>
      {icon}
      {children}
    </button>
  )
}
export default ButtonCreator;