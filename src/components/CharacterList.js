import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row, Col } from "reactstrap";
import {Link} from "react-router-dom";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    
      Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {console.log("this is response", response.data.results);
        setCharacterData(response.data.results);
        })     
      // .catch(error => console.log(error.response)
  }, []);
        console.log('this is characterlist', characterData);

        return (
          <>
        <nav>
          <Link to={"/character-list/search"}>Search</Link>
        </nav>
      
          <Container className="character-list">      
            <Row className="entry">
              {characterData.map((charac => {
                return <CharacterCard key={charac.id} name={charac.name} status={charac.status} image={charac.image} species={charac.species}/>
              }))
            }
            </Row>
          </Container>
          </>
        );
      }