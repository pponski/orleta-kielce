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
        <Link href="/" className='first'>
          <Image src="https://media.graphassets.com/smM8FGuATd6E2SaxTtgJ" width="80" height="80" className='grayscale'></Image>
        </Link>
        </li>
            <li>
              <Link href="/" className='first'>Aktualności</Link>
            </li>
            <li>
              <Link href="/akademia" className='first'>Akademia</Link>
              <Link href="/" className='submenu'>O nas</Link>
              <Link href="/" className='submenu'>Nasza misja</Link>
              <Link href="/" className='submenu'>Zarząd</Link>
              <Link href="/" className='submenu'>Kadra trenerska</Link>
              <Link href="/" className='submenu'>Płatności</Link>
              <Link href="/" className='submenu'>Regulamin</Link>
              <Link href="/" className='submenu last'>Dołącz do nas</Link>
            </li>
            <li>
              <Link href="/treningi" className='first'>Treningi</Link>
              <Link href="/" className='submenu'>Harmonogram</Link>
              <Link href="/" className='submenu'>Baza treningowa</Link>
              <Link href="/" className='submenu'>Treningi indywidualne</Link>
              <Link href="/" className='submenu last'>Projekty</Link>
            </li>
            <li>
              <Link href="/sponsorzy" className='first'>Sponsorzy</Link>
              <Link href="/" className='submenu'>Klub Orły Biznesu</Link>
              <Link href="/" className='submenu last'>Oferta sponsorska</Link>
            </li>
            <li>
              <Link href="/kontakt" className='first'>Kontakt</Link>
            </li>
            <li>
            <div className="socials flex gap-5 text-3xl">
        <FaFacebook className='icon'/>
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        </div>
            </li>
          </ul>
          </div>
    </footer>
  )
}

export default Footer