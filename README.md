# Byens IT AI

En samlet arbejdsflade til AI-chat, filer, viden og coding — under udvikling
hos Byens IT. Virksomheder og individuelle brugere får hver deres vej ind.

*In English: Byens IT AI is a unified workspace for AI chat, files, knowledge and
coding, in internal pilot at Byens IT. Public sign-up is not open yet.*

Dette er det offentlige produkt- og webrepo. Platformens server, Harness-fork,
installationer og interne driftsdokumenter ligger i separate private repositories.
Ingen API-keys, kundekonfigurationer eller produktionsdata hører hjemme her.

## Tilgængelighed

Platformen bruges i intern pilot. Offentlig konto-oprettelse og abonnement
for private er endnu ikke åbnet. Et website eller en GitHub-release er ikke
bevis for, at hele SaaS-produktet er klar til kunder.

[Website](https://byensitmagnus.github.io/byens-it-ai-platform/) · [Produkt og data](https://byensitmagnus.github.io/byens-it-ai-platform/docs.html) · [Kontakt/demo](https://www.byens-it.dk/kontakt/)
· [Ændringer](CHANGELOG.md) · [Sikkerhed](SECURITY.md)

## Lokal visning

Kræver kun Python 3. Ingen dependencies, build eller tracking scripts.

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Åbn `http://127.0.0.1:4173`. `index.html` og `docs.html` bruger lokal CSS/JS.
Illustrationen på forsiden er en konceptillustration, ikke et kundebevis.

## Om Byens IT

Byens IT ApS (CVR 46491661) er et dansk firma, der sælger gaming-computere og leverer
IT-service. Byens IT ledes af
[Magnus Steinmeier Olsen](https://dk.linkedin.com/in/magnus-steinmeier-olsen-204b42237),
stifter og direktør.
[byens-it.dk](https://www.byens-it.dk) · [GitHub-profil](https://github.com/byensitmagnus)

## Feedback og udgivelser

Brug en issue til produktfeedback uden persondata, dokumenter eller secrets.
Sikkerhedsproblemer sendes privat; se SECURITY. CHANGELOG beskriver kun den
leverede websiteversion. Se CONTRIBUTING for hvordan bidrag håndteres.
