import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductAction } from "../actions/productActions";

const Product = ({ product }) => {
    const { name, price, id } = product;
    
    // Use useDispatch for getting action functions
    const dispatch = useDispatch();

    // Confirm delete
    const confirmDeleteProduct = id => {
        // Ask user

        // Pass to action
        dispatch( deleteProductAction(id) );
    }
    return ( 
        <tr>
            <td>{name}</td>
            <td> <span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteProduct(id)}
                >Delete</button>
            </td>
        </tr>
    );
}
 
export default Product;