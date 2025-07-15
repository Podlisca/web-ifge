---
title: "Termine Familienaufstellung"
menu: 
    main:
        parent: psychologischeberatung_gruppe
        identifier: termine
draft: false
aliases:
    - "/gruppenselbsterfahrung/termine/"
weight: 4
---
# Termine: Familienaufstellungen mit Silvia Podlisca
## Silvia - Seit 25 Jahren an deiner Seite - Für eine positive Lebensgestaltung 
{{< slogan >}}

{{< line icon="icon/termine.png" >}}

## Gruppenselbsterfahrung – Gemeinsam wachsen und entdecken


{{% box blue=1 %}}
{{% small  %}}

In der Gruppe entsteht ein sicherer Raum, um sich selbst besser kennenzulernen und neue Perspektiven zu gewinnen. Gemeinsam können wir alte Muster erkennen und in einem vertrauensvollen Miteinander Veränderung anstoßen.

Die Familienaufstellungen werden in unterschiedlichen Settings angeboten. Die Teilnahme an Familienaufstellungen erfolgt eigenverantwortlich und freiwillig. 



{{% /small  %}}
{{% /box %}}

{{< line icon="icon/aufstellung.png" >}}

# Wähle den passenden Termin für dich:
## Silvia - Seit 25 Jahren an deiner Seite - Für eine positive Lebensgestaltung 

***


