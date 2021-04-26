const roller = {
    leder: {
        tittel: 'Leder',
        epost: 'leder',
    },
    nestleder: {
        tittel: 'Nestleder',
        epost: 'nestleder',
    },
    bedrift: {
        tittel: 'Bedriftsansvarlig',
        epost: 'bedrift',
    },
    okonomi: {
        tittel: 'Økonomiansvarlig',
        epost: 'okonomi',
    },
    teknisk: {
        tittel: 'Teknisk ansvarlig',
        epost: 'teknisk',
    },
    promotering: {
        tittel: 'Promoteringsansvarlig',
        epost: 'promotering',
    },
    faglig: {
        tittel: 'Faglig ansvarlig',
        epost: 'faglig',
    },
    funk: {
        tittel: 'Funksjonæransvarlig',
        epost: 'funkansvarlig',
    },
    underholdning: {
        tittel: 'Underholdningsansvarlig',
        epost: 'underholdning',
    },
    sosialt: {
        tittel: 'Sosialansvarlig',
        epost: 'sosialt',
    },
}

const peepsInfo = [
    {
        rolle: roller.leder,
        navn: 'Lea Nøstdahl',
        image: 'LeaNøstdahl.png',
    },
    {
        rolle: roller.nestleder,
        navn: 'Anna Sofie Hoff',
        image: null,
    },
    {
        rolle: roller.bedrift,
        navn: 'Victoria Kleiv Müller',
        image: 'VictoriaMuller.png',
    },
    {
        rolle: roller.okonomi,
        navn: 'Jonas Roppestad Olsen',
        image: null,
    },
    {
        rolle: roller.promotering,
        navn: 'Jørgen Skimmeland',
        image: 'JørgenSkimmeland.png',
    },
    {
        rolle: roller.promotering,
        navn: 'Camilla Christensen',
        image: 'CamillaChristensen.png',
    },
    {
        rolle: roller.faglig,
        navn: 'Naranja Isabelle',
        image: 'NaranjaIsabelle.png',
    },
    {
        rolle: roller.funk,
        navn: 'Eivind Guren',
        image: 'eivindGuren.png',
    },
    {
        rolle: roller.underholdning,
        navn: 'Jessica Gierlach',
        image: null,
    },
    {
        rolle: roller.sosialt,
        navn: 'Karin Ospina',
        image: null,
    },
    {
        rolle: roller.teknisk,
        navn: 'Silje Marie Flaaten',
        image: 'SiljeMarieFlaaten.png',
    },
]

export { roller, peepsInfo }
