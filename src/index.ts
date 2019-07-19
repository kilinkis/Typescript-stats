import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalaysis';
import { Summary } from './Summary';

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

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);