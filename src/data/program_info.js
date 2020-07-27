//stand_info inneholder to objekter, et for hver dag.
//

const stand_info =
{
  "dag1": [
    {
      foredragstittel: "Foredragstittel",
      start: new Date(2020, 6, 24, 17, 30, 0, 0),
      slutt: new Date(2020, 6, 24, 18, 40, 0, 0),
      beskrivelse: "foredragsbeskrivelse",
    },
    {
      foredragstittel: "Foredragstittel2",
      start: new Date(2020, 6, 24, 18, 40, 0, 0),
      slutt: new Date(2020, 6, 24, 17, 50, 0, 0),
      beskrivelse: "foredragsbeskrivelse2",
    },
    {
      foredragstittel: "Foredragstittel3",
      start: new Date(2020, 6, 24, 17, 50, 0, 0),
      slutt: new Date(2020, 6, 24, 18, 0, 0, 0),
      beskrivelse: "foredragsbeskrivelse3",
    },
    {
      foredragstittel: "Foredragstittel4",
      start: new Date(2020, 6, 24, 18, 0, 0, 0),
      slutt: new Date(2020, 6, 24, 18, 10, 0, 0),
      beskrivelse: "foredragsbeskrivelse4",
    }
  ],
  "dag2": [
    {
      foredragstittel: "Foredragstittel5",
      start: "13:00",
      slutt: "13:10",
      beskrivelse: "foredragsbeskrivelse5",
    }
  ]
}

export default stand_info;
