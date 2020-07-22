//stand_info inneholder to objekter, et for hver dag.
//hver av dagene inneholder en liste av objekter med info per bedrift.

const stand_info =
{
  "dag1": [
    {
      bedriftnavn: "IT-bedrift1",
      beskrivelse: "Kul og fremoverlent",
      logonavn: "droptable.png",
      zoomlink:"www.uio.no",
      stillinger: ["Vi søker sommrestudent","Er du vår nye leder?"],
      ice_breakers: ["Java","Fotball","Sommerjobber"],
      konkurranser: [],
      foredrag: ["https://www.dagenatifi.no/program/event"],
      tags: ["UX","SIKKERHET"]
    },
    {
      bedriftnavn: "IT-bedrift2",
      beskrivelse: "Et veldig kult og fremoverlent sted, med de beste ansatt-godene",
      logonavn: "placeholder.png",
      zoomlink:"https://zoom.us/",
      stillinger: ["Bli fulltid fullstacker høsten 2021!","Vi søker devOps-utvikler med 12 års kyberneteserfaring!"],
      ice_breakers: ["Dans","Data","Dumle"],
      konkurranser: ["Vi har en artig konkuranse!"],
      foredrag: ["https://www.dagenatifi.no/program/event"],
      tags: ["ROBOTIKK","SIKKERHET"]
    },
    {
      bedriftnavn: "En megastor bedrift",
      beskrivelse: "Et konkuransepreget miljø med litt for mye guttastemning og litt for lite mangfold!",
      logonavn: "tba.png",
      zoomlink:"https://zoom.us/",
      stillinger: ["Bli fulltid full høsten 2021!","Vi søker deg!"],
      ice_breakers: ["Pensjon","Bank","Sikkerhet"],
      konkurranser: ["Vi har en artig konkuranse!", "og en til!"],
      foredrag: [],
      tags: ["LEDELSE","SIKKERHET","BANK"]

    }
  ],
  "dag2": [
    {
      bedriftnavn: "IT-bedrift2",
      beskrivelse: "Et veldig kult og fremoverlent sted, med de beste ansatt-godene",
      logonavn: "placeholder.png",
      zoomlink:"https://zoom.us/",
      stillinger: ["Bli fulltid fullstacker høsten 2021!","Vi søker devOps-utvikler med 12 års kyberneteserfaring!"],
      ice_breakers: ["Dans","Data","Dumle"],
      konkurranser: ["Vi har en artig konkuranse!"],
      foredrag: [],
      tags: ["ROBOTIKK","SIKKERHET"]

    }
  ]
}

export default stand_info;
