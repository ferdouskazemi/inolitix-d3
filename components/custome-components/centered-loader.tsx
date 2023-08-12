import { Spin } from 'antd';

export function CenteredLoader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
}