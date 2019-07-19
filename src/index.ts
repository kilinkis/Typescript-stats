import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

/**
 * Inheritance: Characterized by an 'IS A' relationship between two classes
 *  vs
 * Composition: Characterized by an 'HAS A' relationship between two classes:
 *    "Instead of a window being a rectangle, it wil HAVE A rectangle"
 *
 * For more, read the definition by Erich Gamma in Design Patterns, page 20.
 */

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United'); // static methods can be invoked without creating a new instance of the class

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
