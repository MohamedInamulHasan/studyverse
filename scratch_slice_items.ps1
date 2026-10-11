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
}

$baseDir = "$PSScriptRoot\public\images\tamil_class1"

# 1. verupattathai.png (675 x 407)
# 3 rows, each 4 items: width ~168px
$rowY = @(30, 152, 274)
$rowH = @(120, 120, 125)
for ($r = 0; $r -lt 3; $r++) {
    for ($c = 0; $c -lt 4; $c++) {
        $x = [int]($c * (675 / 4))
        $w = [int](675 / 4)
        Crop-Image "$baseDir\verupattathai.png" "$baseDir\veru_r$($r+1)_c$($c+1).png" $x $rowY[$r] $w $rowH[$r]
    }
}

# 2. muthal_padam.png (666 x 467)
# col 0 (target): 0..135 (w=135)
# col 1..4: 135..666 (w=(666-135)/4 = 132)
$mRowY = @(65, 197, 332)
$mRowH = @(130, 133, 130)
for ($r = 0; $r -lt 3; $r++) {
    Crop-Image "$baseDir\muthal_padam.png" "$baseDir\muthal_r$($r+1)_target.png" 0 $mRowY[$r] 135 $mRowH[$r]
    for ($c = 0; $c -lt 4; $c++) {
        $x = 135 + [int]($c * 132.75)
        Crop-Image "$baseDir\muthal_padam.png" "$baseDir\muthal_r$($r+1)_opt$($c+1).png" $x $mRowY[$r] 132 $mRowH[$r]
    }
}

# 3. poruthamaanathai.png (657 x 446)
# col 0 (group): 0..170 (w=170)
# col 1..4: 170..657 (w=(657-170)/4 = 121)
$pRowY = @(62, 189, 316)
$pRowH = @(125, 125, 125)
for ($r = 0; $r -lt 3; $r++) {
    Crop-Image "$baseDir\poruthamaanathai.png" "$baseDir\porutha_r$($r+1)_group.png" 0 $pRowY[$r] 170 $pRowH[$r]
    for ($c = 0; $c -lt 4; $c++) {
        $x = 170 + [int]($c * 121.75)
        Crop-Image "$baseDir\poruthamaanathai.png" "$baseDir\porutha_r$($r+1)_opt$($c+1).png" $x $pRowY[$r] 121 $pRowH[$r]
    }
}

Write-Host "All individual items sliced successfully!"
