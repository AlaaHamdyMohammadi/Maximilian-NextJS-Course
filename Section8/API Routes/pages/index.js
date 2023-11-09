import Head from 'next/head';
import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function handleSubmit(e){
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea rows="5" id="feedback" ref={feedbackInputRef} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
