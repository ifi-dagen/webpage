import React from 'react';
import '../../App.css';
import './bedrift.css';
import Prisinfo from '../../components/Prisinfo';


const Bedrift = () => {
    return (
        <div className="bedriftbase ">
            <h1>
               ettermiddagen@ifi våren 2021
            </h1>
            <p>I år blir ettermiddagen@ifi arrangert 30. april, digitalt. Dette er vår litt mindre karrieredag som blir avholdt på vårsemesteret. </p>
            <p>Har du noen spørsmål vedrørende ettermiddagen eller arrangementet, vennligst ta kontakt med vår bedriftsansvarlige: Victoria Kleiv Müller via <a href = "mailto: bedrift@dagenatifi.no"> bedrift@dagenatifi.no</a>.</p>
            <br />
            <h1>dagen@ifi høsten 2021</h1>
            <p>Vi har bestemt at dagen@ifi i år blir avholdt 23. september 2021. Vi forventer at dette arrangementet til en viss grad skal kunne være fysisk igjen, selv om vi såklart etterfølger gjeldende smittevernregler. Vi er optimistiske og skal uansett gjøre vårt beste ut fra situasjonen.</p>
            <p>Dagen@ifi er høstens store karrieredag og er det største arrangement denne foreningen arrangerer iløpet av semesteret. Her fylles gangene på ifi med rundt 60 bedrifter som kan profilere seg ut mot ifi studenter, og på kvelden er det underholdning og etterfest.   </p>
           
            <Prisinfo />
            <h1>Andre måter å nå ut til studenter på?</h1>
            <p>Interessert i å ha bedriftpresentasjon på ifi? Ta kontakt med <a href = "mailto: styret@ifinavet.no"> styret@ifinavet.no</a>.</p>
            <p>Interessert i å nå ut til studenter fra andre institutter? Ta kontakt med <a href = "mailto: karriereuka@sio.no"> karriereuka@sio.no</a>.</p>
        </div >
    );
}

export default Bedrift;
