import Nav from "./../components/navBar";
import { useState } from 'react';
import Modal from './../Funcss/Components/Modal';
import Modalcontent from './../Funcss/Components/Modalcontent';
import Modalaction from './../Funcss/Components/Modalaction';
import Modalheader from './../Funcss/Components/Modalheader';
import Typography from './../Funcss/Components/Typography';
import Button from './../Funcss/Components/Button';
import { useEffect } from 'react';
import Link from "next/link";
const Products = () => {
    const [form, setform] = useState(false)
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [modal, setmodal] = useState(false)
    const handleSell = (data)=>{
        setmodal(true)
    }
useEffect(()=>{
    var locale = "en-us";
    var today = new Date();
    var day = today.getDate();
    var fullDay = ("0" + day).slice(-2);
    var longMonth = today.toLocaleString(locale, { month: "long" });
    var year = today.getFullYear();
    const fullDate = longMonth + " " + fullDay + ", " + year
    setdate(fullDate)
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    settime(time)
})
  return (
    <div className="content">
        <Modal animation="ScaleUp" duration={1} open={modal}>
<Modalheader>
<Typography text="Product Name" heading="h4"/>
</Modalheader>
<Modalcontent>
    <p>
        <div className="h4">GHC 20.00</div>
    </p>
<p>
<input type="number" className="input" placeholder="QUANTITY"  />
</p>
<p>
<select type="number" className="input" placeholder="QUANTITY" >
<option value="">-- RETAIL/WHOLESALE --</option>
<option value="wholesale">WHOLESALE</option>
<option value="retail">RETAIL</option>
</select>
</p>
</Modalcontent>
<Modalaction funcss="text-right">
<Link href="/receipt">
<Button color="white" bg="success">Sell Product</Button>
</Link>
<Button color="white" bg="red" onClick={()=>setmodal(false)}>Cancel</Button>
</Modalaction>
</Modal>
      <Nav />
      <div className="width-800-max center">
        <p className="padding">
         <div className="row-flex space-between">
         <div className="h1">All Products</div>
          <div className=" text-bold">
            {date}
          </div>
         </div>
          <p>Check all products and make sales</p>
        </p>
        <div className="section2">
            <div className="row">
                <div className="col sm-12 md-6 lg-6 padding">
            <input type="text"  className="input card" placeholder="PRODUCT NAME"/>
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                    <select name="" id="" className="input card">
                        <option value="">Filter</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
        <p className="padding">
          <table className="table card text-center">
            <thead>
              <th>Product</th>
              <th>Total</th>
              <th>Price</th>
              <th>Sell</th>
            </thead>
            <tbody>
                <tr>
                    <td>Product One</td>
                    <td>200</td>
                    <td>40</td>
                    <td>
                        <button className="btn primaryBtn" onClick={handleSell}>
                            Sell
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Product Two</td>
                    <td>200</td>
                    <td>40</td>
                    <td>
                  <button className="btn primaryBtn" onClick={handleSell}>
                            Sell
                        </button>
                    </td>
                </tr>
            </tbody>
          </table>
        </p>
      </div>
    </div>
  );
};

export default Products;
