import fs from "fs/promises";
import path from "path";

function ProductDetailsPage(props) {
  const { product } = props;
  if(!product) return <h2>Loading... </h2>
  return (
    <div>
      <h1>Title: {product.title}</h1>
      <h4>Description: {product.description}</h4>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  //   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  //   const jsonData = await fs.readFile(filePath);
  //   const data = JSON.parse(jsonData);

  const data = await getData();
  const product = data.products.find((item) => item.id === productId);

    if(!product){
        return {notFound: true};
    }

  return {
    props: {
      product,
      revalidate: 5,
    },
  };
}

export async function getStaticPaths() {
  //tell Next.js which instance of this dynamic page should be generated

  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathParams = ids.map((id) => ({params: {productId: id}}));
  
  return {
    paths: pathParams,
    fallback: false,
  };
}

export default ProductDetailsPage;
