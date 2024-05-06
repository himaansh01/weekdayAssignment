import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function FilterBar() {
  const [role, setRole] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [experience, setExperience] = useState('');
  const [minimumPackage, setMinimumPackage] = useState('');
  const [techStack, setTechStack] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleNumEmployeesChange = (event) => {
    setNumEmployees(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleMinimumPackageChange = (event) => {
    setMinimumPackage(event.target.value);
  };

  const handleTechStackChange = (event) => {
    setTechStack(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          id="role-select"
          value={role}
          label="Role"
          onChange={handleRoleChange}
        >
          <MenuItem value={'Full Stack Developer'}>Full Stack Developer</MenuItem>
          <MenuItem value={'Frontend Developer'}>Frontend Developer</MenuItem>
          <MenuItem value={'Backend Developer'}>Backend Developer</MenuItem>
          <MenuItem value={'DevOps Engineer'}>DevOps Engineer</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="num-employees-label">Number of Employees</InputLabel>
        <Select
          labelId="num-employees-label"
          id="num-employees-select"
          value={numEmployees}
          label="Number of Employees"
          onChange={handleNumEmployeesChange}
        >
          <MenuItem value={'1-10'}>1-10</MenuItem>
          <MenuItem value={'11-50'}>11-50</MenuItem>
          <MenuItem value={'51-100'}>51-100</MenuItem>
          <MenuItem value={'101+'}>101+</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="experience-label">Experience</InputLabel>
        <Select
          labelId="experience-label"
          id="experience-select"
          value={experience}
          label="Experience"
          onChange={handleExperienceChange}
        >
          <MenuItem value={'Less than 1 year'}>Less than 1 year</MenuItem>
          <MenuItem value={'1-3 years'}>1-3 years</MenuItem>
          <MenuItem value={'3-5 years'}>3-5 years</MenuItem>
          <MenuItem value={'5+ years'}>5+ years</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="minimum-package-label">Minimum Package</InputLabel>
        <Select
          labelId="minimum-package-label"
          id="minimum-package-select"
          value={minimumPackage}
          label="Minimum Package"
          onChange={handleMinimumPackageChange}
        >
          <MenuItem value={'Less than $50k'}>Less than $50k</MenuItem>
          <MenuItem value={'$50k-$100k'}>$50k-$100k</MenuItem>
          <MenuItem value={'$100k-$150k'}>$100k-$150k</MenuItem>
          <MenuItem value={'$150k+'}>$150k+</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="tech-stack-label">Tech Stack</InputLabel>
        <Select
          labelId="tech-stack-label"
          id="tech-stack-select"
          value={techStack}
          label="Tech Stack"
          onChange={handleTechStackChange}
        >
          <MenuItem value={'React, Node.js, MongoDB'}>React, Node.js, MongoDB</MenuItem>
          <MenuItem value={'Angular, ASP.NET, SQL Server'}>Angular, ASP.NET, SQL Server</MenuItem>
          <MenuItem value={'Vue.js, Django, PostgreSQL'}>Vue.js, Django, PostgreSQL</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
