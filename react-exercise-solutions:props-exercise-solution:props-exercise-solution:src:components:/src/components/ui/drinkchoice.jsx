export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h2>You have chosen: {drink.name}</h2>
      <img src={drink.imgUrl} width={200} height={200} alt={drink.alt} />
      <p>Coming right up!</p>
    </>
  );
};
