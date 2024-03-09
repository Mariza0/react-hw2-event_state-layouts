export function CardsView({ products }) {

        return (

          <div className="cards"> 

             {products.map((card, index) => (
                <div key={index} className="item-flex" style={{backgroundImage: `url(${card.img})`, backgroundSize: 'cover' }}>
                  <div className="item-name" style={{textTransform: 'uppercase', fontWeight: 'bold' , textAlign: 'center'}}>{card.name}</div>
                  <div className="item-color" style={{textAlign: 'center'}}>{card.color}</div>
                  <div className="item-price-wrap">
                    <div className="item-price">
                        ${card.price}</div>
                    <button className="button-add-cesta">ADD TO CART</button>
                  </div>    
                </div>
              ))}
          
          </div> 
              
          );      
        }

        // style={{ width: '100%', height: 'auto' }}
        // style={{backgroundImage: `url(${card.img})`}}
        // style={{backgroundImage: `url(${card.img})`, backgroundSize: 'cover' }}