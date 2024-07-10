import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import path from 'path';


// Define the type for the user data
interface UserData {
  firstname: string;
  lastname: string
  email: string;
  password: string;

}

// Function to generate fake user data
const newUserData = (): UserData => {
  return {

    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),

  };
};

// Function to generate an array of fake user data
export const generateTestData = (numRecords: number): UserData[] => {
  const testData: UserData[] = faker.helpers.multiple(newUserData, {
    count: numRecords
  });
  return testData;
};

const currentDir = __dirname;
// Go one level above (back to 'src')
const srcDir = path.resolve(currentDir, "..");

// Change to 'data' folder
const testdataDir = path.resolve(srcDir, "data");

// Function to export data to JSON file
export const exportToJson = (data: UserData[], fileName: string) => {
  fs.writeFileSync(`${testdataDir}\\${fileName}`, JSON.stringify(data, null, 2));
  console.log(`Data exported to JSON file: ${testdataDir}\\${fileName}`);
};

// Function to export data to CSV file
// export const exportToCsv = (data: UserData[], fileName: string) => {

//   const csvWriter = createCsvWriter.createObjectCsvWriter({
//     path: `${testdataDir}\\${fileName}`,
//     header: [
//       { id: 'name', title: 'Name' },
//       { id: 'email', title: 'Email' },
//       { id: 'username', title: 'Username' },
//       { id: 'phone', title: 'Phone' },
//       { id: 'age', title: 'Age' },
//       { id: 'address', title: 'Address' },
//     ],
//   });



//   csvWriter.writeRecords(data).then(() => {
//     console.log(`Data exported to CSV file: ${testdataDir}\\${fileName}`);
//   });
// };

// Generate test data
// const testData = generateTestData(3);

// // Export data to JSON file
// exportToJson(testData, 'testData_en.json');

// // Export data to CSV file
// exportToCsv(testData, 'testData_en.csv');
