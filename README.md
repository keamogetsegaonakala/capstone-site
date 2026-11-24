# Capstone Portfolio Website

Personal portfolio website built for my Systems Development learnership and deployed on GitHub Pages.

**Live Site:** https://keamogetsegaonakala.github.io/capstone-site/

## Pages
- `index.html` — Home and introduction
- `projects.html` — Featured projects
- `about.html` — Background and skills
- `contact.html` — Contact form
- `404.html` — Custom page-not-found error page

## Behind the Scenes

While adding the footer across the site pages, it initially rendered inside the contact form area next to the submit button instead of sitting cleanly at the bottom of the page. I fixed it by moving the `<footer>` element outside `</form>` and `</main>`, ensuring full-width block styling in `style.css`, and committing and pushing the updated HTML and CSS files to GitHub Pages.