import Nav from "../components/navBar";
import Link from "next/link"
const Stockin = () => {
    return ( 
        <div>
                <div className="addHome">
        <Nav />
      <div className="row container">
        <div className="col sm-12 md-6 lg-6 padding">
            <img src="/addProduct.svg" className="fit" alt="" />
        </div>
        <div className="col sm-12 md-6 lg-6">
        <div className="width-500-max center">
            <p className="padding">
                <div className="h1">
                    In - Stock Form
                </div>
                <p>
                    Add a new product to your collection
                </p>
            </p>
            <div className="row">
                <div className="col sm-12 md-6 lg-6 padding">
                <input className="input card" name="date" type="date" placeholder="DATE" />
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                <select className="input card" name="name" type="text" placeholder="PRODUCT NAME">
                    <option value="">-- PRODUCT NAME --</option>
                </select>
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                <input className="input card" name="number" type="number" placeholder="NUMBER" />
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                <input className="input card" name="price" type="number" placeholder="WHOLESALE PRICE" />
                </div>
                <div className="col sm-12 md-12 lg-12 padding">
                <input className="input card" name="total" type="number" placeholder="TOTAL AMOUNT" />
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                <button className="primaryBtn btn full-width">
                MAKE CHANGES
               </button>
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                    <Link href="/">
                    <div className="outlineBtn full-width">
                   <i className="icon-chart"></i>  Back to DashBoard
                   </div>
                    </Link>
                </div>
            </div>
    
        </div>
        </div>
      </div>
    </div>
        </div>
     );
}
 
export default Stockin;