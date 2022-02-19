---
title: "Update"
url: "/update.php"
draft: true
---


# Update

{{< php >}}

    <?php
    $file = './public.zip';

    // extract to current dir
    $path = '.';

    $zip = new ZipArchive;
    $res = $zip->open($file);
    if ($res === TRUE) {
        $zip->extractTo($path);
        $zip->close();
        echo "Update erfolgt";        
    } else {
        echo "Kein file hinterlegt";
    }

    exit();

    ?>

{{< /php >}}