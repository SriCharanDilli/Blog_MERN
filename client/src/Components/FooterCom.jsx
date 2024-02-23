import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-blue-200 mx-8 my-4 rounded-xl shadow-xl w-auto h-auto'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link
        to="/"
        className="self-center whitespace-nowrap text-lg lg:text-4xl font-bold dark:text-white"
      >
        Buzz
        <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg border-black text-white">
          Byte
        </span>
      </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
              
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
        <Footer.Title title='Follow Us'/>
        <Footer.LinkGroup col>
        <Footer.Link href='https://github.com/SriCharanDilli'  >GitHub </Footer.Link>
        </Footer.LinkGroup>
        </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by=" Sri Charan Dilli's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/SriCharanDilli' icon={BsGithub}/>
          
          </div>
        </div>
      </div>
    </Footer>
  );
}
