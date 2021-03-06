const { XmlConverter } = require('./xml-converter/xml-converter');

export const buildXmlDiagram = async (blueprintSpec, workflowName, format = false) => {
  const json2xml = new XmlConverter();
  json2xml.buildGraph(blueprintSpec, workflowName);
  return json2xml.to_xml(format);
};

// module.exports = { buildXmlDiagram };
