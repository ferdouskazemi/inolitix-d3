// components/UploadJSON.tsx
import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UploadJSONProps {
  onDataUpload: (data: any) => void;
}

const UploadJSON: React.FC<UploadJSONProps> = ({ onDataUpload }) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleFileUpload = (info: any) => {
    console.log('handleFileUpload called');
    if (info.file.status === 'done') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonData = JSON.parse(event.target?.result as string);
        console.log(jsonData);
        onDataUpload(jsonData);
      };
      reader.readAsText(info.file.originFileObj);
    }
  };

  return (
    <Upload
      fileList={fileList}
      customRequest={() => {}}
      onChange={handleFileUpload}
      showUploadList={true}
    >
      <Button icon={<UploadOutlined />} size="large">
        Upload JSON File
      </Button>
    </Upload>
  );
};

export default UploadJSON;
