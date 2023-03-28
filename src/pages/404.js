import React from 'react'
import Layout from './Layout'
import { useRouter } from 'next/router'
import { use } from 'react'

const Custom404 = () => {

  const router = useRouter();


  setTimeout(() => {
    router.push('/');
  }, 3000)


  return (
    <Layout>
      <h1 className='pt-28 text-3xl font-bold text-center'>Strona o podanym adresie nie istnieje!</h1>
      <p className='text-center pt-4 pb-28 animate-pulse'>Za chwilę zostaniesz przeniesiony na stronę główną...</p>
    </Layout>
  )
}

export default Custom404