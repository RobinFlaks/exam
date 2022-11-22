import { fetchJSON, useLoader } from "../useLoader";

function ListDishes() {
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("/api/general/menu")
  );

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h2> error: {error.toString()}</h2>
      </div>
    );
  }

  return (
    <div>
      {data.map((dish) => (
        <div>
          <h2>{dish.name}</h2>
          <h4>a short description of the dish: {dish.description}</h4>
          <h5>ingredients: {dish.ingredients}</h5>
          <h5>allergens: {dish.allergens}</h5>
        </div>
      ))}
    </div>
  );
}

export function Menu() {
  return (
    <div>
      <h3>Our dishes:</h3>
      <ListDishes />
    </div>
  );
}
