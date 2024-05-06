import React, { useState, useEffect } from 'react';
import { Namebar } from './Components/NameBar';
import { JobsBar } from './Components/JobsBar';
import { ActualJobs } from './Components/ActualJobs';
import {FilterBar} from "./Components/FilterBar"

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": 10,
          "offset": 0
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();
        console.log("Fetched data:", data); // Log the data received from the API
        if (Array.isArray(data.jdList)) {
          setJobs(data.jdList); // Update jobs state with the fetched job list
        } else {
          console.error("Fetched data does not contain a valid job list:", data);
        }
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs(); // Call fetchJobs when component mounts
  }, []); // Empty dependency array to run only once when component mounts

  // Function to chunk the jobs array into groups of three
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Divide the jobs array into groups of three
  const jobChunks = chunkArray(jobs, 3);

  return (
    <div>
      <div>
        <Namebar name={"himaansh"} />
        <JobsBar />
        <br></br>
        <FilterBar/>

        {/* Render each group of three jobs in its own row */}
        {jobChunks.map((chunk, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            {
            chunk.map((job, idx) => (
              <ActualJobs
                key={idx}
                time={job.time}
                jobRole={job.jobRole}
                companyName={job.companyName}
                location={job.location}
                salary={job.minJdSalary}
                aboutCompany={job.jobDetailsFromCompany}
                experience={job.minExp}
                where={job.jdLink}
                logo={job.logoUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
