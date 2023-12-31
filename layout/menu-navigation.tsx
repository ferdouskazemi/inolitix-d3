import { Menu } from 'antd';
import Link from 'next/link';
import {
  ARC_DIAGRAM,
  BRUSHABLE_SCATTERPLOT,
  BRUSHABLE_SCATTERPLOT_MATRIX,
  COOLAPSIBLE_TREE,
  DASHBOARD,
  HIERARCHICAL_BAR_CHART,
  HISTOGRAM,
  LINE_CART_WITH_TOOLTIP,
  PANNABLE,
  STREAMGRAPH_TRANSITIONS,
  TREEMAP,
  ZOOMABLE_BAR,
  ZOOMABLE_CIRCLE_PACKING,
  ZOOMABLE_SUNBURST,
} from '../constants/pages';

import { FcComboChart } from 'react-icons/fc';
import { AiFillHome } from 'react-icons/ai';

const menuItems = [
  { key: '1', label: 'Dashboard', icon: <AiFillHome />, route: DASHBOARD },
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
  },
  {
    key: '7',
    label: 'Treemap',
    icon: <FcComboChart />,
    route: TREEMAP,
  },
  {
    key: '8',
    label: 'Zoomable Bar Chart',
    icon: <FcComboChart />,
    route: ZOOMABLE_BAR,
  },
  {
    key: '9',
    label: 'Histogram Chart',
    icon: <FcComboChart />,
    route: HISTOGRAM,
  },
  {
    key: '10',
    label: 'Pannable chart',
    icon: <FcComboChart />,
    route: PANNABLE,
  },
  {
    key: '11',
    label: 'Brushable scatterplot matrix chart',
    icon: <FcComboChart />,
    route: BRUSHABLE_SCATTERPLOT_MATRIX,
  },
  {
    key: '12',
    label: 'Line chart with tooltip chart',
    icon: <FcComboChart />,
    route: LINE_CART_WITH_TOOLTIP,
  },
  {
    key: '13',
    label: 'Brushable scatterplot chart',
    icon: <FcComboChart />,
    route: BRUSHABLE_SCATTERPLOT,
  },
  {
    key: '14',
    label: 'Hierarchical bar chart',
    icon: <FcComboChart />,
    route: HIERARCHICAL_BAR_CHART,
  },
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
