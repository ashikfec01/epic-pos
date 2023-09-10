import type { Notice } from '@/interface/layout/notice.interface';

import { intercepter, mock } from '../config';

const mockNoticeList: Notice<'all'>[] = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'You have received 14 new weekly reports',
    datetime: '2017-08-09',
    type: 'notification',
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: 'Qu Nini, whom you recommended, has passed the third round of interviews',
    datetime: '2017-08-08',
    type: 'notification',
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: 'This template can differentiate between multiple notification types',
    datetime: '2017-08-07',
    read: true,
    type: 'notification',
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: 'Left icon is used to distinguish different types',
    datetime: '2017-08-07',
    type: 'notification',
  },
  {
    id: '000000005',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'Content should not exceed two lines, it will be truncated if it exceeds',
    datetime: '2017-08-07',
    type: 'notification',
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Qu Lili commented on your post',
    description: 'Description information description information description information',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Zhu Pianyou replied to you',
    description: 'This template is used to remind who interacted with you, with the left side showing the avatar of "who"',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000008',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Title',
    description: 'This template is used to remind who interacted with you, with the left side showing the avatar of "who"',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000009',
    title: 'Task Name',
    description: 'Task needs to be started before 8:00 PM on 2017-01-12',
    extra: 'Not started',
    status: 'todo',
    type: 'event',
  },
  {
    id: '000000010',
    title: 'Third-party urgent code change',
    description: 'Submitted by Guanlin on 2017-01-06, code change task needs to be completed before 2017-01-07',
    extra: 'Due soon',
    status: 'urgent',
    type: 'event',
  },
  {
    id: '000000011',
    title: 'Information security exam',
    description: 'Assigned to Zhuer to update and publish before 2017-01-09',
    extra: 'Already took 8 days',
    status: 'doing',
    type: 'event',
  },
  {
    id: '000000012',
    title: 'ABCD version release',
    description: 'Submitted by Guanlin on 2017-01-06, code change task needs to be completed before 2017-01-07',
    extra: 'In progress',
    status: 'processing',
    type: 'event',
  },
];


mock.mock('/user/notice', 'get', intercepter(mockNoticeList));
