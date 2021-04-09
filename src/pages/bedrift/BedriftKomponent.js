import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

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
      <p>Standen er åpen mellom 12:00-13:00</p>

      <Container>
        <img
          src={require("../../img/dnb_sjogronn.png")}
          alt={"Logo"}
          style={{ gridArea: "Logo", width: "150px", height: "100px" }}
        ></img>
        <h1 style={{ gridArea: "Name" }}>DNB</h1>
        <p style={{ gridArea: "Description" }}>
          BeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseB
          eskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBe
          skrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBes
          krivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBesk
          rivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskr
          ivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskri
          krivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBesk
          rivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskr
          ivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskrivelseBeskri
        </p>
        <Link
          href={"https://www.dagenatifi.no"}
          style={{ gridArea: "Zoom", padding: "1em" }}
        >
          <Icon className="fas fa-video"></Icon> Møt oss på zoom!
        </Link>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hY7m5jjJ9mM"
          width="426px"
          height="240px"
          style={{
            gridArea: "Video",
            justifySelf: "center",
            paddingBottom: "2em",
          }}
        />
        {/* <img
          src={require("../../img/ettermidagen_at_ifi-0480.jpg")}
          alt={"Stemningsrapport"}
        ></img> */}
        <p style={{ gridArea: "Talk" }}>
          Hvorfor snakke med oss Hvorfor snakke med oss Hvorfor snakke med oss
          Hvorfor snakke med oss Hvorfor snakke med oss Hvorfor snakke med oss
          Hvorfor snakke med oss Hvorfor snakke med oss Hvorfor snakke med oss
          Hvorfor snakke med oss Hvorfor snakke med oss Hvorfor snakke med oss
        </p>

        <div style={{ gridArea: "SoMe" }}>
          <Webpage />
          <Facebook />
          <Linkedin />
          <Instagram />
        </div>

        <h2 style={{ gridArea: "Work" }}>Våre spennende stillingsannonser</h2>

        <Link
          style={{ gridArea: "Annonse" }}
          href={"https://www.finn.no/job/management/ad.html?finnkode=214293198"}
        >
          Kul ny jobb
        </Link>
      </Container>
    </div>
  );
};

const Webpage = () => {
  return (
    <Link href={"https://www.dagenatifi.no"} style={{ gridArea: "Webpage" }}>
      <Icon className="fas fa-desktop"></Icon>
    </Link>
  );
};

const Facebook = () => {
  return (
    <Link href="https://www.facebook.com/dagenatifi">
      <Icon className="fab fa-facebook"></Icon>
    </Link>
  );
};

const Linkedin = () => {
  return (
    <Link href="https://www.linkedin.com/company/dagen-ifi/">
      <Icon className="fab fa-linkedin"></Icon>
    </Link>
  );
};

const Instagram = () => {
  return (
    <Link href="https://www.instagram.com/dagenatifi/">
      <Icon className="fab fa-instagram"></Icon>
    </Link>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 45% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "Logo Name SoMe"
    "Logo . ."
    "Zoom Description Description"
    ". Description Description"
    ". Video Video"
    ". Talk Talk"
    ". Work Work"
    ". Annonse Annonse";
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
