import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProductAction, getProductToEdit } from "../actions/productActions";
import Swal from "sweetalert2";

const Product = ({ product }) => {
    const { name, price, id } = product;
    
    // Use useDispatch for getting action functions
    const dispatch = useDispatch();
 
    // Enable useNavigate to redirect user
    const navigate = useNavigate();

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

    // Function to redirect in a programmed way
    const redirectToEdit = product => {
        dispatch( getProductToEdit(product) );
        navigate(`/products/edit/${product.id}`);
    }
    return ( 
        <tr>
            <td>{name}</td>
            <td> <span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button 
                    type="button" 
                    className="btn btn-primary mr-2"
                    onClick={() => redirectToEdit(product)}
                >Edit</button>
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