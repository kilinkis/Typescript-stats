import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

// enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

let manUnitedWins = 0;

for(let match of reader.data ){
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){ // won as local
    manUnitedWins++;
  } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { // won as visitor
    manUnitedWins++; 
  }
}

console.log(`Man United won ${manUnitedWins} games`);
