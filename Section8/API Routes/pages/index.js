import axios from "axios";
import Head from "next/head";
import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, feedback: enteredFeedback };

    // fetch('/api/feedback', {
    //   method: 'POST',
    //   body: JSON.stringify(reqBody),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    const res = await axios.post(`/api/feedback`, JSON.stringify(reqBody), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res;
    console.log(data);
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
