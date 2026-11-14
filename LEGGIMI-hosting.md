# Big Pizza · sito web

Il sito è fatto solo di file statici (`index.html`, `style.css`, `script.js`, cartella `img/`):
nessun database, nessun programma da installare. Si apre con un doppio clic su `index.html`
e si può pubblicare su qualunque hosting.

## 1. Prima di pubblicare: completa questi punti

Cerca `DA PERSONALIZZARE` dentro `index.html` (si apre con qualsiasi editor di testo,
anche Blocco note / TextEdit):

- **La nostra storia**: il testo attuale è generico, sostituiscilo con la vostra storia
  (anno di apertura, chi siete, cosa vi rende speciali).
- **Orari**: sostituisci `[orari da inserire]` e `[da inserire]` con orari e giorno di chiusura.
- **Patate al forno o fritte**: sul menù cartaceo non c'è il prezzo, quindi sul sito è senza prezzo.
  Se vuoi aggiungerlo, cerca `Patate al forno o fritte` e metti il prezzo dentro `<span class="p"></span>`.

Per cambiare un prezzo in futuro: cerca il nome del piatto in `index.html` e modifica il numero.

## 2. Pubblicare il sito (gratis) con Netlify

1. Vai su <https://app.netlify.com/drop> e crea un account gratuito (basta l'email o Google).
2. Trascina la cartella `big-pizza-sito` intera nella pagina.
3. In pochi secondi il sito è online a un indirizzo tipo `https://nome-casuale.netlify.app`.
4. In **Site configuration → Change site name** scegli un nome, ad esempio `bigpizza-caserta`
   → il sito diventa `https://bigpizza-caserta.netlify.app`.
5. Per aggiornare il sito: **Deploys** → trascina di nuovo la cartella modificata.

Alternative gratuite equivalenti: Cloudflare Pages, GitHub Pages.

## 3. (Consigliato) Dominio tuo, es. `bigpizzacaserta.it`

- Si compra su un registrar (Aruba, Register.it, Namecheap, Cloudflare…): circa 10–15 € l'anno.
- Su Netlify: **Domain management → Add a domain** e segui le istruzioni (ti dice quali
  impostazioni DNS copiare sul registrar). Il certificato HTTPS è gratuito e automatico.

Perché conviene: il QR code stampato punta a un indirizzo. Con un dominio tuo, anche se un giorno
cambi hosting, il QR stampato continua a funzionare.

## 4. Il QR code

Crealo **solo quando l'indirizzo definitivo è deciso** (un QR stampato non si può modificare).

- Mandami l'indirizzo del sito e te lo preparo io pronto per la stampa, oppure
- usa un generatore gratuito come <https://www.qr-code-generator.com> scegliendo il tipo
  **statico** (quelli "dinamici" spesso diventano a pagamento dopo un periodo di prova).

Consigli per la stampa: almeno 3 × 3 cm sui tavoli, nero su sfondo chiaro, con una scritta tipo
"Inquadra per il menù". Provalo con 2–3 telefoni diversi prima di stampare tutte le copie.
