# FamilyFun Club

A live family guessing game (movies, places, animals). No accounts and no server:
the host's phone runs the game and the other phones connect to it directly (WebRTC via PeerJS).

## Play
1. One person opens the site and taps **Host game**, then shares the 4-letter code or the WhatsApp link.
2. Everyone else opens the link, types their name and taps **Join**.
3. The host taps **Start game**. 20 seconds per question, 10 points per correct answer.

Keep the host's phone open with the screen on during the game.

## Hosting
Static files only. On GitHub: Settings → Pages → Deploy from a branch → `main` / root.
