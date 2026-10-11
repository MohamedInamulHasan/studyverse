Add-Type -AssemblyName System.Drawing

function Analyze-Image($filename) {
    $fullPath = Join-Path $PSScriptRoot "..\..\..\..\..\..\Desktop\Students Project\public\images\tamil_class1\$filename"
    if (-not (Test-Path $fullPath)) {
        $fullPath = "C:\Users\moham\Desktop\Students Project\public\images\tamil_class1\$filename"
    }
    $bmp = New-Object System.Drawing.Bitmap($fullPath)
    Write-Host "File: $filename Width: $($bmp.Width) Height: $($bmp.Height)"

    # Check horizontal lines where background transitions
    for ($y = 0; $y -lt $bmp.Height; $y += 5) {
        $c = $bmp.GetPixel(30, $y)
        # sample pixel
    }
    $bmp.Dispose()
}

Analyze-Image "verupattathai.png"
Analyze-Image "muthal_padam.png"
Analyze-Image "poruthamaanathai.png"
