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
  <h4> FAMILIENAUFSTELLUNG – DREITAGES-WOCHENENDE IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 12.09.2025 – 16:00 bis 20:00 Uhr<br>
  Sa, 13.09.2025 – 09:00 bis 18:00 Uhr<br>
  So, 14.09.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Hollandstr. 12/9, 1020 Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button class="button-anliegen" onclick="auswahl('anliegen')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 450 €</button>
    <button class="button-repraesentant" onclick="auswahl('beobachtung')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 210 €</button>
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
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (8 STUNDEN) IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 14.11.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Hollandstr. 12/9, 1020 Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl8h('anliegen8h')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 260 €</button>
    <button onclick="auswahl8h('beobachtung8h')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 110 €</button>
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
    if (produktwahl8h === 'anliegen8h') {
      window.location.href = 'https://buy.stripe.com/bJe14o2rcgRX7Wg0pU3sI02';
    } else if (produktwahl8h === 'beobachtung8h') {
      window.location.href = 'https://buy.stripe.com/dRm00kfdY1X3a4o4Ga3sI03';
    }
  }
</script>



<div class="aufstellung-box">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (8 STUNDEN) IN WIEN</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Fr, 20.12.2025 – 09:00 bis 18:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Hollandstr. 12/9, 1020 Wien</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl8hdez('anliegen8hdez')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 260 €</button>
    <button onclick="auswahl8hdez('beobachtung8hdez')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 110 €</button>
  </div>

  <div id="zustimmungen8hdez" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb8hdez"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz8hdez"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf8hdez"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular8hdez" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname8hdez"></label>
    <label>Nachname*:<br><input type="text" id="nachname8hdez"></label>
    <label>E-Mail*:<br><input type="email" id="email8hdez"></label>
    <label><input type="checkbox" id="newsletter8hdez"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn8hdez" disabled onclick="weiterleiten8hdez()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl8hdez = '';

  function auswahl8hdez(wahl) {
    produktwahl8hdez = wahl;
    document.getElementById('zustimmungen8hdez').style.display = 'block';
    document.getElementById('formular8hdez').style.display = 'none';
    document.getElementById('zahlungBtn8hdez').disabled = true;

    document.getElementById('agb8hdez').checked = false;
    document.getElementById('datenschutz8hdez').checked = false;
    document.getElementById('widerruf8hdez').checked = false;
  }

  const agb8dez = document.getElementById('agb8hdez');
  const ds8dez = document.getElementById('datenschutz8hdez');
  const wid8dez = document.getElementById('widerruf8hdez');
  const vor8dez = document.getElementById('vorname8hdez');
  const nach8dez = document.getElementById('nachname8hdez');
  const mail8dez = document.getElementById('email8hdez');
  const btn8dez = document.getElementById('zahlungBtn8hdez');

  [agb8dez, ds8dez, wid8dez].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb8dez.checked && ds8dez.checked && wid8dez.checked;
      document.getElementById('formular8hdez').style.display = zustimmOK ? 'block' : 'none';
      validate8hdez();
    });
  });

  [vor8dez, nach8dez, mail8dez].forEach(el => {
    el.addEventListener('input', validate8hdez);
  });

  function validate8hdez() {
    const allesDa = vor8dez.value && nach8dez.value && mail8dez.value;
    btn8dez.disabled = !allesDa;
  }

  function weiterleiten8hdez() {
    if (produktwahl8hdez === 'anliegen8hdez') {
      window.location.href = 'https://buy.stripe.com/bJe14o2rcgRX7Wg0pU3sI02';
    } else if (produktwahl8hdez === 'beobachtung8hdez') {
      window.location.href = 'https://buy.stripe.com/dRm00kfdY1X3a4o4Ga3sI03';
    }
  }
</script>






{{< line icon="icon/aufstellung.png" >}}

## Wähle den passenden Termin für dich in Pinkafeld

***

<div class="aufstellung-box">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (6 STUNDEN) IN PINKAFELD</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Mo, 13.10.2025 – 14:00 bis 20:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Bruckgasse 1, 7423 Pinkafeld</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl6hpink('anliegen6hpink')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 210 €</button>
    <button onclick="auswahl6hpink('beobachtung6hpink')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 90 €</button>
  </div>

  <div id="zustimmungen6hpink" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb6hpink"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz6hpink"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf6hpink"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular6hpink" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname6hpink"></label>
    <label>Nachname*:<br><input type="text" id="nachname6hpink"></label>
    <label>E-Mail*:<br><input type="email" id="email6hpink"></label>
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

