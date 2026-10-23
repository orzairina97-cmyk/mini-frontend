# Postările mele

Pagină web care afișează postări de la un API, poți să adaugi, să cauți și să ștergi postări.

API folosit: https://jsonplaceholder.typicode.com/posts

Link public: https://orzairina97-cmyk.github.io/mini-frontend/

CORS: header pe server. JSONPlaceholder (jsonplaceholder.typicode.com) este un serviciu public de test. Acest server permite automat cererile venite de pe alte site-uri așa că nu a fost necesar să modific codul. Am verificat acest lucru în panoul DevTools, fereastra Network, unde în dreapta liniei Access-Control-Allow-Origin apare adresa site-ului meu. Serverul API-ului (JSONPlaceholder) trimite deci singur headerul.

Status codes:
Verific response.ok, adică dacă serverul a răspuns cu un cod de succes (2xx).
- 200 (GET și DELETE) și 201 (POST): succes. La GET afișez lista, la POST adaug postarea nouă în listă fără să cer din nou datele, iar la DELETE scot postarea din listă.
- 4xx și 5xx (de exemplu 404 sau 500): se afișează utilizatorului eroarea serverului. La POST lângă formular, cu codul și mesajul serverului, iar la GET și DELETE în zona de stare.
- Eroare de rețea (de exemplu fără internet): nu primesc niciun cod de la server, fetch aruncă o eroare, iar catch afișează un mesaj general.