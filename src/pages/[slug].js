import React from 'react'
import {GraphQLClient, gql} from 'graphql-request';
import Layout from './Layout';
import { useRouter } from 'next/router';

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
    description {
      markdown
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

  return (
    <Layout>
      <div className="wrapper">
        {article ? <h1 className='text-3xl font-bold'>{article.title}</h1> : <p className='text-2xl text-center font-bold animate-pulse py-8'>Wczytywanie...</p>}
      </div>
    </Layout>
  )
}

export default Article