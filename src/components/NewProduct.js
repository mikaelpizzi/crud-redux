import { useDispatch } from "react-redux";
import { createNewProductAction } from "../actions/productActions";

const NewProduct = () => {

    // Use useDispatch that returns a function
    const dispatch = useDispatch();

    // Call action from productActions
    const addProduct = () => dispatch( createNewProductAction() );
    
    
    // When user submits form
    const submitNewProduct = e => {
        e.preventDefault();

        // Validate form

        // If no errors

        // Create new product
        addProduct();
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
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                />
                            </div> 

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;