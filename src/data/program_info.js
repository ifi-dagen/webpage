//stand_info inneholder to objekter, et for hver dag.
//

const stand_info =
{
  "dag1": [
    {
      tittel: "Åpning",
      type: "Annet",
      start: new Date(2020, 8, 1, 19, 51, 0, 0),
      slutt: new Date(2020, 8, 22, 19, 51, 5, 0),
      beskrivelse: "åpningen",
      link: "zoom.us",
      bilde: "bekk-example.png"
    },
    {
      tittel: "Foredragstittel",
      type: "Foredrag",
      start: new Date(2020, 7, 22, 19, 51, 6, 0),
      slutt: new Date(2020, 7, 22, 19, 51, 11, 0),
      beskrivelse: "foredragsbeskrivelse",
      link: "zoom.us",
      bilde: "dnb-example.jpg"
    },
    {
      tittel: "Foredragstittel2",
      type: "Foredrag",
      start: new Date(2020, 7, 22, 19, 51, 12, 0),
      slutt: new Date(2020, 7, 22, 19, 51, 17, 0),
      beskrivelse: "foredragsbeskrivelse2",
      link: "zoom.us",
      bilde: "ffi-example.png"
    },
    {
      tittel: "Foredragstittel3",
      type: "Foredrag",
      start: new Date(2020, 7, 22, 19, 51, 18, 0),
      slutt: new Date(2020, 7, 22, 19, 51, 23, 0),
      beskrivelse: "foredragsbeskrivelse3",
      link: "zoom.us",
      bilde: "bekk-example.png"
    },
    {
      tittel: "Foredragstittel4",
      type: "Foredrag",
      start: new Date(2020, 7, 22, 19, 51, 24, 0),
      slutt: new Date(2020, 7, 22, 19, 51, 29, 0),
      beskrivelse: "foredragsbeskrivelse4",
      link: "zoom.us",
      bilde: "dnb-example.jpg"
    }
  ],
  "dag2": [
    {
      tittel: "Foredragstittel5",
      start: new Date(2020, 7, 22, 19, 51, 30, 0),
      slutt: new Date(2020, 7, 22, 19, 51, 35, 0),
      beskrivelse: "foredragsbeskrivelse5",
      link: "zoom.us",
      bilde: "dnb-example.jpg"
    }
  ]
}

export default stand_info;
