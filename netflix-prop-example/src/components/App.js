import React from 'react'
import Card from './Card'
import Header from './Header'
import NetflixData from './Netflixdata'
function App() {
    const NetflixContent = NetflixData.map( item=>{
        return <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <Card 
                        image={item.image} 
                        title={item.title} 
                        date={item.date} 
                        rating={item.rating} 
                        price={item.price} 
                        item={item.shared}
                    /> 
                </div>
    })
    return ( 
        <div>
            <Header/>
            <div className="container py-5">
                <div className="row">
                    {NetflixContent}
                </div>
            </div>
        </div>   
    )
}
export default App