---
title: "Online Terminbuchung – Psychologische Beratung"
url: "/psychologische-beratung/onlinebuchung-beratung/"
draft: false


---

{{< line icon="icon/termine.png" >}}

# Termin online buchen
***

**Wähle bequem einen passenden Termin für deine psychologische Beratung.Die Buchung ist verbindlich, und du erhältst eine automatische Bestätigung per E-Mail.**



<h3 style="text-align: center;">Termin auswählen</h3>
<p style="text-align: center; max-width: 700px; margin: 0 auto;">
  Du kannst wählen zwischen <strong>Psychologischer Einzelberatung</strong>, <strong>Paarberatung</strong> und <strong>Einzelsupervision</strong>. Wähle aus, welches Gespräch du buchen möchtest:
</p>

<div style="text-align: center; margin-top: 1rem;">
  <select id="angebot-auswahl"
          onchange="zeigeWidget(this.value)"
          style="padding: 0.6rem 1rem; font-size: 1rem; border: 2px solid #b6014c; border-radius: 6px;">
    <option value="einzel">Psychologische Einzelberatung</option>
    <option value="paar">Paarberatung</option>
    <option value="supervision">Einzelsupervision</option>
  </select>
</div>

<div id="widget-einzel" class="calendly-widget" style="margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/30min?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<div id="widget-paar" class="calendly-widget" style="display: none; margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/psychologische-einzelberatung-klon?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<div id="widget-supervision" class="calendly-widget" style="display: none; margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/psychologische-einzelberatung-klon-1?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
<script>
function zeigeWidget(wert) {
  document.getElementById("widget-einzel").style.display = wert === "einzel" ? "block" : "none";
  document.getElementById("widget-paar").style.display = wert === "paar" ? "block" : "none";
  document.getElementById("widget-supervision").style.display = wert === "supervision" ? "block" : "none";
}
</script>





