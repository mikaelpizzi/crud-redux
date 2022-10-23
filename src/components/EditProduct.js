import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProductAction } from "../actions/productActions";

const EditProduct = () => {

    // Use useNavigate to redirect user
    let navigate = useNavigate();

    // Use useDispatch for getting action functions
    const dispatch = useDispatch();

    // New product state
    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    });

    // Product to edit
    const editproduct = useSelector( state => state.products.editproduct );

    
    // Fill state automatically with useEffect
    useEffect(() => {
        saveProduct(editproduct);
    }, [editproduct]); 

    // Read data from form
    const onChangeInput = e => {
        saveProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const { name, price } = product;

    const onSubmitEditProduct = e => {
        e.preventDefault();

        dispatch( editProductAction(product) );

        navigate('/');
    }

    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>

                        <form
                            onSubmit={onSubmitEditProduct}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={onChangeInput}
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
                                    onChange={onChangeInput}
                                />
                            </div> 

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditProduct;