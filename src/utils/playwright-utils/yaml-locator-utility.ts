import { YamlReader } from '@utils/file-utils/yaml-reader';

export class YamlLocatorUtility {
  elements: any;

  constructor(yamlFilePath: string) {
    this.elements = this.#loadYamlFile(yamlFilePath);
  }

  #loadYamlFile(yamlFilePath: string) {
    const yamlReader: YamlReader = new YamlReader(yamlFilePath);
    return yamlReader.read() as Record<string, any>;
  }

  getElements(elementName: string): any {
    return this.elements[elementName];
  }
}
