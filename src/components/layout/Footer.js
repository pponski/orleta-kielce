import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
      <ul>
            <li>
              <Link href="#" className='first'>Akademia</Link>
              <Link href="#" className='submenu'>O nas</Link>
              <Link href="#" className='submenu'>Nasza misja</Link>
              <Link href="#" className='submenu'>Zarząd</Link>
              <Link href="#" className='submenu'>Kadra trenerska</Link>
              <Link href="#" className='submenu'>Płatności</Link>
              <Link href="#" className='submenu'>Regulamin</Link>
              <Link href="#" className='submenu last'>Dołącz do nas</Link>
            </li>
            <li>
              <Link href="#" className='first'>Treningi</Link>
              <Link href="#" className='submenu'>Harmonogram</Link>
              <Link href="#" className='submenu'>Baza treningowa</Link>
              <Link href="#" className='submenu'>Treningi indywidualne</Link>
              <Link href="#" className='submenu last'>Projekty</Link>
            </li>
            <li>
              <Link href="#" className='first'>Sponsorzy</Link>
              <Link href="#" className='submenu'>Klub Orły Biznesu</Link>
              <Link href="#" className='submenu last'>Oferta sponsorska</Link>
            </li>
            <li>
            <div className="socials flex gap-5">
            <Link className="first" href="https://www.facebook.com/OrletaKielce/" target="_blank">
          <FaFacebook className="text-3xl"/>
        </Link>
        <Link className="first" href="https://www.instagram.com/orleta_kielce_1950/" target="_blank">
        <FaInstagram className="text-3xl"/>
        </Link>
        {/* <Link href="https://www.instagram.com/orleta_kielce_1950/" target="_blank">
        <FaTwitter class="hover:translate-y-[2px] transition ease-in duration-150"/>
        </Link> */}
        </div>
            </li>
          </ul>
          </div>
    </footer>
  )
}

export default Footer