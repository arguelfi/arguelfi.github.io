webpackJsonp([0],{"+ptz":function(e,n,a){"use strict";var t=function(){var e=this.$createElement,n=this._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":"","text-justify":""}},[n("v-flex",{attrs:{xs12:"",sm10:"",md8:""}},[n("v-tooltip",{attrs:{top:"","nudge-top":"5"}},[n("v-btn",{attrs:{slot:"activator",fixed:"",dark:"",fab:"",bottom:"",right:"",color:"pink",href:"/CV.pdf",target:"_blank"},slot:"activator"},[n("v-icon",[this._v("save_alt")])],1),n("span",[this._v("Download PDF")])],1),n("div",{domProps:{innerHTML:this._s(this.compiledMarkdown)}})],1)],1)};t._withStripped=!0;var i={render:t,staticRenderFns:[]};n.a=i},"/TYz":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("6wF8"),i=a("+ptz"),o=a("VU/8")(t.a,i.a,!1,null,null,null);o.options.__file="pages/index.vue",n.default=o.exports},"6wF8":function(e,n,a){"use strict";var t=a("EFqf"),i=a.n(t),o=a("ArTX"),r=a.n(o);n.a={head:{title:"CV - Ariel Güelfi"},computed:{compiledMarkdown:function(){return i()(r.a,{sanitize:!0,smartLists:!0})}},mounted:function(){this.$nextTick(function(){this.$el.querySelectorAll("table").forEach(function(e,n){e.classList.add("v-datatable","v-table","table-back","theme--light"),e.removeChild(e.querySelector("thead"))}),this.$el.querySelectorAll("del").forEach(function(e,n){e.classList.add("html2pdf__page-break","hide")})})}}},ArTX:function(e,n){e.exports="# Career Summary\n## *Orange, Warsaw, Poland* **Nov 2018-Present**\n### Tech Lead\nFlex app is a new, digital first operator created from scratch at Orange.\nThe user has full control of their contract, which is not only cancellable on request but allows the user to switch\nplans and packages at any time.\nThe whole project was treated as a sort of StartUp within Orange and it went public only 2 years from its conception.\nI've joined the Payments team which integrates 3rd party payment providers by adding control flows and ensuring\nconsistency and security to monetary transactions.\nThe position includes some DevOps work, 3rd party APIs integration and own logic implementation in Java.\nTechnologies used include SpringBoot, Java 8, PostgresDB, Unit Testing in Spock within an ecosystem that includes\nKubernetes, Vault, Spring Cloud Config, GoCD, E2E tests, Gitlab and GitlabCI; some Ansible Scripting plus python \nand NodeJS tools.\n\n---\n\n## *Scanbots, Warsaw, Poland* **Oct 2017-Aug 2018**\n### Tech Lead\nScanbots’ goal was to make use of long-range drones for the monitoring of linear infrastructures, \nsuch as Electrical Networks, Oil & Gas Pipes, roads, etc.\nBy integrating with state-of-the-art Drone manufacturers, Scanbots developed the software that integrated \nmultiple sensors like Photo, thermal, near-infrared cameras and a LiDAR; GPS & IMUs for accurate spatial localisation.\nSuch data needed to be sanitized, filtered, analyzed and exposed to clients. \nWe developed a platform based in micro-services that would import, correlate, expose and export all data whilst storing\nit in a secure way.\nGIS technologies like PostGIS, GDAL, Leaflet.js, OpenSeaDragon and Potree were put in place to display images \nand point cloud data online.\nThe platform's goal was to become the input to a Semi-supervised learning algorithm that would eventually find\nanomalies in images automatically, thanks to computer vision & machine learning techniques. \n\n---\n\n## *Palo IT, Paris, France* **Jan 2015-Sep 2017**\n### Senior Software Developer\n\n#### Carrefour **Sep 2016 – Sep 2017**\nStock handling application which updates stock quantities from online sales in real-time \nby aggregating data from multiple sources.\nAsync messaging with Kafka.\nDistributed DBs (Cassandra, Couchbase)\nPerformance indexing in ElasticSearch.\nMiddleware Proxying with NodeJS and Nginx.\nWeb Dashboard to follow up metrics in Vue.js\nIntegration Tests written in Python with Paramiko\nJava 8 and Unit Testing with Spock (Groovy)\nDeployment scripting Ansible\nCI with Jenkins\n\n#### Boursorama **Jul 2016 – Aug 2016**\nCreated a Node.js API and a Web application in AngularJS V.1 to track functional and technical metrics issued \nby the underlying Datalake.\nFraud and Marketing dashboards\nElasticSearch & Cassandra data aggregation in Node.js\n\n#### SACEM **Jan 2015 – Jul 2016**\nCore business project for our client and first Agile one for them. \nThe team developed a solution to easily handle errors in payments issued for several reasons. \nThe system integrated manual, semi-automatic and automatic scenarios. \nFrontend in AngularJS V.1, backend in Java with Spring, Hibernate, Guava, Swagger, Lombok, Lucene, Oracle. \nBDD with Cucumber and TDD.\n\n---\n~~-~~\n## *eSpatial, Dublin, Ireland* **Feb 2014 – Aug 2014**\n### Senior JAVA Developer\nPart of a multinational team developing a GIS oriented solution for visualizing clients data. \nBug fixing and new features implementation using jQuery, backbone, underscore.js, handlebars. \nJava 7, Oracle 11g Spatial, Gradle, Git; Agile environment. \nProposed and implemented PoC peer-reviewing with Gerrit.\n\n---\n\n## *Globant, Buenos Aires, Argentina* **May 2011 – Dec 2013**\n### Senior JAVA Developer\n#### Google Finance Datawarehouse **Nov 2011 – Dec 2013**\nETL creation and maintenance for Global internal financial data. \nLarge datasets handling with Flume Java (Google’s implementation) \nGoogle toolset and architecture experience: Map Reduce, Bigtable, Borg, Protocol Buffers, parallel computing job tuning, \nreporting, basic Python, etc. \nFull release schedule follow up, generating new versions and fixes based in continuous integration framework. \nCompleted a personal project for an in-company client which required a ground up ETL style solution. \nPart of an international team lead from the US (Mountain View and Ann Arbor). \nTraveled twice to Google Headquarters in Silicon Valley. \nExposure to Pentaho and Kettle.\n\n#### Cablevision **Jun 2011 - Jul 2011**\nSolo-consultant project to speed up bills processing on client site\nFull profiling and analysis of existing code and configuration\nFixed bottlenecks and tuned up JVM and GC\nProcessing times lowered from ~3 days to ~2 hours\n\n---\n\n## *IBM, Dublin, Ireland (Contract)* **Jul 2010 – Dec 2010**\n### Java Developer\nSpecial project for a world-known Brewery. \nReal-time tracking of production chain anomalies to alert if certain SLAs were not met. \nPart of an English speaking multicultural environment and agile methodology. \nDirect user surveying (by phone, email, chat and in person). \nExperience with Mongo DB, DB2, LambdaJ, Web technologies, Spring, Hibernate, etc.\n\n---\n\n## *Accenture, Buenos Aires, Argentina* **Feb 2007 – Dec 2009**\n### Trainee -> Senior Analyst/Technical Leader \nAfter the merging of 3 of the most important private health companies in Argentina, \nthe projects goal was to unify processes and knowledge bases into one system. \nGiven the size of the project, a team of 20 developers, 10 QA testers, 3 DBAs and several functional people was assembled. \nComplex performance issues solving incluiding refactoring of a critical module, \ngreatly accelerating its processing. \nExperience with Tapestry, Hibernate, Spring, Sybase, web services, JMS, SOA, etc. \nMentoring of new members of the team including systems architecture.\n~~-~~\n# Technical Stack\n|                 |                  |\n|:----------------|:-----------------|\n|Java 8/9         | Spark            |\n|JavaScript       | Docker           |\n|Python           | Ansible          |\n|Go               | VueJS            |\n|Spring           | NodeJS           |\n|Postgres/Postgis | AngularJS        |\n|Kafka (+Streams) | Flask            |\n|RabbitMQ         | DevOps           |\n|Cassandra        | GoCD             |\n|ElasticSearch    | GitlabCI         |\n\n# Languages\n* Native Spanish\n* Fluent English\n* Fluent French\n* Basic Portuguese, Italian and Greek\n\n# Education\n* Systems Engineering\n  Universidad CAECE - Universidad Tecnológica Nacional  \n  March. 2005 – December 2009\n  Buenos Aires, Argentina (Incomplete)\n\n# Certifications\n* Sun Certified Developer For Java Web Services (SCDJWS) **2008**\n* Sun Certified Programmer for Java (SCJP) **2008**\n* Apache Certified Cassandra Architect  (License V2.1-0080) **2016**\n"}});