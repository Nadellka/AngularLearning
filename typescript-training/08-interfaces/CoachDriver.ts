import {Coach} from './Coach';
import { GolfCoach } from './GolfCoach';
import { CricketCoach } from './CricketCoach';

let golfCoach = new GolfCoach();
let cricketCoach = new CricketCoach();

let coaches: Coach[] = [];
coaches.push(golfCoach);
coaches.push(cricketCoach);

for(let coach of coaches){
    console.log(coach.getDailyWorkout());
}