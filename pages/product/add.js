import Nav from "../../components/navBar";

export default function Add(){
return(
    <div className="addHome">
        <Nav />
      <div className="row container">
        <div className="col sm-12 md-6 lg-6 padding">
            <img src="/add.svg" className="fit" alt="" />
        </div>
        <div className="col sm-12 md-6 lg-6 padding">
        <div className="width-500-max center">
            <p>
                <div className="h1">
                    Add New Product
                </div>
                <p>
                    Add a new product to your collection
                </p>
            </p>
            <div className="section2">
                <input className="input card" type="text" placeholder="PRODUCT NAME" />
            </div>
            <p>
            <button className="primaryBtn btn">
                Add Product
            </button>
            </p>
        </div>
        </div>
      </div>
    </div>
)
}