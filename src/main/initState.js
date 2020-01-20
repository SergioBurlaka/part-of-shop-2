
const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2020-06-29 12:09:33',
    description: 'desc',
    products: [
       {id: 1, count:3},
       {id: 2, count:7}
      ] 
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2020-06-29 12:09:33',
    description: 'desc',
    products: [
      {id: 5, count:3},
      {id: 3, count:1},
      {id: 1, count:3},
      {id: 4, count:10}
     ]  
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2020-06-29 12:09:33',
    description: 'desc',
    products: [
      {id: 4, count:1}
     ]  
  }
]

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'model S',
    type: 'Computer',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Model Y',
    type: 'Computer',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 3659,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Laptop 1',
    type: 'Laptop',
    specification: 'Specification 1',
    guarantee: {
      start: '2018-09-05 12:09:33',
      end: '2018-09-05 12:09:33'
    },
    price: [
      {value: 200, symbol: 'USD', isDefault: 0},
      {value: 4100, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2018-09-05 12:09:33'
  },
  {
    id: 4,
    serialNumber: 3659,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Laptop 2',
    type: 'Laptop',
    specification: 'Specification 1',
    guarantee: {
      start: '2018-02-11 12:09:33',
      end: '2018-02-11 12:09:33'
    },
    price: [
      {value: 240, symbol: 'USD', isDefault: 0},
      {value: 9100, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2018-02-11 12:09:33'
  },
  {
    id: 5,
    serialNumber: 3659,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'keyboard 1',
    type: 'keyboard',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 200, symbol: 'USD', isDefault: 0},
      {value: 4100, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]


export default {
  orders: orders,
  products: products,
}
