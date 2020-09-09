import React, { Component } from 'react';
import './program.css';
import program_info from '../../data/program_info.js'

class ProgramStatus extends Component {
  startDate = program_info[0].start
  endDate = program_info[program_info.length-1].slutt
  nextUpBuffer = 10*60*1000 //timeframe for nextEvent
  state = { date:'2020-09-02', currentEvent: [], nextEvent: [], dayEnded: false}

  klokkeslett = (date) => {
    return date.getHours()+":"+(date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes())+":"+(date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds())
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
    console.log("componentDidMount", new Date())
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
    console.log("find new, if bump can be done right...")
    this.findCurrentState();
    //console.log("find now2", new Date(),this.endDate)
    if (new Date() <= this.endDate){
      console.log("find now") //this.setState({date: this.startDate})//find date, then setTimeout for change of date
      setTimeout(() => {this.bump()},this.secondsToNext())//this.secondsToNext()
    }
  }

  //Only used before or during event,not after
  secondsToNext(){
    const now = new Date();
    console.log(now);
    if (now < this.startDate){
      //days before wait for next day.
      return (program_info[0].start-new Date());
    }
    if (now > this.endDate){
      //console.log(9999999999);
      return 9999999999 //just some thing high because event has ended.
    }
    if(this.state.currentEvent.length === 0){
      if(this.state.nextEvent.length === 0){
        //finn time to nextEvent, but don't edit state here
        return this.earliestDate(this.state.nextEvent.map(item => program_info[item].start))-now; //tid til første next event.
      }
      return this.earliestDate(this.state.nextEvent.map(item => program_info[item].start))-now; //tid til første next event.
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

  render(){
    if(this.state.currentEvent.length === 0){
      if(this.state.nextEvent.length === 0){
        return(
          <div className="container"></div>
        )
      }
      return(
        <div className="statusbar">
          <div className="container">
            <h6> Kommer snart: </h6>
            {this.state.nextEvent.map((programindex, listeindex) => {
              return(
                <div className="tekstboks" key={listeindex}>
                  <h1>{program_info[programindex].tittel}</h1>
                  <p>{program_info[programindex].beskrivelse}</p>
                  <h4><a href={program_info[programindex].link}>delta her!</a></h4>
                  <h4>{this.klokkeslett(program_info[programindex].start)} - {this.klokkeslett(program_info[programindex].slutt)}</h4>
                </div>
              )
            })}
          </div>
      </div>)
    } else {
      return (
        <div className="statusbar">
          <div className="container">
              <h6> Akkurat nå: </h6>
              {this.state.currentEvent.map((programindex, listeindex) => {
                return(
                  <div className="tekstboks" key={listeindex}>
                    <h1>{program_info[programindex].tittel}</h1>
                    <p>{program_info[programindex].beskrivelse}</p>
                    <h4><a href={program_info[programindex].link}>delta her!</a></h4>
                    <h4>{this.klokkeslett(program_info[programindex].start)} - {this.klokkeslett(program_info[programindex].slutt)}</h4>
                  </div>
                )
              })}
          </div>
        </div>
      )
    }
  }
}

export default ProgramStatus;
