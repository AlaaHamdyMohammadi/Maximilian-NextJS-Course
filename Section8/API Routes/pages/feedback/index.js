import axios from 'axios';
import {buildFeedbackPath, extractFeedback} from '../api/feedback';
import { useRouter } from 'next/router';
import { useState } from 'react';

function FeedbackPage(props) {
    const [feedbackData, setFeedbackData] = useState();
    const {feecbackItem} = props;

    async function handleDetails(id){
        const res = await axios.get(`api/${id}`);
        setFeedbackData(res.data.data);
    }
    return (
        <>
        {feedbackData && <p>{feedbackData.email}</p>}
        <ul>
        {feecbackItem.map((item) => <li key={item.id}>{item.feedback}<button onClick={() => handleDetails(item.id)}>Show Details</button></li>)}
        </ul>
        </>
    )
}

export async function getStaticProps(context){
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return{
        props: {feecbackItem: data, revalidate: 5},
    }
}

export default FeedbackPage
