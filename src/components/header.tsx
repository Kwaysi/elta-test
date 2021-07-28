import Button from './button';

import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className='flex f-j-c p-fix full white-bg'>
      <div className='flex f-a-c max full'>
        <img src={logo} width='100' />
        <ul className='flex f-j-c menu p-abs'>
          <li className='gray mh-xl'>Services</li>
          <li className='gray mh-xl'>Pricing</li>
          <li className='gray mh-xl'>Documentation</li>
          <li className='gray mh-xl'>FAQs</li>
          <li className='gray mh-xl'>Contact</li>
        </ul>
        <div>
          <Button className='mr-lg' size='md' bg='none' border='blue' color='blue'>
            Login
          </Button>
          <Button size='md'>Get started</Button>
        </div>
      </div>
    </header>
  );
}
