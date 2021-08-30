Readme
---

Lauren Wasserman
http://a1-lewasserman.glitch.me

**Please reload the page to see my animation of a yellow circle moving to the right along the screen**

Also, I added eslint as a dependency in the package.json. After this I ran "npm install --no-optional" which I perhaps should not have done as it created a lot of files. The website still works as it should, so I hope that this is okay.

This project shows ...

## Technical Achievements
- **Styled page with CSS**:
    1. Added rules for body tags to change the background color of the site.
    2. Added rules for h1 and h2 tags to change the color of the text.
    3. Added rules for p tags to change the color for the text, add padding to the left and make the font size slightly bigger than the rest of the text on the site.
    4. Added rules for li tags to change the color of the text and increase the line height to add space between items.
    5. Added rules for ul tags to add padding on the left so that the items in the list were indented into the page.
    6. Added rules for dl tags to add padding on the left so that the items in the list were indented into the page.
    7. Added rules for table, th, and td tags to add a solid boarder for the table and to set the color of that border. I added rules to th tags to set their background color, the color for the text, the width of the cells, and the line-height for the text. I also added rules to the td tags to set their background color, the color of the text, and to add padding to the left and the right of the text in the cells.
    8. Added rules using an id selector (#quote) which controls for a span that contains a q and a cite tag to change the color of the text, the background color, the margin on the left of the span, the padding to the left and the right of the span, and the font-size for the text in the span.
    9. Added rules using an id selector (#wpi-logo) which controsls an img tag to set the height and width of the image as well as to set it to display inline-block so that I can have it on the same line as the heading/title for my website.
    10. Added rules using an id selector (#top-of-page) which controls a div that contains an a tag (which contains an img tag)  and a h1 tag. This sets the white-space to nowrap so that the items inside can be side-by-side. It also sets display to flex and align-items to center so that the items are vertically aligned to each other.
    11. Added rules using an id selector (#by-logo) which controls the h1 tag that is to the right of the image on the page. These rules set the display to inline-block to allow it to be on the same line as the image and the padding on the left to allow for some more space between the h1 element and the image.
    12. Added rules using a class selector (.list-heading) which controls the h3 list headings on the page. It sets the text to bold and changes the color of the text.
    13. Added rules using an id selector (#animation-container) wihch controls a div tag which is the container for my animation of a moving circle. It makes the position of the container relative and sets the height such that there is enough room for the circle it holds.
    14. Added rules using an id selector (#animation) which controls a div tag which contains a circle which is animated. The style rules set the border radius to allow the div to be in the shape of a circle, set the width and the height to the same value, set the background color for the circle, and set the position of the circle to be absolute.
    15. Added root CSS variables for the colors in my color palette. I used these variables throughout my style rules to access my color palette.
- **Used other HTML tags**:
    1. img: I used an img tag to add an image of the WPI logo.
    2. a: I used an a tag to link the WPI logo to the WPI website.
    3. table: I used the table tag to contain my experience with the various languages.
    4. span: I used a span tag to contain a q tag and a cite tag to add a background color for them both.
    5. q: I used a q tag to add a quote.
    6. cite: I used a cite tag to cite the quote that I added.
- **Animations**:
    1. I added a confetti animation that goes over the site when it is freshed for 3 seconds.
    2. I added a dark yellow circle under the WPI logo and title of the page that slowly moves to 900px to the right whenever the page is loaded. It starts on the left of the page. To do this, I made a function which is called whenever the page is loaded. This function, moves the element to the right slowly pixel by pixel.

### Design Achievements
- **Used the Montserrat Font from Google Fonts**: I used Montserrat as the font for the text in my site.
- **Created and Used a Color Palette**: Used color.adobe.com to create a color palette which I used for my site.
