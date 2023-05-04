import Head from 'next/head'
import Link from 'next/link'
import Layout from './Layout';
import Image from 'next/image';

import {GraphQLClient, gql} from 'graphql-request';
import BigArticle from '@/components/BigArticle';
import SmallArticle from '@/components/SmallArticle';
import SocialFeed from '@/components/SocialFeed';
import Sponsors from '@/components/Sponsors';
import Banner from '@/components/Banner';
import NextMatch from '@/components/NextMatch';
import LastMatch from '@/components/LastMatch';


const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfqzk5vm0l5l01up5df14lyn/master");

const QUERY = gql`
{
  articles (orderBy: createdAt_DESC)  {
    title
    slug
    description {
      html
      markdown
      raw
      text
    }
    shortDescription
    image {
      url(transformation: {document: {output: {}}, image: {resize: {}}})
    }
  }
}
`;


export async function getStaticProps(){
  const data = await graphcms.request(QUERY);
  const articles = data.articles.slice(1);

  return {
    props: {
      firstArticle: data.articles[0],
      articles: articles,
    },
    revalidate: 60
  }
}

export default function Home({articles, firstArticle}) {

  console.log(firstArticle);
  console.log(articles);

  return (
    <Layout>
      <Head>
        <title>Orlęta Kielce | Oficjalna strona</title>
        <meta name="description" content="Orlęta Kielce - Akademia ze srebrną gwiazdką certyfikacji PZPN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.graphassets.com/smM8FGuATd6E2SaxTtgJ" />
      </Head>
      {/* {articles ? articles.map(article=> <p key={article.title}>{article.title}</p>) : 'loading...'} */}
      <div className="wrapper page-layout">
        <div className="left">
          <BigArticle firstArticle={firstArticle}/>
          <div className="mt-10">
            <p className='heading'>Najnowsze wiadomości</p>
            {articles.map(article=> (
              <SmallArticle article={article} key={article.slug} />
             ))}
          </div>
          {/* <div className="my-10">
          <Banner/>
          </div> */}
          </div>
        <div className="right">
        <NextMatch/>
        <LastMatch/>
        <Sponsors/>
        <SocialFeed/>
        </div>
      </div>
    </Layout>
  )
}