<style>
  .aufstellung-box { border: 1px solid #C2E0E0; padding: 1.5rem; margin: 1rem 0; border-radius: 8px; }
  .aufstellung-box h4 { color: #B03C4C; font-size: 1.2rem; margin-bottom: 1rem; }
  .tuerkis { color: #00A6A6; font-weight: bold; }

  .teilnahme-buttons button {
    padding: 0.6rem 1.2rem;
    margin-right: 1rem;
    border: 2px solid;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    background-color: #fff;
  }
  .button-anliegen { border-color: #B03C4C; }
  .button-repraesentant { border-color: #00A6A6; }

  .stufe { display: none; margin-top: 1rem; }
  .stufe label { display: block; margin: 0.3rem 0; }
  .stufe input[type="text"], .stufe input[type="email"] {
    width: 100%; max-width: 400px; padding: 0.4rem; margin-bottom: 0.5rem;
  }
  .stufe button {
    margin-top: 1rem; padding: 0.6rem 1.2rem; border-radius: 6px;
    border: none; background-color: #00A6A6; color: white;
    font-weight: bold; cursor: pointer;
  }
  .stufe button:disabled { background-color: #ccc; cursor: not-allowed; }
</style>

<div class="aufstellung-box">
  <h4>🍃 FAMILIENAUFSTELLUNG – DREITAGES-WOCHENENDE IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 12.09.2025 – 16:00 bis 20:00 Uhr<br>
  Sa, 13.09.2025 – 09:00 bis 18:00 Uhr<br>
  So, 14.09.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Hohenstraße 12, Top 19, 1020 Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button class="button-anliegen" onclick="auswahl('anliegen')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 450 €</button>
    <button class="button-repraesentant" onclick="auswahl('beobachtung')" style="border: 2px solid #B03C4C;">👁 Teilnehmer:in ohne Anliegen: Preis: 210 €</button>
  </div>

  <div id="zustimmungen" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname"></label>
    <label>Nachname*:<br><input type="text" id="nachname"></label>
    <label>E-Mail*:<br><input type="email" id="email"></label>
    <label><input type="checkbox" id="newsletter"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn" disabled onclick="weiterleiten()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl = '';

  function auswahl(wahl) {
    produktwahl = wahl;
    document.getElementById('zustimmungen').style.display = 'block';
    document.getElementById('formular').style.display = 'none';
    zahlungBtn.disabled = true;
    agb.checked = false;
    datenschutz.checked = false;
    widerruf.checked = false;
  }

  const agb = document.getElementById('agb');
  const datenschutz = document.getElementById('datenschutz');
  const widerruf = document.getElementById('widerruf');
  const vorname = document.getElementById('vorname');
  const nachname = document.getElementById('nachname');
  const email = document.getElementById('email');
  const zahlungBtn = document.getElementById('zahlungBtn');

  [agb, datenschutz, widerruf].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmungOk = agb.checked && datenschutz.checked && widerruf.checked;
      document.getElementById('formular').style.display = zustimmungOk ? 'block' : 'none';
      validieren();
    });
  });

  [vorname, nachname, email].forEach(el => {
    el.addEventListener('input', validieren);
  });

  function validieren() {
    const alleAngaben = vorname.value && nachname.value && email.value;
    zahlungBtn.disabled = !alleAngaben;
  }

  function weiterleiten() {
    if (produktwahl === 'anliegen') {
      window.location.href = 'https://buy.stripe.com/bJe4gAfdYgRX3G0b4y3sI01';
    } else if (produktwahl === 'beobachtung') {
      window.location.href = 'https://buy.stripe.com/00w6oIe9U45bfoIc8C3sI00';
    }
  }
</script>







<div class="aufstellung-box">
  <h4>🍃 FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (8 STUNDEN) IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 14.11.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Seminarraum Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button class="button-anliegen" onclick="auswahl('anliegen')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 260 €</button>
    <button class="button-repraesentant" onclick="auswahl('beobachtung')" style="border: 2px solid #B03C4C;">👁 Teilnehmer:in ohne Anliegen: Preis: 110 €</button>
  </div>

  <div id="zustimmungen8h" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb8h"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz8h"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf8h"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular8h" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname8h"></label>
    <label>Nachname*:<br><input type="text" id="nachname8h"></label>
    <label>E-Mail*:<br><input type="email" id="email8h"></label>
    <label><input type="checkbox" id="newsletter8h"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn8h" disabled onclick="weiterleiten8h()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl8h = '';

  function auswahl8h(wahl) {
    produktwahl8h = wahl;
    document.getElementById('zustimmungen8h').style.display = 'block';
    document.getElementById('formular8h').style.display = 'none';
    document.getElementById('zahlungBtn8h').disabled = true;
    document.getElementById('agb8h').checked = false;
    document.getElementById('datenschutz8h').checked = false;
    document.getElementById('widerruf8h').checked = false;
  }

  const agb8 = document.getElementById('agb8h');
  const ds8 = document.getElementById('datenschutz8h');
  const wid8 = document.getElementById('widerruf8h');
  const vor8 = document.getElementById('vorname8h');
  const nach8 = document.getElementById('nachname8h');
  const mail8 = document.getElementById('email8h');
  const btn8 = document.getElementById('zahlungBtn8h');

  [agb8, ds8, wid8].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb8.checked && ds8.checked && wid8.checked;
      document.getElementById('formular8h').style.display = zustimmOK ? 'block' : 'none';
      validate8h();
    });
  });

  [vor8, nach8, mail8].forEach(el => {
    el.addEventListener('input', validate8h);
  });

  function validate8h() {
    const allesDa = vor8.value && nach8.value && mail8.value;
    btn8.disabled = !allesDa;
  }

  function weiterleiten8h() {
    if (produktwahl8h === 'anliegen8') {
      window.location.href = 'https://buy.stripe.com/bJe14o2rcgRX7Wg0pU3sI02';
    } else if (produktwahl8h === 'beobachtung8') {
      window.location.href = 'https://buy.stripe.com/dRm00kfdY1X3a4o4Ga3sI03';
    }
  }
</script>

