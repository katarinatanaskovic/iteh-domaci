import React,{useState} from 'react';
import "./Slike.css";
import KarticaSlika from '../../Elementi/KarticaSlika/KarticaSlika';
function Slike() {
    var slike=[
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        
    ];
    const [izabraniDizajn,setizabraniDizajn]=useState([]);
    function unesiNoviElement(link){
        setizabraniDizajn([...izabraniDizajn,link]);
        console.log(izabraniDizajn);
    }
    function izbaciElement(link1){
        setizabraniDizajn(izabraniDizajn.filter(link=>link!==link1));
        console.log(izabraniDizajn);
    }
    var i=0,i1=0;
    return (
        <div id='slike'>
            <h1 className='naslovi'>Predlozi</h1>
            <div className='galerija'>
                { slike.map((slika)=>(
                    <KarticaSlika key={++i} slika={slika} naslov={"Design"}  funkcija={unesiNoviElement} dugme={"Izaberite ovaj dizajn!"}/>
                ))}
            </div>
            <h1 className='naslovi'>Izabrani dizajn</h1>
            <div className='galerija'>
                { izabraniDizajn.map((slika)=>(
                    <KarticaSlika key={++i1} slika={slika} naslov={"Design"}  funkcija={izbaciElement} dugme={"Izbacite ovaj dizajn!"}/>
                ))}
            </div>
        </div>
    )
}

export default Slike
