import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from '../ui/Navbar';

interface Props {
    title?: string,
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Jeremias Arriondo" />
            <meta name="description" content="Informacion sobre el pokemon xxxxxx" />
            <meta name="keywords" content="xxxx, pokemon, next" />
        </Head>
        <Navbar />
        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
