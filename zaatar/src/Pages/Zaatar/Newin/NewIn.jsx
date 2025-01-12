// import React from 'react'
import './newin.css'
function NewIn() {
    const imageUrlNewIn = "https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332257889-EEW8RUKUIEOQG5C400VG/B065_WomensShoes_T2_107_1507.jpg"
    const imageUrlNewIn2 = "https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332257656-NL3H5TDKWGZUZL93PT29/B065_WomensShoes_T2_106_1511.jpg"
    const imageUrlNewIn3 = "https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332257458-TXUJD1VAI029TKQF0L7A/B065_WomensShoes_T2_108_1519.jpg"
    const imageUrlNewIn4 = "https://images.squarespace-cdn.com/content/v1/63eaccd438e5b6253348ed6f/1676332257687-14Q8WHVKNW9UIC5RSDIM/B065_WomensShoes_T2_113_1570.jpg"
    return (
   
      <div >
      <p className='newin'> NEW IN</p>
      <div className="newin-container">
        <div className='cooper-sandal'><img src={imageUrlNewIn} alt="Zaatar-NewIn" className="zaatar-newinimage" />
         Cooper Sandal</div>
         <div className='richard-flat'><img src={imageUrlNewIn2} alt='Zaatar-NewIn2' className='zaatar-newinimage2'/>
         Richard Flat</div>
         <div className='benny-sandal'><img src={imageUrlNewIn3} alt='Zaatar-NewIn3' className='zaatar-newinimage3'/>
         Benny Sandal</div>
         <div className='billy-heel'> <img src={imageUrlNewIn4} alt='Zaatar-NewIn4' className='zaatar-newinimage4'/>
          Billy Heel</div>
      </div>
      
    </div>
    )
}

export default NewIn
