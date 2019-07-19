import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface Datareader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: Datareader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // type assertion
          row[6]
        ];
      }
    );
  }
}
