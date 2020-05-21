import React from 'react';
import JsonReader from '../../src/components/JsonReader';

export default {
    component: JsonReader,
    title: 'JsonReader'
};

export const Default = () => {
  const jsonObject = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
    return (
        <JsonReader stepNumber={1} createdAt="2020-05-12T15:17:57.580Z" status="Andamento"  bag={jsonObject} result={jsonObject} />
    );
};