interface Quarter {
  name: string;
  image: string;
  year: [number, number] | number;
  program?: string;
  collected?: boolean;
  collectedDate?: Date;
}
