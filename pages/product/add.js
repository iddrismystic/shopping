import Nav from "../../components/navBar";
import { useState } from 'react';
import Axios from 'axios';
import endpoint from "../../database/endpoint";

export default function Add(){
    const [product , setproduct] = useState("")
    const addProduct = ()=>{
        Axios.post(endpoint + "/products", {product:product})
        .then(()=>{
            alert("successfully added product")
         window.location.reload()
        })
        .catch(err=>alert(err.message))
    }
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
                <input className="input card" type="text" placeholder="PRODUCT NAME" onChange={(e)=>setproduct(e.target.value)} />
            </div>
            <p>
            <button className="primaryBtn btn" onClick={addProduct}>
                Add Product
            </button>
            </p>
        </div>
        </div>
      </div>
    </div>
)
}