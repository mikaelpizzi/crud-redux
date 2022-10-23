import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductAction } from "../actions/productActions";
import Swal from "sweetalert2";

const Product = ({ product }) => {
    const { name, price, id } = product;
    
    // Use useDispatch for getting action functions
    const dispatch = useDispatch();

    // Confirm delete
    const confirmDeleteProduct = id => {

        // Ask user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete product!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Pass to action
                dispatch( deleteProductAction(id) );
            }
        })

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