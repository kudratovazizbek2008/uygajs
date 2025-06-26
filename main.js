// 1-masala
// const user = {
//     name: "Ali",
//     profile: {
//         age: 25,
//         address: {
//             city: "Tashkent",
//             zip: "100100"
//         }
//     },
//     settings: {
//         theme: "dark"
//     },
//     permissions: ["read", "write"]
// };
//
// const clonedUser = structuredClone(user);
//
// clonedUser.profile.age = 30;
// clonedUser.settings.theme = "light";
//
// console.log(user.profile.age);
// console.log(clonedUser.profile.age);

// 2-masala
// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 }
// ];
//
// const newProducts = products.map(product => ({
//     ...product,
//     discountPrice: product.price * 0.9
// }));
//
// console.log(newProducts);