import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: '统计',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: '所有职位',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: '添加职位',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: '账户',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
