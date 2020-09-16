//stand_info inneholder to objekter, et for hver dag.
/*
//Testdata
const year =2020;
const month = 8; //Januar = 0
const day = 20
const hour = 14
const minute = 10

const program_info = [
{
  tittel: "Åpning",
  type: "Annet",
  start: new Date(year, month, day, hour, minute, 0, 0), //dato skrevet slik: Y,M-1,D,H,M,S,MS, for testing endre Y,M,D,H og M, sekunder er satt slik at hvert arr varer
  slutt: new Date(year, month, day, hour, minute, 5, 0),
  beskrivelse: "åpningen",
  link: "https://zoom.us",
  bilde:"dagen_logo.svg",
  alt_tekst: "dagen at ifi sin logo"
},
{
  tittel: "Foredrags-tittel",
  type: "Foredrag",
  start: new Date(year, month, day, hour, minute, 6, 0),
  slutt: new Date(year, month, day, hour, minute, 11, 0),
  beskrivelse: "foredragsbeskrivelse",
  link: "zoom.us",
  bilde:"dagen_logo.svg",
  alt_tekst: "dagen at ifi sin logo"
},
{
  tittel: "Foredrags-tittel2",
  type: "Foredrag",
  start: new Date(year, month, day, hour, minute, 12, 0),
  slutt: new Date(year, month, day, hour, minute, 19, 0),
  beskrivelse: "foredragsbeskrivelse2",
  link: "zoom.us",
  bilde:"dagen_logo.svg",
  alt_tekst: "dagen at ifi sin logo"
}
]
*/

const dag1 = 24;
const dag2 = 25;
const program_info =
[
  {
    tittel: "Kripos CTF-Vinnere annonseres",
    type: "Annet",
    start: new Date(2020, 8, dag1, 9, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 10, 30, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "",
    alt_tekst: ""
  },
  {
    tittel: "Åpningsermoni",
    type: "Annet",
    start: new Date(2020, 8, dag1, 10, 40, 0, 0),
    slutt: new Date(2020, 8, dag1, 11, 0, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Standområdet er åpent!",
    type: "Annet",
    start: new Date(2020, 8, dag1, 11, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 13, 0, 0, 0),
    beskrivelse: "Kom og møt en fremtidig kollega!",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Foredrag og workshop",
    type: "Foredrag",
    start: new Date(2020, 8, dag1, 13, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 17, 0, 0, 0),
    beskrivelse: "En stor strømm av nye spennende ting",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Takk for i dag",
    type: "Annet",
    start: new Date(2020, 8, dag1, 17, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 17, 10, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Digital Quiz",
    type: "Annet",
    start: new Date(2020, 8, dag1, 18, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 21, 0, 0, 0),
    beskrivelse: "Vi avslutter dagen med å streame quiz fra escape",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Åpningsermoni",
    type: "Annet",
    start: new Date(2020, 8, dag2, 10, 40, 0, 0),
    slutt: new Date(2020, 8, dag2, 11, 0, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Standområdet er åpent!",
    type: "Annet",
    start: new Date(2020, 8, dag2, 11, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 13, 0, 0, 0),
    beskrivelse: "Kom og møt en fremtidig kollega!",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Foredrag og workshop",
    type: "Foredrag",
    start: new Date(2020, 8, dag2, 13, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 17, 0, 0, 0),
    beskrivelse: "En stor strømm av nye spennende ting",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Takk for i dag",
    type: "Annet",
    start: new Date(2020, 8, dag2, 17, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 17, 10, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    tittel: "Digital Quiz",
    type: "Annet",
    start: new Date(2020, 8, dag2, 18, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 21, 0, 0, 0),
    beskrivelse: "Vi avslutter dagen med å streame quiz fra escape",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  }
]

export default program_info;
