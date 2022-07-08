import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title={"App Pokemon"}>
      <h1>Hola Mundo</h1>
    </Layout>
  )
}

export default HomePage;