<div class="aufstellung-box">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (6 STUNDEN) IN PINKAFELD</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Mo, 27.10.2025 – 14:00 bis 20:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Bruckgasse 1, 7423 Pinkafeld</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl6h_2710('anliegen6h_2710')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 210 €</button>
    <button onclick="auswahl6h_2710('beobachtung6h_2710')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 90 €</button>
  </div>

  <div id="zustimmungen6h_2710" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb6h_2710"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz6h_2710"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf6h_2710"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular6h_2710" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname6h_2710"></label>
    <label>Nachname*:<br><input type="text" id="nachname6h_2710"></label>
    <label>E-Mail*:<br><input type="email" id="email6h_2710"></label>
    <label><input type="checkbox" id="newsletter6h_2710"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn6h_2710" disabled onclick="weiterleiten6h_2710()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl6h_2710 = '';

  function auswahl6h_2710(wahl) {
    produktwahl6h_2710 = wahl;
    document.getElementById('zustimmungen6h_2710').style.display = 'block';
    document.getElementById('formular6h_2710').style.display = 'none';
    document.getElementById('zahlungBtn6h_2710').disabled = true;

    document.getElementById('agb6h_2710').checked = false;
    document.getElementById('datenschutz6h_2710').checked = false;
    document.getElementById('widerruf6h_2710').checked = false;
  }

  const agb_2710 = document.getElementById('agb6h_2710');
  const ds_2710 = document.getElementById('datenschutz6h_2710');
  const wid_2710 = document.getElementById('widerruf6h_2710');
  const vor_2710 = document.getElementById('vorname6h_2710');
  const nach_2710 = document.getElementById('nachname6h_2710');
  const mail_2710 = document.getElementById('email6h_2710');
  const btn_2710 = document.getElementById('zahlungBtn6h_2710');

  [agb_2710, ds_2710, wid_2710].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb_2710.checked && ds_2710.checked && wid_2710.checked;
      document.getElementById('formular6h_2710').style.display = zustimmOK ? 'block' : 'none';
      validate6h_2710();
    });
  });

  [vor_2710, nach_2710, mail_2710].forEach(el => {
    el.addEventListener('input', validate6h_2710);
  });

  function validate6h_2710() {
    const allesDa = vor_2710.value && nach_2710.value && mail_2710.value;
    btn_2710.disabled = !allesDa;
  }

  function weiterleiten6h_2710() {
    if (produktwahl6h_2710 === 'anliegen6h_2710') {
      window.location.href = 'https://buy.stripe.com/28EdRad5QeJP7Wg7Sm3sI05';
    } else if (produktwahl6h_2710 === 'beobachtung6h_2710') {
      window.location.href = 'https://buy.stripe.com/4gM6oIgi29pv6Sc7Sm3sI04';
    }
  }
</script>


<div class="aufstellung-box">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (6 STUNDEN) IN PINKAFELD</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Mo, 08.12.2025 – 14:00 bis 20:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Bruckgasse 1, 7423 Pinkafeld</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl6h_0812('anliegen6h_0812')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 210 €</button>
    <button onclick="auswahl6h_0812('beobachtung6h_0812')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 90 €</button>
  </div>

  <div id="zustimmungen6h_0812" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb6h_0812"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz6h_0812"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf6h_0812"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular6h_0812" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname6h_0812"></label>
    <label>Nachname*:<br><input type="text" id="nachname6h_0812"></label>
    <label>E-Mail*:<br><input type="email" id="email6h_0812"></label>
    <label><input type="checkbox" id="newsletter6h_0812"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn6h_0812" disabled onclick="weiterleiten6h_0812()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl6h_0812 = '';

  function auswahl6h_0812(wahl) {
    produktwahl6h_0812 = wahl;
    document.getElementById('zustimmungen6h_0812').style.display = 'block';
    document.getElementById('formular6h_0812').style.display = 'none';
    document.getElementById('zahlungBtn6h_0812').disabled = true;

    document.getElementById('agb6h_0812').checked = false;
    document.getElementById('datenschutz6h_0812').checked = false;
    document.getElementById('widerruf6h_0812').checked = false;
  }

  const agb_0812 = document.getElementById('agb6h_0812');
  const ds_0812 = document.getElementById('datenschutz6h_0812');
  const wid_0812 = document.getElementById('widerruf6h_0812');
  const vor_0812 = document.getElementById('vorname6h_0812');
  const nach_0812 = document.getElementById('nachname6h_0812');
  const mail_0812 = document.getElementById('email6h_0812');
  const btn_0812 = document.getElementById('zahlungBtn6h_0812');

  [agb_0812, ds_0812, wid_0812].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb_0812.checked && ds_0812.checked && wid_0812.checked;
      document.getElementById('formular6h_0812').style.display = zustimmOK ? 'block' : 'none';
      validate6h_0812();
    });
  });

  [vor_0812, nach_0812, mail_0812].forEach(el => {
    el.addEventListener('input', validate6h_0812);
  });

  function validate6h_0812() {
    const allesDa = vor_0812.value && nach_0812.value && mail_0812.value;
    btn_0812.disabled = !allesDa;
  }

  function weiterleiten6h_0812() {
    if (produktwahl6h_0812 === 'anliegen6h_0812') {
      window.location.href = 'https://buy.stripe.com/28EdRad5QeJP7Wg7Sm3sI05';
    } else if (produktwahl6h_0812 === 'beobachtung6h_0812') {
      window.location.href = 'https://buy.stripe.com/4gM6oIgi29pv6Sc7Sm3sI04';
    }
  }
