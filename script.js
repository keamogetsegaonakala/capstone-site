const projectsGrid = document.querySelector("#projects-grid");
if (projectsGrid) {
  const projects = [
    {
      title: "Sunrise Park Donation Hub",
      summary: "Community donation web portal built for local neighborhood support.",
      stack: "HTML, CSS, JavaScript"
    },
    {
      title: "SKIRO BANK System",
      summary: "Desktop banking application built with Python and Tkinter backed by SQLite and unit tests.",
      stack: "Python, Tkinter, SQLite"
    },
    {
      title: "WhatsApp AI Dashboard",
      summary: "Real-time messaging and AI dashboard powered by Express and Socket.IO.",
      stack: "Node.js, Express, Socket.IO"
    },
    {
      title: "Oracle Database Audit & Reporting",
      summary: "Database schemas, PL/SQL stored procedures, audit triggers, and CSV reporting exports.",
      stack: "Oracle 21c, SQL, PL/SQL"
    }
  ];

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h2");
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.textContent = project.summary;

    const stack = document.createElement("span");
    stack.className = "project-stack";
    stack.textContent = project.stack;

    card.append(title, summary, stack);
    projectsGrid.appendChild(card);
  });
}

const form = document.querySelector("#contactForm");
if (form) {
  const statusMessage = document.createElement("p");
  statusMessage.id = "formStatus";
  statusMessage.setAttribute("role", "status");
  statusMessage.setAttribute("aria-live", "polite");
  form.appendChild(statusMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");
    const selectedReply = form.querySelector('input[name="preferredReply"]:checked');

    const nameValue = nameInput ? nameInput.value.trim() : "";
    const emailValue = emailInput ? emailInput.value.trim() : "";
    const messageValue = messageInput ? messageInput.value.trim() : "";

    statusMessage.className = "form-status error";

    if (nameValue.length < 2) {
      statusMessage.textContent = "Please enter your name (at least 2 characters).";
      if (nameInput) nameInput.focus();
      return;
    }

    if (!emailValue || !emailInput.checkValidity()) {
      statusMessage.textContent = "Please enter a valid email address.";
      if (emailInput) emailInput.focus();
      return;
    }

    if (messageValue.length === 0) {
      statusMessage.textContent = "Please enter a message before sending.";
      if (messageInput) messageInput.focus();
      return;
    }

    if (!selectedReply) {
      statusMessage.textContent = "Please select your preferred reply option.";
      const firstRadio = form.querySelector('input[name="preferredReply"]');
      if (firstRadio) firstRadio.focus();
      return;
    }

    statusMessage.className = "form-status success";
    statusMessage.textContent =
      "Thank you, " +
      nameValue +
      ". Your message is ready (" +
      selectedReply.value +
      " reply selected).";
    form.reset();
  });
}

const themeToggle = document.querySelector("#themeToggle");
if (themeToggle) {
  const applyDarkMode = (isDark) => {
    document.body.classList.toggle("dark-mode", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Default Theme" : "Dark Mode";
  };

  const isDarkSaved = localStorage.getItem("capstoneDarkMode") === "true";
  applyDarkMode(isDarkSaved);

  themeToggle.addEventListener("click", () => {
    const nextDarkState = !document.body.classList.contains("dark-mode");
    localStorage.setItem("capstoneDarkMode", String(nextDarkState));
    applyDarkMode(nextDarkState);
  });
}