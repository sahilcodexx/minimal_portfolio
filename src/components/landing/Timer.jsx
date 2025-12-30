import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("Loading...");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/coding-time")
      .then(res => res.json())
      .then(data => {
        setTime(data.data.grand_total.text);
        setLanguage(data.data.languages[0]?.name || "");
      })
      .catch(() => setTime("Unable to load data"));
  }, []);

  return (
    <div style={styles.card}>
      <h2>📊 Coding Activity</h2>
      <p><strong>Today:</strong> {time}</p>
      <p><strong>Top Language:</strong> {language}</p>
      <p style={{ color: "green" }}>🔥 Currently coding</p>
    </div>
  );
};

const styles = {
  card: {
    background: "#111",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
  },
};

export default Timer;
