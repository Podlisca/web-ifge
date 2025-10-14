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

# Wähle den passenden Termin für dich in Wien


***
{{< upgrade-form >}}


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




<div class="aufstellung-box" data-termin="Fr, 14.11.2025 – 09:00 bis 18:00 Uhr (Wien)">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (8 STUNDEN) IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 21.11.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Hollandstr. 12/9, 1020 Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl8h('anliegen8h')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 260 €</button>
    <button onclick="auswahl8h('beobachtung8h')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 110 €</button>
  </div>

  <div id="zustimmungen8h" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb8h"> Ich stimme den <a href="/agb/">AGB</a> zu </label>
    <label><input type="checkbox" id="datenschutz8h"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> </label>
    <label><input type="checkbox" id="widerruf8h"> Ich habe die <a href="/widerrufsbelehrung/">Widerrufsbelehrung</a> gelesen </label>
  </div>



<div id="formular8h" class="stufe" data-termin="Fr, 14.11.2025 – 14.09.2025 (Wien)">
  <p><span class="tuerkis">3. Melde dich hier an:</span></p>

  <input type="hidden" id="termin">


  <label>Anrede*:<br>
    <select id="anrede" required>
      <option value="">Bitte wählen</option>
      <option value="Frau">Frau</option>
      <option value="Herr">Herr</option>
      <option value="Divers">Divers</option>
    </select>
  </label>

  <label>Titel (optional):<br>
    <select id="titel">
      <option value="">Kein Titel</option>
      <option value="Mag.">Mag.</option>
      <option value="Dr.">Dr.</option>
      <option value="Prof.">Bsc.</option>
      <option value="Prof.">Msc.</option>
      <option value="Prof.">Dipl. Ing.</option>
    </select>
  </label>

  <label>Vorname*:<br><input type="text" id="vorname8h"></label>
  <label>Nachname*:<br><input type="text" id="nachname8h"></label>
  <label>E-Mail*:<br><input type="email" id="email8h"></label>
  <label>Straße:<br><input type="text" id="strasse"></label>
  <label>PLZ:<br><input type="text" id="plz"></label>
  <label>Ort:<br><input type="text" id="ort"></label>
  <label>Land:<br><input type="text" id="land"></label>
  <label>UID (wenn vorhanden):<br><input type="text" id="uid"></label>
  <label>Mitteilung:<br><textarea id="mitteilung"></textarea></label>
  <label><input type="checkbox" id="newsletter"> Ich möchte den Newsletter erhalten</label>
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
    if (produktwahl8h === 'anliegen8h') {
      window.location.href = 'https://buy.stripe.com/bJe14o2rcgRX7Wg0pU3sI02';
    } else if (produktwahl8h === 'beobachtung8h') {
      window.location.href = 'https://buy.stripe.com/dRm00kfdY1X3a4o4Ga3sI03';
    }
  }
</script>


<div class="aufstellung-box" data-termin="Fr, 12.09.2025 – 14.09.2025 (Wien)">
  <h4> FAMILIENAUFSTELLUNG – DREITAGES-WOCHENENDE IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 03.04.2026 – 16:00 bis 20:00 Uhr<br>
  Sa, 04.04.2026 – 09:00 bis 18:00 Uhr<br>
  So, 05.04.2026 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Hollandstr. 12/9, 1020 Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button class="button-anliegen" onclick="auswahl('anliegen')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 450 €</button>
    <button class="button-repraesentant" onclick="auswahl('beobachtung')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 210 €</button>
  </div>

  <div id="zustimmungen" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb"> Ich stimme den <a href="/agb/">AGB</a> zu </label>
    <label><input type="checkbox" id="datenschutz"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> </label>
    <label><input type="checkbox" id="widerruf"> Ich habe die <a href="/widerrufsbelehrung/">Widerrufsbelehrung</a> gelesen </label>
  </div>

<div id="formular" class="stufe" data-termin="Fr, 12.09.2025 – 14.09.2025 (Wien)">
  <p><span class="tuerkis">3. Melde dich hier an:</span></p>

  <input type="hidden" id="termin">


  <label>Anrede*:<br>
    <select id="anrede" required>
      <option value="">Bitte wählen</option>
      <option value="Frau">Frau</option>
      <option value="Herr">Herr</option>
      <option value="Divers">Divers</option>
    </select>
  </label>

  <label>Titel (optional):<br>
    <select id="titel">
      <option value="">Kein Titel</option>
      <option value="Mag.">Mag.</option>
      <option value="Dr.">Dr.</option>
      <option value="Prof.">Bsc.</option>
      <option value="Prof.">Msc.</option>
      <option value="Prof.">Dipl. Ing.</option>
    </select>
  </label>

  <label>Vorname*:<br><input type="text" id="vorname"></label>
  <label>Nachname*:<br><input type="text" id="nachname"></label>
  <label>E-Mail*:<br><input type="email" id="email"></label>
  <label>Straße:<br><input type="text" id="strasse"></label>
  <label>PLZ:<br><input type="text" id="plz"></label>
  <label>Ort:<br><input type="text" id="ort"></label>
  <label>Land:<br><input type="text" id="land"></label>
  <label>UID (wenn vorhanden):<br><input type="text" id="uid"></label>
  <label>Mitteilung:<br><textarea id="mitteilung"></textarea></label>

  <label><input type="checkbox" id="newsletter"> Ich möchte den Newsletter erhalten</label>

  <button id="zahlungBtn" disabled onclick="weiterleiten()">Zur Zahlung (Stripe)</button>
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




