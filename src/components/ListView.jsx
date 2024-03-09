export function ListView({ products }) {

    return (

      <div className="list"> 
      <div >
         {products.map((card, index) => (
            <div key={index} className="item-flex-list" style={{ marginBottom: '10px' }}>
                <img src={card.img} alt={card.name} style={{ width: '100px', height: '100px' }}/>
                <h2 className="item-name" style={{textTransform: 'uppercase'}}>{card.name}</h2>
                <div className="item-color">{card.color}</div>
                <div className="item-price">
                    ${card.price}</div>
                <button className="button-add-cesta">ADD TO CART</button>
            
            </div>
          ))}
          </div>
      </div> 
          
      );      
    }
