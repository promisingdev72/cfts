import Head from 'next/head'
import DernierMatch from './dernier_match'

import Detail from '~/components/detail'
import Event from '~/components/event'
import Team from '~/components/team'
import Header from '~/components/header'
import Footer from '~/components/footer'
import Main from '~/components/main'
import Resume from '~/components/resume'
import Contacts from '~/components/contact'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>CHAIR_TRRT_SITE_07_07</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <div className='lg:px-52 px-3'>
        <Detail/>
        <Resume/>
        <Event/>
      </div>
      <Contacts/>
      <Footer/>
    </div>
  )
}
