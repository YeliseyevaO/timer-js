'use strict';

class  CountdownTimer{
    constructor({selector,targetDate}){
      
       this.targetDate=targetDate, 
          this.refs = {
        days: document.querySelector(`${selector}  span[data-value='days']`),
        hours: document.querySelector(`${selector}  span[data-value='hours']`),
        mins: document.querySelector(`${selector}  span[data-value='mins']`),
        secs: document.querySelector(`${selector}  span[data-value='secs']`),
      };
      this.start();
    }
    
    start(){
        const startTime=(this.targetDate).getTime();
        setInterval(()=>{ 
            const currentTime=Date.now();
            if(startTime>currentTime){
       
       const deltaTime= startTime-currentTime;
       const leftTime=this.getTimeComponents(deltaTime);
       this.upDateCounter(leftTime);

        }else{
            this.upDateCounter(this.getTimeComponents(0));
  
        }
        }, 1000);
    }

  getTimeComponents(time) {
    const days =this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

 
  pad(value) {
    return String(value).padStart(2, '0');
  }
   upDateCounter({days, hours, mins, secs }){
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
};

  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 07, 2022'),
  });
  