***

## Wähle den passenden Termin für dich in Pinkafeld

***

<div class="aufstellung-box" data-termin="Mo, 13.10.2025 – 09:00 bis 18:00 Uhr (Bgld.)">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (6 STUNDEN) IN PINKAFELD</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Mo, 27.10.2025 – 14:00 bis 20:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Bruckgasse 1, 7423 Pinkafeld</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl6hpink('anliegen6hpink')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 210 €</button>
    <button onclick="auswahl6hpink('beobachtung6hpink')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 90 €</button>
  </div>

  <div id="zustimmungen6hpink" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb6hpink"> Ich stimme den <a href="/agb/">AGB</a> zu </label>
    <label><input type="checkbox" id="datenschutz6hpink"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> </label>
    <label><input type="checkbox" id="widerruf6hpink"> Ich habe die <a href="/widerrufsbelehrung/">Widerrufsbelehrung</a> gelesen </label>
  </div>


  <div id="formular6hpink" class="stufe" data-termin="Mo, 13.10.2025  (Bgld)">
  <p><span class="tuerkis">3. Melde dich hier an:</span></p>

  <input type="hidden" id="termin">


  <label>Anrede*:<br>
    <select id="anrede" required>
      <option value="">Bitte wählen</option>
      <option value="Frau">Frau</option>
      <option value="Herr">Herr</option>
      <option value="Divers">Divers</option>
    </select>
  </label>

  <label>Titel (optional):<br>
    <select id="titel">
      <option value="">Kein Titel</option>
      <option value="Mag.">Mag.</option>
      <option value="Dr.">Dr.</option>
      <option value="Prof.">Bsc.</option>
      <option value="Prof.">Msc.</option>
      <option value="Prof.">Dipl. Ing.</option>
    </select>
  </label>
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname6hpink"></label>
    <label>Nachname*:<br><input type="text" id="nachname6hpink"></label>
    <label>E-Mail*:<br><input type="email" id="email6hpink"></label>
    <label>Straße:<br><input type="text" id="strasse"></label>
  <label>PLZ:<br><input type="text" id="plz"></label>
  <label>Ort:<br><input type="text" id="ort"></label>
  <label>Land:<br><input type="text" id="land"></label>
  <label>UID (wenn vorhanden):<br><input type="text" id="uid"></label>
  <label>Mitteilung:<br><textarea id="mitteilung"></textarea></label>
    <label><input type="checkbox" id="newsletter6hpink"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn6hpink" disabled onclick="weiterleiten6hpink()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl6hpink = '';

  function auswahl6hpink(wahl) {
    produktwahl6hpink = wahl;
    document.getElementById('zustimmungen6hpink').style.display = 'block';
    document.getElementById('formular6hpink').style.display = 'none';
    document.getElementById('zahlungBtn6hpink').disabled = true;

    document.getElementById('agb6hpink').checked = false;
    document.getElementById('datenschutz6hpink').checked = false;
    document.getElementById('widerruf6hpink').checked = false;
  }

  const agb6p = document.getElementById('agb6hpink');
  const ds6p = document.getElementById('datenschutz6hpink');
  const wid6p = document.getElementById('widerruf6hpink');
  const vor6p = document.getElementById('vorname6hpink');
  const nach6p = document.getElementById('nachname6hpink');
  const mail6p = document.getElementById('email6hpink');
  const btn6p = document.getElementById('zahlungBtn6hpink');

  [agb6p, ds6p, wid6p].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb6p.checked && ds6p.checked && wid6p.checked;
      document.getElementById('formular6hpink').style.display = zustimmOK ? 'block' : 'none';
      validate6hpink();
    });
  });

  [vor6p, nach6p, mail6p].forEach(el => {
    el.addEventListener('input', validate6hpink);
  });

  function validate6hpink() {
    const allesDa = vor6p.value && nach6p.value && mail6p.value;
    btn6p.disabled = !allesDa;
  }

  function weiterleiten6hpink() {
    if (produktwahl6hpink === 'anliegen6hpink') {
      window.location.href = 'https://buy.stripe.com/28EdRad5QeJP7Wg7Sm3sI05';
    } else if (produktwahl6hpink === 'beobachtung6hpink') {
      window.location.href = 'https://buy.stripe.com/4gM6oIgi29pv6Sc7Sm3sI04';
    }
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
