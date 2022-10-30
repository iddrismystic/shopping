import Link from "next/link";
const Nav = () => {
    return ( 
        <div>
                <div className="navigationBar">
        <div className="logo">
          Shopping
        </div>
        <Link href="/" className='navLink'>
       <i className="icon-home"></i> Home
        </Link>
        <Link href="/product/add" className='navLink'>
        <i className="icon-bag"></i> Add
        </Link>
        <Link href="/" className='navLink'>
        <i className="icon-tag"></i> products
        </Link>
      </div>

      <div className="sideBar">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, veritatis aliquam maiores explicabo sequi saepe. Dignissimos est incidunt dolores odit atque modi cumque excepturi, enim cum animi totam vero veritatis?
      </div>
        </div>
     );
}
 
export default Nav;