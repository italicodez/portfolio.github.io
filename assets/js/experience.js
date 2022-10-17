AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full Stack Web Developer",
    cardImage: "assets/images/experience-page/upwork.png",
    place: "Upwork",
    time: "(Jun, 2022 - present)",
    desp: "<li>Design, implement and monitor web pages and sites for continuous improvement in fast-paced environment</li><li>Develop website from scratch, utilizing JavaScript and PHP</li><li>Building JavaScript / MERN stack applications and showcasing them</li><li>Plan and construct relational / non-relational database from scratch, utilizing MySQL and MongoDB</li><li>Set-up and integrate website and database along with domain name server using Amazon Web Services</li><li>My role also included client prospection, defining the client’s needs, preparing the work scope as well as client follow-up</li>",
  },
  {
    title: "Senior Software Engineer",
    cardImage: "assets/images/experience-page/appspring.png",
    place: "AppSpring",
    time: "(Sep, 2021 - Apr, 2022)",
    desp: "<li>Led and managed a team of 12 developers and designers to create efficient, effective and visually asethetic websites for 60,000+ clients</li><li>Oversaw concept mock-up and wireframe design to further client satisfaction by 35%</li><li>Developed customer-specific design framework, reducing site production time by 4 days</li><li>Collaborated with VP of sales to create digital marketing designs that led to an average 20,000+ additional clients per month</li><li>Led bi-weekly standup to celebrate team successes, address weaknesses and assign tasks</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/appspring.png",
    place: "AppSpring",
    time: "(May, 2020 - Jun, 2021)",
    desp: "<li>Work as part of a creative and technically excellent team</li><li>Great career development opportunities</li><li>Experience developing well-organized, maintainable, object-oriented, unit-tested code in PHP and JavaScript</li><li>Experience developing highly scalable and composable RESTful APIs (JSON, API design, HATEOAS, Swagger, Hypermedia, JSON-LD, HAL)</li><li>Experience with MySQL (relational concepts, SQL, connection pooling. ER diagrams)</li><li>Working experience with JIRA and Bitbucket (as well as the Git code repository, including code-reviewing tools)</li>",
  },
  {
    title: "Programming Intern",
    cardImage: "assets/images/experience-page/appspring.png",
    place: "AppSpring",
    time: "(Mar, 2019 - Nov, 2019)",
    desp: "<li>Translated designs and wireframes into high-quality code using HTML, CSS, and JavaScript</li><li>Worked closely with developers, designers and other cross-functional teams to drive innovation and maximize conversions by 40%</li><li>Provided input to leaders 3 times a year about the future development of new features.</li><li>Ensured the technical feasibility of UI/UX designs.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Letto Summer Of Code 2020",
    cardImage: "assets/images/experience-page/letto.png",
    description:
      "Responsible for handling the projects Letto App and Letto Website Boilerplate.",
  },
  {
    title: "Codelia Project",
    cardImage: "assets/images/experience-page/codelia.jpg",
    description:
      "Responsible for handling Codelia design studio project development.",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
