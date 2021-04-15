import React from 'react'
import ProductCardView from './ProductCardView'
import loaderGif from '../assets/loading.gif'

const ProductListView = (props)=>{

    const {products, loading} = props

    return(
        <div>
            {loading && <img className="img-fluid" src={loaderGif} />}
            {products && products.length > 0 && 
                <>
                    <h5 className="m-1 mb-4">
                        Total {products.length}
                    </h5>

                    <div className="row m-1">
                        {products.map(product=> <ProductCardView product={product} key={product._id} />)}
                    </div>
                </>
            }
        </div>
    )

}


export default ProductListView
