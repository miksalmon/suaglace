$data = Get-Content "raw-data.json" -Encoding "UTF8" | ConvertFrom-Json

$collection = @()
foreach ($item in $data.patinoires) {
    $props = @{
        'Nom'            = $item.nom.Substring(0, $item.nom.Length - 5).TrimEnd();
        'Type'           = If ($item.nom.Contains("(PP)")) {"PP"} Else { If ($item.nom.Contains("(PSE)")) {"PSE"} Else { If ($item.nom.Contains("(PPL)")) {"PPL"} Else {$null}}};
        'Arrondissement' = $item.arrondissement.nom_arr;
        'Ouvert'         = If ($item.ouvert) {$true} Else {$false};
        'Deblaye'        = If ($item.deblaye) {$true} Else {$false};
        'Arrose'         = If ($item.arrose) {$true} Else {$false};
        'Resurface'      = If ($item.resurface) {$true} Else {$false};
        'Condition'      = $item.condition;
        'DateMaj'        = $item.arrondissement.date_maj;
        'Id'             = [Guid]::NewGuid();
    }

    $item = New-Object -TypeName PSObject -Property $props
    $collection += $item
}

$collection | ConvertTo-Json | Out-File -Encoding "UTF8" -FilePath "data2.json"