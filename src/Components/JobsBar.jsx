export function JobsBar() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a href="#applied" style={{ marginRight: '10px' }}>Applied Jobs</a>
            <a href="#search" style={{ marginRight: '10px' }}>Search Jobs</a>
            <a href="#suggested">Suggested Jobs</a>
          </div>
        </div>
      </div>
    );
  }
  