# TODO-FIXES: Feedback Fixes + 500 Error

## Issues:
1. ClickSpark not working on Home (z-index/overflow issue)
2. Skills/Experience cards missing CardWithGlare
3. **500 Internal Server Error**: External Vercel/Netlify demo links down

**Broken URLs (returning 500):**
```
https://cafe-final.vercel.app/ (Caffeine Coffee)
https://mc-murex-eight.vercel.app/ (Malibu Cycles) 
https://portfolionew-six-orpin.vercel.app/ (Portfolio)
https://job-portal-blue-seven.vercel.app/ (Job Portal)
https://dorm-updated-b6n3.vercel.app/ (Dorm Mgmt)
https://car-parking-eight-zeta.vercel.app/ (Parking App)
https://cnc-website-7efl.vercel.app/ (PrecisionWorks)
https://pawmart-one.vercel.app/ (PawMart)
https://travel-website-roan-ten.vercel.app/ (Travel)
```

## Steps:
1. [x] Edit ClickSpark.jsx: Add zIndex:999 to canvas
2. [x] Edit Skills.jsx: Wrap skill-cards with CardWithGlare
3. [x] Edit Experience.jsx: Wrap exp cards with CardWithGlare  
4. [ ] Edit Home.jsx: Update preview sections to use CardWithGlare
5. [ ] **Replace broken demo URLs** OR mark as "Coming Soon" in projects.js
6. [ ] Test: vite dev → F12 Network tab → No 500s
7. [ ] Complete
