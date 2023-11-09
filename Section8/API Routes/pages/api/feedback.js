function handler(req, res){
    // json method to send back some json data as part of the response for incoming requests
    res.status(200).json({message: 'Successfully works'})
}
export default handler;