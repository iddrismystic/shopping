import Nav from "../components/navBar";
import { useState } from 'react';
import Modal from '../Funcss/Components/Modal';
import Modalcontent from '../Funcss/Components/Modalcontent';
import Modalaction from '../Funcss/Components/Modalaction';
import Modalheader from '../Funcss/Components/Modalheader';
import Typography from '../Funcss/Components/Typography';
import Button from '../Funcss/Components/Button';
import { useEffect } from 'react';
import Link from "next/link";
import endpoint from "../database/endpoint";
import Axios from 'axios';
const Sell = () => {
    const [form, setform] = useState(false)
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [modal, setmodal] = useState(false)
    const [product, setproduct] = useState([])
    const [products, setproducts] = useState("");
    const [customer, setcustomer] = useState("");
    const [contact, setcontact] = useState("");
    const [type, settype] = useState("");
    const [quantity, setquantity] = useState(0);
    const [price, setprice] = useState("");
    const [wantReceipt, setwantreceipt] = useState(false);
    const [wantModal, setwantModal] = useState(false);

    const generateReceipt = ()=>{
      const today = new Date()
      const day = today.getDate() 
      const month = today.getMonth() + 1
      const year = today.getFullYear()
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const identify = product.id + time
      if(wantReceipt){
        if(customer && contact){
        Axios.post(endpoint + "/sales" , {
          key:identify,
          productId:product.id,
          product:product.product,
          price:price,
          day:day,
          month:month,
          year:year,
          time:time,
          customer: wantReceipt ? customer : "",
          contact: wantReceipt ? contact : "",
         })
       .then(()=>{
        window.location.assign("/receipt/" + identify)
       }).catch((err)=>alert(err.message))
    }
    else{
      alert("Make sure to enter customer details")
      setwantModal(true)
    }}else{
      // customer don't want receipt
      Axios.post(endpoint + "/sales" , {
        key:identify,
        productId:product.id,
        product:product.product,
        price:price,
        day:day,
        month:month,
        year:year,
        time:time,
       })
     .then(()=>{
      setwantModal(false)
     }).catch((err)=>alert(err.message))
    }
  }

    const handleUpdate = ()=>{
    if(price){
      if(quantity < 1){
        alert("Your quantity should not be less than zero")
       }else if(parseInt(quantity) > parseInt(product.quantity) ){
        alert("Product out of stock")
       }else{
        Axios.patch(endpoint + "/stock/" + product.id , {quantity:product.quantity - quantity})
        .then(()=>{
        setwantModal(true)
        setmodal(false)
        }).catch((err)=>alert(err.message))
       }
    }else(
      alert("Make sure to select your quantity")
    )
    }

    useEffect(() => {
    if(!products){
      Axios.get(endpoint + '/stock').then((data) => {
        setproducts(data.data);
      });
    }
    });
    
    const handleSell = (data)=>{
        setmodal(true)
        setproduct(data)
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

// handle price
const handlePrice = (value)=>{
  settype(value)
  if(type === "retail"){
    setprice(quantity * product.retail)
  }else if (type === "wholesale"){
    setprice(quantity * product.wholeSale)
  }
}


const handleType = (e)=>{
  const value = e.target.value
  handlePrice(value)
}

const handleQuantity = (e)=>{
  const value = e.target.value
  setquantity(value)
  if(type === "retail"){
    setprice(quantity * product.retail)
  }else if (type === "wholesale"){
    setprice(quantity * product.wholeSale)
  }
}

const Sell = ()=>{
  handleUpdate()
}
  return (
    <div className="content">
        <Modal animation="ScaleUp" duration={1} open={modal}>
<Modalheader>
<Typography text={product.product} heading="h4"/>
</Modalheader>
<Modalcontent>
<p>
<input type="number" className="input" placeholder="QUANTITY" onChange={handleQuantity} />
</p>
<p>
<select className="input" onChange={handleType}>
<option value="">-- RETAIL/WHOLESALE --</option>
<option value="wholesale">WHOLESALE</option>
<option value="retail">RETAIL</option>
</select>
</p>
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="success" onClick={Sell}>Sell GHC {price}.00</Button>
<Button color="white" bg="red" onClick={()=>setmodal(false)}>Cancel</Button>
</Modalaction>
</Modal>
<Modal animation="ScaleUp" duration={1} open={wantModal}>
<Modalheader>
<Typography text="Do you need a receipt" heading="h4"/>
</Modalheader>
<Modalcontent>
<p>
<input type="text" className="input" placeholder="Customer fullname" onChange={(e)=>setcustomer(e.target.value)} />
</p>
<p>
<input type="tel" className="input" placeholder="Customer Contact"  onChange={(e)=>setcontact(e.target.value)} />
</p>
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="success" onClick={()=>{
  setwantModal(false)
  generateReceipt(()=>setwantreceipt(true))
}}>Yes</Button>
<Button color="white" bg="red" onClick={()=>{
  setwantModal(false)
  setwantreceipt(false)
  generateReceipt()

}}>Don&apos;t want receipt</Button>
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
                    <select name="" id="" className="input card" >
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
              <th>Quatity</th>
              <th>Retail (GHC)</th>
              <th>Wholesale (GHC)</th>
              <th>Sell</th>
            </thead>
            <tbody>
              {
                products && 
                products.map(docs=>(
                  <tr>
                    <td>{docs.product}</td>
                    <td>{docs.quantity}</td>
                    <td>{docs.retail}</td>
                    <td>{docs.wholeSale}</td>
                    <td>
                    <button className="btn primaryBtn" onClick={()=>handleSell(docs)}>
                            Sell
                        </button>
                    </td>
                  </tr>
                ))
              }
              
            </tbody>
          </table>
        </p>
      </div>
    </div>
  );
};

export default Sell;
