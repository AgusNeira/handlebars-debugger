import { createServer } from "http";
import { readFile } from "node:fs/promises";
import Handlebars from "hbs";
const PORT = 8888;
import config from "./config.js";

async function bootstrap() {
    for (const [partialName, partialPath] of Object.entries(config.partials)) {
        console.log(`Using partial ${partialName} from ${partialPath}`);
        const partial = await readFile(partialPath, "utf8");
        Handlebars.registerPartial(partialName, partial);
    }
    for (const [helperName, helper] of Object.entries(config.helpers)) {
        console.log(`Using helper ${helperName}`);
        Handlebars.registerHelper(helperName, helper);
    }

    console.log(`Using template: ${config.template}`);
    const template = await readFile(config.template, "utf8");
    const html = Handlebars.compile(template);

    const server = createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html(config.context));
        res.end();
    });
    
    server.listen(PORT);
    console.log(`Server listening on ${PORT}`)
}

bootstrap();