<div class="aufstellung-box">
  <h4>🍃 FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (8 STUNDEN) IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 20.12.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Seminarraum Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button class="button-anliegen" onclick="auswahl('anliegen')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 260 €</button>
    <button class="button-repraesentant" onclick="auswahl('beobachtung')" style="border: 2px solid #B03C4C;">👁 Teilnehmer:in ohne Anliegen: Preis: 110 €</button>
  </div>

  <div id="zustimmungen8h" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb8h"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz8h"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf8h"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular8h" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname8h"></label>
    <label>Nachname*:<br><input type="text" id="nachname8h"></label>
    <label>E-Mail*:<br><input type="email" id="email8h"></label>
    <label><input type="checkbox" id="newsletter8h"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn8h" disabled onclick="weiterleiten8h()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl8h = '';

  function auswahl8h(wahl) {
    produktwahl8h = wahl;
    document.getElementById('zustimmungen8h').style.display = 'block';
    document.getElementById('formular8h').style.display = 'none';
    document.getElementById('zahlungBtn8h').disabled = true;
    document.getElementById('agb8h').checked = false;
    document.getElementById('datenschutz8h').checked = false;
    document.getElementById('widerruf8h').checked = false;
  }

  const agb8 = document.getElementById('agb8h');
  const ds8 = document.getElementById('datenschutz8h');
  const wid8 = document.getElementById('widerruf8h');
  const vor8 = document.getElementById('vorname8h');
  const nach8 = document.getElementById('nachname8h');
  const mail8 = document.getElementById('email8h');
  const btn8 = document.getElementById('zahlungBtn8h');

  [agb8, ds8, wid8].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb8.checked && ds8.checked && wid8.checked;
      document.getElementById('formular8h').style.display = zustimmOK ? 'block' : 'none';
      validate8h();
    });
  });

  [vor8, nach8, mail8].forEach(el => {
    el.addEventListener('input', validate8h);
  });

  function validate8h() {
    const allesDa = vor8.value && nach8.value && mail8.value;
    btn8.disabled = !allesDa;
  }

  function weiterleiten8h() {
    if (produktwahl8h === 'anliegen8') {
      window.location.href = 'https://buy.stripe.com/bJe14o2rcgRX7Wg0pU3sI02';
    } else if (produktwahl8h === 'beobachtung8') {
      window.location.href = 'https://buy.stripe.com/dRm00kfdY1X3a4o4Ga3sI03';
    }
  }
</script>

***

#### Familienaufstellung 6 Stunden in Pinkafeld

<div class="aufstellung-box">
  <h3 style="color: #b04a58;"><span style="font-size: 1.2em;">🍃</span> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (6 STUNDEN) IN PINKAFELD</h3>

  <p><strong style="color: #009999;">Termin:</strong><br>
    Mo, 13.10.2025 – 14:00 bis 20:00 Uhr
  </p>
  <p><strong style="color: #009999;">Leitung:</strong> Silvia Podlisca<br>
     <span style="color: darkred;">📍 Ort:</span> Seminarraum Pinkafeld
  </p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button class="button-anliegen" onclick="auswahl('anliegen')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 260 €</button>
    <button class="button-repraesentant" onclick="auswahl('beobachtung')" style="border: 2px solid #B03C4C;">👁 Teilnehmer:in ohne Anliegen: Preis: 110 €</button>
  </div>

  <div id="formular6h" style="display: none;">
    <h4 style="color: #009999;">2. Melde dich hier an:</h4>

    <label for="vorname6h">Vorname*:</label><br>
    <input type="text" id="vorname6h" required style="width: 100%; margin-bottom: 10px;"><br>

    <label for="nachname6h">Nachname*:</label><br>
    <input type="text" id="nachname6h" required style="width: 100%; margin-bottom: 10px;"><br>

    <label for="email6h">E-Mail*:</label><br>
    <input type="email" id="email6h" required style="width: 100%; margin-bottom: 15px;"><br>

    <div style="font-size: 0.9em; margin-bottom: 10px;">
      <input type="checkbox" id="agb6h"> Ich stimme den <a href="/agb/" target="_blank">AGB</a> zu *<br>
      <input type="checkbox" id="datenschutz6h"> Ich akzeptiere die <a href="/datenschutz/" target="_blank">Datenschutzerklärung</a> *<br>
      <input type="checkbox" id="widerruf6h"> Ich habe die <a href="/widerruf/" target="_blank">Widerrufsbelehrung</a> gelesen *<br>
      <input type="checkbox" id="newsletter6h"> Ich möchte den Newsletter erhalten
    </div>

    <button id="zahlungBtn6h" onclick="zurStripeZahlung6h()" disabled style="background-color: #009999; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: not-allowed;">
      Zur Zahlung (Stripe)
    </button>
  </div>
</div>

