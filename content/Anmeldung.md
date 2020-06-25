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
            $sendermail_antwort = true;      //E-Mail Adresse des Besuchers als Absender. false= Nein ; true = Ja
            $name_von_emailfeld = "Email";   //Feld in der die Absenderadresse steht
            
            $empfaenger = "silvia.podlisca@ifge.at"; //Empfänger-Adresse
            $mail_cc = "admin@leichtware.at"; //CC-Adresse, diese E-Mail-Adresse bekommt einer weitere Kopie
            $betreff = "IFGE Neue Anmeldung"; //Betreff der Email
            
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
            if ($sendermail_antwort and isset($_POST[$name_von_emailfeld]) and filter_var($_POST[$name_von_emailfeld], FILTER_VALIDATE_EMAIL)) {
                $email_from = $_POST[$name_von_emailfeld];
            }
            
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

Bitte geben Sie bekannt, für welchen Kurs/Lehrgang oder Seminar Sie sich anmelden.

Bei Familienaufstellungen bitte bekannt geben ob Sie als Teilnehmer\*in mit eigenem Anliegen oder als Beobachter*in dabei sein wollen. Danke!

Mit Ihrer Anmeldung stimmen Sie den AGB zu. Die Widerrufsbelehrung und Datenschutzerklärungen wurde gelesen und akzeptiert.

<form method="post" action="anmeldung.php">
<table>
    <tr>
        <td><label for="anrede" class="required">Anrede</label></td>
        <td>
            <input type="radio" id="male" name="anrede" value="Hr." required>
            <label for="male">Hr.</label><br>
            <input type="radio" id="female" name="anrede" value="Fr.">
            <label for="female">Fr.</label><br>
            <input type="radio" id="firma" name="gender" value="Firma">
            <label for="firma">Firma</label>
        </td>
    <tr>
    <tr>
        <td><label for="vorname" class="required">Vorname</label></td>
        <td><input type="text" id="vorname" name="vorname" required></td>
    </tr>
    <tr>
        <td><label for="nachname" class="required">Nachname</label></td>
        <td><input type="text" id="nachname" name="nachname" required></td>
    </tr>
    <tr>
        <td><label for="fname">Firmenname</label></td>
        <td><input type="text" id="fname" name="firmenname"></td>
    </tr>
    <tr>
        <td><label for="email" class="required">Email</label></td>
        <td><input type="email" id="email" name="email" required></td>
    </tr>
    <tr>
        <td><label for="veranstaltung" class="required">Veranstaltung</label></td>
        <td>
            <select id="veranstaltung" name="veranstaltung" required>
                {{< kurse-select >}}
            </select>
        </td>
    </tr>
    <tr>
        <td><label for="aufst">nur bei Aufstellungen</label></td>
        <td>
            <select id="aufst" name="aufst">
                    <option>-</option>
                    <option>Familienaufstellung - mit eigenem Anliegen</option>
                    <option>Familienaufstellung - teilnehmender Beobachter</option>
            </select>
        </td>
    </tr>
    <tr>
        <td><label for="zahlung">Zahlungsvariante</label></td>
        <td>
            <select id="zahlung" name="zahlung">
                <option>-</option>
                <option>Einmalzahlung</option>
                <option>Aktion: Sofort 1x Zahlung  (nur bei Lsb Lehrgang möglich; Gültigkeit beachten)</option>
                <option>Semesterzahlung (nur bei Lsb Lehrgang möglich)</option>
                <option>Ratenzahlung (nur bei Lsb Lehrgang möglich)</option>
                <option>pro Seminar / pro Modul</option>
            </select>
        </td>
    </tr>
    <tr>
        <td><label for="uid">UID Nummer</label></td>
        <td><input type="text" id="uid" name="uid"></td>
    </tr>
    <tr>
        <td><label for="adresse" class="required">Adresse</label></td>
        <td><input type="text" id="adresse" name="adresse" required></td>
    </tr>
    <tr>
        <td><label for="plz" class="required">PLZ</label></td>
        <td><input type="text" id="plz" name="plz" required></td>
    </tr>
    <tr>
        <td><label for="ort" class="required">Ort</label></td>
        <td><input type="text" id="ort" name="ort" required></td>
    </tr>
    <tr>
        <td><label for="tel" class="required">Tel.</label></td>
        <td><input type="text" id="tel" name="tel" required></td>
    </tr>
    <tr>
        <td><label for="nachricht">Ihre Mitteilung an uns</label></td>
        <td><textarea type="text" id="nachricht" name="nachricht" rows="10" cols="50"></textarea></td>
    </tr>
    <tr>
        <td><label for="bildungsscheck">IFGE Bildungsscheck Code</label></td>
        <td><input type="text" id="bildungsscheck" name="bildungsscheck"></td>
    </tr>
    <tr>
        <td><label for="aktion">IFGE Aktionscode</label></td>
        <td><input type="text" id="aktion" name="aktion"></td>
    </tr>
    <tr>
        <td><label for="agb" class="required">Ich stimme den AGB zu</label></td>
        <td><input type="checkbox" id="agb" name="agb" required></td>
    </tr>
    <tr>
        <td><label for="wdruf" class="required">Widerrufsbelehrung gelesen u. akzeptiert</label></td>
        <td><input type="checkbox" id="wdruf" name="wdruf" required></td>
    </tr>
    <tr>
        <td><label for="datenschutz" class="required">Es gilt die Datenschutzerklärung</label></td>
        <td><input type="checkbox" id="datenschutz" name="datenschutz" required></td>
    </tr>
    <tr>
        <td colspan="2"><input type="submit" name="submit"></td>
    </tr>
</table>

</form>