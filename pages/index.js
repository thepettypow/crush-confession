import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(null);

  const handleChoice = async (choice) => {
    setSubmitted(choice);
    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: choice }),
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>I&apos;ve got a confession...</h2>
        <p style={styles.text}>
          I have a crush on you! <br /> Would you like to respond?
        </p>
        {submitted === null ? (
          <div style={styles.buttonContainer}>
            <button style={styles.yesButton} onClick={() => handleChoice('Accepted ❤️')}>Accept</button>
            <button style={styles.noButton} onClick={() => handleChoice('Rejected 😔')}>Reject</button>
          </div>
        ) : (
          <p style={styles.thankYou}>Thank you! Your answer has been submitted 🥰</p>
        )}
      </div>
      <style jsx global>{`
        body { background: #ffe6f2; margin: 0; font-family: 'Montserrat', sans-serif; }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(120deg,#ff99cc,#ffe6f2)'
  },
  card: {
    background: 'white',
    borderRadius: "20px",
    boxShadow: "0 3px 25px rgba(255, 153, 204, 0.3)",
    padding: '28px 24px',
    maxWidth: '340px',
    textAlign: 'center'
  },
  title: {
    margin: "0 0 14px",
    color: "#e60073"
  },
  text: {
    color: "#444",
    margin: "0 0 20px",
    fontSize: "18px",
    fontWeight: "500"
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  yesButton: {
    background: '#ff69b4',
    color: "#fff",
    border: 'none',
    borderRadius: '12px',
    padding: '13px',
    fontWeight: 'bold',
    fontSize: '17px',
    cursor: 'pointer',
    marginBottom: '8px',
    letterSpacing: '1px'
  },
  noButton: {
    background: '#ececec',
    color: "#e60073",
    border: 'none',
    borderRadius: '12px',
    padding: '13px',
    fontWeight: 'bold',
    fontSize: '17px',
    cursor: 'pointer',
    letterSpacing: '1px'
  },
  thankYou: {
    color: "#e60073",
    marginTop: '24px',
    fontWeight: 'bold',
    fontSize: '20px'
  }
};
