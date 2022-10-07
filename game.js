/*
Cho 1 list item có dạng
item = {
  product: string,
  price: number | null | undefined
}

ex: items = [{
    product: 'Bánh orion',
    price: 25000
},
{
    product: 'Ngũ cốc oat-ta',
    price: 250000
},
....
]

Viết hàm check price duyệt qua từng phần tử
1. Nếu item có price thì in ra : San pham {product} có giá {price} đồng
2. nếu item có price là null hoặc undefined thì in ra: Sản phẩm chưa nhập giá
*/

// const items =[
//     {
//         product: 'Bánh orion',
//         price: 25000
//     },
//     {
//         product: 'Ngũ cốc oat-ta',
//         price: 250000
//     },
//     {
//         product: 'Banh Choco',
//         price:0
//     },
// ]

// const checkPrice = (items) =>{
//     items.forEach(e => {
//     //   if(e.price !== null && e.price !== undefined){
//     //     console.log(`San pham ${e.product} có giá ${e.price} đồng`)
//     //   }else{
//     //     console.log(`Sản phẩm chưa nhập giá`)
//     //   }
//       if(e?.price){
//         console.log(`San pham ${e.product} có giá ${e.price} đồng`)
//       }else{
//         console.log(`Sản phẩm chưa nhập giá`)
//       }
//     });
// }
// checkPrice(items)

/*

Cho 1 mảng object user có dạng 
  {
    ID: number,
    name: string,
    isActive: boolean | null | undefined
  },

Viết hàm duyệt qua các phần tử và tạo ra 1 mảng newUser mới sao cho các item được tạo ra có dạng

{
  ID: ID (của item)
  name: name (của item)
  isActive: is active của item  (nếu isActive là null hoặc undefined thì trả về true)
  createdDate: new Date()
}
*/
// Bai 2
// const users = [
//   {
//     ID: 1,
//     name: "My",
//     isActive: null,
//     createdDate: new Date(),
//   },
//   {
//     ID: 2,
//     name: "Vy",
//     isActive: null,
//     createdDate: new Date(),
//   },
//   {
//     ID: 3,
//     name: "Huy",
//     isActive: "activated",
//     createdDate: new Date(),
//   },
// ];
// const checkUser = (users) => {
//   const newUser = users.map((user) => ({
//     ID: user.ID,
//     name: user.name,
//     isActive: !user?.isActive,
//     createdDate: new Date(),
//   }));
//   return newUser;
// };
// const check = checkUser(users)
// console.log(check);

//--- bai 3
const profits = [
  {
    month: "Tháng 1",
    profit: 20,
  },
  {
    month: "Tháng 2",
    profit: 5,
  },
  {
    month: "Tháng 3",
    profit: 10,
  },
  {
    month: "Tháng 4",
    profit: 20,
  },
];

// console.log(profitArr);
// const profitArr = profits.map(e=>
//     e.profit
// )
// console.log(profitArr);
// const accumulate = profitArr => profitArr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0);
// console.log(accumulate);
// //=== 1
// const accumulate = (profit) => {
//   let total = 0;
//   const newProfit = profit.map((e) => {
//     total += e.profit;
//     return {
//       month: e.month,
//       profit: e.profit,
//       cumulative: total,
//     };
//   });
//   return newProfit;
// };
// console.log(accumulate(profits));

const interns = [
  {
    ID: 1,
    name: "Cường Nguyễn",
    isActive: true,
    skills: ['HTML', 'CSS', 'NodeJS', 'NestJS'],
  },
  {
    ID: 2,
    name: "My Nguyễn",
    isActive: true,
    skills: ['HTML', 'CS', 'ReactJS'],
  },
  {
    ID: 3,
    name: "Khôi Nguyễn",
    isActive: true,
    skills: ['HTML', 'CSS', 'NextJS'],
  },
  {
    ID: 4,
    name: "Viên Huỳnh",
    isActive: true,
    skills: ['HTML', 'CSS', 'Javascript'],
  },
];
// In ra thông tin inter theo dạng sau:
// Ex: Viên Huỳnh: HTML | CSS | Javascript
// */

const listIntern = (interns) => {
  interns.forEach((intern) => 
    console.log(`${intern.name}: ${intern.skills.join(' | ')}`))
  }
listIntern(interns);
