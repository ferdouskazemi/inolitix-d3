import React, { ReactNode, useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Spin, theme } from 'antd';
import  Image  from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import MenuNavigation from './menu-navigation';
import { CenteredLoader } from '../components/custome-components/centered-loader';

const { Header, Sider, Content } = Layout;

interface PrivateLayoutProps {
  children: React.ReactNode;
  title?: string;
}

function PublicLayout({ title, children }: PrivateLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  return (
    <Layout className="h-full">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: '100vh' }}
      >
        <div className="sticky top-3">
          <div className="flex my-3 justify-center">
           <Image src="/inod3-logo.png" width={100} height={40} alt='logo' />
          </div>
          <div className="">
            <MenuNavigation currentRoute={router.pathname} />
          </div>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="flex justify-between items-center sticky top-0 z-50 shadow-sm !bg-white !px-[23px] !py-[40px]">
          <div className="flex justify-start items-center   align-middle ">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger text-2xl p-0 m-0',
                onClick: () => setCollapsed(!collapsed),
              }
            )}

            <p
              className="text-base"
              style={{ marginLeft: '1rem', paddingTop: '6px' }}
            >
              Welcome, <b className="font-semibold italic">Mahdi Ghandhari</b>{' '}
            </p>
          </div>
          <div>
            {/* <Profile /> */}
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            overflow: 'hidden',
            background: colorBgContainer,
          }}
        >
          {!loading ? (
            <CenteredLoader />
          ) : (
            <motion.div
              key={router.route}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 60 }}
            >
              {children}
            </motion.div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default PublicLayout;
