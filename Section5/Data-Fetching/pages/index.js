function HomePage(props) {
  const {products} = props;
  return (
    <ul>
      {products.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  );
}

// This function return an object, its prepare props to this component
export async function getStaticProps(){
  return {props: {
    products: [{id: 'p1', title: 'Product 1'}]
  }}
}
export default HomePage;
