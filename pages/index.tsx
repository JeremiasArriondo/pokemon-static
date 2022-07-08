import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeAPi';
import { PokemonListResponse } from '../interfaces';

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title={"App Pokemon"}>
      <h1>Hola Mundo</h1>
    </Layout>
  )
};



export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
