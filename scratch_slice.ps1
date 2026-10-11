Add-Type -AssemblyName System.Drawing

function Crop-Image($srcPath, $dstPath, $x, $y, $w, $h) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Saved $dstPath ($w x $h)"
}

$baseDir = "$PSScriptRoot\public\images\tamil_class1"

# 1. verupattathai.png (675 x 407)
# Header is roughly 0..30
# Row 1: y=30, h=120
# Row 2: y=152, h=120
# Row 3: y=274, h=120
Crop-Image "$baseDir\verupattathai.png" "$baseDir\veru_row1.png" 0 30 675 120
Crop-Image "$baseDir\verupattathai.png" "$baseDir\veru_row2.png" 0 152 675 120
Crop-Image "$baseDir\verupattathai.png" "$baseDir\veru_row3.png" 0 274 675 125

# 2. muthal_padam.png (666 x 467)
# Header is roughly 0..65
# Row 1: y=65, h=130
# Row 2: y=197, h=133
# Row 3: y=332, h=130
Crop-Image "$baseDir\muthal_padam.png" "$baseDir\muthal_row1.png" 0 65 666 130
Crop-Image "$baseDir\muthal_padam.png" "$baseDir\muthal_row2.png" 0 197 666 133
Crop-Image "$baseDir\muthal_padam.png" "$baseDir\muthal_row3.png" 0 332 666 130

# 3. poruthamaanathai.png (657 x 446)
# Header is roughly 0..62
# Row 1: y=62, h=125
# Row 2: y=189, h=125
# Row 3: y=316, h=125
Crop-Image "$baseDir\poruthamaanathai.png" "$baseDir\porutha_row1.png" 0 62 657 125
Crop-Image "$baseDir\poruthamaanathai.png" "$baseDir\porutha_row2.png" 0 189 657 125
Crop-Image "$baseDir\poruthamaanathai.png" "$baseDir\porutha_row3.png" 0 316 657 125

Write-Host "All rows sliced successfully!"
