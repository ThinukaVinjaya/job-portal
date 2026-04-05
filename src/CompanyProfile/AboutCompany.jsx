import React from 'react';
import { companyData } from '../Data/Company';

const AboutCompany = () => {
  const company = companyData;

  return (
    <div className='flex flex-col gap-5'>
      {Object.keys(company).map((key, index) => {
        if (key === "Name") return null;

        return (
          <div key={index}>
            <div className="text-xl mb-3 font-semibold">{key}</div>

            {key === "Website" ? (
              <a
                href={company[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bright-sun-400 text-justify"
              >
                {company[key]}
              </a>
            ) : (
              <div className="text-sm text-mine-shaft-300 text-justify">
                {key === "Specialties"
                  ? company[key].map((item, i) => (
                      <div key={i}>&bull; {item}</div>
                    ))
                  : company[key]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutCompany;