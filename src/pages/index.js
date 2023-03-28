import Head from 'next/head'
import Link from 'next/link'
import Layout from './Layout';
import Image from 'next/image';

import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfqzk5vm0l5l01up5df14lyn/master");

const QUERY = gql`
{
  articles {
    title
    slug
  }
}
`;


// export async function getStaticProps(){
//   const {articles} = await graphcms.request(QUERY);
//   return {
//     props: {
//       articles,
//     },
//     revalidate: 60
//   }
// }

export default function Home({articles}) {
  return (
    <Layout>
      <Head>
        <title>Orlęta Kielce | Oficjalna strona</title>
        <meta name="description" content="Orlęta Kielce - Akademia ze srebrną gwiazdką certyfikacji PZPN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {articles ? articles.map(article=> <p key={article.title}>{article.title}</p>) : 'loading...'} */}
      <div className="wrapper homepage">
        <div className="left">
          <div className="main-article">
            <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-full rounded-md h-60 object-cover object-center'></Image>
            <p className='text-2xl pt-3 font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs py-1 font-medium text-slate-500'>10-04-2023</p>
            <p className='text-sm pt-1 pb-3 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <Link href="/pierwszy-post" className='inline-block mt-1 bg-green-700 text-white px-5 py-2 rounded-md text-sm'>Czytaj więcej</Link>
          </div>
          <div className="posts pt-10">
            <p className='inline-block text-3xl pb-2 font-bold border-b-green-600 mb-5 border-b-2'>Najnowsze wiadomości</p>
            <div className="single-post mb-4">
            <Link href="/pierwszy-post" className='flex items-center gap-4'>
            <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-[100px] rounded-md h-auto object-cover object-center'></Image>
            <div>
            <p className='text-base font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs pb-1 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <p className='text-xs font-medium text-slate-500'>10-04-2023</p>
            </div>
            </Link>
            </div>
            <div className="single-post mb-4">
            <Link href="/pierwszy-post" className='flex items-center gap-4'>
            <Image src="https://media.graphassets.com/OvWpEcUMQtYwJ9YWgmKQ" width="920" height="500" className='w-[100px] rounded-md h-auto object-cover object-center'></Image>
            <div>
            <p className='text-base font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs pb-1 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <p className='text-xs font-medium text-slate-500'>10-04-2023</p>
            </div>
            </Link>
            </div>
            <div className="single-post mb-4">
            <Link href="/pierwszy-post" className='flex items-center gap-4'>
            <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-[100px] rounded-md h-auto object-cover object-center'></Image>
            <div>
            <p className='text-base font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs pb-1 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <p className='text-xs font-medium text-slate-500'>10-04-2023</p>
            </div>
            </Link>
            </div>
          </div>
          <div className="banner my-10">
          <p className='h-60 bg-slate-300 rounded-md'></p>
          </div>
          <div className="posts">
          <div className="single-post mb-4">
            <Link href="/pierwszy-post" className='flex items-center gap-4'>
            <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-[100px] rounded-md h-auto object-cover object-center'></Image>
            <div>
            <p className='text-base font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs pb-1 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <p className='text-xs font-medium text-slate-500'>10-04-2023</p>
            </div>
            </Link>
            </div>
            <div className="single-post mb-4">
            <Link href="/pierwszy-post" className='flex items-center gap-4'>
            <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-[100px] rounded-md h-auto object-cover object-center'></Image>
            <div>
            <p className='text-base font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs pb-1 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <p className='text-xs font-medium text-slate-500'>10-04-2023</p>
            </div>
            </Link>
            </div>
            <div className="single-post mb-4">
            <Link href="/pierwszy-post" className='flex items-center gap-4'>
            <Image src="https://media.graphassets.com/OvWpEcUMQtYwJ9YWgmKQ" width="920" height="500" className='w-[100px] rounded-md h-auto object-cover object-center'></Image>
            <div>
            <p className='text-base font-bold'>Tytuł najnowszej wiadomości</p>
            <p className='text-xs pb-1 max-w-xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iste natus. Provident modi ex dignissimos nemo iste ea reiciendis perspiciatis. Fuga laborum nesciunt nobis, atque facilis assumenda enim amet molestias!</p>
            <p className='text-xs font-medium text-slate-500'>10-04-2023</p>
            </div>
            </Link>
            </div>
          </div>
          <Link href="/pierwszy-post" className='inline-block mt-4 bg-green-700 text-white px-5 py-2 rounded-md text-sm'>Zobacz wszystkie wiadomości</Link>
          <div className="banner my-10">
          <p className='h-60 bg-slate-300 rounded-md'></p>
          </div>
          <p>akademia newsy</p>
          <p>sekcja kontaktowa</p>
        </div>
        
        <div className="right">
        <p className='inline-block text-2xl pb-2 font-bold border-b-green-600 mb-5 border-b-2'>Sponsorzy</p>
        <p className='inline-block text-2xl pb-2 font-bold border-b-green-600 mb-5 border-b-2'>Wpadnij do nas na FB...</p>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOrletaKielce%2F%3Flocale%3Dpl_PL&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className='mx-auto mt-3 mb-10 rounded-md shadow-md'></iframe>
        <p className='inline-block text-2xl pb-2 font-bold border-b-green-600 mb-5 border-b-2'>... albo Instagrama 😜</p>
        <iframe src="https://www.instagram.com/orleta_kielce_1950/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true" className='mx-auto mt-3 mb-10 rounded-md shadow-md'></iframe>
        </div>
      </div>
    </Layout>
  )
}
