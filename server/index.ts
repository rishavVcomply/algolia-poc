import { parseOfficeAsync } from "officeparser";
import algoliasearch from "algoliasearch";
import path from "path";
import { config } from "dotenv";

config();
const { CLIENT_ID, API_KEY } = process.env;

async function test() {
  try {
    const client = algoliasearch(String(CLIENT_ID), String(API_KEY));
    const index = client.initIndex("files");
    if (process.argv.length < 3) {
      console.log("File path not provided!");
      return;
    }
    const filePath = process.argv[2];
    const resolvedPath = path.resolve(filePath);
    const filename = path.basename(filePath);
    // "data" string returned from promise here is the text parsed from the office file passed in the argument
    const data = await parseOfficeAsync(resolvedPath);
    // console.log("Text Content: ");
    // console.log(data);
    const settings = {
      searchableAttributes: ["name", "content"],
      // customRanking: [
      //   'desc(popularity)',
      //   'asc(price)'
      // ],
      attributesToRetrieve: ["name", "content"],
      attributesToHighlight: ["name", "content"],
    };
    await index.setSettings(settings);
    const record = {
      name: filename,
      content: data,
    };
    await index.saveObject(record, { autoGenerateObjectIDIfNotExist: true });
    console.log("Successfully pushed to algolia");
  } catch (err) {
    // resolve error
    console.log(err);
  }
}

test();
