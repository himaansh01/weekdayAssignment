import React from 'react';

export function ActualJobs({logo,where, time, jobRole, companyName, location, salary, aboutCompany, experience }) {
    return (

    <div>
        <div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root card-body css-9zecu3" style={{ marginRight: '20px', padding: '20px' }}>
                <p className="funding-info funding-info-dummy">{time}</p>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="logo" style={{ marginRight: '20px' }} />
                    <div>
                        <div>
                            <h3>{companyName}</h3>
                            <h2>{jobRole}</h2>
                        </div>
                        <p>{location}</p>
                    </div>
                </div>
                <p className="MuiTypography-root MuiTypography-body2 card-salary css-361mbm">Estimated Salary: {salary} ⚠️</p>
                <div>
                    <p className="MuiTypography-root MuiTypography-body1 css-1hw7dw8">About Company:</p>
                    <div className="MuiBox-root css-1m7bgf1">{aboutCompany}</div>
                </div>
                <div>
                    <a href={where} className="MuiTypography-root MuiTypography-body1 css-pg2j">Show More</a>
                </div>
                <div className="info-container poc-info-container">
                    <h3 style={{ marginTop: '10px' }}>Minimum Experience</h3>
                    <h2>{experience} years</h2>
                </div>
                <div className="status-container MuiBox-root css-0">
                    <div className="MuiBox-root css-q40y17">
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1dyt7kc" style={{ width: '100%', backgroundColor: 'rgb(85, 239, 196)', color: 'rgb(0, 0, 0)', fontWeight: '500', padding: '8px 18px' }}>⚡ Easy Apply</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div></div>
    </div>
    );
}
