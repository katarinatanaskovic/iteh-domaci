import React from 'react'
import "./Kontakt.css"
function Kontakt() {
    return (
        
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <h2>Kontaktirajte nas</h2>
                        
                        <input type="text" className='field' placeholder='Vase ime'/>
                        <input type="email" className='field' placeholder='Vas e-mail' />
                        <textarea className='field area' placeholder='Poruka'></textarea>
                        <button className='btn'>Posalji</button>
                        <div class="google-map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
						allowfullscreen></iframe>
				</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontakt
