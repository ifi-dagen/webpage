import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import bedriftInfo from "./bedrift_info.json";

export const BedriftKomponent = () => {
  return (
    <div
      style={{
        maxWidth: "850px",
        minWidth: "640px",
        margin: "auto",
        padding: "0 5rem",
        height: "auto",
        textAlign: "left",
      }}
    >
      <Container>
        <h3 style={{ gridArea: "info", justifySelf: "center", padding: "1em" }}>
          Standen er åpen mellom 12:00-13:00
        </h3>
        <img
          src={require("../../img/logoer/knowit.png")}
          alt={"Logo"}
          style={{ gridArea: "Logo" }}
        ></img>
        {/* <h1 style={{ gridArea: "Name" }}>DNB</h1> */}
        <Link
          href={bedriftInfo.zoom}
          style={{ gridArea: "Zoom", justifySelf: "center" }}
        >
          <Icon className="fas fa-video"></Icon> Møt oss på zoom!
        </Link>
        <h3 style={{ gridArea: "Title" }}>Hvem er vi?</h3>
        <p style={{ gridArea: "Description" }}>{bedriftInfo.description}</p>
        <ReactPlayer
          url={bedriftInfo.video}
          // width="426px"
          // height="240px"
          style={{
            gridArea: "Video",
            justifySelf: "center",
            paddingBottom: "2em",
          }}
        />
        <h3 style={{ gridArea: "TitleTalk" }}>Vi vil snakke med deg!</h3>
        <p style={{ gridArea: "Talk" }}>{bedriftInfo.talk}</p>
        <div style={{ gridArea: "SoMe" }}>
          <Facebook link={bedriftInfo.facebook} />
          <Instagram link={bedriftInfo.instagram} />
          <Linkedin link={bedriftInfo.facebook} />
          <Webpage link={bedriftInfo.website} />
        </div>

        <h3 style={{ gridArea: "CompetitionTitle" }}>Konkurranse</h3>
        <p style={{ gridArea: "Competition" }}>
          {bedriftInfo.competition.text}
          <Link href={bedriftInfo.competition.link}></Link>
        </p>

        <h3 style={{ gridArea: "Questions" }}>5 raske</h3>
        <div style={{ gridArea: "Answers" }}>
          <p>{bedriftInfo.answer1}</p>
          <p>{bedriftInfo.answer2}</p>
          <p>{bedriftInfo.answer3} </p>
          <p>{bedriftInfo.answer4}</p>
          <p>{bedriftInfo.answer5}</p>
        </div>

        <h3 style={{ gridArea: "Work" }}>Våre spennende stillingsannonser</h3>

        <Link style={{ gridArea: "Annonse" }} href={bedriftInfo.stilling}>
          Kul ny jobb
        </Link>
      </Container>
    </div>
  );
};

const Webpage = (props) => {
  return (
    <Link href={props.link} style={{ gridArea: "Webpage" }}>
      <Icon className="fas fa-desktop"></Icon>
    </Link>
  );
};

const Facebook = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fab fa-facebook"></Icon>
    </Link>
  );
};

const Linkedin = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fab fa-linkedin"></Icon>
    </Link>
  );
};

const Instagram = (props) => {
  return (
    <Link href={props.link}>
      <Icon className="fab fa-instagram"></Icon>
    </Link>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 5% 35% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "info info info info"
    "Logo Logo Logo SoMe"
    ". Zoom Zoom Zoom"
    "Questions . Title ."
    "Answers . Description Description"
    ". . Description Description"
    ". . Video Video"
    ". . TitleTalk TitleTalk"
    ". . Talk Talk"
    ". . Work Work"
    ". . Annonse Annonse";
`;

const Link = styled.a`
  align-items: flex-start;
  padding: 1em;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: black;
  transition: color 0.25s;

  ${Link}:hover & {
    color: deepskyblue;
  }
`;
