import fs from "fs";
import path from "path";

export function buildFeedbackPath(){
    return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath){
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}


function handler(req, res) {
  if (req.method === "POST") {

    // const email = req.body.email;
    // const feedbackText = req.body.text;
    const {email, feedback} = req.body;
    

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      //   text: feedbackText,
      feedback,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "Data Successfully Added.", data: newFeedback });
  } else {
    // json method to send back some json data as part of the response for incoming requests
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ message: "Successfully works", result: data });
  }
}
export default handler;
