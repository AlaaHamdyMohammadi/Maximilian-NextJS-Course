import { useEffect, useState } from "react";

//useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

function LastSales() {
    const [sales, setSales] = useState();
    const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://nextjs-course-a4784-default-rtdb.firebaseio.com/sales.json`
    ).then((res) => res.json()).then(data => {
        // To convert an object to an array
        const transformedSales = [];
        for(const key in data){
            transformedSales.push({id: key, username: data[key].username, volume: data[key].volume})
        }
        setSales(transformedSales);
        setIsLoading(false);
    });
  }, []);

  if(isLoading) return <h1>isLoading...</h1>
  if(!sales) return <h1>No data yet...</h1>

  return <ul>
    {sales.map((sale) => <li key={sale.id}>{sale.username} - {sale.volume}</li>)}
  </ul>;
}

export default LastSales;
