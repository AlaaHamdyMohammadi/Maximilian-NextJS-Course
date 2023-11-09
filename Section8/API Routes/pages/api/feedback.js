import fs from "fs/promises";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "Data Successfully Added.", data: newFeedback });
  } else {
    // json method to send back some json data as part of the response for incoming requests
    res.status(200).json({ message: "Successfully works" });
  }
}
export default handler;
