import {Analyzer} from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        // won as local
        wins++;
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        // won as visitor
        wins++;
      }
    }

    return `Team  ${this.team} won ${wins} games`;
  }
}