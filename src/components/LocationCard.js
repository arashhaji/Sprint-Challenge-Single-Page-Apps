import React from "react";
import styled from "styled-components";

export default function LocationCard(props) {
  const Locations = styled.div`
    width: 80%;
    padding: 10px;
    box-shadow: 1px 1px 5px black;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  `;

  const LocationsImg = styled.img`
    width: 200px;
    height: 200px
  `;

  const LocationsInfo = styled.div`
    tex-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
  `;

  const Status = styled.div`
    tex-align: left;
    background: skyblue;
    height: 30px;
    vertical-align: middle;
    color: white;
    padding: 10px;
    border-radius: 5px;
  `;


return (
  <div className="locations-list">
    <Locations>
      <LocationsImg src={props.locations.image} />
      <LocationsInfo>
        <div>ID: {props.locations.id}</div>
        <div>Name: {props.locations.name}</div>
        <div>Type: {props.locations.Type}</div>
        <div>Dimension: {props.locations.Dimension}</div>
        <div>Resident: {props.locations.origin.Resident}</div>
      </LocationsInfo>
      <Status>Status: {props.locations.status}</Status>
    </Locations>
  </div>
)

}
