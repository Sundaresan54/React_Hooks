import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

/***********************************************************************/
// BEGIN - Added below imports for Code Demonstration
//
// import 'bootstrap/dist/css/bootstrap.min.css';
 import './myindex.css';
//
// import App from './01_welcome/App'
// import App from './02_componentReuse/App'
// import App from './03_properties/App'
// import App from './04_events/App'
// import App from './05_state/App'
// import App from './06_ref/App'
// import App from './07_propTypes/App'
// import App from './08_componentLifeCycle/App'
// import App from './08a_componentLifeCycle/App'
// import App from './09_composableComponents/App'
// import App from './09a_composableComponents/App'
// import App from './10_hoc/App'
// import App from './11_renderProps/App'
// import App from './12_formHandling/App'
// import App from './13_reactrouter/App'
// import App from './14_transition/App'
// import App from './15_lazyloading_codesplitting/App'
// import App from './16_css_bootstrap/App'
// import App from './17_flux/App'
// import App from './18_pureComponents_memo/App'
// import App from './19_errorBoundary/App'
// import App from './20_portal/App'
// import App from './21_contextApi/App'
// import App from './22_hooks_useState/App'
// import App from './23_hooks_useEffect/App'
// import App from './23a_hooks_useEffect/App'
// import App from './24_hooks_useContext/App'
// import App from './25_hooks_useRef/App'
// import App from './26_hooks_useReducer/App'
// import App from './27_hooks_useCallback/App'
// import App from './28_hooks_useMemo/App'
 import App from './29_hooks_custom/App'
///
// END
/***********************************************************************/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
