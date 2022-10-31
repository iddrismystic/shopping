import logo from "../components/logo";
import Nav from "../components/navBar";

const Receipt = () => {
    return ( 
        <div className="content">
            <Nav />

            <div className="receipt card" onClick={()=>window.print()}>
          <p className="row-flex space-between">
          <div className="h1">{logo}</div>
          <div class="text-bold">
            25 December, 2022
          </div>
          </p>
                <p>
                    <div className="h4">Iddris Abdul Wahab</div>
                    <p className="text-bold">0552500930</p>
                </p>
                <p>
                <table className="table text-center">
            <thead>
              <th>Product</th>
              <th>Price</th>
            </thead>
            <tbody>
                <tr>
                    <td>Product One</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Product Two</td>
                    <td>200</td>
                </tr>
            </tbody>
          </table>
                </p>
                <p>
                <div className="h4">Total: GHC 200.00</div>
                </p>
            </div>
        </div>
     );
}
 
export default Receipt;