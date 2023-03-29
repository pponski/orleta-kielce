import React from 'react'
import {GraphQLClient, gql} from 'graphql-request';
import Layout from './Layout';
import Head from 'next/head';
import Image from 'next/image';
import SmallArticle from '@/components/SmallArticle';
import CategoryBadge from '@/components/CategoryBadge';


const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfqzk5vm0l5l01up5df14lyn/master");

const QUERY = gql`
query Article($slug: String!){
  article(where: {slug: $slug}) {
    title
    slug
    categories {
      title
    }
    team {
      name
    }
    shortDescription
    description {
      markdown
      html
    }
    image {
      url(transformation: {document: {output: {}}, image: {resize: {}}})
    }
  }
}
`;

const SLUGLIST = gql`
{
  articles {
    slug
  }
}
`;

export async function getStaticPaths(){
  const {articles} = await graphcms.request(SLUGLIST);
  return {
    paths: articles.map((article) => ({params: { slug: article.slug}})),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const article = data.article;

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //       // statusCode: 301
  //     },
  //   }
  // }

  return {
    props: {
      article
    },
    revalidate: 10,
  }
}

const Article = ({article}) => {

  console.log(article)

  return (
    <Layout>
      <Head>
      <title>{article && article.title} | Orlęta Kielce</title>
      <meta name="description" content={article.shortDescription} />
      </Head>
      <div className="wrapper page-layout">
        <div className="left">
        <Image src="https://media.graphassets.com/K9zZGA2UTFG6wviwRocZ" width="920" height="500" className='w-full rounded-md h-60 md:h-80 object-cover object-center md:group-hover:object-bottom transition-all duration-[2s] linear'></Image>
        {article ? <h1 className='pt-6 pb-3 text-2xl md:text-4xl font-bold'>{article.title}</h1> : <p className='text-2xl text-center font-bold animate-pulse py-8'>Wczytywanie...</p>}
        <div className="info flex items-center gap-4 pb-4">
    <div className="categories">
          <CategoryBadge />
          <CategoryBadge />
    </div>
    <span className='text-xs py-1 font-medium text-slate-500'>10:51 10.04.2023r.</span>
    </div>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.description.html}}></div>
        </div>
        <div className="right">
          <p className="heading">Najnowsze wiadomości</p>
          <SmallArticle img={false} shortDesc={false} />
          <SmallArticle img={false} shortDesc={false}/>
          <SmallArticle img={false} shortDesc={false}/>
          <SmallArticle img={false} shortDesc={false}/>
          <SmallArticle img={false} shortDesc={false}/>
        </div>
      </div>
    </Layout>
  )
}

export default Article