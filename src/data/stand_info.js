//stand_info inneholder to objekter, et for hver dag.
//hver av dagene inneholder en liste av objekter med info per bedrift.

const stand_info =
{
  "dag1": [
    {
      bedriftnavn: "Droptable",
      beskrivelse: "Kul og fremoverlent",
      logonavn: "droptable.png",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Vi søker sommrestudent", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"},{tekst: "Er du vår nye leder?", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["Java","Fotball","Sommerjobber"],
      konkurranser: [],
      foredrag: ["https://www.dagenatifi.no/program/event"],
      tags: ["UX","SIKKERHET"]
    },
    {
      bedriftnavn: "Placeholder Inc.",
      beskrivelse: "Et veldig kult og fremoverlent sted, med de beste ansatt-godene",
      logonavn: "placeholder.png",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Bli fulltid fullstacker høsten 2021!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"},{ tekst: "Vi søker devOps-utvikler med 12 års kyberneteserfaring!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["Dans","Data","Dumle"],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
      foredrag: [{tekst: "Hvordan ha live-demo uten problemer!", link: "https://www.dagenatifi.no/program/event"}],
      tags: ["ROBOTIKK","SIKKERHET"]
    },
    {
      bedriftnavn: "TBA AS",
      beskrivelse: "Et konkuransepreget miljø med litt for mye guttastemning og litt for lite mangfold!",
      logonavn: "tba.png",
      zoomlink:"https://zoom.us/",
      stillinger: [{tekst: "Bli fulltid full høsten 2021!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["Pensjon","Bank","Sikkerhet"],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
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
