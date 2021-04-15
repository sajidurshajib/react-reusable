import React from 'react'
import connector from '../connector/connector'

const ProductCardView = (props) => {
    const {product} = props

    return (
        <div className="border border-secondary col-2 m-1 shadow-sm p-3 bg-white rounded">
            <img src={connector.joinWithBase(product.cover.medium)} className="img img-fluid" />
            <h6>{product.name}</h6>
            <div>
                <span className="d-inline-block bg-secondary text-light col-4 text-center">
                    {product.price.reguler}
                </span>
            </div>
        </div>
    )
}

export default ProductCardView