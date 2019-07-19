import fs from 'fs';

export abstract class CsvFileReader<TypeOfData> { // most engineers use just 'T' for generic typing
  data: TypeOfData[] = [];

  constructor(public filename: string) {}

  abstract mapRow (row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      )
      .map( this.mapRow );
  }
}
