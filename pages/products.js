import Nav from "./../components/navBar";
import { useState } from 'react';
const Products = () => {
    const [form, setform] = useState(false)
    const handleSell = (data)=>{
        setform(true)
    }
  return (
    <div className="content">
      <Nav />
      <div className="width-800-max center">
        <p className="padding">
          <div className="h1">All Products</div>
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
              <th>Update</th>
              <th>Sell</th>
            </thead>
            <tbody>
                <tr>
                    <td>Product One</td>
                    <td>200</td>
                    <td>40</td>
                    <td>
                        <button className="btn info text-white">
                          <i className="icon-pencil"></i>  Update
                        </button>
                    </td>
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
                        <button className="btn info text-white">
                          <i className="icon-pencil"></i>  Update
                        </button>
                    </td>
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
