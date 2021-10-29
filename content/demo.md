---
title: "Demo"
draft: true
menu:
    main:
description: "Diese Seite dient als Vorlage für neue Funktionen und ist nur sichtbar wenn man hugo mit 'hugo server -D' startet"
---

# Demo

{{< slogan >}}

{{< line icon="icon/silvia.png" >}}

Kursbox enthält eine beliebige Anzahl von kurs-Elementen, wobei per default nur die ersten 3 angezeigt werden.
Verwendung siehe unten

{{% kursbox %}}
{{< kurs titel="Das ist der Titel 1" link="/ausbildungsangebote/lsb-upgrade-supervisionslehrgang" image="/img/20200620_IFGE_Pinkafeld_MG_0564.jpg" color="light-red" >}}
{{< kurs titel="Das ist der Titel 1" link="/ausbildungsangebote/lsb-upgrade-supervisionslehrgang" image="/img/20200620_IFGE_Pinkafeld_MG_0564.jpg" >}}
{{< kurs titel="Das ist der Titel 1" link="/ausbildungsangebote/lsb-upgrade-supervisionslehrgang" image="/img/20200620_IFGE_Pinkafeld_MG_0564.jpg" color="light-red" >}}
{{< kurs titel="Das ist der Titel 2" link="" image="/img/icon/zertifikat.png" >}}
{{< kurs titel="Das ist der Titel 3" link="" image="/img/icon/zertifikat.png" color="light-red" >}}
{{< kurs titel="Das ist der Titel 4" link="" image="/img/icon/zertifikat.png" >}}
{{< kurs titel="Das ist der Titel 5" link="" image="/img/icon/zertifikat.png" >}}
{{% /kursbox %}}

## Eine weitere Kursbox

{{% kursbox %}}
{{< kurs titel="Abschnitt 2 1" link="" image="/img/icon/zertifikat.png" >}}
{{< kurs titel="Titel 2" link="" image="/img/icon/zertifikat.png" >}}
{{< kurs titel="der Titel 3" link="" image="/img/icon/zertifikat.png" >}}
{{< kurs titel="Titel 4" link="" image="/img/icon/zertifikat.png" >}}
{{< kurs titel="Titel 5" link="" image="/img/icon/zertifikat.png" >}}
{{% /kursbox %}}