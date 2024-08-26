import { faker } from "@faker-js/faker";

export type Person = {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female";
  diagnosis: string;
  lastVisit: string;
  subRows?: Person[];
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int(40),
    gender: faker.helpers.shuffle<Person["gender"]>(["male", "female"])[0]!,
    diagnosis: faker.helpers.shuffle<Person["diagnosis"]>([
      "Diabetes",
      "Chronic Kidney Disease",
      "Hypertension",
      "Cancer",
      "Heart Disease",
      "COPD",
      "Cystic Fibrosis",
      "Covid-19",
      "Migraine",
    ])[0]!,
    lastVisit: faker.date.past().toString(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
