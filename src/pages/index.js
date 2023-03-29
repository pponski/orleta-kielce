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
  articles {
    title
    slug
    shortDescription
    image {
      url(transformation: {document: {output: {}}, image: {resize: {}}})
    }
  }
  nextMatches {
    awayTeam
    homeTeam
    result
  }
  lastMatches {
    awayTeam
    homeTeam
    result
  }
}
`;


export async function getStaticProps(){
  const data = await graphcms.request(QUERY);
  return {
    props: {
      articles:  data.articles,
      nextMatch: data.nextMatches[0],
      lastMatch: data.lastMatches[0]
    },
    revalidate: 60
  }
}

export default function Home({articles, nextMatch, lastMatch}) {

  console.log(articles);
  console.log(nextMatch);
  console.log(lastMatch);

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
          <BigArticle/>
          <div className="mt-10">
            <p className='heading'>Najnowsze wiadomości</p>
            <SmallArticle img={true} shortDesc={true}/>
            <SmallArticle img={true} shortDesc={true}/>
            <SmallArticle img={true} shortDesc={true}/>
          </div>
          <div className="my-10">
          <Banner/>
          </div>
          <div className="posts">
            <SmallArticle img={true} shortDesc={true}/>
            <SmallArticle img={true} shortDesc={true}/>
            <SmallArticle img={true} shortDesc={true}/>
          </div>
          <div className="my-10">
          <Banner/>
          </div>
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
