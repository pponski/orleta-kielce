import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Head from 'next/head'


const kontakt = () => {
  return (
    <Layout>
        <Head>
        <title>Orlęta Kielce | Kontakt</title>
        <meta name="description" content="Orlęta Kielce - Akademia ze srebrną gwiazdką certyfikacji PZPN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
      <h1>Kontakt</h1>
      <Link href="/">Powrót na stronę główną...</Link>
      </div>
    </Layout>
  )
}

export default kontakt