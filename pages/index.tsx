import Head from 'next/head';
import PublicLayout from '../layout/public-layout';
import { Col, Row } from 'antd';
import ReusableCard from '../components/custome-components/card-details';

export default function Home() {
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
      <Row gutter={[16,16]} className='mt-8'>
        <Col xs={24} md={12} lg={6}>
          <ReusableCard
            title={'Zoomable Sunburst'}
            imageUrl={'https://picsum.photos/200/300?grayscale'}
            linkUrl={'asdasdsadasd'}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <ReusableCard
            title={'Zoomable asd'}
            imageUrl={'https://picsum.photos/200/300?grayscale'}
            linkUrl={'asdasdsadasd'}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <ReusableCard
            title={'Zoomable Sunbasdasurst'}
            imageUrl={'https://picsum.photos/200/300?grayscale'}
            linkUrl={'asdasdsadasd'}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <ReusableCard
            title={'Zoomable eqweqwe'}
            imageUrl={'https://picsum.photos/200/300?grayscale'}
            linkUrl={'asdasdsadasd'}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <ReusableCard
            title={'Zoomable qwersd'}
            imageUrl={'https://picsum.photos/200/300?grayscale'}
            linkUrl={'asdasdsadasd'}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <ReusableCard
            title={'Zoomable Sqweqweunburst'}
            imageUrl={'https://picsum.photos/200/300?grayscale'}
            linkUrl={'asdasdsadasd'}
          />
        </Col>
      </Row>
    </PublicLayout>
  );
}