</script>

<div class="aufstellung-box">
  <h4> FAMILIENAUFSTELLUNG – EINTAGES-AUFSTELLUNG (6 STUNDEN) IN PINKAFELD</h4>
  <p><span class="tuerkis">Termin:</span><br>
  Mo, 12.01.2026 – 14:00 bis 20:00 Uhr</p>
  <p><span class="tuerkis">Leitung:</span> Silvia Podlisca<br>
  📍 <strong>Ort:</strong> Bruckgasse 1, 7423 Pinkafeld</p>

  <p><span class="tuerkis">1. Bitte wähle deine Teilnahmevariante:</span></p>
  <div class="teilnahme-buttons">
    <button onclick="auswahl6h_1201('anliegen6h_1201')" style="border: 2px solid #00A6A6;">✨ Teilnehmer:in mit Anliegen: Preis: 210 €</button>
    <button onclick="auswahl6h_1201('beobachtung6h_1201')" style="border: 2px solid #B03C4C;">✨Teilnehmer:in ohne Anliegen: Preis: 90 €</button>
  </div>

  <div id="zustimmungen6h_1201" class="stufe">
    <p><span class="tuerkis">2. Bitte bestätige vor der Anmeldung:</span></p>
    <label><input type="checkbox" id="agb6h_1201"> Ich stimme den <a href="/agb/">AGB</a> zu *</label>
    <label><input type="checkbox" id="datenschutz6h_1201"> Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a> *</label>
    <label><input type="checkbox" id="widerruf6h_1201"> Ich habe die <a href="/widerruf/">Widerrufsbelehrung</a> gelesen *</label>
  </div>

  <div id="formular6h_1201" class="stufe">
    <p><span class="tuerkis">3. Melde dich hier an:</span></p>
    <label>Vorname*:<br><input type="text" id="vorname6h_1201"></label>
    <label>Nachname*:<br><input type="text" id="nachname6h_1201"></label>
    <label>E-Mail*:<br><input type="email" id="email6h_1201"></label>
    <label><input type="checkbox" id="newsletter6h_1201"> Ich möchte den Newsletter erhalten</label>
    <button id="zahlungBtn6h_1201" disabled onclick="weiterleiten6h_1201()">Zur Zahlung (Stripe)</button>
  </div>
</div>

<script>
  let produktwahl6h_1201 = '';

  function auswahl6h_1201(wahl) {
    produktwahl6h_1201 = wahl;
    document.getElementById('zustimmungen6h_1201').style.display = 'block';
    document.getElementById('formular6h_1201').style.display = 'none';
    document.getElementById('zahlungBtn6h_1201').disabled = true;

    document.getElementById('agb6h_1201').checked = false;
    document.getElementById('datenschutz6h_1201').checked = false;
    document.getElementById('widerruf6h_1201').checked = false;
  }

  const agb_1201 = document.getElementById('agb6h_1201');
  const ds_1201 = document.getElementById('datenschutz6h_1201');
  const wid_1201 = document.getElementById('widerruf6h_1201');
  const vor_1201 = document.getElementById('vorname6h_1201');
  const nach_1201 = document.getElementById('nachname6h_1201');
  const mail_1201 = document.getElementById('email6h_1201');
  const btn_1201 = document.getElementById('zahlungBtn6h_1201');

  [agb_1201, ds_1201, wid_1201].forEach(el => {
    el.addEventListener('change', () => {
      const zustimmOK = agb_1201.checked && ds_1201.checked && wid_1201.checked;
      document.getElementById('formular6h_1201').style.display = zustimmOK ? 'block' : 'none';
      validate6h_1201();
    });
  });

  [vor_1201, nach_1201, mail_1201].forEach(el => {
    el.addEventListener('input', validate6h_1201);
  });

  function validate6h_1201() {
    const allesDa = vor_1201.value && nach_1201.value && mail_1201.value;
    btn_1201.disabled = !allesDa;
  }

  function weiterleiten6h_1201() {
    if (produktwahl6h_1201 === 'anliegen6h_1201') {
      window.location.href = 'https://buy.stripe.com/28EdRad5QeJP7Wg7Sm3sI05';
    } else if (produktwahl6h_1201 === 'beobachtung6h_1201') {
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
