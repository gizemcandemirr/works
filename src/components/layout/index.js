import React from 'react';
import Head from 'next/head';
import Header from './_header';

const Layout = ({ children, title, description, keywords }) => {
    return (
        <div className='min-h-screen'>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <main className='min-h-screen '>
                {children}
            </main>
        </div>
    );
}

export default Layout;
