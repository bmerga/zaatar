import './SandalCollection.css'

const SandalCollection = () => {
    const SandalCollectionMainUrl = 'https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332245501-1RMWXBLLLA6J1LL0ZB6P/B065_WomensShoes_T2_116_CLOTH_2334.jpg'
    const SandalCollectionminiUrl = 'https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332245507-BWQY1N26HRTHLSS84Q3B/B065_WomensShoes_T2_110_1581.jpg'
    return (
    <div className='container'>
       <img src={SandalCollectionMainUrl} alt="Sandal-Main" className="sandal-collection-main" />
   <div className='sandal-collection-container'>
     <p className='sandal-collection-txt'>SANDAL COLLECTION</p>
    <p className='all-tied-up-txt'>ALL TIED UP</p>
    <button className='shopall'>SHOP ALL</button>
    <img src={SandalCollectionminiUrl} alt="Sandal-mini" className="sandal-collection-mini" />
    </div>
    </div>
  )
}

export default SandalCollection
