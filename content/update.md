---
title: "Update"
url: "/update.php"
draft: true
---


# Update

{{< php >}}

    <?php
    $file = '../public.zip';

    // extract to parent folder
    $path = '../';

    $zip = new ZipArchive;
    $res = $zip->open($file);
    if ($res === TRUE) {
        $zip->extractTo($path);
        $zip->close();
        echo "Update erfolgt";        
    } else {
        echo "Kein Update erfolgt";
    }

    exit();

    ?>

{{< /php >}}