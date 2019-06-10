import * as Map from 'esri/Map'
import * as MapView from 'esri/views/MapView'

import * as SceneView from 'esri/views/SceneView'

export default function displayMap() {
    const mapContainer : any = document.getElementById('root')
    const mapObj = new Map({
        basemap: 'streets'
    })

    // new MapView({
    //     container: mapContainer,
    //     map: map,
    //     zoom: 4,
    //     center: [15, 65]
    // })
    new SceneView({
        container: mapContainer,
        map: mapObj,
    })
}