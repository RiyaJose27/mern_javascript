//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    let minuteAngle = 6 * (minutes % 60);
    let hourAngle = 0.5 * (minutes % 3600);
  
    let finalAngle = Math.abs(minuteAngle - hourAngle);
  
    return finalAngle >= 360 ? finalAngle - 360 : finalAngle;
  }
  
  console.log(clockAngles(360));
  console.log(clockAngles(180));
  console.log(clockAngles(210));
  console.log(clockAngles(588));
  console.log(clockAngles(980));
  console.log(clockAngles(361));





  const clockAngles = minutes => {
    let fullRevolutions = Math.floor(minutes/720);
    minutes = minutes - 720*fullRevolutions;

    let hourHand = Math.floor(minutes/60);
    let minuteHand = minutes%60;
    hourHand += minuteHand/60;

    let hourDegree = hourHand*30;
    let minuteDegree = minuteHand*6;

    let max;
    let min;

    if(hourDegree-minuteDegree > 0){
        max = hourDegree;
        min = minuteDegree;
    } else {
        max = minuteDegree;
        min = hourDegree;
    }
    
    console.log(max);
    console.log(min);

    return max-min;
}