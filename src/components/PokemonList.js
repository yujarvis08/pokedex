import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const PokemonList = () => {
  const [pokemon, setPokemon] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState([]);
  const [pokemonType, setPokemonType] = React.useState([]);

  const getPokemon = async () => {
    const toArray = [];
    const pokemonSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const pkmn = await pokemonSearch.json();
        toArray.push(pkmn);
        if(pkmn.types.length > 1)
        setPokemonType(pkmn.types[0].type.name + " " + pkmn.types[1].type.name);
        else if (pkmn.types.length === 1)setPokemonType(pkmn.types[0].type.name);
        setPokemonData(toArray);
  }

  function handleOnChange(event) {
    setPokemon(event.target.value.toLowerCase());
  }
  function handleSubmitSearch(event) {
    event.preventDefault();
    getPokemon();
  }

  return(
    <Container
      className="sticky-top"
      style={{ backgroundColor: "#9eaaad", height: "100%", minHeight: "100vh", fontWeight:"bold" }}
      fluid
    >
      <Row style={{ backgroundColor: "#333333" }}>
        <Col xs={2} md={2} className="align-self-end">
          <span
            style={{
              fontSize: "50px",
              fontFamily: "sans-serif",
              color: "#FFD700",
            }}
          >
            Pokedex
          </span>
        </Col>
        <Col md={8} className="align-self-center mt-2">
          <Form onSubmit={handleSubmitSearch}>
            <Form.Row className="align-items-center">
              <Col lg="8" className="m-auto">
                <InputGroup>
                  <FormControl
                    placeholder="Enter a Pokemon Name"
                    name="searchBar"
                    onChange={handleOnChange}
                  />

                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary text-dark"
                      style={{ backgroundColor: "#FFD700" }}
                      type="submit"
                    >
                      Search
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col
            md={6}
            className="p-3 mt-5"
            style={{ color: "black", fontFamily: "Arial" }}
          >
            <Container style={{ display: "flex", flexWrap: "wrap" }}>
              <Row>{pokemonData.map((data) => {
                if(data.abilities.length === 3) {
                return(
                  <Card border="dark" style={{ width: "15rem", margin: "1em" }}>
                    <Card.Header border="dark" style={{textAlign:"center", backgroundColor:"white", fontWeight:"bold"}}>{data.name.toUpperCase()}</Card.Header>
                    <Card.Img src={data.sprites["front_default"]} />
                    <Card.Body border="dark" >Type: {pokemonType.toUpperCase()}<br></br>
                    Weight: {Math.round(data.weight / 4.3)} lbs.<br></br>
                    Height: {Math.round(data.height * 3.9)} in.<br></br>
                    Abilities: {data.abilities[0].ability.name.toUpperCase()}{" | "}{data.abilities[1].ability.name.toUpperCase()}{" | "}{data.abilities[2].ability.name.toUpperCase()}</Card.Body>
                    </Card>
                )}
                else if(data.abilities.length === 2){
                  return(
                    <Card border="dark" style={{ width: "15rem", margin: "1em" }}>
                      <Card.Header border="dark" style={{textAlign:"center", backgroundColor:"white", fontWeight:"bold"}}>{data.name.toUpperCase()}</Card.Header>
                      <Card.Img src={data.sprites["front_default"]} />
                      <Card.Body border="dark" >Type: {pokemonType.toUpperCase()}<br></br>
                      Weight: {Math.round(data.weight / 4.3)} lbs.<br></br>
                      Height: {Math.round(data.height * 3.9)} in.<br></br>
                      Abilities: {data.abilities[0].ability.name.toUpperCase()}{" | "}{data.abilities[1].ability.name.toUpperCase()}</Card.Body>
                      </Card>
                  )
                }
                else{
                  return(
                    <Card border="dark" style={{ width: "15rem", margin: "1em" }}>
                      <Card.Header border="dark" style={{textAlign:"center", backgroundColor:"white", fontWeight:"bold"}}>{data.name.toUpperCase()}</Card.Header>
                      <Card.Img src={data.sprites["front_default"]} />
                      <Card.Body border="dark" >Type: {pokemonType.toUpperCase()}<br></br>
                      Weight: {Math.round(data.weight / 4.3)} lbs.<br></br>
                      Height: {Math.round(data.height * 3.9)} in.<br></br>
                      Abilities: {data.abilities[0].ability.name.toUpperCase()}</Card.Body>
                      </Card>
                  )
                }
              })}</Row>
            </Container>
          </Col>

          <Col
            md={6}
            className="p-3 mt-5"
            style={{ color: "#FFD700", fontFamily: "Brush Script MT" }}
          >
          </Col>
        </Row>
      </Container>
    </Container>
  );
  
};

export default PokemonList;
