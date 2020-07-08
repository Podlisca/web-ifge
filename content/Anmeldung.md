---
title: "Anmeldung"
menu: "main"
draft: false
weight: 7
url: "/anmeldung.php"
description: "Hier können Sie sich für die gewünschte Veranstaltung anmelden!"
---

{{< php >}}
 
    <?php

        function getHeader($from, $cc) {
            $res="From: $from";

            if (!empty($cc)) {
                $res .= "\n";
                $res .= "Cc: $cc";
            }
            
            //Email als UTF-8 senden
            $res .= "\nContent-type: text/plain; charset=utf-8";
            return $res;
        }

        function getMessageIntern() {
            //Diese Felder werden nicht in der Mail stehen
            $ignore_fields = array('submit');

            $msg = "Folgende Anmeldung ist soeben eingegangen: \n\n";

            //Hier werden alle Eingabefelder abgefragt
            foreach($_POST as $name => $value) {
                if (in_array($name, $ignore_fields)) {
                    continue; //Ignore Felder wird nicht in die Mail eingefügt
                }
                $msg .= "$name:\n$value\n\n";
            }
            return $msg;
        }

        function getMessageExtern() {
            return "Liebe(r) " . $_POST['Anrede'] . " " . $_POST['Nachname'] . ",\n\nVielen Dank für Ihre Anmeldung zu:\n\n " .$_POST['Veranstaltung'] . ".\n\nDies ist noch keine Anmeldebestätigung, diese erhalten Sie separat von Frau Silvia Podlisca.\n\nDiese Email wurde automatisch generiert.\n\nInstitut für ganzheitliches Erleben - IFGE";
        }

        if (isset($_POST['submit']))
        {        
            $from = "noreply@ifge.at";

            $feld_email = "Email";
            $feld_veranstaltung = "Veranstaltung";
            
            $empfaenger = "silvia.podlisca@ifge.at, wien@ifge.at, buchhaltung@ifge.at";
            //$empfaenger = "admin@leichtware.at, antje.stimpfl@leichtware.at";
            $betreff = "Anmeldung ";
            
            $url_ok = "http://www.domain.de/ok.php"; //Zielseite, wenn E-Mail erfolgreich versendet wurde
            $url_fehler = "http://www.domain.de/fehler.php"; //Zielseite, wenn E-Mail nicht gesendet werden konnte                       
              
            
            //E-Mail Adresse des Besuchers als Absender
            //if ($sendermail_antwort and isset($_POST[$feld_email]) and filter_var($_POST[$feld_email], FILTER_VALIDATE_EMAIL)) {
            //    $from = $_POST[$feld_email];
            //}

            // Betreff
            $veranstaltung .= $_POST[$feld_veranstaltung];
            $betreff .= $veranstaltung;
            
            $mail_intern = true;
            $mail_extern = true;

            $mail_intern = mail($empfaenger, $betreff, getMessageIntern(), getHeader($from, ""));
            
            // Auto-Response an Kunden
            if (isset($_POST[$feld_email]) and filter_var($_POST[$feld_email], FILTER_VALIDATE_EMAIL)) {                                
                $mail_extern = mail($_POST[$feld_email], $betreff, getMessageExtern(), getHeader($from, ""));
            }
            
            if($mail_intern && $mail_extern){
                echo "Vielen Dank für Ihre Anmeldung.";
                //echo "Intern:";
                //echo "Empfänger: ".$empfaenger."Betreff: ".$betreff."Message: ".getMessageIntern()." Header:".getHeader($from, ""); 
                //echo "Extern:";
                //echo "Empfänger: ".$_POST[$feld_email]."Betreff: ".$betreff."Message: ".getMessageExtern()." Header:".getHeader($from, ""); 
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

Mit Ihrer Anmeldung stimmen Sie den [AGB](/agb.html) zu. Die [Widerrufsbelehrung](/widerrufsbelehrung.html) und [Datenschutzerklärungen](/datenschutz.html) wurden gelesen und akzeptiert.

{{< line >}}

<form method="post" action="anmeldung.php">
<div class=formular>
    <label for="anrede" class="required">Anrede</label>
    <div>
        <input type="radio" id="male" name="Anrede" value="Hr." required>
        <label for="male">Hr.</label>
        <input type="radio" id="female" name="Anrede" value="Fr.">
        <label for="female">Fr.</label>
        <input type="radio" id="firma" name="Anrede" value="Firma">
        <label for="firma">Firma</label>
    </div>
    <label for="Vorname" class="required">Vorname</label>
    <input type="text" id="Vorname" name="Vorname" required>
    <label for="Nachname" class="required">Nachname</label>
    <input type="text" id="Nachname" name="Nachname" required>    
    <label for="fname">Firmenname</label>
    <input type="text" id="fname" name="Firmenname">
    <label for="Email" class="required">Email</label>
    <input type="Email" id="Email" name="Email" required>
    <label for="Veranstaltung" class="required">Veranstaltung</label>
    <select id="Veranstaltung" name="Veranstaltung" required>
        {{< kurse-select >}}
    </select>
    <label for="aufst">nur bei Aufstellungen</label>
    <select id="aufst" name="Nur bei Aufstellungen">
            <option>-</option>
            <option>Familienaufstellung - mit eigenem Anliegen</option>
            <option>Familienaufstellung - teilnehmender Beobachter</option>
    </select>
    <label for="zahlung">Zahlungsvariante</label>
    <select id="zahlung" name="Zahlung">
        <option>-</option>
        <option>Einmalzahlung</option>
        <option>Aktion: Sofort 1x Zahlung  (nur bei Lsb Lehrgang möglich; Gültigkeit beachten)</option>
        <option>Semesterzahlung (nur bei Lsb Lehrgang möglich)</option>
        <option>Ratenzahlung (nur bei Lsb Lehrgang möglich)</option>
        <option>pro Seminar / pro Modul</option>
    </select>
    <label for="uid">UID Nummer</label>
    <input type="text" id="uid" name="UID">
    <label for="adresse" class="required">Adresse</label>
    <input type="text" id="adresse" name="Adresse" required>
    <label for="plz" class="required">PLZ</label>
    <input type="text" id="plz" name="PLZ" required>
    <label for="ort" class="required">Ort</label>
    <input type="text" id="ort" name="Ort" required>
    <label for="tel" class="required">Tel.</label>
    <input type="text" id="tel" name="Tel" required>
    <label for="nachricht">Ihre Mitteilung an uns</label>
    <textarea type="text" id="nachricht" name="Ihre Mitteilung an uns" rows="10" cols="50" res></textarea>
    <label for="bildungsscheck">IFGE Bildungsscheck Code</label>
    <input type="text" id="bildungsscheck" name="Bildungsscheck">
    <label for="aktion">IFGE Aktionscode</label>
    <input type="text" id="aktion" name="Aktion">
    <label for="agb" class="required">Ich stimme den AGB zu</label>
    <input type="checkbox" id="agb" name="AGB" value="ja" required>
    <label for="wdruf" class="required">Widerrufsbelehrung gelesen u. akzeptiert</label>
    <input type="checkbox" id="wdruf" name="Widerrufsbelehrung" value="ja" required>
    <label for="datenschutz" class="required">Es gilt die Datenschutzerklärung</label>
    <input type="checkbox" id="datenschutz" name="Datenschutzerklärung" value="ja" required>
    <div></div>
    <input type="submit" name="submit" class="button" value="Absenden">
</div>



</form>