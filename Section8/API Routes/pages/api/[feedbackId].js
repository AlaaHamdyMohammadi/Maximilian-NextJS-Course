import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
    const {feedbackId} = req.query;
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    const selectedFeedback = data.find((feedback) => feedback.id === feedbackId)
    res.status(200).json({message: 'Details Successfully Added.', data: selectedFeedback})

}
export default handler;
