import { Menu } from 'antd';
import Link from 'next/link';
import {
  ARC_DIAGRAM,
  COOLAPSIBLE_TREE,
  DASHBOARD,
  STREAMGRAPH_TRANSITIONS,
  ZOOMABLE_CIRCLE_PACKING,
  ZOOMABLE_SUNBURST,
} from '../constants/pages';

import { FcComboChart } from 'react-icons/fc';

const menuItems = [
  { key: '1', label: 'Dashboard', route: DASHBOARD },
  {
    key: '2',
    label: 'Zoomable Sunburst',
    icon: <FcComboChart />,
    route: ZOOMABLE_SUNBURST,
  },
  {
    key: '3',
    label: 'Coolapsible Tree',
    icon: <FcComboChart />,
    route: COOLAPSIBLE_TREE,
  },
  {
    key: '4',
    label: 'Streamgraph Transitions',
    icon: <FcComboChart />,
    route: STREAMGRAPH_TRANSITIONS,
  },
  {
    key: '5',
    label: 'Arc Diagram',
    icon: <FcComboChart />,
    route: ARC_DIAGRAM,
  },
  {
    key: '6',
    label: 'Zoomable circle packing',
    icon: <FcComboChart />,
    route: ZOOMABLE_CIRCLE_PACKING,
  }
];

const MenuNavigation = ({ currentRoute }: { currentRoute: string }) => {
  const selectedKey =
    menuItems.find((item) => currentRoute === item.route)?.key || '0';

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link href={item.route}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuNavigation;
