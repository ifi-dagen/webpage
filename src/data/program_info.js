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

const dag1 = 24; //24
const dag2 = 25; //25
const zoomlinkdag1 = "https://uio.zoom.us/j/65541822369";
const zoomlinkdag2 = "https://uio.zoom.us/j/63845216087";
const zoomlinkWSdag1 = "https://uio.zoom.us/j/62425102698";
const zoomlinkWSdag2 = "https://uio.zoom.us/j/62563059709";
const zoomlinkFdag2 = "https://uio.zoom.us/j/65985887032";
const program_info =
[
  {
    id: 0,
    tittel: "CTF-Vinnere annonseres",
    type: "Annet",
    start: new Date(2020, 8, dag1, 9, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 10, 30, 0, 0),
    foredragsholder: "Kripos",
    beskrivelse: "Under Karriereuka UiO har Kripos holdt en CTF, nå annonseres vinnerne!",
    link: "",
    bilde: "",
    alt_tekst: ""
  },
  {
    id: 1,
    tittel: "Åpningshilsen",
    type: "Annet",
    start: new Date(2020, 8, dag1, 11, 0, 0, 0),
    slutt: new Date(2020, 8, dag1, 11, 2, 0, 0),
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
    beskrivelse: "Kom og møt en fremtidig kollega! zoomrommene er åpne kl 11-13, men bedrift-sidene vil være åpne til kl 18",
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
		slutt: new Date(2020,8, dag1, 13, 25, 0,0),
		foredragsholder: "DNB",
		beskrivelse: "",
    link: zoomlinkdag1,
    bilde: "dnb_sjogronn.png",
    alt_tekst: "dnb-logo"
  },
	{
		type:	"foredrag",
		id: 4,
    tittel:	"Bitt av CTF-basillen for å hindre virus",
		start: new Date(2020,8, dag1, 13, 30, 0,0),
		slutt: new Date(2020,8, dag1, 13, 55, 0,0),
		foredragsholder: "Fremtind",
		beskrivelse: "I Fremtind bygger vi på kompetanse og ressurser fra to ledende aktører i markedet; SpareBank 1 og DNB, som har gått sammen om å bygge et forsikringsselskap som skal kjennetegnes av digital innovasjon og fornyelse. Vi er allerede landets tredje største forsikringsselskap og har et av landets største inhouse teknologimiljø.\nMed potensielt 3 millioner kunder og 1500 rådgivere som daglig benytter løsningene våre, er sikkerhet i våre løsninger helt essensielt. Gjennom Capture the flag har våre utviklere lært mer om potensielle sikkerhetshull og hvor enkelt man kan hacke seg frem til et passord eller et keyboard.\nCapture the Flag er en praktisk læringsform som kan brukes for å øke kompetanse på sikker koding, informasjonssikkerhet eller sikkerhetstesting. Bli med og hør om noen av de største sikkerhetstrusslene vi ser, få eksempler på praktiske oppgaver og tips til hvordan du kan bli bitt av CTF-basillen.",
    link: zoomlinkdag1,
    bilde: "logoer/fremtind.png",
    alt_tekst: "fremtind-logo"
  },
	{
		type:	"foredrag",
		id: 5,
    tittel:	"Kotlin i skatteetaten, erfaringer fra fronten",
		start: new Date(2020,8, dag1, 14,  0, 0,0),
		slutt: new Date(2020,8, dag1, 14, 25, 0,0),
		foredragsholder: "Systek",
		beskrivelse: "I skatteetaten har Kotlin blitt et offisielt språk som prosjektene kan benytte og i denne presentasjonen skal vi se nærmere på noen av disse. Vi skal blant annet se på bruken av Kotlin i forbindelse med Domain Specific Language (DSL), provisjonering av store miljøer og graphql. Presentasjonen avsluttes med en titt på nyttige language features i Kotlin som hjelper oss skrive bedre kode.",
    link: zoomlinkdag1,
    bilde: "logoer/Systek.png",
    alt_tekst: "systek-logo"
  },
	{
		type:	"foredrag",
		id: 6,
    tittel:	"Norges sikreste chat",
		start: new Date(2020,8, dag1, 14, 30, 0,0),
		slutt: new Date(2020,8, dag1, 14, 55, 0,0),
		foredragsholder: "FFI",
		beskrivelse: "To av årets sommerstudenter ved FFI (derav en fra UiO) programmerte en mikrokontroller til å utføre kryptografi som er sikker mot kvantedatamaskiner. Etter å ha utvekslet nøkler kan man sende meldinger fram og tilbake mellom dingsene. Foredraget forklarer hvorfor dette høyaktuelle temaet er viktig, fulgt av en rask demonstrasjon.",
    link: zoomlinkdag1,
    bilde: "logoer/Ffi.png",
    alt_tekst: "Ffi-logo"
  },
	{
		type:	"foredrag",
		id: 7,
    tittel:	"Det skal være lett å gjøre rett - eller hvordan lage nettbank med 20 team og samtidig sove godt om natten",
		start: new Date(2020,8, dag1, 15,  0, 0,0),
		slutt: new Date(2020,8, dag1, 15, 25, 0,0),
		foredragsholder: "SpareBank 1 Utvikling",
		beskrivelse: "Kom og hør hvordan noen få byggescript vi lagde i 2013, har hjulpet oss på reisen fra tre til over 20 team og utviklet seg til å bli en av bærebjelkene for kontinuerlig teknologiutvikling og forbedring i SpareBank 1.",
    link: zoomlinkdag1,
    bilde: "logoer/SpareBank_1.jpg",
    alt_tekst: "SpareBank-1-utvikling-logo"
  },
	{
		type:	"foredrag",
		id: 8,
    tittel:	"Hva kan mixed reality brukes til?",
		start: new Date(2020,8, dag1, 15, 30, 0,0),
		slutt: new Date(2020,8, dag1, 15, 55, 0,0),
		foredragsholder: "Sopra Steria",
		beskrivelse: "Hør hvordan Sopra Steria tar i bruk den nyeste teknologien innen mixed reality for å løse samfunnsproblemer. Avanserte nyvinninger som Hololens 2 brukes til alt fra å øve på hjerteoperasjoner, inspisere fisk og visualisere fremtidens infrastruktur. Med hologrammer i tillegg til lyd og bilde kan du også samarbeide på tvers av jordkloden ved å la kollegaer i andre land være dine utvidede øyne, ører og hender.",
    link: zoomlinkdag1,
    bilde: "logoer/sopraSteria.png",
    alt_tekst: "Sopra Steria-logo"
  },
	{
		type:	"foredrag",
		id: 9,
    tittel:	"Pull Requests: Merge With Your Team",
		start: new Date(2020,8, dag1, 16,  0, 0,0),
		slutt: new Date(2020,8, dag1, 16, 25, 0,0),
		foredragsholder: "Itera",
		beskrivelse: "Pull Requests: Merge With Your Team\nWorking as developers in teams, we continuously submit our code to be scrutinized by our peers. With written language being fragile and easy to misunderstand, pull requests can quickly become a breeding ground for demotivation and resentment. Ideally, pull requests should be the exact opposite: a place for us to give our peers praise for their good work, encourage learning, and ultimately make sure that the code produced has the entire team behind it.\nIn this talk, I’ll be talking about the psychology of giving and receiving critique, and how we can shape the language we use (specifically in regards to pull requests) to cultivate an environment in which we thrive as developers.\nThe only precondition for attending this talk is knowing what a pull request is. My hope is that after attending this talk you will be itching to submit your next pull request and also delight your fellow teammates with wonderful code reviews.",
    link: zoomlinkdag1,
    bilde: "logoer/Itera.jpg",
    alt_tekst: "Itera-logo"
  },
	{
		type:	"foredrag",
		id: 10,
    tittel:	"Quantum Promise: Solving the worlds hardest problems?",
		start: new Date(2020,8, dag1, 16, 30, 0,0),
		slutt: new Date(2020,8, dag1, 16, 55, 0,0),
		foredragsholder: "Accenture",
		beskrivelse: "Quantum Computing har allerede begynt å vise potensiale for å bli en 'game changer' i måten vi løser noen av verdens vanskeligste problemer. I dette foredraget skal jeg fortelle hvordan vi i Accenture jobbet sammen med BMW for å løse et av deres største optimaliseringseringsproblemer hos deres fabrikkroboter ved å bruke Quantumteknologi.",
    link: zoomlinkdag1,
    bilde: "logoer/Accenture.png",
    alt_tekst: "Accenture-logo"
  },
  //workshop/parallelle eventer
	{
		type:	"workshop",
		id: 11,
    tittel:	"AVLYST: Hack my face - Javascript Course",
		start: new Date(2020,8, dag1, 13,  0, 0,0),
		slutt: new Date(2020,8, dag1, 15,  0, 0,0),
		foredragsholder: "CISCO",
		beskrivelse: "A quick intro / crash course to JavaScript.",
    link: zoomlinkWSdag1,
    bilde: "logoer/Cisco.png",
    alt_tekst: "cisco-logo"
  },
	{
		type:	"workshop",
		id: 12,
    tittel:	"Oppdrag kundereise - design morgendagens løsninger",
		start: new Date(2020,8, dag1, 15, 0, 0,0),
		slutt: new Date(2020,8, dag1, 17, 0, 0,0),
		foredragsholder: "EY",
		beskrivelse: "Nyskaping = verdiskaping \nOg det er dette bedrifter skal leve av i fremtiden. Men det er ikke alltid at du og jeg og andre innbyggere syns at nye produkter og tjenester treffer. \nNyskaping = vanskelig! \nHvordan sikrer vi egentlig at nyskaping tas godt imot av oss innbyggere? Hva slags produkter og tjenester er det kundene våre må utvikle for at du og jeg skal bli fornøyde? For å sikre at nyskaping faktisk resulterer i verdiskapning, kan vi blant annet bruke Design Thinking. Design Thinking er et tankesett og en brukerorientert tilnærming til innovasjon. Metoden kombinerer designernes iterative tilnærming til tjeneste- og produktutvikling, med økonomenes analytiske og strategiske metoder for \nforretningsutvikling. Resultatet blir løsninger som har større sannsynlighet for å svare på våre brukerbehovene, er lønnsomme og i tråd med forretningsstrategi.\nI denne sesjonen vil dere få en smakebit på utvikling av tjenester ved hjelp av Design Thinking. Hvordan går vi egentlig frem når vi jobber med Design Thinking metodikken for kundene våre? Sesjonen blir en blanding av teori og oppgaveløsning underveis, formidlet av dyktige business designere som er drillet på å holde engasjerende workshops, også digitalt.\nVi kommer til å jobbe med kundereisen til noe som vi tenker kunne fungert bedre i dag. Vi skal ta på oss kundenes briller, og jobbe med det vi kaller personas (altså hvordan definerte grupper oppfatter kundereisen). Med kundenes briller på, skal vi til og med se om vi klarer å komme opp med noen løsninger. Hvorfor er det så viktig å jobbe med kundereise? Jo, for i dag søker vi mennesker opplevelser, og vi kan kanskje bruke ordet «opplevelsesøkonomi» om tiden vi er inne i. Dere vil derfor få «hands on» erfaring med veldig dagsaktuelle problemstillinger og en metode dere kan bruke for å løse problemer.\nDagsaktuelt tema + Design Thinking metodikk + engasjerende kursholdere = spennende, lærerik og interaktiv sesjon\nEstimert tid: 1,5 time \nHva du får ut av sesjonen: Teori formidlet på en lettbent og engasjerende måte, verdifull «in real life» erfaring med oppgaver vi jobber med for våre kunder. Bonus: en smakebit på hvordan vi jobber tverrfaglig digitalt under Covid-19. \nPS: Et kurs med lignende tema ble avhold ved UiO 20.februar 2020, så dersom du deltok den gangen, kan det være mer interessant å delta på en annen sesjon. \nVi gleder oss til å se deg! ",
    link: zoomlinkWSdag1,
    bilde: "logoer/ey.gif",
    alt_tekst: "EY-logo"
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
    start: new Date(2020, 8, dag1, 19, 0, 0, 0),
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
    start: new Date(2020, 8, dag2, 11, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 11, 2, 0, 0),
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
    beskrivelse: "Kom og møt en fremtidig kollega! zoomrommene er åpne kl 11-13, men bedrift-sidene vil være åpne til kl 18",
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
		slutt: new Date(2020,8,dag2,13,25,0,0),
		foredragsholder: "DNV GL",
		beskrivelse: "I denne presentasjonen vil vi i Veracity, en start-in i DNV GL ('Det norske Veritas'), fortelle om den digitale plattformen vi har utviklet og hvordan vi jobber sammen med bedriftskunder for å løse morgendagens utfordringer på miljø, sikkerhet og teknologi. \nDu får lære om hvordan vi tilfører innovasjon og nytekning til en tradisjonell industri og hvordan vi bruker IoT løsninger til å skape verdi for kunden.\nVi vil også snakke om hvordan vi organiserer autonome team i Veracity, og oppnår suksess i kundesamarbeidet.",
    link: zoomlinkdag2,
    bilde: "logoer/DNV_GL.png",
    alt_tekst: "DNV GL-logo"
	},
	{
		type:	"foredrag",
		id: 18,
    tittel:	"Jesper fikser jernbanen med Azure IoT og hjemmesnekret elektronikk",
		start: new Date(2020,8,dag2,13,30,0,0),
		slutt: new Date(2020,8,dag2,13,55,0,0),
		foredragsholder: "Bouvet",
		beskrivelse: "20 minutter er alt for kort tid for å dekke disse to teamene, men jeg skal prøve å gi dere en innblikk i hvordan det er å jobbe som IoT-konsulent i 2020.",
    link: zoomlinkdag2,
    bilde: "logoer/Bouvet.png",
    alt_tekst: "bouvet-logo"
	},
	{
		type:	"foredrag",
		id: 19,
    tittel:	"En motiverende introduksjon til UU",
		start: new Date(2020,8,dag2,14, 0,0,0),
		slutt: new Date(2020,8,dag2,14,25,0,0),
		foredragsholder: "BEKK",
		beskrivelse: "Trenger du en introduksjon til universell utforming, eller har du kanskje jobbet med UU og aldri fått helt grepet på det? Kanskje lurer du på hvorfor staten trer slike skrivebordsregler ned over hodet på oss?",
    link: zoomlinkdag2,
    bilde: "logoer/Bekk.png",
    alt_tekst: "bekk-logo"
	},
	{
		type:	"foredrag",
		id: 20,
    tittel:	"Hvordan unngå å havne på forsida av VG",
		start: new Date(2020,8,dag2,14,30,0,0),
		slutt: new Date(2020,8,dag2,14,55,0,0),
		foredragsholder: "KANTEGA",
		beskrivelse: "Tenk deg at du kommer inn i et team som har tilgang på folks ekte persondata. Du har selvfølgelig hørt om GDPR og vet at disse dataene ikke må komme på avveie. Men hvilket ansvar har akkurat du for å sørge for at det ikke skjer? Hva må du huske på for å unngå å havne på forsida til VG? Denne presentasjonen gir en oversikt over ditt ansvar relatert til sikkerhet og andre aspekter, og den gir en del konkrete tips og råd om hva du bør gjøre.",
    link: zoomlinkdag2,
    bilde: "logoer/Kantega.png",
    alt_tekst: "Kantega-logo"
	},
	{
		type:	"foredrag",
		id: 21,
    tittel:	"Hvordan designe produkter som ruler verden",
		start: new Date(2020,8,dag2,15, 0,0,0),
		slutt: new Date(2020,8,dag2,15,25,0,0),
		foredragsholder: "Iterate",
		beskrivelse: "Når vi ønsker å bli gode på innovasjon og produktutvikling lærer vi mye om markedseksperimentering, brukerreise, interaksjonsdesign, visuelt design og enkle forretningsmodeller (som f.eks SaaS). Men de virkelig store produktene gjør mer enn dette. De bygger inn mekanismer som får produktet inn i hyperrask vekst, som over tid gir stor utbredelse og en solid, langvarig global markedsposisjon. Vi ser nærmere på 'the secret sauce', som tar oss fra produkt med høy brukerverdi, til teknologiselskap med global utbredelse.",
    link: zoomlinkdag2,
    bilde: "logoer/iterate.png",
    alt_tekst: "iterate-logo"
	},
	{
		type:	"foredrag",
		id: 22,
    tittel:	"Bildegjennkjenning med dyp læring",
		start: new Date(2020,8,dag2,15,30,0,0),
		slutt: new Date(2020,8,dag2,15,55,0,0),
		foredragsholder: "Norsk Regnesentral",
		beskrivelse: "Dyp læring er den viktigste metoden bak det vi kaller kunstig intelligens. Hva er dyp læring? Hvordan virker denne teknologien og hva kan man få til ved å bruke dette til bildegjenkjenning?",
    link: zoomlinkdag2,
    bilde: "logoer/Norsk_regnesentral.png",
    alt_tekst: "Norsk Regnesentral-logo"
	},
	{
		type:	"foredrag",
		id: 23,
    tittel:	"Hvordan maskinlæring kan brukes til å sikre finansieringen av velferdssamfunnet",
		start: new Date(2020,8,dag2,16, 0,0,0),
		slutt: new Date(2020,8,dag2,16,25,0,0),
		foredragsholder: "Skatteetaten",
		beskrivelse: "I Skatteetaten jobber vi med alt fra å kreve inn skatter og avgifter til å ha ansvaret for et oppdatert folkeregister. Som et av Norges største IT-miljøer liker vi å ligge i front når det kommer til ny teknologi – det til tross våre statlige gener!\n\nVi ønsker å gi dere en introduksjon til hvordan vi i Skatteetaten bruker maskinlæring til å gjøre det så enkelt som mulig å gjøre rett, og til å sikre finansiering av velferdssamfunnet.",
    link: zoomlinkdag2,
    bilde: "logoer/Skatteetaten.png",
    alt_tekst: "Skatteetaten-logo"
	},
	{
		type:	"foredrag",
		id: 24,
    tittel:	"Smittestopp: apputvikling i koronaens tidsalder",
		start: new Date(2020,8,dag2,16,30,0,0),
		slutt: new Date(2020,8,dag2,16,55,0,0),
		foredragsholder: "Simula",
		beskrivelse: "Kyrre Lekve, Deputy Managing Director ved Simula Research Laboratory, forteller om utviklingen av Smittestopp-appen. Han vil blant annet snakke om tekniske utfordringer og løsninger, forskjellen på kontaktsporing mellom individer og sporing av epidemien på samfunnsnivå, samt hensyn til personvern.\nForedraget vil være av interesse for både bachelor- og masterstudenter, der både tekniske og samfunnsmessige aspekter blir belyst.",
    link: zoomlinkdag2,
    bilde: "logoer/simula.png",
    alt_tekst: "simula-logo"
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
    link: zoomlinkWSdag2,
    bilde: "logoer/deloitte.jpg",
    alt_tekst: "deloitte-logo"
	},
	{
		type:	"foredrag",
		id: 26,
    tittel:	"De store teknologibedriftenes hemmelige verktøykasse",
		start: new Date(2020,8,dag2,15, 0,0,0),
		slutt: new Date(2020,8,dag2,15,25,0,0),
		foredragsholder: "DNB",
		beskrivelse: "Vanligvis består et team av 6 - 10 personer. Hvordan lager man da én nettside når man er flere hundre utviklere? Vi tar en titt i verktøykassa til de største bedriftene, og ser på hvordan arkitekturen kan se ut, hvordan de jobber og hva slags verktøy de bruker. Kort sagt, hvordan de får alt til å henge sammen, og hvordan vi har valgt å løse det i DNB.",
    link: zoomlinkFdag2,
    bilde: "dnb_sjogronn.png",
    alt_tekst: "Dnb-logo"
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
    start: new Date(2020, 8, dag2, 19, 0, 0, 0),
    slutt: new Date(2020, 8, dag2, 21, 0, 0, 0),
    beskrivelse: "Vi avslutter dagen med å streame quiz fra escape",
    link: "",
    bilde: "dagen_logo.svg",
    alt_tekst: "dagen at ifi sin logo"
  }
]

export default program_info;
