import Link from 'next/link'

import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
  const {products} = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// This function return an object, its prepare props to this component
export async function getStaticProps(context){
  console.log('(Re-)Generating...') 
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
 
  if(!data){
    return {redirect: {
      destination: '/no-data'
    }}
  }
  if(data.products.length === 0){
    return { notFound: true};
  }
  return {
    props: {
      // products: [{id: 'p1', title: 'Product 1'}]
      products: data.products,
    },
    // Number of time in seconds that Next.js should wait until re-generate this page 
    revalidate: 5,
  };
}
export default HomePage;
