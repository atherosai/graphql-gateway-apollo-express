import { printSchema } from "graphql/utilities"
import fs from "fs";
import path from "path";
import schema from "../schema";

fs.writeFile(path.join(__dirname,"/../schema/sdl-schema.graphql"), printSchema(schema), (err) => {

    if (err) {
        return console.log(err);
    }

    console.log("The schema was saved!");
}); 


