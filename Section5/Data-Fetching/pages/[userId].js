function UserDetailsPage(props) {
    const {} = props;
    return (
        <h1>
            {props.id}
        </h1>
    )
}

export default UserDetailsPage

export async function getServerSideProps(context){
    const {params} = context;
    const userId = params.userId;

    return{
        props: {
            id: 'userId-' + userId,
        }
    }
}
