$data = Get-Content "raw-data.json" -Encoding "UTF8" | ConvertFrom-Json

$collection = @()
foreach ($item in $data.patinoires) {
    $info = $item.nom.Substring(0, $item.nom.Length - 5).Trim().Split(",")
    if ($info[0]) {
        $nom = $info[0].Trim()
    }
    else {
        Write-Output "No name... Exiting"
        break
    }
    
    if ($info[1]) {
        $parc = $info[1].Trim()
    }
    
    Write-Output $parc.Replace(" ", "+")
    $response = Invoke-WebRequest -Uri $("https://maps.googleapis.com/maps/api/geocode/json?address=" + $parc.Replace(" ", "+") + "&key=AIzaSyBbzVohjOAXGswSq58pZ5Bc4ivOOkNdqu0")
    $location = (ConvertFrom-Json $response.Content).results[0].geometry.location

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
        'Lat'            = $location.lat;
        'Lng'            = $location.lng;
    }
    
    if ($item.nom.Contains("PSE")) {
        $item = New-Object -TypeName PSObject -Property $props
        $collection += $item
    }
}

$collection | ConvertTo-Json | Out-File -Encoding "UTF8" -FilePath "data2.json"