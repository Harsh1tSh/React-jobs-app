import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';
import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element = {<HomePage/>}/>
      <Route path = '/jobs' element = {<JobsPage/>}/>
      <Route path = '/jobs/:id' element = {<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path = '/add-job' element = {<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}
        />
      <Route path = '*' element = {<NotFoundPage/>}/>
    </Route>
  )
    
  );

  return <RouterProvider router={router}/>
};

export default App;

    // <>
    // <Navbar />
    // <Hero />
    // <HomeCards />
    // <JobListings />
    // <ViewAllJobs />
    // </>











// import React from 'react'



// // in case of jsx it is one line exprexssions
// const App = () => {
//   const name = 'John';
//   const x = 10;
//   const y = 20;
//   const names = ['Brad','Mary','Joe','Sara'];
//   const loggedIn = true;
//   const styles = {
//     color: 'red',
//     fontSize: '50px'
//   }

//   // if (loggedIn){
//   //   return <h1>Hello Member</h1>
//   // }
//   return (
//     <div>
//       <div className='text-5xl'>App</div>
//       <p style={styles}>Hello {name}</p>
//       <p>The sum o f {x} and {y} is : {x + y}</p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//       {loggedIn && <h1>Hello Member</h1>}

//     </div>
//   );
// };
// //{loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
// // this is a terninary operation
// export default App;
