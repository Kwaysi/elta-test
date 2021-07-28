import Footer from './components/footer';
import Header from './components/header';
import Button from './components/button';

import image3 from './assets/images/image-3.png';
import image1 from './assets/images/image-1.png';
import laptop1 from './assets/images/laptop1.png';
import favicon from './assets/images/favicon.png';
import expensa from './assets/images/expensa.png';
import recallo from './assets/images/recallo.png';
import moneymie from './assets/images/moneymie.png';
import whogohost from './assets/images/whogohost.png';
import mmbhomecare from './assets/images/mmbhomecare.png';
import Icon from './components/Icon';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <div className='h-80 flex f-a-c f-j-c'>
        <div className='p-fix hero full flex f-j-c f-a-c'>
          <div className='p-rel full max'>
            <span
              className='p-abs'
              style={{
                top: '300px',
                left: '904px',
              }}
            >
              <Icon icon='img1.png' />
            </span>
            <span
              className='p-abs'
              style={{
                top: '100px',
                left: '320px',
              }}
            >
              <Icon icon='img2.png' />
            </span>
            <span
              className='p-abs'
              style={{
                top: '500px',
                left: '1020px',
              }}
            >
              <Icon icon='img3.png' />
            </span>
            <span
              className='p-abs'
              style={{
                top: '450px',
                left: '212px',
              }}
            >
              <Icon icon='img4.png' />
            </span>
            <span
              className='p-abs'
              style={{
                top: '120px',
                left: '1020px',
              }}
            >
              <Icon icon='img5.png' />
            </span>
            <span
              className='p-abs'
              style={{
                top: '260px',
                left: '300px',
              }}
            >
              <Icon icon='img6.png' />
            </span>
          </div>
        </div>
        <div className='center'>
          <h1 className='black'>
            Onboard users across
            <br />
            africa in seconds
          </h1>
          <p className='gray'>
            Seamlessly identify and verify individuals and businesses <br /> via
            access to simple, easy-to-understand APIs
          </p>
          <div className='center'>
            <Button className='mh-sm'>Get started</Button>
            <Button className='mh-sm' bg='l-blue' color='blue'>
              Schedule a demo
            </Button>
          </div>
          <p className='small gray'>
            <a href='#'>Visit our API Documentation</a>
          </p>
        </div>
      </div>

      <div className='h-full slant-bg p-rel'>
        <img src={laptop1} className='half p-abs laptop-pos' />
        <div className='p-abs full lt-btm center'>
          <h1 className='white'>
            Stay focused on the business, <br /> while we handle the little
            things
          </h1>
          <div className='flex f-j-c f-a-c'>
            <Icon icon='heart.svg' cname='mh-md' />
            <h3 className='l-blue mh-md'>Great customer service</h3>
            <Icon icon='support.svg' cname='mh-md' />
            <h3 className='l-blue mh-md'>24/7 Support</h3>
          </div>
          <img src={favicon} className='mv-lg' />
        </div>
      </div>
      <div className='white-bg p-rel' style={{ zIndex: 100 }}>
        <div className='p-xl'>
          <div className='flex f-j-c f-a-c mv-xl'>
            <img src={expensa} className='mv-lg mh-xl' />
            <img src={mmbhomecare} className='mv-lg mh-xl' />
            <img src={recallo} className='mv-lg mh-xl' />
            <img src={moneymie} className='mv-lg mh-xl' />
            <img src={whogohost} className='mv-lg mh-xl' />
          </div>
        </div>

        <div className='flex f-j-s h-80'>
          <div className='half' id='kyc'></div>
          <div className='half c-half p-xl flex f-a-c'>
            <div>
              <Bar />
              <h1 className='black'>Know your customer</h1>
              <p className='grey'>
                With our various data points and biometric verification
                techniques, you can identify and verify customers with ease.
                Some of the data points include:
              </p>
              <ul>
                <li className='mv-lg'>
                  <Dot />
                  Validate BVN
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Lookup NIN
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Lookup VIN
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Lookup Phone Number
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Lookup NUBAN
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Liveness check{' '}
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Selfie with ID verification{' '}
                </li>
                <li className='mv-lg'>
                  <Dot />
                  And so on
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex f-j-e h-60 '>
          <div className='half c-half p-xl flex f-a-c'>
            <div>
              <Bar />
              <h1 className='black'>Know your business</h1>
              <p className='grey'>
                You can also verify companies’ corporate information and the
                personal information of those that manage the operations of the
                company. This can be achieved with the:
              </p>
              <ul>
                <li className='mv-lg'>
                  <Dot />
                  Lookup CAC
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Lookup TIN
                </li>
                <li className='mv-lg'>
                  <Dot />
                  Lookup NUBAN of company
                </li>
              </ul>
            </div>
          </div>
          <div className='half' id='kyb'></div>
        </div>

        <div className='flex f-j-s h-full'>
          <div className='half' id='fi'></div>
          <div className='half c-half p-xl flex f-a-c'>
            <div>
              <Bar />
              <h1 className='black'>Financial Identity</h1>
              <p className='grey'>
                One major source of identification and verification for both
                individuals and businesses is the bank identity. With our
                customisable widget, you can identify the customers with the
                following:
              </p>
              <h3>Account information</h3>
              <p className='grey'>
                You can retrieve the account information to financially identify
                a customer. This includes the name, account balance, account
                status (active or inactive), account number, type of account
                (savings or current).
              </p>
              <h3>Account transactions</h3>
              <p className='grey'>
                Spending and income patterns can be gotten from this to identify
                and understand how your customers spend and earn.
              </p>
              <Button icon='arrow-white' className='mh-sm'>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        <div className='flex f-j-c  blue-bg'>
          <div className='c-half p-xl flex f-a-c'>
            <div>
              <h2 className='white'>
                You want to build? We are ready to build with you, we are just
                an api call away.
              </h2>
              <p className='white'>
                Dojah is faster, easier, and you are still in complete control.
              </p>
              <p className='white'>Sign up now to get #500 credit.</p>
              <Button
                className='mr-sm'
                icon='arrow-blue'
                bg='white'
                color='blue'
              >
                Get started
              </Button>
              <Button className='ml-sm' bg='none' border='white' color='white'>
                Schedule a demo
              </Button>
            </div>
          </div>
          <div className='c-half'>
            <div className='p-xl'></div>
            <img src={image1} className='full' />
          </div>
        </div>

        <div className='flex f-j-c dark-bg'>
          <div className='c-half'>
            <div className='p-xl'></div>
            <img src={image3} className='full' />
          </div>
          <div className='half c-half p-xl flex f-a-c'>
            <div>
              <h2 className='white'>
                Go through the API Documentation to properly understand what
                Dojah is, you can then schedule a demo call
              </h2>
              <p className='small white'>
                <a href='#'>
                  Visit our API Documentation <Icon icon='arrow-white.svg' />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='p-xl full'>
          <div className='flex max full mh-auto mv-xl'>
            <div className='one-third flex f-column '>
              <div>
                <Bar />
                <h2 className='black'>Read our test case studies</h2>
                <p className='gray'>
                  Find out about exciting products that have been built and that
                  you can build with Dojah!
                </p>
                <small>
                  <a href='#' className='blue'>
                    Check out more <Icon icon='arrow-blue.svg' />
                  </a>
                </small>
              </div>
              <div
                className='f-grow blue-bg mr-md mv-lg br-sm p-rel'
                id='blog-slim'
              >
                <div className='p-abs p-xl blog-title'>
                  <h2 className='white'>
                    Authorizing requests and identifying your application
                  </h2>
                  <hr className='mv-lg' />
                  <small>
                    <a href='#' className='white'>
                      Continue reading <Icon icon='arrow-white.svg' />
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <div className='third'>
              <div className='h-50 blue-bg mh-md br-sm p-rel' id='blog-large'>
                <div className='p-abs p-xl blog-title'>
                  <h2 className='white'>
                    Authorizing requests and identifying your application
                  </h2>
                  <hr className='mv-lg' />
                  <small>
                    <a href='#' className='white'>
                      Continue reading <Icon icon='arrow-white.svg' />
                    </a>
                  </small>
                </div>
              </div>
              <div className='flex mv-lg'>
                <div
                  className='h-50 blue-bg half mh-md br-sm p-rel'
                  id='blog-small-left'
                >
                  <div className='p-abs p-xl blog-title'>
                    <h2 className='white'>
                      Authorizing requests and identifying your application
                    </h2>
                    <hr className='mv-lg' />
                    <small>
                      <a href='#' className='white'>
                        Continue reading <Icon icon='arrow-white.svg' />
                      </a>
                    </small>
                  </div>
                </div>
                <div
                  className='h-50 blue-bg half mh-md br-sm p-rel'
                  id='blog-small-right'
                >
                  <div className='p-abs p-xl blog-title'>
                    <h2 className='white'>
                      Authorizing requests and identifying your application
                    </h2>
                    <hr className='mv-lg' />
                    <small>
                      <a href='#' className='white'>
                        Continue reading <Icon icon='arrow-white.svg' />
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex f-j-c' id='grad'>
          <div className='max full p-xl flex f-a-c'>
            <div className='c-half'>
              <h2 className='white'>
                You want to build? We are ready to build with you, we are just
                an api call away
              </h2>
              <p className='white'>
                Dojah is faster, easier, and you are still in complete control.
              </p>
              <p className='white'>Sign up now to get #500 credit.</p>
              <Button
                className='mr-sm'
                icon='arrow-blue'
                bg='white'
                color='blue'
              >
                Get started
              </Button>
              <Button className='ml-sm' bg='none' border='white' color='white'>
                Schedule a demo
              </Button>
            </div>
          </div>
          <div className='c-half'></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const Bar = () => {
  return (
    <span
      className='blue-bg'
      style={{
        width: '48px',
        height: '8px',
        display: 'inline-block',
      }}
    />
  );
};

const Dot = () => {
  return (
    <span
      className='blue-bg br-50 mh-md'
      style={{
        width: '8px',
        height: '8px',
        display: 'inline-block',
      }}
    />
  );
};
