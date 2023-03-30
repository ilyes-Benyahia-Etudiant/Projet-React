import { GalleryData } from "../Gallerie/GallerieData";
import { useEffect, useState } from "react";
import { Container, Button } from 'react-bootstrap';
import '../Gallerie/Gallerie.css'



function App() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }

  return (
    <div className="main Main-Gallerie">
      <Container>
        <div className="galleryWrapper">
          
          <div className="filterItem">
            <ul>
                <li>
                  <Button className="button" variant="Primary" onClick={()=> setData(GalleryData)}>All</Button>
                </li>
                {
                collection.map((item)=> 
                <li> 
                  <Button className="button" variant="Primary" onClick={()=>{gallery_filter(item)}}>{item}</Button>
                </li>)
                }
            </ul>
          </div>  
            

        </div>
          <div className="galleryContainer">
          {
              data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } /></div> )
          }
        </div>

      </Container> 

    </div>
    
  );
}

export default App;