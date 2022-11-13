import Nav from "../components/navBar";
import { useEffect,useState } from 'react';
import Link from "next/link";
import endpoint from "../database/endpoint";
import Axios from 'axios';
import Modal from '../Funcss/Components/Modal';
import Modalcontent from '../Funcss/Components/Modalcontent';
import Modalaction from '../Funcss/Components/Modalaction';
import Modalheader from '../Funcss/Components/Modalheader';
import Typography from '../Funcss/Components/Typography';
import Button from '../Funcss/Components/Button';
import { useRef } from 'react';
const Product = () => {
    const [products, setproducts] = useState([])
    const [product, setproduct] = useState([])
    const [modal, setmodal] = useState(false)
    const [modifyModal, setmodifyModal] = useState(false)
    const form = useRef(null)
    useEffect(() => {
        Axios.get(endpoint + '/stock').then((data) => {
            setproducts(data.data);
          });
        });
        const handleModify = (doc)=>{
            setproduct(doc)
            setmodifyModal(true)
        }
        const handleDelete = (doc)=>{
            setproduct(doc)
            setmodal(true)
        }
        const Delete = ()=>{
            Axios.delete(endpoint + "/stock/" + product.id)
            .then(()=>{
            Axios.delete(endpoint + "/products/" + product.id)
            .then(()=>{
                alert(product.product + " successfully deleted")
                setmodal(false)
            })
            .catch(err=>alert(err.message))

            })
            .catch(err=>alert(err.message))
        }
        const Modify = ()=>{
            const current = form.current
            const date = current["date"].value
            const productName = current["product"].value
            const quantity = current["number"].value
            const wholeSale = current["wholesale"].value
            const retail = current["retail"].value
            const data = {date:date, product:productName, quantity:quantity, wholeSale:wholeSale, retail:retail}
            if(date && product && quantity && wholeSale && retail){
                Axios.patch(endpoint + "/stock/" + product.id, data)
                .then(()=>{
                    // update the product only
                    Axios.patch(endpoint + "/products/" + product.id, {product:productName})
                    .then(()=>{
                        alert("sucessfully updated")
                        setmodifyModal(false)
                    })
                    .catch(err=>alert(err.message))
                })
                .catch(err=>alert(err.message))
            }else{
                alert("Make sure to enter all details")
            }
        }
    return ( 
        <div className="content">
            <Modal animation="ScaleUp" duration={1} open={modal}>
<Modalheader>
{/* <Typography text={product.product} heading="h4"/> */}
</Modalheader>
<Modalcontent>
<p className="h4 padding">
    Are you sure you want to delete {product.product}
</p>
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="danger" onClick={Delete}>DELETE</Button>
<Button color="white" bg="info" onClick={()=>setmodal(false)}>Cancel</Button>
</Modalaction>
</Modal>
<Modal animation="ScaleUp" duration={1} open={modifyModal}>
<Modalheader>
{/* <Typography text={product.product} heading="h4"/> */}
</Modalheader>
<Modalcontent>
<form ref={form}>
<div className="row">
    <div className="col sm-12 md-6 lg-6 padding">
    <input className="input" name="date" type="date" placeholder="DATE" defaultValue={product.date} />
    </div>
    <div className="col sm-12 md-6 lg-6 padding">
    <input className="input" name="product" type="text" placeholder="PRODUCT NAME" defaultValue={product.product} />
    </div>
    <div className="col sm-12 md-6 lg-6 padding">
    <input className="input" name="number" type="number" placeholder="QUANTITY" defaultValue={product.quantity}/>
    </div>
    <div className="col sm-12 md-6 lg-6 padding">
    <input className="input" name="wholesale" type="number" placeholder="WHOLESALE PRICE" defaultValue={product.wholeSale} />
    </div>
    <div className="col sm-12 md-12 lg-12 padding">
    <input className="input" name="retail" type="number" placeholder="RETAIL PRICE" defaultValue={product.retail}/>
    </div>
    </div>
</form>
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="success" onClick={Modify}>Make changes</Button>
<Button color="white" bg="danger" onClick={()=>setmodifyModal(false)}>Cancel</Button>
</Modalaction>
</Modal>
            <Nav />
              <div className="width-800-max center">
        <p className="padding">
         <div className="row-flex space-between">
         <div className="h1">Manage Products</div>

         </div>
          <p>Check all products and manage products</p>
        </p>
        <div className="section2">
            <div className="row">
                <div className="col sm-12 md-6 lg-6 padding">
            <input type="text"  className="input" placeholder="PRODUCT NAME"/>
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                    <select name="" id="" className="input" >
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
              <th>Retail (GHC)</th>
              <th>Wholesale (GHC)</th>
              <th>Edit</th>
              <th>Delete</th>
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
                    <button className="btn primaryBtn"  onClick={()=>handleModify(docs)}>
                            Modify
                        </button>
                    </td>
                    <td>
                    <button className="btn red text-white" onClick={()=>handleDelete(docs)}>
                            Delete
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
}
 
export default Product;