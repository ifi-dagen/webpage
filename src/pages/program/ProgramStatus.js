import React, { Component } from 'react';
import './program.css';
import program_info from '../../data/program_info.js'

class ProgramStatus extends Component {
  dateCount = 25;
  dateStringStub = '2020-09-'
  startDate = '2020-09-06'
  endDate = '2020-09-05'
  state = { date:'2020-09-02', currentEvent: -1, dayEnded: false}

  klokkeslett = (date) => {
    return date.getHours()+":"+(date.getMinutes()<10 ? ("0" + date.getMinutes()) : date.getMinutes())
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

  componentDidMount() {
    this.findCurrentState();
    if (this.state.date < '2020-09-26'){
      console.log("find now")
      this.setState({date: this.startDate})
      //find date, then setTimeout for change of date
      setTimeout(() => {this.bump()},this.secondsToNext())//this.secondsToNext()
    }
  }

  findCurrentState(){
    const now = new Date()
    const nowString = this.dateString(now);
    this.setState({date: nowString})
    if(program_info[nowString]){
      //loop gjennom liste for den dagen:
      let i = -1;
      if(now < program_info[nowString][0].start){
        this.setState({currentEvent: -1})
        return;
      } else {
        i++;
      }
      while (now > program_info[nowString][i].slutt){
        i++
        if(!program_info[nowString][i]){
          console.log(i, "whaaat!")
          //sjekk om vi er på siste del av programmet.
          this.setState({currentEvent: -1, dayEnded: true})
          return;
        }
      }
      this.setState({currentEvent: i})
    } else {
      this.setState({currentEvent: -1, dayEnded: true})
    }

  }

  bump = () => {
    console.log("find new, if bump can be done right...")
    if (program_info[this.state.date] && this.state.currentEvent+1 < program_info[this.state.date].length){
      const newNumber = this.state.currentEvent+1;
      this.setState({currentEvent: newNumber});
      setTimeout(() => {this.bump()},this.secondsToNext())
    } else {
      console.log("end day")
      this.setState({dayEnded: true});
      this.setState({currentEvent:-1});
      if(this.state.date <'2020-09-26'){
        setTimeout(() => {this.newDay()},this.secondsToNext())
      }
    }
  }

  //Only used before or during event,not after
  secondsToNext(){
    if (this.state.date < this.startDate){
      //days before wait for next day.
      console.log((program_info[this.startDate][0].start,new Date()));
      console.log((program_info[this.startDate][0].start-new Date()));
      return (program_info[this.startDate][0].start-new Date());
    }
    if(this.state.currentEvent === -1){
      //hvis dagen er over, regn ut til første neste dag
      if(this.state.dayEnded){
        if(this.state.date === this.startDate){
          //neste dag er 2020-09-25
          return (program_info[this.endDate][0].start-new Date());
        } else {
          //neste dag er 2020-09-26
          return 9999999999 //just some thing high
        }
      } else {
        //regn ut fra nå til første event.
        console.log(this.state.date)
        return program_info[this.state.date][0].start-new Date();
      }
    } else {
      if (this.state.currentEvent+1 < program_info[this.state.date].length){
        return program_info[this.state.date][this.state.currentEvent+1].start-new Date();
      }
      return program_info[this.state.date][this.state.currentEvent].slutt-new Date();
    }
    return program_info[this.state.date]
    //ta start for neste minus nå.
  }

  newDay = () => {
    console.log("new day!")
    const newDateString = this.dateStringStub+this.dateCount;
    this.dateCount++;
    this.setState({date: newDateString, currentEvent:-1});
    if(program_info[this.state.date]){
      console.log("HEREO",this.state)
      this.setState({dayEnded: false});
    } else {
      this.setState({dayEnded: true});
    }
    console.log(this.state)
    setTimeout(() => {console.log("first new day bump");this.bump()},this.secondsToNext())
  }

  render(){
    console.log(this.state.date, this.state.currentEvent,this.state.dayEnded);
    //console.log(program_info[this.state.date])
    if(this.state.currentEvent !== -1){
      //console.log(program_info[this.state.date][this.state.currentEvent]);
    }
    if (this.state.dayEnded){
      return(
        <div className="container"></div>
      )
    }
    if(this.state.currentEvent === -1){
      return(
        <div className="statusbar">
          <div className="container">
            <h1> Program kommer </h1>
            <p>Stay tuned!</p>
          </div>
      </div>)
    } else {
      const hending = program_info[this.state.date][this.state.currentEvent];
      return (
        <div className="statusbar">
          <div className="container">
              <h6> Akkurat nå: </h6>
              <h1>{hending.tittel}</h1>
              <p>{hending.beskrivelse}</p>
              <h4><a href={hending.link}>delta her!</a></h4>
              <h4>{this.klokkeslett(hending.start)} - {this.klokkeslett(hending.slutt)}</h4>
          </div>
        </div>
      )
    }
  }
}

export default ProgramStatus;
