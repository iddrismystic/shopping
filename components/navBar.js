import Link from "next/link";
import { useEffect ,useState} from "react";
const Nav = () => {
  const [mode, setmode] = useState("")
 const getMode = ()=>{
  if(localStorage.getItem("darkMode")){
    if(localStorage.getItem("darkMode") === true){
    setmode("dark")
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--light', '#212223');
    document.documentElement.style.setProperty('--color', '#f1f1f1');
    }else{
      setmode("light")
      document.documentElement.style.setProperty('--backgroundColor', 'white');
      document.documentElement.style.setProperty('--light', '#f1f1f1');
      document.documentElement.style.setProperty('--color', '#black');
    }
  }else{
    localStorage.setItem("darkMode" , false)
  }
}

useEffect(()=>{
  getMode()
},[])

const handleMode = ()=>{
if(document.documentElement.style.getPropertyValue("--backgroundColor") === "black"){
  // setMode("light")
  localStorage.setItem("darkMode" , false)
  getMode()
  
}else{
  // setMode("black")
  localStorage.setItem("darkMode" , true)
  getMode()
  
}
}
    return ( 
        <div>
                <div className="navigationBar">
        <div>
          <Link href="/" >
         <span className="logo">
         Shopping
        </span>
          </Link>
        </div>
        <div>
        <Link href="/" className='navLink'>
       <i className="icon-home"></i> Home
        </Link>
        <Link href="/product/add" className='navLink'>
        <i className="icon-bag"></i> Add
        </Link>
        <Link href="/products" className='navLink'>
        <i className="icon-tag"></i> products
        </Link>
        <Link href="/stockin" className='navLink'>
        <i className="icon-tag"></i> Add Stock
        </Link>
        </div>
        <div>
          <div className="Avatar" onClick={handleMode}>
            {
              mode === "black" ?
              <i className="lni lni-sun mode"></i>
              :
              <i className="lni lni-night mode"></i>
            }
        
          </div>
        </div>
      </div>

      <div className="sideBar">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, veritatis aliquam maiores explicabo sequi saepe. Dignissimos est incidunt dolores odit atque modi cumque excepturi, enim cum animi totam vero veritatis?
      </div>
        </div>
     );
}
 
export default Nav;