const arrayPrueba = [
    {
      "id": "3GuLY79QO3VWJdwKHJwv",
      "title": "Jazmín + maceta",
      "img": "../../public/img/Productos/jazmin.webp",
      "price": "2500",
      "option": "Disponible del local",
      "quantity": 1,
      "totalPrice": 2500
    },
    {
      "id": "3GuLY79QO3VWJdwKHJwv",
      "title": "Jazmín + maceta",
      "img": "../../public/img/Productos/jazmin.webp",
      "price": "2500",
      "option": "maceta marrón",
      "quantity": 2,
      "totalPrice": 5000
    },
    {
      "id": "3GuLY79QO3VWJdwKHJwv",
      "title": "Jazmín + maceta",
      "img": "../../public/img/Productos/jazmin.webp",
      "price": "2500",
      "option": "maceta gris",
      "quantity": 2,
      "totalPrice": 5000
    },
    {
      "id": "3GuLY79QO3VWJdwKHJwv",
      "title": "Jazmín + maceta",
      "img": "../../public/img/Productos/jazmin.webp",
      "price": "2500",
      "option": "maceta negra",
      "quantity": 6,
      "totalPrice": 7500
    },
    {
      "id": "aIagqN3uBBoJ30SrgNBR",
      "title": "Echinocactus",
      "img": "../../public/img/Productos/Echinocactus.webp",
      "price": "900",
      "option": "Disponible del local",
      "quantity": 4,
      "totalPrice": 900
    },
    {
      "id": "aIagqN3uBBoJ30SrgNBR",
      "title": "Echinocactus",
      "img": "../../public/img/Productos/Echinocactus.webp",
      "price": "900",
      "option": "plantin",
      "quantity": 3,
      "totalPrice": 2700
    },
    {
      "id": "aIagqN3uBBoJ30SrgNBR",
      "title": "Echinocactus",
      "img": "../../public/img/Productos/Echinocactus.webp",
      "price": "900",
      "option": "maceta de plástico (regalo del día)",
      "quantity": 2,
      "totalPrice": 1800
    }
  ]



  // const reduxPrueba = arrayPrueba.reduce((acc, item) => acc + item.quantity, 0)
/* 
  const reduxPrueba = arrayPrueba.reduce((acc, item) => {
    const llave = item.id
    acc[llave] = (acc[llave] || 0) + item.quantity;
    return acc;
  }, {});
   */

  const reduxPrueba = arrayPrueba.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + item.quantity;
    return acc;
  }, {});

  console.log(reduxPrueba);