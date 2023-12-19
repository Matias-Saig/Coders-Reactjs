import productsList from "../../mock/productsList.js";

function loader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsList);
    }, 1500);
  });
}

export default loader;
