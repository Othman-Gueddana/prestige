import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p><iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6382.786174079142!2d10.251155!3d36.8809435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb07da0ddf35%3A0x2bac5f69091277a5!2sPRESTIGE!5e0!3m2!1sen!2stn!4v1609103528474!5m2!1sen!2stn" title="map" width="600" height="350" frameBorder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>  </p>
                </div>
                <br></br>
                <br></br>
                <div>
                    <h2 style={{ color: "white" }}>phone number : 96 240 358</h2>
                </div>
            </div >
        )
    }
}

export default ContactPage;