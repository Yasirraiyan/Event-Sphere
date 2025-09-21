import React, { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://randomuser.me/api/?results=5");
      const data = res.json();
      setQuote(data.result);
      //return data;
    };
    fetchQuote();
  }, []);
  return (
    <div>
      <h1>Get Quotes using fetch API</h1>
      <div>
        {quote?.map((user, idx) => (
          <div key={idx}>
            {user.name.first} {user.name.last}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quote;
