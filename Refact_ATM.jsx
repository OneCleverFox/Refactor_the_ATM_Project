


const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <div>
      {isDeposit !== null && (
        <label className="label huge">
          <h3> {choice[Number(!isDeposit)]}</h3>
          <input type="number" width="200" onChange={onChange}></input>
          <input type="submit" width="200" value="Submit"></input>
        </label>
      )}
    </div>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance  ${totalState} €`;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if ((isDeposit && deposit < 0) || (!isDeposit && deposit > totalState)) {
      // Invalid transaction, do not update the totalState
      return;
    }
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
  };
    

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>      
      {isDeposit !== null && (
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
      )}
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Cash Back</button>
    </form>
  );
};
// ========================================
ReactDOM.createRoot(document.getElementById("root")).render(<Account />);
