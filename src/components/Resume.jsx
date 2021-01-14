import React from 'react';

const Resume = () => (
  <div className="resume">
    <h3>Experience</h3>
    <div>
      <span className="company">{'SoFi '}</span>
      <span className="location">San Francisco, CA</span>
      <span className="dates">1/18 - 7/19</span>
    </div>
    <div className="title">Senior Software Engineer</div>
    <p>
      <div className="team">Time To Fund (TTF) Team</div>
      <div className="stack">
        Java (SpringBoot, Play), Kotlin, Scala (Twirl), Javascript (jQuery, ReactJS), MySQL
      </div>
      <ul>
        <li className="project">Sofee / Operator</li>
        <ul>
          <li>
            Team took over ownership and support of SoFi’s internal loan processing software
          </li>
        </ul>
        <li className="project">Inbound Lead Dispositioning</li>
        <ul>
          <li>
            Previously there was no formal system for
            responding to inbound calls about opening applications
          </li>
          <li>
            Total number of these calls per year was order of hundreds of thousands,
            this feature led to thousands of additional applications per year
          </li>
          <li>
            Built workflow, instrumentation infrastructure within the
            Operator application, built out dashboards used by operations
            to understand and track what operators were doing with inbound leads
          </li>
        </ul>
        <li className="project">No Touch loans</li>
        <ul>
          <li>
            100% automated loan origination, eventually comprising more
            than 10% of volume for both personal and student loans
          </li>
          <li>
            A collection of epics building out integrations and infrastructure,
            including multiple third party integrations to verify income,
            employment, education, existing student loan servicers, adding various
            bypass workflows and and robust instrumentation tracking automated decisions,
            human touches, QA/QC selection and numerous other related features
          </li>
        </ul>
        <li className="project">In-School Loan Disbursement</li>
        <ul>
          <li>
            Part of the broader initiative to start offering in-school loans
          </li>
          <li>
            Led team in creation of a dashboard and integration of various
            third party tools foruse by SoFi operators and college loan officers
            to student information (PII, account balances, etc)
          </li>
        </ul>
        <li className="project">Service Based Architecture Refactor</li>
        <ul>
          <li>
            Led the development of effective and reusable processes and patterns for imposing
            good service boundaries on a badly distributed monolith, improve access on controls
            on data and generally improve code quality, consistency and comprehensibility
          </li>
        </ul>
      </ul>
    </p>
    <div>
      <span className="company">Clara Lending </span>
      <span className="location">San Francisco, CA</span>
      <span className="dates">9/16 - 1/18</span>
    </div>
    <div className="title">Software Engineer</div>
    <p>
      <div className="team">Satori Team (Loan Origination Software)</div>
      <div className="stack">
        Scala (Finatra, Finagle), Javascript (ReactJS), Thrift, PostgreSQL
      </div>
      <ul>
        <li className="project">Bonsai</li>
        <ul>
          <li>
            Built a mortgage application processing and workflow management
            tool (Bonsai) from scratch, utilizing extensive integration with
            third-party loan origination platform and SOR LendingQB
          </li>
          <li>
            Primary workflow was based around organizing loan business
            logic into “Blocks” and  “Funding Conditions”, i.e. specific
            things that need to be true for a mortgage to be approved
          </li>
          <li>
            Co-architected the Task system that provided
            the mechanism the system used to schedule work
          </li>
        </ul>
        <li>Acquired by SoFi in January 2018</li>
      </ul>
    </p>
    <div>
      <span className="company">Bizzy Inc </span>
      <span className="location">San Francisco, CA</span>
      <span className="dates">6/16 - 8/16</span>
    </div>
    <div className="title">Software Engineer</div>
    <p>
      <div className="team">Email Marketing Platform</div>
      <div className="stack">
        Python (Flask), Javascript(AngularJS, Material Design), PostgreSQL
      </div>
      <ul>
        <li>
          Worked as part of a four person development team to design and implement code
          that allowed small businesses to integrate with commerce platforms to create and
          manage email marketing campaigns targeting hundreds of thousands of customers.
        </li>
      </ul>
    </p>
    <div>
      <span className="company">Rex Animal Health </span>
      <span className="location">Kansas City, MO</span>
      <span className="dates">3/14 - 4/16</span>
    </div>
    <div className="title">Co-Founder, Software Engineer</div>
    <p>
      <div className="team">Animal Health Data Platform</div>
      <div className="stack">Python (Flask), Javascript(AngularJS, Bootstrap), MongoDB</div>
      <ul>
        <li>
          Architected and implemented data ETL, modeling and visualization
          of a wide variety of data points from numerous sources,
          as well as UI/UX, and both client- and server-side code
        </li>
        <li>
          Incidence and Prevalence module capable of granular visualization of hundreds
          of thousands of disease events worldwide spanning dozens of species and diseases
        </li>
        <li>
          Therapeutic decision support tool processing tens of thousands of clinical results
          for animals and allowing faster and more accurate treatment decisions to be made
        </li>
        <li>
          First of its kind antibacterial resistance tracking tool, granular to farm level,
          with visualization of the advance of antibacterial resistance over time and by pathogen
        </li>
      </ul>
      <div className="team">PheGe</div>
      <div className="stack">Python (Flask), Javascript (AngularJS, Bootstrap)</div>
      <ul>
        <li>
          Architected and implemented suite of bioinformatics and genomics analysis
          tools, including project and data management, initial UI/UX work
        </li>
        <li>
          Tools include phenotype-genotype correlation
          and pathway prediction via statistical methods
        </li>
        <li>
          Metabolic pathway and geospatial phylogeny visualization
        </li>
        <li>
          Manage team of four people (three developers, one designer)
        </li>
      </ul>
      <div className="team">Veterinary Practice Suite</div>
      <div className="stack">Python (Django), Javascript (BackboneJS), PostgreSQL</div>
      <ul>
        <li>
          Search for Veterinary Clinics by price, distance and services offered
        </li>
        <li>
          Easily scheduling for customers and easy management of calendars
        </li>
        <li>
          Comparison of pricing schedules nationally and by region
        </li>
      </ul>
    </p>
    <div>
      <span className="company">Osha Liang LLP </span>
      <span className="location">Houston, TX</span>
      <span className="dates">6/12 - 8/13</span>
    </div>
    <div className="title">Patent Engineer</div>
    <p>
      <ul>
        <li>
          Work with inventors and in-house counsel at various software
          and computer technology companies to draft patent applications
        </li>
        <li>
          Work with the USPTO to advance the prosecution of patent applications
        </li>
        <li>
          Heavy emphasis on technical writing and communication, as well as the ability
          to understand andconcisely explain complex software and technology concepts
        </li>
      </ul>
    </p>

    <h3>Education</h3>
    <div>
      <span className="company">University of Michigan </span>
      <span className="location">Ann Arbor, Michigan</span>
      <span className="dates">9/07 - 12/11</span>
    </div>
    <div className="title">BSE Computer Engineering, 2011</div>

    <h3>Skills</h3>
    <div className="skill">Languages</div>
    <p>
      Java, Kotlin, Scala, Python, JavaScript
    </p>
    <div className="skill">Frameworks / Libraries</div>
    <p>
      SpringBoot, Play, Finatra, Finagle, Flask, Django,
      ReactJS, AngularJS, BackboneJS, jQuery, Thrift
    </p>
    <div className="skill">DevOps / Build Tools</div>
    <p>
      Unix & Linux, Docker, Kubernetes, Kafka, NGINX, Gradle, sbt
    </p>
    <div className="skill">Third Party Services / Instrumentation</div>
    <p>
      AWS, Datadog, Kibana, Rollbar, Git (Github, GitLab, Bitbucket), JIRA
    </p>
    <div className="skill">Databases</div>
    <p>
      MySQL, PostgreSQL, MongoDB
    </p>

    <h3>Contact</h3>
    <div>
      <b>{'Phone: '}</b>
      <span href="tel:517-745-4947">517.745.4947</span>
    </div>
    <div>
      <b>{'Email: '}</b>
      <span href="mailto:haven.moore@gmail.com">haven.moore@gmail.com</span>
    </div>
    <div>
      <b>{'LinkedIn: '}</b>
      <span href="https://www.linkedin.com/in/havenmoore/">havenmoore</span>
    </div>
    <div>
      <b>{'Github: '}</b>
      <span href="https://github.com/havenmoore">havenmoore</span>
    </div>
    <br />
    <br />
    <br />
  </div>
);

export default Resume;
