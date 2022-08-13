const Card = ({randomPic, handleBtnClick}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url("${randomPic}")`,
      }}
    >
      <button onClick={() => handleBtnClick(true)}>Like</button>
      <button onClick={() => handleBtnClick()}>Dislike</button>
    </div>
  );
};


export default Card;