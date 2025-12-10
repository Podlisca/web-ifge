---
title: "Online-Terminvereinbarung"
description: "Vereinbaren Sie Ihren persönlichen Termin direkt online."
draft: false
---


{{< slogan >}}


***

# Termin online buchen

***

**Wählen Sie bequem einen passenden Termin für Ihre psychologische Beratung. Die Buchung ist verbindlich, und Sie erhalten automatisch eine Bestätigung per E-Mail.**

Wenn Sie eine **systemische Beratung, Sexualberatung oder Krisenintervention** wünschen, wählen Sie bitte die **psychologische Einzelberatung** aus. Diese Terminart umfasst all diese Themen und ist hier zusammengefasst, um Ihnen die Buchung zu erleichtern.

Im **Kommentarfeld** während der Buchung können Sie mir gerne erste Hinweise geben – zum Beispiel, wenn Sie möchten, dass **Ozzy, der Hund,** beim Gespräch dabei ist, oder wenn es etwas gibt, das ich im Vorfeld wissen sollte.



<h3 style="text-align: center;">Termin auswählen</h3>
<p style="text-align: center; max-width: 700px; margin: 0 auto;">
  Sie können zwischen <strong>Psychologischer Einzelberatung</strong>, <strong>Paarberatung</strong> und <strong>Einzelsupervision</strong>. Wählen Sie aus, welches Gespräch Sie buchen möchten:
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



