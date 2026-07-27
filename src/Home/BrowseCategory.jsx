import SectionHeader from "./common/SectionHeader"
import BrowserCard from "./BrowserCard"
function BrowseCategory() {
const items=[
    {name:'Phones',image:'/BrowseBY1.png'},
    {name:'Computers',image:'/BrowseBY2.png'},
    {name:'SmartWatch',image:'/BrowseBY3.png'},
    {name:'Camera',image:'/BrowseBY4.png'},
    {name:'HeadPhone',image:'/BrowseBY5.png'},
    {name:'Gaming',image:'/BrowseBY6.png'},
]
  return (
    <div>
        < SectionHeader label="categories" title="Browse By Category"/>
        <BrowserCard data={items}/>
    </div>
  )
}

export default BrowseCategory