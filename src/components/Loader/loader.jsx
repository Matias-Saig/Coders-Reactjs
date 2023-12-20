import productsList from "../../mock/productsList.js";

function loader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
}

export default loader;
