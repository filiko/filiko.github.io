

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <aside className="sidebar">
//           <ul>
//             <li><Link to="/bio"><i className="material-icons">assignment_ind</i><span className="nav-text"> About Me</span></Link></li>
//             <li><Link to="/experience"><i className="material-icons">biotech</i><span className="nav-text"> Professional Experience</span></Link></li>
//             {/* ... other links ... */}
//           </ul>
//         </aside>

//         <div id="main-content">
//           <Switch>
//             <Route path="/bio" component={Bio} />
//             <Route path="/experience" component={Experience} />
//             {/* ... other routes ... */}
//             <Route path="*" component={NotFound} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function Bio() {
//   return <div><h1>About Me</h1><p>This is the bio section...</p></div>;
// }

// function Experience() {
//   return <div><h1>Professional Experience</h1><p>This is the experience section...</p></div>;
// }

// function NotFound() {
//   return <div><h1>404</h1><p>Page not found!</p></div>;
// }

// export default App;