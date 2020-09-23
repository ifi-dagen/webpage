
const roller = {
    leder: {
        tittel: "Leder",
        epost: "leder",
    },
    nestleder: {
        tittel: "Nestleder",
        epost: "nestleder"
    },
    bedrift: {
        tittel: "Bedriftsansvarlig",
        epost: "bedrift"
    },
    okonomi: {
        tittel: "Økonomiansvarlig",
        epost: "okonomi"
    },
    teknisk: {
        tittel: "Teknisk ansvarlig",
        epost: "teknisk"
    },
    promotering: {
        tittel: "Promoteringsansvarlig",
        epost: "promotering"
    },
    faglig: {
        tittel: "Faglig ansvarlig",
        epost: "faglig"
    },
    funk: {
        tittel: "Funksjonæransvarlig",
        epost: "funkansvarlig"
    },
    underholdning: {
        tittel: "Underholdningsansvarlig",
        epost: "underholdning"
    },
    sosialt: {
        tittel: "Sosialansvarlig",
        epost: "sosialt"
    }
}

const peepsInfo = [
    {
        rolle: roller.leder,
        navn: "Lea Nøstdahl",
        image: "LeaNøstdahl.png",
    },
    {
        rolle: roller.nestleder,
        navn: "Silje Marie Flaaten",
        image: "SiljeMarieFlaaten.png",
    },
    {
        rolle: roller.bedrift,
        navn: "Lise Wåsjø",
        image: "LiseWåsjø.png"
    },
    {
        rolle: roller.okonomi,
        navn: "Jonas Roppestad Olsen",
        image: null
    },
    {
        rolle: roller.promotering,
        navn: "Jørgen Skimmeland",
        image: "JørgenSkimmeland.png"
    },
    {
        rolle: roller.promotering,
        navn: "Camilla Christensen",
        image: "CamillaChristensen.png"
    },
    {
        rolle: roller.faglig,
        navn: "Henrik Høybakk Olsvik",
        image: "HenrikHøybakkOlsvik.png"
    },
    {
        rolle: roller.funk,
        navn: "Burhan Sarfraz",
        image: "BurhanSarfraz.png"
    },
    {
        rolle: roller.underholdning,
        navn: "Thea Aksdal Nordgulen",
        image: "TheaAksdalNordgulen.png"
    },
    {
        rolle: roller.sosialt,
        navn: "Nora Vestavik Klingvall",
        image: "NoraVestavikKlingvall.png"
    },
    {
        rolle: roller.teknisk,
        navn: "Kari Stamnes",
        image: "KariStamnes.png"
    }
]

export { roller, peepsInfo };