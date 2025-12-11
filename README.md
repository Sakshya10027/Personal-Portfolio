# Personal Portfolio

A responsive personal portfolio showcasing featured projects, skills, and contact information. Built with HTML, CSS, and vanilla JavaScript.

## Features

- Smooth section navigation and active link highlighting
- Animated hero subtitle typewriter effect
- Responsive grid for projects and skills
- Project descriptions with internal scroll (scrollbar hidden)
- Contact form with client-side validation
- Email delivery via EmailJS

## Tech Stack

- HTML, CSS, JavaScript
- Font Awesome, Google Fonts
- EmailJS (browser SDK)

## Getting Started

1. Clone or download the repository.
2. Open `index.html` directly in your browser, or use a local server (e.g., VS Code Live Server).

## EmailJS Setup

- Update the public key in `index.html`:
  - `index.html:16–23` initializes EmailJS with `publicKey`.
- Set your service and template IDs in `script.js`:
  - `script.js:8` uses `emailjs.send("SERVICE_ID","TEMPLATE_ID", templateParams)`

Steps:
- Create an EmailJS account and a service/template.
- Replace `publicKey`, `SERVICE_ID`, and `TEMPLATE_ID` with your values.

Note: EmailJS public keys are safe to include client-side. Keep any real secrets out of the repository.

## Project Structure

```
Portfolio 2/
├─ index.html
├─ style.css
├─ app.js
├─ script.js
├─ assets/
│  ├─ img/
│  └─ Resume/
└─ README.md
```

## License

No explicit license provided. Contact the author for usage permissions.

## Contact

- Email: `patelsakshya2@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/sakshya-patel-20751232a/`
