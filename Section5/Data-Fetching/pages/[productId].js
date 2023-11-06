import fs from "fs/promises";
import path from "path";

function ProductDetailsPage(props) {
  const { product } = props;
  return (
    <div>
      <h1>Title: {product.title}</h1>
      <h4>Description: {product.description}</h4>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((item) => item.id === productId);

  return {
    props: {
      product,
      revalidate: 5,
    },
  };
}

export async function getStaticPaths(){
    //tell Next.js which instance of this dynamic page should be generated
    return{
        paths: [
            {params: {productId: 'p1'}},
            {params: {productId: 'p2'}},
            {params: {productId: 'p3'}},
        ],
        fallback: false,
    } 
}

export default ProductDetailsPage;
