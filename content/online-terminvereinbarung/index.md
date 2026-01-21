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

<br/>

<!-- Samstag-Hinweis (neu ab Februar 2026) -->
<style>
  .ifge-samstag-hinweis{
    max-width: 900px;
    margin: 1.2rem auto 1.6rem;
    padding: 1.05rem 1.1rem;
    border-radius: 14px;
    background: rgba(22,151,140,0.12);         /* IFGE Türkis, dezent */
    border: 1px solid rgba(22,151,140,0.30);
    color: #123b38;
  }

  .ifge-samstag-row{
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  .ifge-samstag-title{
    margin: 0 0 0.2rem 0;
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: 0.2px;
  }

  .ifge-samstag-text{
    margin: 0;
    line-height: 1.45;
    font-size: 0.98rem;
  }

  .ifge-samstag-badge{
    flex: 0 0 auto;
    padding: 0.5rem 0.75rem;
    border-radius: 999px;
    background: #16978C;
    color: #fff;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    white-space: nowrap;
  }

  @media (max-width: 640px){
    .ifge-samstag-row{
      flex-direction: column;
      align-items: flex-start;
    }
    .ifge-samstag-badge{
      align-self: flex-start;
    }
  }
</style>

<div class="ifge-samstag-hinweis" role="note" aria-label="Hinweis zu Samstag-Terminen">
  <div class="ifge-samstag-row">
    <div>
      <p class="ifge-samstag-title">Neu ab Februar 2026: Samstagtermine</p>
      <p class="ifge-samstag-text">
        Ab Februar 2026 gibt es zusätzliche Terminmöglichkeiten am Samstag.
        Wählen Sie einfach unten Ihren Wunschtermin – verfügbare Samstage werden im Kalender angezeigt.
      </p>
    </div>
    <div class="ifge-samstag-badge">SAMSTAG</div>
  </div>
</div>

<br/>

***

<h2 style="text-align: center;">Termin auswählen</h2>

***
<br/>
<br/>
<p style="text-align: center; max-width: 700px; margin: 0 auto;">
  Sie können zwischen <strong>Psychologischer Einzelberatung</strong>,
  <strong>Paarberatung</strong>,
  <strong>Klangschalenmassage</strong> und
  <strong>Einzelsupervision</strong> wählen.
</p>

<div style="text-align: center; margin-top: 1.2rem;">
  <select id="angebot-auswahl"
          onchange="zeigeWidget(this.value)"
          style="padding: 0.6rem 1rem; font-size: 1rem; border: 2px solid #b6014c; border-radius: 6px;">
    <option value="einzel" selected>Psychologische Einzelberatung</option>
    <option value="paar">Paarberatung</option>
    <option value="klang">Klangschalenmassage</option>
    <option value="supervision">Einzelsupervision</option>
  </select>
</div>

<!-- Psychologische Einzelberatung -->
<div id="widget-einzel" class="calendly-widget" style="margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/30min?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<!-- Paarberatung -->
<div id="widget-paar" class="calendly-widget" style="display: none; margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/psychologische-einzelberatung-klon?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<!-- Klangschalenmassage -->
<div id="widget-klang" class="calendly-widget" style="display: none; margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/klangschalenmassage?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<!-- Einzelsupervision -->
<div id="widget-supervision" class="calendly-widget" style="display: none; margin-top: 2rem;">
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/silvia-podlisca-ifge/psychologische-einzelberatung-klon-1?primary_color=2ba6a0"
       style="min-width: 320px; height: 800px;"></div>
</div>

<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>

<script>
function zeigeWidget(wert) {
  document.getElementById("widget-einzel").style.display =
    wert === "einzel" ? "block" : "none";

  document.getElementById("widget-paar").style.display =
    wert === "paar" ? "block" : "none";

  document.getElementById("widget-klang").style.display =
    wert === "klang" ? "block" : "none";

  document.getElementById("widget-supervision").style.display =
    wert === "supervision" ? "block" : "none";
}
</script>



