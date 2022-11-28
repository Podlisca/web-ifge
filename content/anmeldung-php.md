---
title: "Anmeldung"
draft: false
weight: 22
url: "/anmeldung.php"
disableScrollTop: true
---

{{< php >}}
 
    <?php

        function getHeader($from, $cc, $reply) {
            $res="From: $from";

            if (!empty($cc)) {
                $res .= "\r\n";
                $res .= "Cc: $cc";
            }
            
            if (!empty($reply)) {
                $res .= "\r\n";
                $res .= "Reply-To: $reply";
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
            return "Liebe*r " . $_POST['Vorname'] . " " . $_POST['Nachname'] . ",\n\nVielen Dank für Ihre Anmeldung zu:\n\n " .$_POST['Veranstaltung'] . ".\n\nDies ist noch keine Anmeldebestätigung, diese erhalten Sie separat von Frau Silvia Podlisca.\n\nDiese Email wurde automatisch generiert.\n\nInstitut für ganzheitliches Erleben - IFGE";
        }

        if (isset($_POST['recaptcha_response']))
        {   
            // Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha_secret = '6Lce7dYZAAAAALSdmjp-u8Dwmo-PmUVJ-lf_mphq';
            $recaptcha_response = $_POST['recaptcha_response'];

            // Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);

            // Take action based on the score returned:
            if ($recaptcha->score >= 0.5) {

                // Verified - send email
                $from = "noreply@ifge.at";

                $feld_email = "Email";
                $feld_veranstaltung = "Veranstaltung";
                
                $empfaenger = "silvia.podlisca@ifge.at, wien@ifge.at, buchhaltung@ifge.at";
                //$empfaenger = "admin@leichtware.at";
                $betreff = "Anmeldung IFGE ";
                
                $url_ok = "https://www.ifge.at/anmeldung/bestaetigung/"; //Zielseite, wenn E-Mail erfolgreich versendet wurde              
                
                
                //E-Mail Adresse des Besuchers als Reply-Adresse
                if (isset($_POST[$feld_email]) and filter_var($_POST[$feld_email], FILTER_VALIDATE_EMAIL)) {
                    $reply = $_POST[$feld_email];
                }

                // Betreff
                $veranstaltung .= $_POST[$feld_veranstaltung];
                $betreff .= $veranstaltung;
                
                $mail_intern = true;
                $mail_extern = true;

                $mail_intern = mail($empfaenger, $betreff, getMessageIntern(), getHeader($from, "", $reply));
                
                // Auto-Response an Kunden
                if (isset($_POST[$feld_email]) and filter_var($_POST[$feld_email], FILTER_VALIDATE_EMAIL)) {                                
                 $mail_extern = mail($_POST[$feld_email], $betreff, getMessageExtern(), getHeader($from, "", "silvia.podlisca@ifge.at"));
                }
                
                if($mail_intern && $mail_extern){                
                    echo("<script>location.href = '".$url_ok."';</script>");
                    //echo($recaptcha->score);
                    echo("Vielen Dank, Ihre Anmeldung war erfolgreich. In Kürze erhalten Sie Ihre Bestätigung.");
                    exit();
                } else{
                    echo "Bei der Anmeldung ist ein Fehler passiert. Bitte versuchen Sie es erneut und prüfen Sie Ihre Eingaben.";
                    exit();
                }
            } else {
                echo "Bei der Anmeldung ist ein Fehler passiert.";
                exit();
            }            
        }
    ?>

{{< /php >}}
