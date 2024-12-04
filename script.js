document.addEventListener("DOMContentLoaded", () => {
  const profiles = [
    {
      name: "John Doe",
      role: "Software Engineer",
      img: "am.jpg",
      resume: "resume1.html",
      biodata: "biodata1.html",
    },
    {
      name: "Jane Smith",
      role: "Data Scientist",
      img: "woman.jpg",
      resume: "resume2.html",
      biodata: "biodata2.html",
    },
  ];

  const grid = document.getElementById("profile-grid");
  const loading = document.getElementById("loading");

  // Simulate API call
  setTimeout(() => {
    loading.style.display = "none";
    profiles.forEach((profile) => {
      const card = `
        <div class="card">
          <img src="${profile.img}" alt="${profile.name}">
          <h3>${profile.name}</h3>
          <p>${profile.role}</p>
          <div class="card-buttons">
            <a href="${profile.resume}" class="btn">View Resume</a>
            <a href="${profile.biodata}" class="btn">View Biodata</a>
          </div>
        </div>
      `;
      grid.innerHTML += card;
    });
  }, 1000);

  // Dark Mode Toggle
  const toggleTheme = document.getElementById("theme-toggle");
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
