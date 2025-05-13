import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrea Marangon | Front-End Web Developer</title>
        <meta name="description" content="Portfolio di Andrea Marangon, front-end web developer con esperienza in React.js, Next.js, Redux e Tailwind CSS. Scopri i miei progetti e il mio percorso professionale." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/am-logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Andrea Marangon | Front-End Web Developer" />
        <meta
          property="og:description"
          content="Scopri il portfolio di Andrea Marangon, sviluppatore front-end specializzato in React e Next.js."
        />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:url" content="https://andreamarangondev.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Andrea Marangon | Front-End Developer" />
        <meta
          name="twitter:description"
          content="Portfolio online di Andrea Marangon, sviluppatore front-end con esperienza in React e Next.js."
        />
        <meta name="twitter:image" content="/preview-image.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
