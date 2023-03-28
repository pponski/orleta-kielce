import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


const Nav = () => {
  return (
    <section id="nav">
      <div className="wrapper">
        <Link href="/">
          <Image src="https://media.graphassets.com/smM8FGuATd6E2SaxTtgJ" width="60" height="60"></Image>
        </Link>
        <nav>
          <ul>
            <li className=''>
              <Link href="/" className='first'>Aktualności</Link>
            </li>
            <li className='group relative'>
              <Link href="/akademia">Akademia</Link>
              <div className="hidden bg-white py-5 px-8 rounded-md group-hover:block absolute top-full left-[-5px] shadow-md min-w-[180px]">
              <Link href="/" className='submenu'>O nas</Link>
              <Link href="/" className='submenu'>Nasza misja</Link>
              <Link href="/" className='submenu'>Zarząd</Link>
              <Link href="/" className='submenu'>Kadra trenerska</Link>
              <Link href="/" className='submenu'>Płatności</Link>
              <Link href="/" className='submenu'>Regulamin</Link>
              <Link href="/" className='submenu last'>Dołącz do nas</Link>
              </div>
            </li>
            <li className='group relative'>
              <Link href="/druzyny">Drużyny</Link>
              <div className="hidden bg-white py-5 px-8 rounded-md group-hover:block absolute top-full left-[-5px] shadow-md min-w-[220px]">
              <Link href="/" className='submenu'>Seniorzy</Link>
              <Link href="/" className='submenu'>Orlęta U17 - 2006/07</Link>
              <Link href="/" className='submenu'>Orlęta U16 - 2008/09</Link>
              <Link href="/" className='submenu'>Orlęta U12 - 2010</Link>
              <Link href="/" className='submenu'>Orlęta U12 - 2011</Link>
              <Link href="/" className='submenu'>Orlęta U11 - 2012</Link>
              <Link href="/" className='submenu'>Orlęta U10 - 2013</Link>
              <Link href="/" className='submenu'>Orlęta U9 - 2014</Link>
              <Link href="/" className='submenu'>Orlęta U8 - 2015</Link>
              <Link href="/" className='submenu'>Orlęta U7 - 2016</Link>
              <Link href="/" className='submenu last'>Orlęta U6 - 2017</Link>
              </div>
            </li>
            <li className='group relative'>
              <Link href="/treningi">Treningi</Link>
              <div className="hidden bg-white py-5 px-8 rounded-md group-hover:block absolute top-full left-[-5px] shadow-md">
              <Link href="/" className='submenu'>Harmonogram</Link>
              <Link href="/" className='submenu'>Baza treningowa</Link>
              <Link href="/" className='submenu'>Treningi indywidualne</Link>
              <Link href="/" className='submenu last'>Projekty</Link>
              </div>
            </li>
            <li className='group relative'>
              <Link href="#">Rozgrywki</Link>
              <div className="hidden bg-white py-5 px-8 rounded-md group-hover:block absolute top-full left-[-5px] shadow-md min-w-[220px]">
              <Link href="/" className='submenu'>Seniorzy</Link>
              <Link href="/" className='submenu'>Orlęta U17 - 2006/07</Link>
              <Link href="/" className='submenu'>Orlęta U16 - 2008/09</Link>
              <Link href="/" className='submenu'>Orlęta U12 - 2010</Link>
              <Link href="/" className='submenu'>Orlęta U12 - 2011</Link>
              <Link href="/" className='submenu'>Orlęta U11 - 2012</Link>
              <Link href="/" className='submenu'>Orlęta U10 - 2013</Link>
              <Link href="/" className='submenu'>Orlęta U9 - 2014</Link>
              <Link href="/" className='submenu'>Orlęta U8 - 2015</Link>
              <Link href="/" className='submenu'>Orlęta U7 - 2016</Link>
              <Link href="/" className='submenu last'>Orlęta U6 - 2017</Link>
              </div>
            </li>
            <li className='group relative'>
              <Link href="/sponsorzy">Sponsorzy</Link>
              <div className="hidden bg-white py-5 px-8 rounded-md group-hover:block absolute top-full left-[-5px] shadow-md min-w-[220px]">
              <Link href="/" className='submenu'>Klub Orły Biznesu</Link>
              <Link href="/" className='submenu last'>Oferta sponsorska</Link>
              </div>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex gap-5 text-3xl">
        <Link href="https://www.facebook.com/OrletaKielce/" target="_blank">
          <FaFacebook class="hover:translate-y-[2px] transition ease-in duration-150"/>
        </Link>
        <Link href="https://www.instagram.com/orleta_kielce_1950/" target="_blank">
        <FaInstagram class="hover:translate-y-[2px] transition ease-in duration-150"/>
        </Link>
        {/* <Link href="https://www.instagram.com/orleta_kielce_1950/" target="_blank">
        <FaTwitter class="hover:translate-y-[2px] transition ease-in duration-150"/>
        </Link> */}
        </div>
      </div>
    </section>
  )
}

export default Nav