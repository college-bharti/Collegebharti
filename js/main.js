$("#UniversityTopCousrses").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dot: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      margin: 10,
    },
    320: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// the news of collge vidya
$("#CvNews").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 10,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
      margin: 0,
    },
    540: {
      items: 2,
    },
    750: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// the News data of collge vidya
$(".NewsDataAll").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 5000,
  autoplaySpeed: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    540: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1300: {
      items: 6,
    },
  },
});

// the Specializations Degree of collge vidya
$("#SpecializationsDegree").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 10,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
      margin: 0,
    },
    540: {
      items: 2,
    },
    750: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

// videoTestimonial

$(document).ready(function () {
  var items = [
    {
      id: "1",
      imageSrc: "images/thumb.webp",
      views: "4.3K",
      videoUrl: "https://www.youtube.com/embed/ZiDf0B-y-zU",
      title: "Did you receive any counseling sessions from College Vidya",
    },
    {
      id: "2",
      imageSrc: "images/mahakthumb.webp",
      views: "19.4K",
      videoUrl: "https://www.youtube.com/embed/GeEmqx0XEdk",
      title: "Power of Career Counseling",
    },
    {
      id: "3",
      imageSrc: "images/chain-reaction_.webp",
      views: "9.7K",
      videoUrl: "https://www.youtube.com/embed/550RyUxku0c",
      title: "Chain Reaction",
    },
    {
      id: "4",
      imageSrc: "images/Snehasingh.webp",
      views: "6K",
      videoUrl: "https://www.youtube.com/embed/-YckHbNSNZ4",
      title:
        "Sneha Sailed Smoothly Through Hassles of Online Admissions with College Vidya",
    },
    {
      id: "5",
      imageSrc: "images/what-was-the-idea-behind-college-vidya_.webp",
      views: "7.2K",
      videoUrl: "https://www.youtube.com/embed/ky8enTTJfcA",
      title: "Founder's Message",
    },
    {
      id: "6",
      imageSrc:
        "images/He_built_Strong_Industry_Connections_in_Online_Masters_Course.webp",
      views: "1K",
      videoUrl: "https://www.youtube.com/embed/TbSm8PtU4sI",
      title:
        "He built Strong Industry Connections in an Online Master’s Course!",
    },
    {
      id: "7",
      imageSrc: "images/college-vidya-stands-different-how_cv_founder_.webp",
      views: "4.9K",
      videoUrl: "https://www.youtube.com/embed/-66eXcBHt60",
      title: "College Vidya Stands Different How?",
    },
    {
      id: "8",
      imageSrc:
        "images/See_How_a_Guards_Son_Turned_his_Life_Around_with_An_Online_Degree.webp",
      views: "8.2K",
      videoUrl: "https://www.youtube.com/embed/Nv8mZx-IZ9A",
      title:
        "See How a Guard’s Son Turned his Life Around with An Online Degree!",
    },
    {
      id: "9",
      imageSrc: "images/mothers_day_thumbnail_for_home.webp",
      views: "3.9K",
      videoUrl: "https://www.youtube.com/embed/IXn3JBjiGkE",
      title: "Bold Women making History with College Vidya",
    },
    {
      id: "10",
      imageSrc:
        "images/Upskilled_with_an_Online_Masters_Program_Without_Quitting_her_Job.webp",
      views: "1.2K",
      videoUrl: "https://www.youtube.com/embed/KYhVZFDrfmY",
      title:
        "Upskilled with an Online Master’s Program Without Quitting her Job!",
    },
    // Add more items here as needed
  ];

  var carousel = $(".videoCarousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      1024: {
        items: 5,
      },
    },
  });

  items.forEach(function (item) {
    var $item = $('<div class="item">');
    var $videoImg = $('<div class="videoimg mx-2">');
    var $img = $("<img>").attr("src", item.imageSrc);
    var $views = $(
      '<div class="d-inline-flex gap-1 start-50 align-items-center justify-content-center position-absolute top-0 end-0 bg-white fs-12 px-2 mt-2 translate-middle-x" style="border-radius:25px;z-index:11;width:max-content;font-size:12px;"><img alt="views" src="images/eye-fill.svg" alt="eyes"> ' +
        item.views +
        "</div>"
    );
    var $playButton = $(
      '<span class="PlayButton_playbutton__eYrNa" data-bs-toggle="modal" data-bs-target="#TrustedVideoModal" data-video="' +
        item.videoUrl +
        '" data-title="' +
        item.title +
        '"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg></span>'
    );

    $videoImg.append($img);
    $videoImg.append($views);
    $videoImg.append($playButton);
    $item.append($videoImg);
    $(".videoCarousel").owlCarousel("add", $item).owlCarousel("update");
  });

  $(".PlayButton_playbutton__eYrNa").on("click", function () {
    var videoUrl = $(this).data("video");
    var title = $(this).data("title");
    $("#TrustedVideoModal .modal-title").text(title);
    $("#TrustedVideoModal .youtube-video-container").html(
      '<iframe width="100%" height="415" src="' +
        videoUrl +
        '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
  });
	
// Modal close hone par video stop karne ka code
$('#TrustedVideoModal').on('hidden.bs.modal', function () {
    $('#TrustedVideoModal .youtube-video-container').html('');
});	
		
	
});

