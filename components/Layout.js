import Head from 'next/head';
import AsideNav from './AsideNav';

const Layout = ({title, description, keywords, children}) => {
    return (
        <>
          <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />   
          </Head>
          <div className="flex">
            <AsideNav />
            <section className="w-5/6 bg-gray-300 text-gray-800">
            <h1 className="w-full text-2xl bg-gray-800 text-gray-300 p-2 border-b border-l mb-5">
            Page Title
            </h1>
            {children}
            </section>
          </div>
        </>
    )
}

export default Layout
