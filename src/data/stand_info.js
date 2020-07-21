//stand_info inneholder to objekter, et for hver dag.
//hver av dagene inneholder en liste av objekter med info per bedrift.

const stand_info =
{
  "dag1": [
    {
      bedriftnavn: "En kul bedrift",
      beskrivelse: "Kul og fremoverlent",
      zoomlink:"www.uio.no",
      stillinger: ["sommrestudent","leder"]
    },
    {
      bedriftnavn: "bedrift2",
      beskrivelse: "beskrivelse2",
      zoomlink:"zoomlink2",
      stillinger: ["stillinger2","stillinger3"]
    }
  ],
  "dag2": [
    {
      bedriftnavn: "b3",
      beskrivelse: "d3",
      zoomlink:"z.dsa",
      stillinger: ["stillingb3.1","stillingb3.2"]
    }
  ]
}

export default stand_info;
