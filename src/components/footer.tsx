import Icon from './Icon';

import favicon from '../assets/images/favicon.png';

export default function Footer() {
  return (
    <footer className='dark-bg pv-xl flex f-j-c'>
      <div className='max full p-xl mv-xl'>
        <div className='flex'>
          <div>
            <h3 className='blue'>Company</h3>
            <p className='l-blue mv-xl'>About</p>
            <p className='l-blue mv-xl'>Pricing</p>
            <p className='l-blue mv-xl'>Careers</p>
          </div>
          <div>
            <h3 className='blue'>Legal</h3>
            <p className='l-blue mv-xl'>Security</p>
            <p className='l-blue mv-xl'>Terms of Service</p>
            <p className='l-blue mv-xl'>Privacy policy</p>
          </div>
          <div>
            <h3 className='blue'>Resources</h3>
            <p className='l-blue mv-xl'>Blog</p>
            <p className='l-blue mv-xl'>FAQs</p>
            <p className='l-blue mv-xl'>Case studies</p>
            <p className='l-blue mv-xl'>Documentation</p>
          </div>
          <div>
            <h3 className='blue'>Services</h3>
            <p className='l-blue mv-xl'>Messaging Services</p>
            <p className='l-blue mv-xl'>Identity/Verification Services</p>
            <p className='l-blue mv-xl'>Wallet Services</p>
            <p className='l-blue mv-xl'>Financial Services</p>
            <p className='l-blue mv-xl'>Crypto-currency Services</p>
            <p className='l-blue mv-xl'>Bill Payment Services</p>
          </div>
        </div>
        <div className='flex f-j-s f-a-c mv-lg'>
          <img src={favicon} className='mr-lg' />
          <Icon icon='phone.svg' cname='mh-md' />
          <p className='l-blue mr-xl'>08139841310</p>
          <Icon icon='mail.svg' cname='mh-md' />
          <p className='l-blue mr-xl'>info@dojah.io</p>
          <Icon icon='twitter.svg' cname='mh-md' />
          <Icon icon='slack.svg' cname='mh-md' />
          <Icon icon='Icig.svg' cname='mh-md' />
          <Icon icon='Icfb.svg' cname='mh-md' />
        </div>
        <div className='mv-xl'>
          <small className='l-blue block' style={{ width: '90%' }}>
            (231) 352-6536, 2237 Paul Rose Rd. Frankfort, Michigan(MI), 49635
            <br />
            <br />
            Bibendum augue blandit urna, egestas dignissim nunc. Sit
            sollicitudin id mollis nulla amet placerat imperdiet nunc orci.
            Egestas suspendisse in in amet libero adipiscing. Tristique semper
            vel tincidunt purus consequat mauris. Tortor, sit amet amet, duis
            cras eget lorem feugiat. Tempus ac sed consectetur pellentesque
            tortor porttitor aenean viverra aenean. Porttitor feugiat egestas
            amet viverra in quam vestibulum etiam.
            <br />
            <br />
            ©2021 Dojah. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
