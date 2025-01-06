import React from 'react'

function Que04() {
    //
    let obj = {"menu": {
    "header": "SVG Viewer",
    "items": [
        {"id": "Open"},
        {"id": "OpenNew", "label": "Open New"},
        null,
        {"id": "ZoomIn", "label": "Zoom In"},
        {"id": "ZoomOut", "label": "Zoom Out"},
        {"id": "OriginalView", "label": "Original View"},
        null,
        {"id": "Quality"},
        {"id": "Pause"},
        {"id": "Mute"},
        null,
        {"id": "Find", "label": "Find..."},
        {"id": "FindAgain", "label": "Find Again"},
        {"id": "Copy"},
        {"id": "CopyAgain", "label": "Copy Again"},
        {"id": "CopySVG", "label": "Copy SVG"},
        {"id": "ViewSVG", "label": "View SVG"},
        {"id": "ViewSource", "label": "View Source"},
        {"id": "SaveAs", "label": "Save As"},
        null,
        {"id": "Help"},
        {"id": "About", "label": "About Adobe CVG Viewer..."}

    ]
}}
    //
  return (
    <>
    <p>{obj['menu']['header']}</p>
    <p>{obj['menu']['items'][0]['id']}</p>
    <p>{obj['menu']['items'][1]['id']}</p>
    <p>{obj['menu']['items'][1]['label']}</p>
    <p>{obj['menu']['items'][3]['id']}</p>
    <p>{obj['menu']['items'][3]['label']}</p>
    <p>{obj['menu']['items'][4]['id']}</p>
    <p>{obj['menu']['items'][4]['label']}</p>
    <p>{obj['menu']['items'][5]['id']}</p>
    <p>{obj['menu']['items'][5]['label']}</p>
    <p>{obj['menu']['items'][7]['id']}</p>
    <p>{obj['menu']['items'][7]['label']}</p>
    <p>{obj['menu']['items'][8]['id']}</p>
    <p>{obj['menu']['items'][8]['label']}</p>
    <p>{obj['menu']['items'][9]['id']}</p>
    <p>{obj['menu']['items'][9]['label']}</p>
    <p>{obj['menu']['items'][11]['id']}</p>
    <p>{obj['menu']['items'][11]['label']}</p>
    <p>{obj['menu']['items'][12]['id']}</p>
    <p>{obj['menu']['items'][12]['label']}</p>
    <p>{obj['menu']['items'][13]['id']}</p>
    <p>{obj['menu']['items'][13]['label']}</p>
    <p>{obj['menu']['items'][14]['id']}</p>
    <p>{obj['menu']['items'][14]['label']}</p>
    <p>{obj['menu']['items'][15]['id']}</p>
    <p>{obj['menu']['items'][15]['label']}</p>
    <p>{obj['menu']['items'][16]['id']}</p>
    <p>{obj['menu']['items'][16]['label']}</p>
    <p>{obj['menu']['items'][17]['id']}</p>
    <p>{obj['menu']['items'][17]['label']}</p>
    <p>{obj['menu']['items'][18]['id']}</p>
    <p>{obj['menu']['items'][18]['label']}</p>
    <p>{obj['menu']['items'][20]['id']}</p>
    <p>{obj['menu']['items'][21]['id']}</p>
    <p>{obj['menu']['items'][21]['label']}</p>

    

    </>
  )
}

export default Que04