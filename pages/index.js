import Head from "next/head";
import Image from "next/image";

import Layout from "./../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="flex gap-5 flex-wrap justify-around">Home</div>
    </Layout>
  );
}
