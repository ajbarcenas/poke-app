import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Image from "next/image";
import axios from "axios";
import styles from "./PokeInfo.module.css";

const testPokemon = "ditto";
const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/";

const PokeInfo = () => {
  const [pokeData, setPokeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [pokeName, setPokeName] = useState("bulbasaur");
  const [pokeSearch] = useDebounce(pokeName, 2000);

  const loadPokeData = async () => {
    setIsLoading(true);
    try {
      console.log("Loading");
      let pokeTerm = pokeSearch.toLowerCase();
      const searchPoint = `${apiEndpoint}${pokeTerm}`;
      console.log(searchPoint);
      //   const response = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
      const response = await axios.get(searchPoint);
      //   console.log(response.data);

      const typeKeys = Object.keys(response.data.types);

      //   const types = response.data.types[typeKeys].type.name;
      let typeOne = "";
      let typeTwo = "";
      if (response.data.types.length === 2) {
        typeOne = response.data.types[typeKeys[0]].type.name;
        typeTwo = response.data.types[typeKeys[1]].type.name;
      } else {
        typeOne = response.data.types[typeKeys].type.name;
      }

      const types = `${typeOne} ${typeTwo}`;
      const wantedData = {
        name: response.data.species.name,
        abilities: response.data.abilities,
        sprite: response.data.sprites.front_default,
        // type: response.data.types,
        type: types,
      };
      setPokeData(wantedData);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const inputHandler = (e) => {
    setPokeName(e.target.value);
  };

  useEffect(() => {
    loadPokeData();
    setIsLoading(false);
  }, [pokeSearch]);

  if (error) {
    // alert(`No pokemon found with query: ${pokeSearch}`);
  }

  if (pokeData) {
    console.log(pokeData.type);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {isLoading && <p>Loading...</p>}
        {pokeData && (
          <div className={styles["poke-container"]}>
            {<h1 className={styles.info}>{pokeData.name.toUpperCase()}</h1>}
            {
              <h1 className={styles.info}>
                {`Ability: ${pokeData.abilities[0].ability.name}`}
              </h1>
            }
            {
              <span className="border-4 rounded-full border-rose-100 m-2">
                <Image
                  src={pokeData.sprite}
                  alt="pokemon searched for"
                  width={140}
                  height={140}
                />
              </span>
            }
            {<h1 className={styles.info}>{`Type: ${pokeData.type}`}</h1>}
          </div>
        )}

        <input
          className={styles["poke-input"]}
          type="text"
          placeholder="Enter a Pokemon"
          onChange={inputHandler}
        ></input>
        {error && (
          <p className="font-extrabold text-red-600">
            No pokemon found with this query!
          </p>
        )}
      </div>
    </>
  );
};

export default PokeInfo;
