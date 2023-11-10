import {buildFeedbackPath, extractFeedback} from '../api/feedback';

function FeedbackPage(props) {
    const {feecbackItem} = props;
    return (
        <ul>
            {feecbackItem.map((item) => <li key={item.id}>{item.email}</li>)}
        </ul>
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
