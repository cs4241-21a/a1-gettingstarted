## Assignment 1 - Getting Started
Nathan Klingensmith
https://a1-iamparadoxdotexe.glitch.me/

This project shows who I am as a student and as a professional. It includes the experience, education, and skills I have accumulated over my career.

### Technical Achievements
* **Mustache Templating**:  Implemented [Mustache.js](https://www.npmjs.com/package/mustache) for dynamic component templating. 
    - I used Mustache to programmatically add card and header components to the website. Once I figured out how to make a Mustache template and render them into HTML, I was able to create the proper data and template files needed to make it work.
- **Static File Serving**:  Improved `server.js` to support static file serving.
    - I updated the given `server.js` file to serve any file on the server, rather than just `index.html`. I did this by creating a `routes` object to forward "/" to "index.html" and reading any other path without the beginning slash. This enabled me to import external files into the website such as styles, data, and templates.
    - I also submitted a pull request with only this addition to the [cs4241-21a/a1-gettingstarted](https://github.com/cs4241-21a/a1-gettingstarted) repo.
* **BEM Styles**: Styled the website based on BEM formatting guidelines.
    - I used a lot of styles, so I'm not going to list them all here. If you would like to look, the website's stylings are split up amongst `styles/global.css`, `styles/theme.css`, `templates/card.mustache`, and `templates/header.mustache`.
- **Animated Cursor Effect**: Added a blinking cursor effect next to *Hello, I'm Nathan*.
    - Using a simple `@keyframes` animation, I toggled the opacity of a white div to give the appearance of a live cursor.
* **Tag Utilization**: Utilized the  `div`, `pre`, `h1`, `span`, `a`, and `img` HTML tags.
    - `div` was used to create divisions between structured content.
    - `pre` was used to style text like code.
    - `h1` was used to mark the primary heading *Hello, I'm Nathan*.
    - `span` was used to change the styling of just *Nathan* in the primary heading.
    - `a` was used to create a hyperlink to my LinkedIn page in the website footer.
    - `img` was used to add the LinkedIn icon to the associated hyperlink.

### Design Achievements
- **Standardized Theming**: Created a standardized theme for CSS styles.
    - I created a CSS file at `styles/theme.css` to add a host of CSS variables for standard stylings. This allowed me to use consistent colors, font sizes, and other styles across all elements.
* **Google Fonts**: Imported *Roboto* and *Roboto Mono* fonts.
    - I imported *Roboto* and *Roboto Mono* from Google Fonts to be the primary and secondary typefaces for the website, respectively. These fonts were standardized in the `--font-family-primary` and `--font-family-secondary` variables.
