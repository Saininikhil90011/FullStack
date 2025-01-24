import React from 'react'

function Que03() {
    let obj = {
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
    <div>
        <p>{obj['glossary']['title']}</p>
        <p>{obj['glossary']['GlossDiv']['title']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['ID']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['SortAs']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['GlossTerm']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['Acronym']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['Abbrev']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['GlossDef']['para']}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['GlossDef']['GlossSeeAlso'][0]}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['GlossDef']['GlossSeeAlso'][1]}</p>
        <p>{obj['glossary']['GlossDiv']['GlossList']['GlossEntry']['GlossSee']}</p>
    </div>
  )
}

export default Que03