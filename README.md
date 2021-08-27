## Federico Galbiati
### http://a1-fedeit.glitch.me

In this project I created a personal presentation webpage using HTML, CSS, and JavaScript. The page is split into an introduction and an experience section. The website is hosted using a NodeJS instance and can be tested locally using the comamnd `node server.js`. The website is also hosted on Glitch and is accessible at http://a1-fedeit.glitch.me. The assignment was done following the suggested workflow #1: clone base repo to computer, work locally, push to GitHub, import into Glitch.

## Technical Achievements
- **Styled page with CSS**:
    - Used an `img` selector to set the height of the WPI image on the website
    - Used a `table` selector to define the `border-spacing` between columns and rows for the tables on the webpage
    - Removed the underline on the `<a>` links by setting `text-decoration` to `none`
    - Used an ID (`academicbg`) to select a paragraph and modify the font to large (`font-size: large;`)
    - Modified the LinkedIn link to always show with color `#78CCFF`
    - Modified the `font-family` to use a Google Fonts font
    - Modofied the `<a>` color for all states to use a color palette from color.adobe.com
- **Simple JavaScript animation**:
    - I created a simple animation of 3 dots changing repeatedly from "." to ".." and "..." sequentially. It then returns to ".". The animation uses a `setInterval` to run a function every second. The function takes the `<h1>` title "Information about Federico Galbiati" and appends the dots at the end. I used the `substring` method to check how many dots there are at any given time in the title, and `".".repeat(x + 1)` to generate the sequence of dots to append.
- **Extra tags**:
    - I used the `<table>` tag twice. The first table displays the courses that I have taken. I created 2 columns: one with the course ID and the second with the title. The second table displays my previous working experience with a column for dates and one for titles.
    - I used the `<a href="">` tag five times to add links to my LinkedIn, and to the course descriptions (on the WPI website) for the classes that I have taken.
    - I used the `style`, `link`, and `script` tags to introduce CSS styling, Google Fonts, and a JS animation.

### Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Noto Sans JP as the font for the website. Specifically, I set the `<p>, <h1>, <h2>, <a>, <tr>, <li>` tags to use this font.
- **Used color.adobe.com to create a color palette**: I created a color palette to change the colors of the links when their status is link, visited, hover, and active. I also used a color for the LinkedIn link button.
