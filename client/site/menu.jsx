import { useLoader } from "../useLoader";

function ListDishes({menuApi}) {
  const { loading, error, data } = useLoader(async () =>
        menuApi.listMenu()
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

export function Menu({menuApi}) {
  return (
    <div>
      <h3>Our dishes:</h3>
      <ListDishes menuApi={menuApi}/>
    </div>
  );
}