<script>
  let auswahl6h = '';
  const stripeLinks6h = {
    'anliegen6h': 'https://buy.stripe.com/28EdRad5QeJP7Wg7Sm3sI05',
    'repraesentant6h': 'https://buy.stripe.com/4gM6oIgi29pv6Sc7Sm3sI04'
  };

  function auswahlSetzen(option) {
    if (option === 'anliegen6h' || option === 'repraesentant6h') {
      auswahl6h = option;
      document.getElementById('formular6h').style.display = 'block';
      document.getElementById('zahlungBtn6h').disabled = false;
      document.getElementById('zahlungBtn6h').style.cursor = 'pointer';
    }
  }

  function zurStripeZahlung6h() {
    const vorname = document.getElementById('vorname6h').value.trim();
    const nachname = document.getElementById('nachname6h').value.trim();
    const email = document.getElementById('email6h').value.trim();
    const agb = document.getElementById('agb6h').checked;
    const datenschutz = document.getElementById('datenschutz6h').checked;
    const widerruf = document.getElementById('widerruf6h').checked;

    if (!vorname || !nachname || !email || !agb || !datenschutz || !widerruf) {
      alert("Bitte alle Pflichtfelder ausfüllen und Häkchen setzen.");
      return;
    }

    if (!auswahl6h || !stripeLinks6h[auswahl6h]) {
      alert("Bitte Teilnahmevariante auswählen.");
      return;
    }

    window.location.href = stripeLinks6h[auswahl6h];
  }
</script>



{{< line icon="icon/video.png" >}}
## Verschaffe dir einen ersten Einblick:
***

{{% box top-align=1 %}}
{{% small  %}}
#### Familienaufstellung Tag 1
{{< youtube NY2Foh8-Fbo >}}
Hier gebe ich einen kurzen Einblick was bei Familienaufstellungen geschieht und wie sich die Methode weiterentwickelt hat. Lösungen im Einklang mit der Familiensystem und den persönlichen Wünschen.
{{% /small  %}}

{{% small  %}}
#### Familienaufstellung Tag  2
{{< youtube 9sTJHky6cUA >}}
Familienaufstellung am IFGE ist eine Prozessarbeit. Über drei Tage bin ich intensiv mit allen Teilnehmer*innen gleichwertig im Kontakt. Bei mir am IFGE ist es kein Abarbeiten von Aufstellungen.
{{% /small  %}}
{{% small  %}}
#### Familienaufstellung Tag  3
{{< youtube Ut0nAJ_Qh-Y >}}

Was lösen Familienaufstellungen bei Klienten*innen und bei mir aus. Hier erzähle ich, wie ich damit umgehen, wenn mich etwas tief berührt während ich eine Familienaufstellung leite.
{{% /small  %}}
{{% /box %}}

{{< line icon="icon/bus.png" >}}
{{% box blue=1 %}}
{{% small  %}}
**Wien - Pinkafeld** verfügt über eine **ausgezeichnete direkte Busverbindung**. Die Haltestelle Pinkafeld Hauptplatz ist ca. eine Gehminute entfernt. [Hier finden Sie die aktuellen Fahrpläne](https://richard.at/fahrplaene/g1/). Sollten Sie in Pinkafeld übernachten wollen: das [Stadthotel Pinkafeld](https://stadthotel-pinkafeld.at/) ist in 3 Gehminuten erreichbar.





Alle Teilnehmer:innen erhalten eine **Bestätigung** über **fachliche Fortbildung**.
Diese wird für die gesetzlich vorgeschriebenen Weiterbildung der Lebensberater:innen anerkannt.

{{% /small  %}}
{{% /box  %}}

{{< line icon="icon/3_standorte.png" >}}

{{% box top-align=1 %}}
{{% small  %}}
#### Wien
{{< slider content="/img/1020_3.webp,/img/1020_4.webp,/img/1020_5.webp,/img/1020_15.webp,/img//1020_11.webp,/img/1020_12.webp,/img/1020_16.webp,/img/1020_7.webp,/img/1020_2.webp,img/1020_14.webp" >}}

{{% /small  %}}

{{% small  %}}
#### Burgenland

{{< slider content="/img/seminarraum1.jpg,/img/seminarraum2.jpg,/img/beratungsraum.jpg,/img/beratungsraum1.jpg,/img/beratungsraum2.jpg,/img/beratungsraum4.jpg,/img/beratungsraum5.jpg,/img/kueche.jpg,/img/seminarraum.jpg,/img/buero.jpg" >}}



{{% /small  %}}
{{% /box %}}
