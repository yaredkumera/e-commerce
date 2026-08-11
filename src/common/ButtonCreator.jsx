function ButtonCreator({ icon, children, STYLE, onclick }) {
  return (
    <button onClick={onclick} className={STYLE+" cursor-pointer"}>
    {icon}
      {children}
   </button>
  )
}
export default ButtonCreator;