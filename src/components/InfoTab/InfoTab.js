import React from 'react'

import girl from '../../assets/img/girl.jpg';
import Google from '../icon/icon';

import './InfoTab.scss'

const InfoTab = () => {
    return ( 
        <div className='info-tab' >
                 <div className="first-text">                 
                     <hr className="section-line1"/>
                     <Google className="google-logo" />
                     <p>For too long, the smart home hasn’t been very smart. It’s complicated to set up and manage, with a lot of different devices that don’t work well together. So we’re simplifying things and bringing together all Nest and Google Home products under one roof. Introducing Google Nest. Welcome to the helpful&nbsp;home.</p>
                     <br></br>
                     <a className="first-text--learn-more" href=' '>Learn more about Google&nbsp;Nest</a>
             </div>
            <div>
                <img className="girl-with-tablet" src={girl} alt='girl' />
                    <div className="girl-text">
                        <p className="girl-text-title">Already have a Nest Account?</p>
                        <p className="girl-text-desc"> You can still come to nest.com to sign in to your Nest Account, manage your Nest Aware subscriptions, or view your order history.
                            </p>
                    </div>
                <hr className="section-line"></hr>
                <p className="copyright">Google and Google Home are trademarks of Google LLC.</p>
            </div>
        </div>
    )
}

export default InfoTab;
