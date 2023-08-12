import React from 'react';
import { Card, Badge } from 'antd';

interface ReusableCardProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
}
const ReusableCard = ({
  title,
  imageUrl,
  linkUrl,
}: ReusableCardProps) => {
  return (
    <Card
      hoverable
     className='w-full h-[300px]'
      cover={<img alt={title} src={imageUrl} className='h-[200px]' />}
    >
      <Card.Meta
        title={title}
        description={
          <>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              Go to page
            </a>
          </>
        }
      />
    </Card>
  );
};

export default ReusableCard;
