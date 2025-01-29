import * as fs from 'fs';
import * as yaml from 'js-yaml';

export class YamlReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    // Method to read and parse the YAML file
    public read(): any {
        try {
            // Read the YAML file as a string
            const fileContents = fs.readFileSync(this.filePath, 'utf8');

            // Parse the YAML string into a JavaScript object
            return yaml.load(fileContents);
        } catch (error) {
            console.error('Error reading or parsing YAML file:', error);
            throw new Error('Failed to read or parse the YAML file.');
        }
    }

    // Method to read YAML file asynchronously
    public async readAsync(): Promise<any> {
        try {
            // Read the YAML file asynchronously
            const fileContents = await fs.promises.readFile(this.filePath, 'utf8');

            // Parse the YAML string into a JavaScript object
            return yaml.load(fileContents);
        } catch (error) {
            console.error('Error reading or parsing YAML file:', error);
            throw new Error('Failed to read or parse the YAML file.');
        }
    }
}
