//stand_info inneholder to objekter, et for hver dag.
//hver av dagene inneholder en liste av objekter med info per bedrift.

const stand_info =
{
  "dag1": {
    "ABB": {
        bedriftnavn: "ABB",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/64062353395",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Accenture": {
        bedriftnavn: "Accenture",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/62865709366",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Cognite": {
        bedriftnavn: "Cognite",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/62864162608",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Creuna": {
        bedriftnavn: "Creuna",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/66536339770",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Distribution Innovation": {
        bedriftnavn: "Distribution Innovation",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/65732819538",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "DNB": {
        bedriftnavn: "DNB",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/69440787996",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Etterretningstjenesten": {
        bedriftnavn: "Etterretningstjenesten",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/69101629823",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "EY": {
        bedriftnavn: "EY",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/63487429373",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Forsvarets forskningsinstitutt": {
        bedriftnavn: "Forsvarets forskningsinstitutt",
        beskrivelse: "",
        logonavn: "Ffi.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/63458733228",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Fremtind Forsikring": {
        bedriftnavn: "Fremtind Forsikring",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/63761070770",
        stillinger: [{tekst: "Summer Internship 2021", link: "https://candidate.hr-manager.net/ApplicationInit.aspx?cid=1889&ProjectId=144150&DepartmentId=20575&MediaId=4630"}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Genus": {
        bedriftnavn: "Genus",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/69232668796",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Itera": {
        bedriftnavn: "Itera",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/62514712286",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Kolonial.no": {
        bedriftnavn: "Kolonial.no",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/63383934750",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "NAV IT": {
        bedriftnavn: "NAV IT",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/61335610161",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Netcompany": {
        bedriftnavn: "Netcompany",
        beskrivelse: "Netcompany ble grunnlagt i år 2000 og har hovedkontor i København i Danmark. I dag er vi et internasjonalt selskap med over 2500 medarbeidere i seks land. Netcompany er et rent IT-selskap som leverer forretningskritiske IT-prosjekter som hjelper kundene med digital forandring via digitale plattformer, kjernesystemer og infrastruktursystemer. Vi vet at det er medarbeiderne våre som er nøkkelen til at vi kan beholde vår posisjon som bransjens ledende og raskest voksende IT-konsulenthus. Derfor har vi skapt en forretningsmodell der vi hele tiden fokuserer på å utvikle medarbeiderne våre til å bli de beste i bransjen. Det betyr at karrieren din er minst like viktig for oss som den er for deg.",
        logonavn: "Netcompany.png",
        video: "https://www.youtube.com/watch?v=T9e93Olxu4w",
        video:"",
        zoomlink:"https://uio.zoom.us/j/62811861036",
        stillinger: [{tekst: "Nyutdannet utvikler med oppstart 2021", link: "https://www.netcompany.com/no/Components/Job-Positions/Student,-c-,-Nyutdannet-utvikler-med-oppstart-august-2021"}, {tekst: "Summer Internship 2021 Utvikler", link: "https://www.netcompany.com/no/Components/Job-Positions/Student,-c-,-Summer-internship-2021---Utvikler"}, {tekst: "Summer Internship 2021 UX Designer", link: "https://www.netcompany.com/no/Components/Job-Positions/Student,-c-,-Summer-internship-2021---UX-designer"}, {tekst: "Talent Network 2021", link: "https://www.netcompany.com/no/Components/Job-Positions/Student,-c-,-Talent-Network-2021"}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Netlight": {
        bedriftnavn: "Netlight",
        beskrivelse: "",
        logonavn: "Netlight.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/65612593008",
        stillinger: [{tekst: "Summer Internship 2021", link: "https://jobs.lever.co/netlight/783adfbe-6a59-4a16-b4b2-df64d44fba87"}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "PA CONSULTING": {
        bedriftnavn: "",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/63875433928",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Posten og Bring": {
        bedriftnavn: "Posten og Bring",
        beskrivelse: "",
        logonavn: "Posten_Norge.png",
        video: "http://www.kaltura.com/tiny/kfbaa",
        video:"",
        zoomlink:"https://uio.zoom.us/j/69158490010",
        stillinger: [{tekst: "Konserntrainee i Posten og Bring 2021", link: "https://candidate.hr-manager.net/ApplicationInit.aspx?cid=1641&ProjectId=144904&DepartmentId=18956&MediaId=5"}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Schibsted": {
        bedriftnavn: "Schibsted",
        beskrivelse: "",
        logonavn: "Schibsted.png",
        video: "https://youtu.be/RBskvdqt5dA",
        video:"",
        zoomlink:"https://uio.zoom.us/j/63837890960",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Sopra Steria": {
        bedriftnavn: "",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/65957726471",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "SpareBank 1 Utvikling": {
        bedriftnavn: "SpareBank 1 Utvikling",
        beskrivelse: "SpareBank 1 Utvikling er de 14 SpareBank 1-bankenes felles selskap for utvikling, drift, innkjøp, merkevare og mye annet spennende. 600 dyktige medarbeidere skaper og forvalter de beste digitale løsningene, tjenestene og brukeropplevelsene i bransjen - for over 1 million kunder. Vi går på jobb hver dag for å gjøre hverdagsøkonomien enklere og bedre for folk og bedrifter over hele landet. Vi vektlegger læring og kompetanse, frihet og trivsel i arbeidshverdagen. Dette gjør SpareBank 1 Utvikling til et spennende sted å jobbe, og et godt sted å være. Spør oss om: sommerjobb, fagdag, hackaton, fadderordning og nativeutvikling",
        logonavn: "SpareBank_1.jpg",
        video:"https://youtu.be/W7MVqb3td1E",
        zoomlink:"https://uio.zoom.us/j/66307450744",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Storebrand": {
        bedriftnavn: "",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/62140303360",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Systek": {
        bedriftnavn: "Systek",
        beskrivelse: "Jobb med de skarpeste hodene i et selskap som er eid av de ansatte og i stadig vekst!",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/68298550948",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Visma Consulting": {
        bedriftnavn: "",
        beskrivelse: "Hvert år rekrutterer vi dyktige nyutdannede som er engasjert og nysgjerrig på ny teknologi! Vi jobber for å ligge i front når det gjelder ny teknologi og utvikler hver dag samfunnskritiske løsninger. Vi leverer konsulenttjenester i form av IT-rådgivning, systemutvikling og applikasjonsforvaltning til både private og offentlige virksomheter.",
        logonavn: "icon_1.png",
        video: "https://www.youtube.com/watch?v=sIg1bXYQ_KU&feature=youtu.be",
        zoomlink:"https://uio.zoom.us/j/68346630888",
        stillinger: [{tekst: "IT-konsulent i Nytt Krutt", link: "https://vismaconsulting.recman.no/job.php?job_id=160140"},{tekst: "Sommerjobb som IT-konsulent", link: "https://vismaconsulting.recman.no/job.php?job_id=160321"}],
        konkurranser: [{tekst: "Kahoot i vårt Zoom-rom kl 12.00 med premie! Bli med :-)", link:""}],
        foredrag: [{tekst: "", link: ""}],
        tags: ["",""]
      },
    "Vitec Software Group": {
        bedriftnavn: "",
        beskrivelse: "",
        logonavn: "icon_1.png",
        video:"",
        zoomlink:"https://uio.zoom.us/j/69056279057",
        stillinger: [{tekst: "", link: ""}],
        konkurranser: [{tekst: "Answer a few questions about Vitec and win a gift card from Komplett worth 5000nok", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=e1R1xImDvUmIRzwO8Lnhgevb-ZXAbwxGg6vsx6QAJ7RUQkk5NURMQUI2MFFLNlNNMVE0RkxVRklFOC4u"}],
        foredrag: [{tekst: "", link:""}],
        tags: ["",""]
      }
  },
  "dag2": {
    "Sykehuspartner HF": {
      bedriftnavn: "Sykehuspartner HF",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62722495625",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Bekk": {
      bedriftnavn: "Bekk",
      beskrivelse: "Bekk er et norsk selskap som lykkes på grunn av mennesker som brenner for faget sitt. Vi jobber med strategi, design og teknologi og tror på tverrfaglige team. Hos oss får du muligheten til å utvikle løsninger som hjelper bedrifter med å nå sine mål innen digitalisering og nyskaping.\nLyst til å jobbe i Bekk?\nHovedrunden med rekruttering til fast jobb og sommerjobb er om høsten, men vi er alltid åpne for søknader fra de rette kandidatene!",
      logonavn: "Bekk.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/63181529688",
      stillinger: [{tekst: "Søk hos oss", link: "bekk.no/jobb"}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Bouvet Norge": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/69910129070",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Bredvid": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62135672377",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Capgemini ": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62135515698",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "CGI": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62352258894",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Cisco": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/66309981207",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Clave": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/66871507289",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Cognizant": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/61295383482",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Data Respons R&D Services": {
      bedriftnavn: "Data Respons R&D Services",
      beskrivelse: "",
      logonavn: "Data_response.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/69866433374",
      stillinger: [{tekst: "Ledige stillinger", link: " https://rd-datarespons.no/jobb/"}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Deloitte": {
      bedriftnavn: "Deloitte",
      beskrivelse: "",
      logonavn: "deloitte.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/65733754251",
      stillinger: [{tekst: "Internship", link: "https://deloitte.recman.no/job.php?job_id=162309"},{tekst: "Cyber Risk", link: "https://deloitte.recman.no/job.php?job_id=64569"}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "DNB": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/66136361939",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "DNV GL": {
      bedriftnavn: "DNV GL",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62678997415",
      stillinger: [{tekst: "DNV GL Summer Job 2021 - Maritime Class", link: "https://careers-dnvgl.icims.com/jobs/14391/dnv-gl-summer-job-2021---maritime-class/job"},{tekst: "DNV GL Summer Job 2021 - Veracity", link: "https://careers-dnvgl.icims.com/jobs/14358/dnv-gl-summer-job-2021---veracity/job"}],
    },
    "Elvia": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/69400043319",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Experis Academy": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62267349916",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Experis Ciber": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/61525109396",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Gjensidige Forsikring": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/62121292790",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "If IT": {
      bedriftnavn: "If IT",
      beskrivelse: "If IT is 1100 people creating the knowledge hub of digital services for the largest fintech company within insurance in the Nordics - If P&C Insurance. If IT develops our new digital platform Waypoint – one of the largest .NET programs in the Nordics. We have mature DevOps Teams developing, operating and deploying in Cloud supported by an Agile ALM process on Azure. In our own Tech Lab we work in the forefront of technologies i.e. AI, Bots, Micro services and Machine Learning et al. If IT is a central part of making a good digital customer journey.",
      logonavn: "icon_1.png",
      video: "https://youtu.be/EHc9r89EUUU",
      zoomlink:"https://uio.zoom.us/j/64462476032",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Iterate": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/63856094442",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Kantega": {
      bedriftnavn: "Kantega",
      beskrivelse: "Kantega er et IT-selskap med rundt 165 stolte medarbeidere, i Oslo, Trondheim og Bergen. Vi eier vårt eget selskap. Det gjør noe med oss og forholdet til kundene våre og løsningene vi lager: Fantastiske IT-løsninger, de som forbedrer livene til hver av oss.",
      logonavn: "Kantega.png",
      video: "https://www.youtube.com/watch?v=ocwnns57cYQ&t=1s",
      zoomlink:"https://uio.zoom.us/j/66579280932",
      stillinger: [{tekst: "Søk sommerjobb hos oss", link: "https://sommerjobb.kantega.no/jobs/929530-spennende-sommerjobb-i-tverrfaglig-team"}],
      konkurranser: [{tekst: "Delta i vår konkurranse og vinn flotte premier", link:"https://www.kantega.no/dagen-ifi-2020"}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Lime Technologies Norway": {
      bedriftnavn: "Lime Technologies Norway",
      beskrivelse: "At Lime, we love CRM! \nSince the beginning we have helped more than 6000 companies to reach better results with the help of easy-to-use CRM solutions that we develop, consult and support ourselves. Today we are over 280 colleagues and one of the largest CRM suppliers in the Nordic countries with offices in Helsinki, Stockholm, Gothenburg, Lund, Oslo and Copenhagen. We are also proud to mention that we this year 2020 expanded to the Netherlands and recently opened a new office in Utrecht",
      logonavn: "icon_1.png",
      video: "https://www.youtube.com/watch?v=sDl-X7PqvEM",
      zoomlink:"https://uio.zoom.us/j/61602017949",
      stillinger: [{tekst: "European Trainee Program", link: "https://jobs.lime-technologies.com/trainee/"}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "NRK": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/63541921010",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Norsk Regnesentral": {
      bedriftnavn: "Norsk Regnesentral",
      beskrivelse: "",
      logonavn: "Norsk_regnesentral.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/69153286477",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Simula Research Laboratory": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/64881656409",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    },
    "Skatteetaten": {
      bedriftnavn: "",
      beskrivelse: "",
      logonavn: "icon_1.png",
      video:"",
      zoomlink:"https://uio.zoom.us/j/66385315136",
      stillinger: [{tekst: "", link: ""}],
      konkurranser: [{tekst: "", link:""}],
      foredrag: [{tekst: "", link: ""}],
      tags: ["",""]
    }
  }
}

export default stand_info;
