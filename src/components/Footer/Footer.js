import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>BiteBrand</h4>

                        <p className="list-unstyled">
                            <li>01639076052</li>
                            <li>Dhaka, Bangladesh</li>
                            <li>10 Streeet Mirpur</li>
                        </p>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h5>Owner</h5>

                        <p className="list-unstyled">
                            <li>Ajhar RImon</li>
                           
                        </p>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} BiteBrand | All rights reserved
                    </p>
                </div>
            </div>
        </div>








        // <footer className='text-center py-3 text-light bg-dark w-100 position-absolute bottom-0 start-0'>
        //     <p>Copyright &copy; Tirez LLC {new Date().getFullYear()} All right reserved.</p>
        // </footer>

    );
};

export default Footer;