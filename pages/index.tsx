import Head from 'next/head';
import PublicLayout from '../layout/public-layout';
import { Col, Input, Row } from 'antd';
import ReusableCard from '../components/custome-components/card-details';
import { useState } from 'react';

interface Card {
  title: string;
  imageUrl: string;
  linkUrl: string;
}

const cards: Card[] = [
  {
    title: 'Zoomable Sunburst',
    imageUrl: '/charts/Zoomable-sunburst-D3-Observable.png',
    linkUrl: '/zoomable-sunburst',
  },
  {
    title: 'Coolapsible Tree',
    imageUrl: '/charts/Collapsible-tree-D3-Observable.png',
    linkUrl: '/zoomable-circle-packing',
  },
  {
    title: 'Streamgraph Transitions',
    imageUrl: '/charts/Streamgraph-transitions-D3-Observable.png',
    linkUrl: '/zoomable-icicle',
  },
  {
    title: 'Zoomable Circle Packing',
    imageUrl: '/charts/Zoomable-circle-packing-D3-Observable.png',
    linkUrl: '/zoomable-treemap',
  },
  {
    title: 'Zoomable Bar Chart',
    imageUrl: '/charts/Zoomable-bar-chart-D3-Observable.png',
    linkUrl: '/zoomable-partition',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);

  const handleSearch = (query: string) => {
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
    setSearchQuery(query);
  };

  return (
    <PublicLayout title="Dashboard">
      <Head>
        <title>Ino Tax </title>
        <meta name="description" content="Welcome to D3 Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className="text-center text-2xl font-semibold">
          Powerful, Beautiful, Easy Data Visiulation.{' '}
        </p>
      </div>
      <div className="container mx-auto my-8 flex justify-center">
        <Input
          placeholder="Search..."
          value={searchQuery}
          className="border rounded-md py-2 px-4 shadow-sm focus:ring-violet-800 focus:border-violet-800 max-w-[500px]"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <Row gutter={[16, 16]}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <Col key={index} xs={24} md={12} lg={6}>
              <ReusableCard
                title={card.title}
                imageUrl={card.imageUrl}
                linkUrl={card.linkUrl}
              />
            </Col>
          ))
        ) : (
          <p className="text-center text-xl w-full ">No results found.</p>
        )}
      </Row>
    </PublicLayout>
  );
}
