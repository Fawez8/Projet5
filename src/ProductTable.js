import React from 'react';

  const Myproduct = (products) => {

  
    return (
        <div>
           <table style="width:100%">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>

            <div>
              let affich = products.map(
                (el) => {

                  console.log(el)

                } 
                
                )
              
            </div>

           </table>
   
        </div>

    )

}
export default Myproduct;