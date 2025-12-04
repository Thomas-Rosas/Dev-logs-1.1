function logCard({date, entryNumber, children}) {
  return (
    <div className="log-card">
      <p>Date: {date}</p>
      <h3>Entry Number: {entryNumber}</h3>
      <div><h3>{children}</h3></div>
    </div>
  );
}

export default logCard;