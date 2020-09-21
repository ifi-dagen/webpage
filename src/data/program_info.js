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
  id: 0,
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
  id: 1,
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
  id: 2,
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
    id: 0,
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
    id: 1,
    tittel: "Åpningshilsen",
    type: "Annet",
    start: new Date(2020, 8, dag1, 10, 40, 0, 0),
    slutt: new Date(2020, 8, dag1, 11, 0, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    id: 2,
    tittel: "Standområdet er åpent!",
    type: "Annet",
    start: new Date(2020, 8, dag1, 11, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 13, 0, 0, 0),
    beskrivelse: "Kom og møt en fremtidig kollega!",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  //foredragsrekke dag1
  {
		type:	"foredrag",
		id: 3,
    tittel:	"Event Driven Design and Architecture in DNB Emerging Technologies",
		start: new Date(2020,8, dag1, 13,  0, 0,0),
		slutt: new Date(2020,8, dag1, 13, 30, 0,0),
		foredragsholder: "DNB",
		beskrivelse: "",
    link: "",
    bilde: "",
    alt_tekst: ""
  },
	{
		type:	"foredrag",
		id: 4,
    tittel:	"Bitt av CTF-basillen for å hindre virus",
		start: new Date(2020,8, dag1, 13, 30, 0,0),
		slutt: new Date(2020,8, dag1, 14,  0, 0,0),
		foredragsholder: "Fremtind",
		beskrivelse: "I Fremtind bygger vi på kompetanse og ressurser fra to ledende aktører i markedet; SpareBank 1 og DNB, som har gått sammen om å bygge et forsikringsselskap som skal kjennetegnes av digital innovasjon og fornyelse. Vi er allerede landets tredje største forsikringsselskap og har et av landets største inhouse teknologimiljø.\nMed potensielt 3 millioner kunder og 1500 rådgivere som daglig benytter løsningene våre, er sikkerhet i våre løsninger helt essensielt. Gjennom Capture the flag har våre utviklere lært mer om potensielle sikkerhetshull og hvor enkelt man kan hacke seg frem til et passord eller et keyboard.\nCapture the Flag er en praktisk læringsform som kan brukes for å øke kompetanse på sikker koding, informasjonssikkerhet eller sikkerhetstesting. Bli med og hør om noen av de største sikkerhetstrusslene vi ser, få eksempler på praktiske oppgaver og tips til hvordan du kan bli bitt av CTF-basillen.",
    link: "",
    bilde: "logoer/fremtind.png",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"foredrag",
		id: 5,
    tittel:	"Kotlin i skatteetaten, erfaringer fra fronten",
		start: new Date(2020,8, dag1, 14,  0, 0,0),
		slutt: new Date(2020,8, dag1, 14, 30, 0,0),
		foredragsholder: "Systek",
		beskrivelse: "I skatteetaten har Kotlin blitt et offisielt språk som prosjektene kan benytte og i denne presentasjonen skal vi se nærmere på noen av disse. Vi skal blant annet se på bruken av Kotlin i forbindelse med Domain Specific Language (DSL), provisjonering av store miljøer og graphql. Presentasjonen avsluttes med en titt på nyttige language features i Kotlin som hjelper oss skrive bedre kode.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"foredrag",
		id: 6,
    tittel:	"Norges sikreste chat",
		start: new Date(2020,8, dag1, 14, 30, 0,0),
		slutt: new Date(2020,8, dag1, 15,  0, 0,0),
		foredragsholder: "FFI",
		beskrivelse: "To av årets sommerstudenter ved FFI (derav en fra UiO) programmerte en mikrokontroller til å utføre kryptografi som er sikker mot kvantedatamaskiner. Etter å ha utvekslet nøkler kan man sende meldinger fram og tilbake mellom dingsene. Foredraget forklarer hvorfor dette høyaktuelle temaet er viktig, fulgt av en rask demonstrasjon.",
    link: "",
    bilde: "logoer/Ffi.png",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"foredrag",
		id: 7,
    tittel:	"Det skal være lett å gjøre rett - eller hvordan lage nettbank med 20 team og samtidig sove godt om natten",
		start: new Date(2020,8, dag1, 15,  0, 0,0),
		slutt: new Date(2020,8, dag1, 15, 30, 0,0),
		foredragsholder: "SpareBank 1 Utvikling",
		beskrivelse: "Kom og hør hvordan noen få byggescript vi lagde i 2013, har hjulpet oss på reisen fra tre til over 20 team og utviklet seg til å bli en av bærebjelkene for kontinuerlig teknologiutvikling og forbedring i SpareBank 1.",
    link: "",
    bilde: "logoer/SpareBank_1.jpg",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"foredrag",
		id: 8,
    tittel:	"Mixed reality og Hololens2 til... inspeksjon av fisk??",
		start: new Date(2020,8, dag1, 15, 30, 0,0),
		slutt: new Date(2020,8, dag1, 16,  0, 0,0),
		foredragsholder: "Sopra Steria",
		beskrivelse: "I disse koronatider har enkelte norske fiskeselskaper problemer med å få solgt fisken sin til viktige markeder i Asia, fordi kvalitetsinspektører ikke kan reise inn til Norge. I dette foredraget får du høre hvordan Sopra Steria tar i bruk Hololens2 og den nyeste mixed reality-teknologien for å løse problemet. Med hologrammer i tillegg til lyd og bilde kan inspektører i Asia få gjort jobben sin ved å la kollegaer i Norge bli deres utvidede øyne, ører og hender.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"foredrag",
		id: 9,
    tittel:	"Pull Requests: Merge With Your Team",
		start: new Date(2020,8, dag1, 16,  0, 0,0),
		slutt: new Date(2020,8, dag1, 16, 30, 0,0),
		foredragsholder: "Itera",
		beskrivelse: "Pull Requests: Merge With Your Team\nWorking as developers in teams, we continuously submit our code to be scrutinized by our peers. With written language being fragile and easy to misunderstand, pull requests can quickly become a breeding ground for demotivation and resentment. Ideally, pull requests should be the exact opposite: a place for us to give our peers praise for their good work, encourage learning, and ultimately make sure that the code produced has the entire team behind it.\nIn this talk, I’ll be talking about the psychology of giving and receiving critique, and how we can shape the language we use (specifically in regards to pull requests) to cultivate an environment in which we thrive as developers.\nThe only precondition for attending this talk is knowing what a pull request is. My hope is that after attending this talk you will be itching to submit your next pull request and also delight your fellow teammates with wonderful code reviews.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"foredrag",
		id: 10,
    tittel:	"Quantum Promise: Solving the worlds hardest problems?",
		start: new Date(2020,8, dag1, 16, 30, 0,0),
		slutt: new Date(2020,8, dag1, 17,  0, 0,0),
		foredragsholder: "Accenture",
		beskrivelse: "Quantum Computing har allerede begynt å vise potensiale for å bli en 'game changer' i måten vi løser noen av verdens vanskeligste problemer. I dette foredraget skal jeg fortelle hvordan vi i Accenture jobbet sammen med BMW for å løse et av deres største optimaliseringseringsproblemer hos deres fabrikkroboter ved å bruke Quantumteknologi.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  //workshop/parallelle eventer
	{
		type:	"workshop",
		id: 11,
    tittel:	"Hack my face - Javascript Course",
		start: new Date(2020,8, dag1, 13,  0, 0,0),
		slutt: new Date(2020,8, dag1, 15,  0, 0,0),
		foredragsholder: "CISCO",
		beskrivelse: "A quick intro / crash course to JavaScript. Its an interactive sessions, Theme: image processing, More focus on fun and inspiration than theory\nWarning: The code we show in this course is not safe for work.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
	{
		type:	"workshop",
		id: 12,
    tittel:	"Oppdrag kundereise - design morgendagens løsninger",
		start: new Date(2020,8, dag1, 15, 0, 0,0),
		slutt: new Date(2020,8, dag1, 17, 0, 0,0),
		foredragsholder: "EY",
		beskrivelse: "Kunstig intelligens (Artificial intelligence, AI) er allerede en stor del av vår teknologiske hverdag,  og det er forventet at denne utviklingen kommer til å vokse eksponentielt de neste årene. Med alle fordelene våre nye hjelpere bringer med seg og den hurtige utviklingen av teknologien, beveger vi oss raskt inn i en æra dominert av algoritmer og maskiner. Men hvordan forsikrer vi oss om at denne utviklingen kommer oss alle til gode? Hvordan unngår vi uforutsette resultater av disse uforståelige algoritmene og robotene? \nTrusted AI-sesjonen vil gi studentene en annerledes innfallsvinkel på kunstig intelligens. Vi kommer til å diskutere hva som kan gå galt ved bruken av teknologien og stille spørsmål ved de etiske sidene av dens bruk i samfunnet. Deltagerne vil se en annen side av AI-revolusjonen som vil være nyttig i det videre arbeidsliv, uavhengig av studieretning. Sesjonen inneholder både en overordnet introduksjon til tema og gruppediskusjoner hvor studentene selv får ta stilling til noe av det som er neste generasjons store spørsmål.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },

  {
    id: 13,
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
    id: 14,
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
    id: 15,
    tittel: "Åpningshilsen",
    type: "Annet",
    start: new Date(2020, 8, dag2, 10, 40, 0, 0),
    slutt: new Date(2020, 8, dag2, 11, 0, 0, 0),
    beskrivelse: "",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },
  {
    id: 16,
    tittel: "Standområdet er åpent!",
    type: "Annet",
    start: new Date(2020, 8, dag2, 11, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 13, 0, 0, 0),
    beskrivelse: "Kom og møt en fremtidig kollega!",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  },

  //foredragsrekke dag2
  {
		type:	"foredrag",
		id: 17,
    tittel:	"Digitalisering av maritime operasjoner med fokus på miljø og teknologi",
		start: new Date(2020,8,dag2,13, 0,0,0),
		slutt: new Date(2020,8,dag2,13,30,0,0),
		foredragsholder: "DNV GL",
		beskrivelse: "I denne presentasjonen vil vi i Veracity, en start-in i DNV GL ('Det norske Veritas'), fortelle om den digitale plattformen vi har utviklet og hvordan vi jobber sammen med bedriftskunder for å løse morgendagens utfordringer på miljø, sikkerhet og teknologi. \nDu får lære om hvordan vi tilfører innovasjon og nytekning til en tradisjonell industri og hvordan vi bruker IoT løsninger til å skape verdi for kunden.\nVi vil også snakke om hvordan vi organiserer autonome team i Veracity, og oppnår suksee i kundesamarbeidet.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 18,
    tittel:	"Jesper fikser jernbanen med Azure IoT og hjemmesnekret elektronikk",
		start: new Date(2020,8,dag2,13,30,0,0),
		slutt: new Date(2020,8,dag2,14, 0,0,0),
		foredragsholder: "Bouvet",
		beskrivelse: "20 minutter er alt for kort tid for å dekke disse to teamene, men jeg skal prøve å gi dere en innblikk i hvordan det er å jobbe som IoT-konsulent i 2020.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 19,
    tittel:	"En motiverende introduksjon til UU",
		start: new Date(2020,8,dag2,14, 0,0,0),
		slutt: new Date(2020,8,dag2,14,30,0,0),
		foredragsholder: "BEKK",
		beskrivelse: "Trenger du en introduksjon til universell utforming, eller har du kanskje jobbet med UU og aldri fått helt grepet på det? Kanskje lurer du på hvorfor staten trer slike skrivebordsregler ned over hodet på oss?",
    link: "",
    bilde: "logoer/Bekk.png",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 20,
    tittel:	"Hvordan unngå å havne på forsida av VG",
		start: new Date(2020,8,dag2,14,30,0,0),
		slutt: new Date(2020,8,dag2,15, 0,0,0),
		foredragsholder: "KANTEGA",
		beskrivelse: "Tenk deg at du kommer inn i et team som har tilgang på folks ekte persondata. Du har selvfølgelig hørt om GDPR og vet at disse dataene ikke må komme på avveie. Men hvilket ansvar har akkurat du for å sørge for at det ikke skjer? Hva må du huske på for å unngå å havne på forsida til VG? Denne presentasjonen gir en oversikt over ditt ansvar relatert til sikkerhet og andre aspekter, og den gir en del konkrete tips og råd om hva du bør gjøre.",
    link: "",
    bilde: "logoer/Kantega.png",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 21,
    tittel:	"Hvordan designe produkter som ruler verden",
		start: new Date(2020,8,dag2,15, 0,0,0),
		slutt: new Date(2020,8,dag2,15,30,0,0),
		foredragsholder: "Iterate",
		beskrivelse: "Når vi ønsker å bli gode på innovasjon og produktutvikling lærer vi mye om markedseksperimentering, brukerreise, interaksjonsdesign, visuelt design og enkle forretningsmodeller (som f.eks SaaS). Men de virkelig store produktene gjør mer enn dette. De bygger inn mekanismer som får produktet inn i hyperrask vekst, som over tid gir stor utbredelse og en solid, langvarig global markedsposisjon. Vi ser nærmere på 'the secret sauce', som tar oss fra produkt med høy brukerverdi, til teknologiselskap med global utbredelse.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 22,
    tittel:	"Bildegjennkjenning med dyp læring",
		start: new Date(2020,8,dag2,15,30,0,0),
		slutt: new Date(2020,8,dag2,16, 0,0,0),
		foredragsholder: "Norsk Regnesentral",
		beskrivelse: "Dyp læring er den viktigste metoden bak det vi kaller kunstig intelligens. Hva er dyp læring? Hvordan virker denne teknologien og hva kan man få til ved å bruke dette til bildegjenkjenning?",
    link: "",
    bilde: "logoer/Norsk_regnesentral.png",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 23,
    tittel:	"Hvordan maskinlæring kan brukes til å sikre finansieringen av velferdssamfunnet",
		start: new Date(2020,8,dag2,16, 0,0,0),
		slutt: new Date(2020,8,dag2,16,30,0,0),
		foredragsholder: "Skatteetaten",
		beskrivelse: "Vi har ikke spikret innholdet detaljert, men vi ønsker å fortelle kort om hvordan vi jobber med maskinlæring i Skatteetaten. I sommer hadde vi et stort prosjekt knyttet til dette, hvor vi hadde flere studenter med oss på laget.\nStikkord:\n- Vår visjon: Sørge for at alle betaler riktig skatt til riktig tid, fordi de ønsker det, og det er enkelt å gjøre riktig.\n-	Fortelle kort om sommerprosjektene – hva vi har gjort, resultater og utfordringer. Hvordan dette kan bidra til at skatt blir innbetalt på riktig måte.\n-	Hvordan vi tror dette kan brukes til å nå visjonen i fremtiden\nØnsker ikke at dette er teksten som brukes eksternt enda. Teksten over mer generelt for at dere skal få ett inntrykk av hva vi ønsker å formidle. ",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 24,
    tittel:	"Smittestopp: apputvikling i koronaens tidsalder",
		start: new Date(2020,8,dag2,16,30,0,0),
		slutt: new Date(2020,8,dag2,17, 0,0,0),
		foredragsholder: "Simula",
		beskrivelse: "Kyrre Lekve, Deputy Managing Director ved Simula Research Laboratory, forteller om utviklingen av Smittestopp-appen. Han vil blant annet snakke om tekniske utfordringer og løsninger, forskjellen på kontaktsporing mellom individer og sporing av epidemien på samfunnsnivå, samt hensyn til personvern.\nForedraget vil være av interesse for både bachelor- og masterstudenter, der både tekniske og samfunnsmessige aspekter blir belyst.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},
  //workshop/parallelle eventer
	{
		type:	"workshop",
		id: 25,
    tittel:	"Sikkerhetstesting med Deloitte",
		start: new Date(2020,8,dag2,13, 0,0,0),
		slutt: new Date(2020,8,dag2,15, 0,0,0),
		foredragsholder: "DELOITTE",
		beskrivelse: "Workshopen vil inkludere praktiske eksempler og demoer av ulike metoder for sikkerhetstesting. Demonene vil ha en varighet på mellom 5, 10, 15, 20 minutter. Eksempler på demoer som kan være aktuelle er:\n-	Web\n-	Wi-Fi\n-	Card cloning\n-	USB\n-	Lock picking\n-	Intrusion detection\n-	Threat Intelligence\n-	OSINT\n-	Social Engineering\n-	Red teaming.\nHvilke demoer som blir aktuelle vil bestemmes nærmere.\nSom et avbrekk fra de ulike demoene vil vi sette opp ulike «Ask Me Anything»-sesjoner hvor studentene får mulighet til å stille oss anonyme spørsmål gjennom Menti. Eksempler på sesjoner som vi tenker vil kunne være relevant og aktuelt for studentene er:\n-	“Hi! I’m leading the Cyber Risk department at Deloitte – Ask Me Anything” #AMA\n-	“Hi! I’ve been a security consultant for 10 years, doing security assessments, red team operations, incident handling, intrusion analysis and mobile forensics – Ask Me Anything” #AMA\n-	“Hi! I’m an experienced consultant new at Deloitte – Ask Me Anything” #AMA\n-	“Hi! I’ve just started my cyber security career – Ask Me Anything” #AMA",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},
	{
		type:	"foredrag",
		id: 26,
    tittel:	"De store teknologibedriftenes hemmelige verktøykasse",
		start: new Date(2020,8,dag2,15, 0,0,0),
		slutt: new Date(2020,8,dag2,15,30,0,0),
		foredragsholder: "DNB",
		beskrivelse: "Vanligvis består et team av 6 - 10 personer. Hvordan lager man da én nettside når man er flere hundre utviklere? Vi tar en titt i verktøykassa til de største bedriftene, og ser på hvordan arkitekturen kan se ut, hvordan de jobber og hva slags verktøy de bruker. Kort sagt, hvordan de får alt til å henge sammen, og hvordan vi har valgt å løse det i DNB.",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
	},

  {
    id: 27,
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
    id: 28,
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
