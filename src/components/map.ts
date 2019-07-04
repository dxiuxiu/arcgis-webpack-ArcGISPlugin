import * as Map from 'esri/Map'
import * as SceneView from 'esri/views/SceneView'

export default function displayMap() {
    const mapContainer : any = document.getElementById('root')
    const mapObj = new Map({
        basemap: 'streets'
    })

    new SceneView({
        container: mapContainer,
        map: mapObj,
    })
}