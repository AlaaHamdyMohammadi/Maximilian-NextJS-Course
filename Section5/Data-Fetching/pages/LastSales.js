import { useEffect, useState } from "react";
import useSWR from "swr";
//useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

function LastSales(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    `https://nextjs-course-a4784-default-rtdb.firebaseio.com/sales.json`,
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       `https://nextjs-course-a4784-default-rtdb.firebaseio.com/sales.json`
  //     ).then((res) => res.json()).then(data => {
  //         // To convert an object to an array
  //         const transformedSales = [];
  //         for(const key in data){
  //             transformedSales.push({id: key, username: data[key].username, volume: data[key].volume})
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //     });
  //   }, []);

  if (error) return <h1>No data yet...</h1>;
  if (!data) return <h1>isLoading Data...</h1>;
  if (!sales) return <h1>isLoading Sales...</h1>;

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://nextjs-course-a4784-default-rtdb.firebaseio.com/sales.json`
  );
  const data = await res.json();
  // To convert an object to an array
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformedSales, revalidate: 5 },
  };
}

export default LastSales;
