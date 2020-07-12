import React from 'react';
import PropTypes from 'prop-types';

  const ProductTable = ({products}) => {

  
    return (
        <div>
           <table style={{width: '100%'}}>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
{
  products.map(item=>{
    return(
      <tr style={{textAlign: 'center'}}>
      <td>{item.Name}</td>
      <td>{item.Category}</td>
      <td>{item.Price}</td>


      </tr>
    )
  })
}

           </table>
   
        </div>

    )

}

ProductTable.propTypes = {
  products: PropTypes.any
}
export default ProductTable;