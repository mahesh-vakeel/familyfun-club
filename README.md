# FamilyFun Club

A live family guessing game (movies, places, animals). Everyone plays on their own phone at the same time.
Built as a single static page on GitHub Pages, with Firebase (anonymous sign-in + Firestore) keeping phones in sync.

## Play
1. One person opens the site and taps **Host game**, then shares the 4-letter code or the WhatsApp link.
2. Everyone else opens the link, types their name and taps **Join**.
3. The host taps **Start game**. 20 seconds per question, 10 points per correct answer.

Keep the host's page open during the game: it runs the timer and scoring.

## Firebase
- Authentication: Anonymous sign-in enabled.
- Firestore rules: see `firestore.rules` (paste into the console's Rules tab when changed).
