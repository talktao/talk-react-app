import Mock from 'mockjs';

const data = {
  '/api/login': Mock.mock({
    [`returnData|10`]: [
      {
        id: '@id',
        name: '@name',
      },
    ],
  }),
}

export default data;