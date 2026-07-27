 import LinkPage from "../common/LinkPage"
 import BodyPage from "./bodyPage"
 import NavLinks from "../common/NavLinks/NavLinks"
function NotFound() {
  return (
    <div>
        <NavLinks/>
        <LinkPage items={[{label:'Home',path:'/'},{label:'404 error',path:''} ]}  />
         <BodyPage/>
    </div>
  )
}

export default NotFound