// Data for courses and their specializations
// Map course values (IDs) to their respective keys in courseData
const courseMap = {
  1: "MBA",
  2: "MCA",
  3: "MCom",
  4: "MA",
  5: "BBA",
  6: "BCom",
  7: "BA",
  8: "BCA",
  // Add more mappings as needed
};

// Data for courses and their specializations
const courseData = {
  MBA: [
    { text: "Not Decided Yet", value: "" },
    { text: "General MBA", value: "5" },
    { text: "MBA in Finance", value: "3" },
    { text: "MBA in HR", value: "2" },
    { text: "MBA in Marketing", value: "4" },
    { text: "MBA in Digital Marketing", value: "271" },
    { text: "MBA in Business Analytics", value: "43" },
    { text: "MBA in Logistics & Supply Chain", value: "12" },
    { text: "MBA in Hospital & Healthcare", value: "261" },
    { text: "MBA In Data Science", value: "269" },
    { text: "MBA In Health Care Management", value: "117" },
    { text: "MBA In Pharmaceutical Management", value: "403" },
    { text: "MBA In Fashion Management", value: "593" },
  ],
  MCA: [
    { text: "Not Decided Yet", value: "" },
    { text: "General MCA", value: "249" },
    { text: "MCA in Cyber Security", value: "109" },
    { text: "MCA in Full Stack Development", value: "29" },
    { text: "MCA in Machine Learning", value: "159" },
    { text: "MCA in Computer Science & IT", value: "27" },
    { text: "MCA in Cloud Computing", value: "30" },
    { text: "MCA in Blockchain", value: "160" },
    { text: "MCA in Artificial Intelligence", value: "32" },
    { text: "MCA in Data Science", value: "31" },
    { text: "MCA in Data Analytics", value: "28" },
  ],
  MCom: [{ text: "General M.COM", value: "254" }],
  MA: [
    { text: "Not Decided Yet", value: "" },
    { text: "General MA", value: "253" },
    { text: "MA In Economics", value: "36" },
    { text: "MA In Psychology", value: "39" },
    { text: "MA In Journalism and Mass Communication", value: "37" },
    { text: "MA In Public Policy & Governance", value: "106" },
    { text: "MA in Social Science", value: "130" },
    { text: "MA in English", value: "38" },
  ],
  BBA: [
    { text: "Not Decided Yet", value: "" },
    { text: "General BBA", value: "248" },
    { text: "BBA in Finance", value: "53" },
    { text: "BBA in Marketing", value: "54" },
    { text: "BBA in HRM", value: "52" },
    { text: "BBA in Digital Marketing", value: "56" },
    { text: "BBA in Logistics", value: "164" },
    { text: "BBA in Hospital Management", value: "571" },
    { text: "BBA in Data Analytics", value: "597" },
    { text: "BBA in IT & Systems Management", value: "217" },
  ],
  BA: [
    { text: "Not Decided Yet", value: "" },
    { text: "General BA", value: "251" },
    { text: "BA In Journalism and Mass Communication", value: "127" },
    { text: "BA in English", value: "235" },
    { text: "BA In Hindi Medium", value: "151" },
    { text: "BA Honours", value: "302" },
    { text: "BA in Political Science", value: "363" },
    { text: "BA in English", value: "235" },
    { text: "BA in Economics", value: "208" },
    { text: "BA in Psychology", value: "568" },
  ],
  BCom: [{ text: "General M.COM", value: "252" }],
  BCA: [
    { text: "Not Decided Yet", value: "" },
    { text: "General BCA", value: "250" },
    { text: "BCA in Cyber Security", value: "183" },
    { text: "BCA in UI UX Design", value: "553" },
    { text: "BCA in Full Stack Development", value: "643" },
    { text: "BCA In Data Science & Analytics", value: "207" },
    { text: "BCA In Cloud Computing", value: "150" },
    { text: "BCA in Artificial Intelligence", value: "209" },
    { text: "BCA In Data Analytics", value: "157" },
    { text: "BCA in New Age Technology", value: "456" },
  ],
};

// Select elements
const courseSelect = document.getElementById("course");
const specializationDiv = document.getElementById("specializationDiv");
const specializationSelect = document.getElementById("specialization");

// Event listener for course selection
courseSelect.addEventListener("change", () => {
  const selectedCourseId = courseSelect.value; // Get selected course ID
  const selectedCourseKey = courseMap[selectedCourseId]; // Map ID to key

  if (selectedCourseKey && courseData[selectedCourseKey]) {
    // Show the specialization dropdown
    specializationDiv.style.display = "block";

    // Clear existing options
    specializationSelect.innerHTML = `
        <option selected="" disabled="" value="">Select Specialization</option>
      `;

    // Populate specialization dropdown
    courseData[selectedCourseKey].forEach(({ text, value }) => {
      const option = document.createElement("option");
      option.value = value; // Assign custom value
      option.textContent = text; // Display specialization text
      specializationSelect.appendChild(option);
    });
  } else {
    // Hide the specialization dropdown if no course is selected
    specializationDiv.style.display = "none";
  }
});
