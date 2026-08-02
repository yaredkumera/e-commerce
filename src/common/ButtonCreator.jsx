function ButtonCreator({ icon, children, STYLE, onclick }) {
  return (
    <button onClick={onclick} className={STYLE}>
      {icon}
      {children}
    </button>
  )
}
export default ButtonCreator;