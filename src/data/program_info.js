//stand_info inneholder to objekter, et for hver dag.
//

const program_info =
{
  "2020-09-06": [
    {
      tittel: "Åpning",
      type: "Annet",
      start: new Date(2020, 8, 5, 23, 36, 0, 0),
      slutt: new Date(2020, 8, 5, 23, 36, 5, 0),
      beskrivelse: "åpningen",
      link: "zoom.us",
      bilde: "bekk-example.png"
    },
    {
      tittel: "Foredragstittel",
      type: "Foredrag",
      start: new Date(2020, 8, 5, 23, 36, 6, 0),
      slutt: new Date(2020, 8, 5, 23, 36, 11, 0),
      beskrivelse: "foredragsbeskrivelse",
      link: "zoom.us",
      bilde: "dnb-example.jpg"
    },
    {
      tittel: "Foredragstittel2",
      type: "Foredrag",
      start: new Date(2020, 8, 5, 23, 36, 12, 0),
      slutt: new Date(2020, 8, 5, 23, 36, 17, 0),
      beskrivelse: "foredragsbeskrivelse2",
      link: "zoom.us",
      bilde: "ffi-example.png"
    },
    {
      tittel: "Foredragstittel3",
      type: "Foredrag",
      start: new Date(2020, 8, 5, 23, 36, 18, 0),
      slutt: new Date(2020, 8, 5, 23, 36, 23, 0),
      beskrivelse: "foredragsbeskrivelse3",
      link: "zoom.us",
      bilde: "bekk-example.png"
    },
    {
      tittel: "Foredragstittel4",
      type: "Foredrag",
      start: new Date(2020, 8, 5, 23, 36, 24, 0),
      slutt: new Date(2020, 8, 5, 23, 36, 29, 0),
      beskrivelse: "foredragsbeskrivelse4",
      link: "zoom.us",
      bilde: "dnb-example.jpg"
    }
  ],
  "2020-09-05": [
    {
      tittel: "Foredragstittel5",
      start: new Date(2020, 8, 5, 23, 36, 30, 0),
      slutt: new Date(2020, 8, 5, 23, 36, 35, 0),
      beskrivelse: "foredragsbeskrivelse5",
      link: "zoom.us",
      bilde: "dnb-example.jpg"
    }
  ]
}

export default program_info;
