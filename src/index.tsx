import "./config"; 
import './css/index.scss'
import "./css/main.scss";
import displayMap from './components/map'
displayMap()



// HMR
if (module.hot) {
    module.hot.accept()
}