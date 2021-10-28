const positions = [
  {
    company: 'Facebook',
    position: 'Software Engineer',
    link: 'https://facebook.com',
    daterange: 'November 2021 - Present',
    points: [],
  },
  {
    company: 'Goldman Sachs',
    position: 'Software Engineer VP',
    link: 'https://goldmansachs.com',
    daterange: 'Descember 2017 - September 2021',
    points: [
      'Improving the performance of the investment portfolio management digital solution powering Marcus Invest. Deployed an elasticsearch cluster to store data about the performance of the system. Enhanced a set of stress tests to capture more metrics and store them in Elasticsearch. Improved the slow parts of the system by adding caching and parallelism. Overall, reduced the time of rebalancing the portfolios by 50%. Allowed the system to scale from 5000 to 15000 accounts without performance degradation',
      'Initial Public Offering (IPO) trading application. Enhanced an internal testing framework to support end to end tests of the trading workflow which increased the quality of the software, no significant production issues detected to date. Introduced Elasticsearch, Logstash and Kibana to manage logs and alerts. Made detecting and debugging problems easier.',
      'Currently working on new technologies to support businesses within the Investment Management Division. Migrating existing apps from legacy infrastructure to Kubernetes. Working on improvements on the core data model and data access libraries. Mentoring junior members of the team.',
    ],
  },
  {
    company: 'Rosslyn Data Technologies',
    position: 'Software Engineer',
    link: 'https://www.rosslyndatatech.com/',
    daterange: 'January 2015 - December 2018',
    points: [
      'Migrated the ETL process from an on premise solution to a cloud based one using Azure Data Factory. Data extraction and validation tool. All together, the solution dramatically reduced the time and complexity of loading data into the data warehouse. The cloud base approach allowed easier scalability. As loading data became easier, the new contracts involved bigger and more frequent loads, which translated into an increase in revenue.',
      'Developed the first stage of a new ETL process using Hadoop and Spark',
      'ASP MVC application to search and classify big volumes of data (over 200M rows), https://rapid.rosslynanalytics. Reduced the search time from minutes to second by using Elasticsearch. Improved user experience by implementing a visual feedback feature for the time consuming classification operations.',
    ],
  },
  {
    company: 'CUJAE',
    position: 'Teaching Assistant',
    link: 'https://cujae.edu.cu/',
    daterange: 'September 2013 - January 2015',
    points: [
    ],
  },
  {
    company: 'Talent Map',
    position: 'Software Engineer',
    link: 'https://talentmap.com/',
    daterange: '2012',
    points: [
    ],
  },
];

export default positions;
