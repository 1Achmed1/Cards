![Build](https://travis-ci.org/1Achmed1/Cards.svg?branch=master)

# Cards
A CSS website design for Google's Material Design.

## OS Problems: A Brief Explanation
Cards was primarily developed on Windows 7. As a result, Cards was designed to look the way I wanted on my screen on Windows 7. Recently, I started going back to school. Everyone at my school is issued a 13-inch MacBook Air. I took the opportunity to test Cards on a new screen, and on a new OS. The problems became apparent to me then. The problem is most noticable in the header, padding becomes all fooey. I immediately started inspecting the code and discovered that Mac and Windows handle what a pixel is a little differently. I fixed the code using some javascript, all was well. Recently I used my free Windows 10 upgrade and created a dual-boot on my system. I started working on Cards soon after the install, and testing my changes, I noticed that the header was again broken. I inspected the code again, and found that the Mac fix worked on Windows 10. In Cards 1.3, I've *hopefully* fixed the problem by reversing the fix. The fix has now become default, and only reverts when Windows 7 users visit Cards.
