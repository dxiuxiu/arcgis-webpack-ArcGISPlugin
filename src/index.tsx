// import "./config"; //  Failed to execute 'importScripts' on 'WorkerGlobalScope'
import './css/index.scss'
// import "./css/main.scss";
// import displayMap from './components/map'
// displayMap()



import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Test from './components/test/index'
ReactDOM.render(
		<Test />,
	document.getElementById('root') as HTMLElement
)

// HMR
if (module.hot) {
    module.hot.accept()
}