import {Coach} from './Coach'

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return "Coaching the cricket players";
    }
}