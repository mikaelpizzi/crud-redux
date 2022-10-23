import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../actions/productActions";

const Products = () => {

    // Use useDispatch for getting action functions
    const dispatch = useDispatch();

    useEffect(() => {
        // Consult API

        const loadProducts = () => dispatch( getProductsAction() );

        loadProducts();
    }, []);
    return (  
        <Fragment>
            <h2 className="text-center my-5">Product List</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;