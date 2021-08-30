Eli Benevedes
http://a1-elibenevedes.glitch.me

This project is a simple portfolio. It lists my interests and work experience.

## Technical Achievements
- **Message Board**: Anyone can add a message to the message board, and all messages will be displayed to all users. There is 1 known vulnerability:
    1. Spamming the /send_message API will quickly fill up the messages.json file. There is no cap on this filesize, nor is there rate limiting on the /send_message api.

### Design Achievements
- **Used the Roboto Mono Font from Google Fonts**: I used Roboto Mono as the font for the primary copy text in my site. This required a CSS import, and including 2 stylesheets in the HTML.