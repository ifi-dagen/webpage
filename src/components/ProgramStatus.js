import React, { Component } from 'react';
import program_info from '../data/program_info.js'
import './ProgramStatus.css'

class ProgramStatus extends Component {
  startDate = program_info[0].start
  endDate = program_info[program_info.length-1].slutt
  nextUpBuffer = 10*60*1000 //timeframe for nextEvent
  state = { date:'2020-09-02', currentEvent: [], nextEvent: [], dayEnded: false}

  klokkeslett = (date) => {
    return date.getHours()+":"+(date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes())
  }

  dateString = (d) => {
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      let year = d.getFullYear();

      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;
      return [year, month, day].join('-');
  }

  earliestDate = (dats) => {
    return Math.min.apply(null,dats.map(item => item.getTime()))
  }

  componentDidMount() {
    this.bump()
  }

  //this and bump are only functions allowed to edit state!
  findCurrentState(){
    const now = new Date()
    const nowString = this.dateString(now);
    //loop gjennom listen:
    if(now < program_info[0].start+this.nextUpBuffer){
      this.setState({date: nowString, currentEvent: []})
      return;
    }
    let events = []
    let upNext = []
    program_info.forEach((item, i) => {
      if(now >= program_info[i].start && now < program_info[i].slutt){
        events.push(i)
      } else if(now > program_info[i].start-this.nextUpBuffer && now < program_info[i].start){
        upNext.push(i)
      }
    });
    this.setState({date: nowString, currentEvent: events, nextEvent: upNext})
  }

  //this and findCurrentState are only functions allowed to edit state!
  bump = () => {
    //console.log("find new, if bump can be done right...")
    this.findCurrentState();
    //console.log("find now2", new Date(),this.endDate)
    if (new Date() <= this.endDate){
      //console.log("find now") //this.setState({date: this.startDate})//find date, then setTimeout for change of date
      setTimeout(() => {this.bump()},this.secondsToNext())//this.secondsToNext()
    }
  }

  //Only used before or during event,not after
  secondsToNext(){
    const now = new Date();
    if (now < this.startDate){
      //days before wait for next day.
      return (program_info[0].start-new Date());
    }
    if (now > this.endDate){
      return 9999999999 //just some thing high because event has ended.
    }
    if(this.state.currentEvent.length === 0){
      if(this.state.nextEvent.length === 0){
        //finn time to nextEvent, but don't edit state here
        return this.earliestDate(program_info.filter(item => item.start >= now).map(item => item.start))-now; //tid til første next event.
      }
      return this.earliestDate(program_info.filter(item => item.start >= now).map(item => item.start))-now; //tid til første next event.
    } else {
      //finn hva som kommer først, nytt vent, eller slutt på eksisterende?
      const endings = this.earliestDate(this.state.currentEvent.filter(item => program_info[item].slutt >= now).map(item => program_info[item].slutt)) //this.earliestDate() of endings
      const starts =  this.earliestDate(this.state.nextEvent.filter(item => program_info[item].start >= now).map(item => program_info[item].start)) //this.earliestDate() of starts
      if (starts === 0 || endings < starts){
        return endings-now
      }
      return starts-now;
    }
  }

  eventer = (nextEventHappening, isCompact) => {
    return (<div className={isCompact? "programstatus-compact-container": "programstatus-container"}>
        {nextEventHappening.map((programindex, listeindex) => {
          return(
            <div className={isCompact? "programstatus-compact-tekstboks": "programstatus-tekstboks"} key={listeindex}>
              <h4 id="tittel"><a className="programstatus-a" href={"/program/#"+program_info[programindex].id}>{program_info[programindex].tittel}</a>
              {" - fra: "+this.klokkeslett(program_info[programindex].start)}</h4>
              <h4 id="delta-link"> <a className="programstatus-a" href={program_info[programindex].link} target="_blank" rel="noopener noreferrer">delta her!</a></h4>
            </div>
          )
        })}
    </div>)
  }

  render(){
    console.log(this.state.currentEvent, this.state.nextEvent)
    let live = false;
    if(this.state.currentEvent.length === 0){
      if(this.state.nextEvent.length === 0){
        return(
          <div className="programstatus-container"></div>
        )
      }
      live = false
    } else {
      live = true
    }

    if(this.props.compact){
      return (
        <div className={live? "programstatus-bar compact-bar": "programstatus-bar compact-bar programstatus-snart"}>
          {this.state.currentEvent &&  <h1 id="status"> {"Akkurat nå:"} </h1>}
          {this.state.currentEvent && this.eventer(this.state.currentEvent,true)}
          {this.state.nextEvent.length !== 0 &&  <h1 id="status"> {"Kommer snart:"} </h1>}
          {this.state.nextEvent && this.eventer(this.state.nextEvent,true)}
        </div>
      )
    }

    return (
      <div className={live? "programstatus-bar": "programstatus-bar programstatus-snart"}>
        {this.state.currentEvent &&  <h1 id="status"> {"Akkurat nå:"} </h1>}
        {this.state.currentEvent && this.eventer(this.state.currentEvent,false)}
        {this.state.nextEvent &&  <h1 id="status"> {"Kommer snart:"} </h1>}
        {this.state.nextEvent && this.eventer(this.state.nextEvent,false)}
      </div>
    )
  }
}

export default ProgramStatus;
