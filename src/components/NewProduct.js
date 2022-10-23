import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewProductAction } from "../actions/productActions";

const NewProduct = ({ history }) => {

    // Component's state
    const [ name, saveName ] = useState('');
    const [ price, savePrice ] = useState(0);

    // Use useDispatch that returns a function
    const dispatch = useDispatch();

    // Access store state
    const loading = useSelector( state => state.products.loading );
    const error = useSelector( state => state.products.error );
    
    // Call action from productActions
    const addProduct = product => dispatch( createNewProductAction(product) );
    
    // Use useNavigate to redirect user
    let navigate = useNavigate();

    // When user submits form
    const submitNewProduct = e => {
        e.preventDefault();

        // Validate form
        if (name.trim() === '' || price <= 0 ) {
            return;
        }
        // If no errors

        // Create new product
        addProduct({
            name,
            price
        });

        // Redirect home
        navigate('/');
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={ e => saveName(e.target.value) }
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    value={price}
                                    onChange={ e => savePrice( Number(e.target.value) ) }
                                />
                            </div> 

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Add</button>
                        </form>

                        { loading ? <p>Loading...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">There was an error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;