// import React, { useState , useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__bounceInUp">{category}</h3> 
            {loading && <p className="animate__animated animate__flash">'Cargando...'</p>} 
            <div className="card-grid">
                {images.map ( (img) =>
                    <GifGridItem 
                            key={img.id} 
                            {...img}
                        /> 
                    )}
            </div>
        </>
    )
}

export default GifGrid

