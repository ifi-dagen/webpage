//stand_info inneholder to objekter, et for hver dag.
//hver av dagene inneholder en liste av objekter med info per bedrift.

const stand_info =
{
  "dag1": [
    {
      bedriftnavn: "Eksempel med bovet-logo",
      beskrivelse: "Et artig og lærerikt sted.",
      logonavn: "bouvet-example.png",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Vi søker sommrestudent", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"},{tekst: "Er du vår nye leder?", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["Java","Fotball","Sommerjobber"],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
      foredrag: [{tekst: "Hvordan ha live-demo uten problemer!", link: "https://www.dagenatifi.no/program/event"}],
      tags: ["ROBOTIKK","SIKKERHET"]
    },
    {
      bedriftnavn: "Eksempel med dnb-logo",
      beskrivelse: "Et veldig kult og fremoverlent sted.",
      logonavn: "dnb-example.jpg",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Vi søker devOps-utvikler med 12 års kyberneteserfaring!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: [],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
      foredrag: [],
      tags: ["UX","SIKKERHET"]
    },
    {
      bedriftnavn: "Eksempel med ey-logo",
      beskrivelse: "Et hjem for oss et hjem for deg (dette eksempelet har litt mindre innhold)",
      logonavn: "ey-example.png",
      zoomlink:"https://zoom.us/",
      stillinger: [{tekst: "Bli fulltid fullstacker høsten 2021!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["Hotell","TV"],
      konkurranser: [],
      foredrag: [],
      tags: ["LEDELSE","TV","HOTELL"]

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
