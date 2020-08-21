//stand_info inneholder to objekter, et for hver dag.
//hver av dagene inneholder en liste av objekter med info per bedrift.

const stand_info =
{
  "dag1": {
    "Eksempel_med_bekk-logo": {
      bedriftnavn: "Eksempel_med_bekk-logo",
      beskrivelse: "Et artig og lærerikt sted.",
      logonavn: "bekk-example.png",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Vi søker sommerstudent", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"},{tekst: "Er du vår nye leder?", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["Java","Fotball","Sommerjobber"],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
      foredrag: [{tekst: "Hvordan ha live-demo uten problemer!", link: "https://www.dagenatifi.no/program/event"}],
      tags: ["ROBOTIKK","SIKKERHET"]
    },
    "Eksempel_med_dnb-logo": {
      bedriftnavn: "Eksempel_med_dnb-logo",
      beskrivelse: "Et veldig kult og fremoverlent sted.",
      logonavn: "dnb-example.jpg",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Vi søker devOps-utvikler med 12 års kyberneteserfaring!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["prosjektledelse","bedriftansvar"],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
      foredrag: [],
      tags: ["UX","SIKKERHET"]
    },
    "Eksempel_med_ffi-logo": {
      bedriftnavn: "Eksempel_med_ffi-logo",
      beskrivelse: "Et innovativt og fremoverlent sted. (dette eksempelet har litt mindre innhold)",
      logonavn: "ffi-example.png",
      zoomlink:"https://zoom.us/",
      stillinger: [{tekst: "Bli fulltid fullstacker høsten 2021!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: [],
      konkurranser: [],
      foredrag: [],
      tags: ["LEDELSE"]

    }
  },
  "dag2": {
    "Eksempel_med_dnb-logo": {
      bedriftnavn: "Eksempel_med_dnb-logo",
      beskrivelse: "Et veldig kult og fremoverlent sted.",
      logonavn: "dnb-example.jpg",
      zoomlink:"https://uio.zoom.us/",
      stillinger: [{tekst: "Vi søker devOps-utvikler med 12 års kyberneteserfaring!", link: "https://www.jobbnorge.no/ledige-stillinger/stilling/188610/instituttleder-ved-institutt-for-teknologisystemer"}],
      ice_breakers: ["prosjektledelse","bedriftansvar"],
      konkurranser: [{tekst: "Vi har en artig konkuranse!", link:"https://www.dnb.no/privat/sparing-og-investering/spare/konkurranse-festivalsommer.html"}],
      foredrag: [],
      tags: ["UX","SIKKERHET"]
    }
  }
}

export default stand_info;
