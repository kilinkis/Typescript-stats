import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResults';

/**
 * Inheritance: Characterized by an 'IS A' relationship between two classes
 *  vs
 * Composition: Characterized by an 'HAS A' relationship between two classes:
 *    "Instead of a window being a rectangle, it wil HAVE A rectangle"
 * 
 * For more, read the definition by Erich Gamma in Design Patterns, page 20.
 */

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    // won as local
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    // won as visitor
    manUnitedWins++;
  }
}

console.info(`Man United won ${manUnitedWins} games`);
