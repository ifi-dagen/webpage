import React from 'react'
import {Link} from "react-router-dom"

const Newfooter = () => {
    return(
        <div >
            <h5>Følg oss</h5>
            <a href="http://www.instagram.com/dagenatifi"> Instagram</a> <br/>
            <a href="http://www.linkedin.com/dagenatifi"> LinkedIn</a> <br/>
            <a href="http://www.facebook.com/dagenatifi"> Facebook</a>
            <h5>Les mer</h5>
            <Link to={"/om-oss"}>Om foreningen</Link> <br/>
            <p>Dagen er en frivillig studentforening med tilhørighet til Institutt for Informatikk, UiO. Vi skaper kontakt mellom studenter og næringslivet ved å arrangere to karrieredager i året. På høsten arrangeres dagen@ifi, og på våren ettermiddagen@ifi, begge finner sted på Ole-Johan Dahls hus.</p>
        </div>
    )
}



export default Newfooter;