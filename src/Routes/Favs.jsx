import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {

  const {state, dispatch} = useContextGlobal()
  const favs = state.favs

  return (
    <section>
    <div>
      <h2>Favs Dentists</h2>
      {/* si hay dentistas que aparezca el botón 'remove all' */}
      {favs.length > 0 && <button onClick={() => {dispatch({type: "removeAllFavs"})}}>Remove all</button>}
    </div>
    <div className="card-grid">
      {favs.length > 0
        ? favs.map(fav => <Card key={fav.id} dentist={fav}/>)
        : <p>You haven't added any favorites yet</p>
      }
    </div>
  </section>
  );
};

export default Favs;
