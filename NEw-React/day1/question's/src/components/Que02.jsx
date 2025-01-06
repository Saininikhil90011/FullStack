import React from 'react'

function Que02() {

    //
    
let obj = {"web-app": 
    {"servlet": [   
          {
            "servlet-class": "org.cofax.cds.CDSServlet",
            "init-param": {
              "dataStoreLogLevel": "debug",
              "maxUrlLength": 500}
           },
          {
            "servlet-name": "cofaxEmail",
            "init-param": {
            "mailHost": "mail1",
            "mailHostOverride": "mail2"}
           },
        ],
      "servlet-mapping": {
          "cofaxCDS": ["gmail"],
      },
      "taglib": {
          "taglib-uri": "cofax.tld",
          "taglib-location": "/WEB-INF/tlds/cofax.tld"}
   }
}
    //
  return (
    <div>
        <p>{obj["web-app"]['servlet'][0]['servlet-class']}</p>
        <p>{obj["web-app"]['servlet'][0]['init-param']['dataStoreLogLevel']}</p>
        <p>{obj["web-app"]['servlet'][0]['init-param']['maxUrlLength']}</p>
        <p>{obj["web-app"]['servlet'][1]['servlet-name']}</p>
        <p>{obj["web-app"]['servlet'][1]['init-param']['mailHost']}</p>
        <p>{obj["web-app"]['servlet'][1]['init-param']['mailHostOverride']}</p>
        <p>{obj["web-app"]['servlet-mapping']['cofaxCDS'][0]}</p>
        <p>{obj["web-app"]['taglib']['taglib-uri']}</p>
        <p>{obj["web-app"]['taglib']['taglib-location']}</p>
       
    </div>
  )
}

export default Que02