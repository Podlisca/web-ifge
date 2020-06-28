---
title: "Anmeldung"
menu: "main"
draft: false
weight: 6
url: "/anmeldung.php"
---

{{< php >}}
 
    <?php

        if (isset($_POST['submit']))
        {        
            $email_from = "anmeldeformular@ifge.at";   //Absender falls keiner angegeben wurde
            $feld_email = "email";   //Feld in der die Absenderadresse steht
            $feld_veranstaltung = "veranstaltung";
            
            $empfaenger = "silvia.podlisca@ifge.at, wien@ifge.at, buchhaltung@ifge.at";
            $mail_cc = "admin@leichtware.at";
            $betreff = "Anmeldung für ";
            
            $url_ok = "http://www.domain.de/ok.php"; //Zielseite, wenn E-Mail erfolgreich versendet wurde
            $url_fehler = "http://www.domain.de/fehler.php"; //Zielseite, wenn E-Mail nicht gesendet werden konnte
                        
            //Diese Felder werden nicht in der Mail stehen
            $ignore_fields = array('submit');
                        
            $msg = "Anmeldung\n\n";
            
            //Hier werden alle Eingabefelder abgefragt
            foreach($_POST as $name => $value) {
                if (in_array($name, $ignore_fields)) {
                    continue; //Ignore Felder wird nicht in die Mail eingefügt
                }
                $msg .= "::: $name :::\n$value\n\n";
            }     
            
            //E-Mail Adresse des Besuchers als Absender
            //if ($sendermail_antwort and isset($_POST[$feld_email]) and filter_var($_POST[$feld_email], FILTER_VALIDATE_EMAIL)) {
            //    $email_from = $_POST[$feld_email];
            //}

            // Betreff zusammensetzen
            $betreff .= $_POST($feld_veranstaltung);

            $header="From: $email_from";
            
            if (!empty($mail_cc)) {
                $header .= "\n";
                $header .= "Cc: $mail_cc";
            }
            
            //Email als UTF-8 senden
            $header .= "\nContent-type: text/plain; charset=utf-8";
            
            $mail_senden = mail($empfaenger,$betreff,$msg,$header);
            
            
            //Weiterleitung, hier konnte jetzt per echo auch Ausgaben stehen
            if($mail_senden){
                echo "Vielen Dank für Ihre Anmeldung.";
                #header("Location: ".$url_ok); //Mail wurde gesendet
                exit();
            } else{
                echo "Bei der Anmeldung ist ein Fehler passiert.";
                #header("Location: ".$url_fehler); //Fehler beim Senden
                exit();
            }
        }
    ?>

{{< /php >}}

# {{< param title >}}

{{< line icon="icon/anmeldung.png" >}}

Bitte geben Sie bekannt, für welchen Kurs/Lehrgang oder Seminar Sie sich anmelden.

Bei Familienaufstellungen bitte bekannt geben ob Sie als Teilnehmer\*in mit eigenem Anliegen oder als Beobachter*in dabei sein wollen. Danke!

Mit Ihrer Anmeldung stimmen Sie den AGB zu. Die Widerrufsbelehrung und Datenschutzerklärungen wurden gelesen und akzeptiert.

{{< line >}}

<form method="post" action="anmeldung.php">
<div class=formular>
    <label for="anrede" class="required">Anrede</label>
    <div>
        <input type="radio" id="male" name="anrede" value="Hr." required>
        <label for="male">Hr.</label>
        <input type="radio" id="female" name="anrede" value="Fr.">
        <label for="female">Fr.</label>
        <input type="radio" id="firma" name="gender" value="Firma">
        <label for="firma">Firma</label>
    </div>
    <label for="vorname" class="required">Vorname</label>
    <input type="text" id="vorname" name="vorname" required>
    <label for="nachname" class="required">Nachname</label>
    <input type="text" id="nachname" name="nachname" required>    
    <label for="fname">Firmenname</label>
    <input type="text" id="fname" name="firmenname">
    <label for="email" class="required">Email</label>
    <input type="email" id="email" name="email" required>
    <label for="veranstaltung" class="required">Veranstaltung</label>
    <select id="veranstaltung" name="veranstaltung" required>
        {{< kurse-select >}}
    </select>
    <label for="aufst">nur bei Aufstellungen</label>
    <select id="aufst" name="aufst">
            <option>-</option>
            <option>Familienaufstellung - mit eigenem Anliegen</option>
            <option>Familienaufstellung - teilnehmender Beobachter</option>
    </select>
    <label for="zahlung">Zahlungsvariante</label>
    <select id="zahlung" name="zahlung">
        <option>-</option>
        <option>Einmalzahlung</option>
        <option>Aktion: Sofort 1x Zahlung  (nur bei Lsb Lehrgang möglich; Gültigkeit beachten)</option>
        <option>Semesterzahlung (nur bei Lsb Lehrgang möglich)</option>
        <option>Ratenzahlung (nur bei Lsb Lehrgang möglich)</option>
        <option>pro Seminar / pro Modul</option>
    </select>
    <label for="uid">UID Nummer</label>
    <input type="text" id="uid" name="uid">
    <label for="adresse" class="required">Adresse</label>
    <input type="text" id="adresse" name="adresse" required>
    <label for="plz" class="required">PLZ</label>
    <input type="text" id="plz" name="plz" required>
    <label for="ort" class="required">Ort</label>
    <input type="text" id="ort" name="ort" required>
    <label for="tel" class="required">Tel.</label>
    <input type="text" id="tel" name="tel" required>
    <label for="nachricht">Ihre Mitteilung an uns</label>
    <textarea type="text" id="nachricht" name="nachricht" rows="10" cols="50" res></textarea>
    <label for="bildungsscheck">IFGE Bildungsscheck Code</label>
    <input type="text" id="bildungsscheck" name="bildungsscheck">
    <label for="aktion">IFGE Aktionscode</label>
    <input type="text" id="aktion" name="aktion">
    <label for="agb" class="required">Ich stimme den AGB zu</label>
    <input type="checkbox" id="agb" name="agb" required>
    <label for="wdruf" class="required">Widerrufsbelehrung gelesen u. akzeptiert</label>
    <input type="checkbox" id="wdruf" name="wdruf" required>
    <label for="datenschutz" class="required">Es gilt die Datenschutzerklärung</label>
    <input type="checkbox" id="datenschutz" name="datenschutz" required>
    <div></div>
    <input type="submit" name="submit" class="button" value="Absenden">
</div>



</form>