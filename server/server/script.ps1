$data = Get-Content "raw-data.json" -Encoding "UTF8" | ConvertFrom-Json

$collection = @()
foreach ($item in $data.patinoires) {
    $info = $item.nom.Substring(0, $item.nom.Length - 5).Trim().Split(",")
    if ($info[0]) {
        $nom = $info[0].Trim()
    }
    

    if ($info[1]) {
        $parc = $info[1].Trim()
    }

    $props = @{
        'Parc'           = $parc;
        'Nom'            = $nom;
        'Arrondissement' = $item.arrondissement.nom_arr;
        'Ouvert'         = If ($item.ouvert) {$true} Else {$false};
        'Deblaye'        = If ($item.deblaye) {$true} Else {$false};
        'Arrose'         = If ($item.arrose) {$true} Else {$false};
        'Resurface'      = If ($item.resurface) {$true} Else {$false};
        'Condition'      = $item.condition;
        'DateMaj'        = $item.arrondissement.date_maj;
        'Id'             = [Guid]::NewGuid();
    }

    
    if ($item.nom.Contains("PSE")) {
        $item = New-Object -TypeName PSObject -Property $props
        $collection += $item
    }
}

$collection | ConvertTo-Json | Out-File -Encoding "UTF8" -FilePath "data2.json"