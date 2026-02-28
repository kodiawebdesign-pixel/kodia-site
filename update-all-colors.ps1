# ملف: update-all-colors.ps1
Write-Host "بدء تحديث جميع الألوان في المشروع..." -ForegroundColor Green

# 1. تغيير ألوان البنفسجي والأحمر إلى الأزرق والأخضر
$colorMappings = @{
    # بنفسجي إلى أزرق
    'violet' = 'blue'
    'purple' = 'blue'
    'fuchsia' = 'green'
    'pink' = 'green'
    'amber' = 'teal'
    'orange' = 'teal'
    'yellow' = 'teal'
    
    # ألوان Hex
    '#8b5cf6' = '#2563eb'   # بنفسجي إلى أزرق
    '#7c3aed' = '#1d4ed8'   # بنفسجي داكن إلى أزرق داكن
    '#a78bfa' = '#3b82f6'   # بنفسجي فاتح إلى أزرق فاتح
    '#c4b5fd' = '#60a5fa'   # بنفسجي فاتح جداً
    '#ec4899' = '#059669'   # فوشيا إلى أخضر
    '#db2777' = '#047857'   # فوشيا داكن إلى أخضر داكن
    '#f59e0b' = '#0891b2'   # عنبري إلى سماوي
    '#d97706' = '#0e7490'   # عنبري داكن إلى سماوي داكن
    '#fbbf24' = '#06b6d4'   # أصفر إلى سماوي فاتح
    '#f59e0b' = '#0891b2'   # برتقالي إلى سماوي
    '#ef4444' = '#b91c1c'   # أحمر فاتح إلى أحمر داكن (هادئ)
}

# الحصول على جميع ملفات TypeScript/JavaScript/CSS
$files = Get-ChildItem -Path .\src -Recurse -Include *.tsx, *.jsx, *.ts, *.js, *.css

$totalFiles = $files.Count
$currentFile = 0

foreach ($file in $files) {
    $currentFile++
    $percentComplete = [math]::Round(($currentFile / $totalFiles) * 100, 2)
    Write-Progress -Activity "تحديث الألوان" -Status "معالجة $($file.Name)" -PercentComplete $percentComplete
    
    $content = Get-Content $file.FullName -Raw
    
    $originalContent = $content
    
    # تطبيق التغييرات
    $content = $content -replace 'bg-violet-(\d+)', 'bg-blue-$1'
    $content = $content -replace 'bg-purple-(\d+)', 'bg-blue-$1'
    $content = $content -replace 'bg-fuchsia-(\d+)', 'bg-green-$1'
    $content = $content -replace 'bg-pink-(\d+)', 'bg-green-$1'
    $content = $content -replace 'bg-amber-(\d+)', 'bg-teal-$1'
    $content = $content -replace 'bg-orange-(\d+)', 'bg-teal-$1'
    $content = $content -replace 'bg-yellow-(\d+)', 'bg-teal-$1'
    
    $content = $content -replace 'from-violet-(\d+)', 'from-blue-$1'
    $content = $content -replace 'from-purple-(\d+)', 'from-blue-$1'
    $content = $content -replace 'from-fuchsia-(\d+)', 'from-green-$1'
    $content = $content -replace 'from-pink-(\d+)', 'from-green-$1'
    $content = $content -replace 'from-amber-(\d+)', 'from-teal-$1'
    $content = $content -replace 'from-orange-(\d+)', 'from-teal-$1'
    $content = $content -replace 'from-yellow-(\d+)', 'from-teal-$1'
    
    $content = $content -replace 'to-violet-(\d+)', 'to-blue-$1'
    $content = $content -replace 'to-purple-(\d+)', 'to-blue-$1'
    $content = $content -replace 'to-fuchsia-(\d+)', 'to-green-$1'
    $content = $content -replace 'to-pink-(\d+)', 'to-green-$1'
    $content = $content -replace 'to-amber-(\d+)', 'to-teal-$1'
    $content = $content -replace 'to-orange-(\d+)', 'to-teal-$1'
    $content = $content -replace 'to-yellow-(\d+)', 'to-teal-$1'
    
    $content = $content -replace 'text-violet-(\d+)', 'text-blue-$1'
    $content = $content -replace 'text-purple-(\d+)', 'text-blue-$1'
    $content = $content -replace 'text-fuchsia-(\d+)', 'text-green-$1'
    $content = $content -replace 'text-pink-(\d+)', 'text-green-$1'
    $content = $content -replace 'text-amber-(\d+)', 'text-teal-$1'
    $content = $content -replace 'text-orange-(\d+)', 'text-teal-$1'
    $content = $content -replace 'text-yellow-(\d+)', 'text-teal-$1'
    
    $content = $content -replace 'border-violet-(\d+)', 'border-blue-$1'
    $content = $content -replace 'border-purple-(\d+)', 'border-blue-$1'
    $content = $content -replace 'border-fuchsia-(\d+)', 'border-green-$1'
    $content = $content -replace 'border-pink-(\d+)', 'border-green-$1'
    $content = $content -replace 'border-amber-(\d+)', 'border-teal-$1'
    $content = $content -replace 'border-orange-(\d+)', 'border-teal-$1'
    $content = $content -replace 'border-yellow-(\d+)', 'border-teal-$1'
    
    $content = $content -replace 'ring-violet-(\d+)', 'ring-blue-$1'
    $content = $content -replace 'ring-purple-(\d+)', 'ring-blue-$1'
    $content = $content -replace 'ring-fuchsia-(\d+)', 'ring-green-$1'
    $content = $content -replace 'ring-pink-(\d+)', 'ring-green-$1'
    
    $content = $content -replace 'hover:bg-violet-(\d+)', 'hover:bg-blue-$1'
    $content = $content -replace 'hover:bg-purple-(\d+)', 'hover:bg-blue-$1'
    $content = $content -replace 'hover:bg-fuchsia-(\d+)', 'hover:bg-green-$1'
    $content = $content -replace 'hover:bg-pink-(\d+)', 'hover:bg-green-$1'
    $content = $content -replace 'hover:bg-amber-(\d+)', 'hover:bg-teal-$1'
    $content = $content -replace 'hover:bg-orange-(\d+)', 'hover:bg-teal-$1'
    
    $content = $content -replace 'hover:text-violet-(\d+)', 'hover:text-blue-$1'
    $content = $content -replace 'hover:text-purple-(\d+)', 'hover:text-blue-$1'
    $content = $content -replace 'hover:text-fuchsia-(\d+)', 'hover:text-green-$1'
    $content = $content -replace 'hover:text-pink-(\d+)', 'hover:text-green-$1'
    $content = $content -replace 'hover:text-amber-(\d+)', 'hover:text-teal-$1'
    $content = $content -replace 'hover:text-orange-(\d+)', 'hover:text-teal-$1'
    
    $content = $content -replace 'hover:border-violet-(\d+)', 'hover:border-blue-$1'
    $content = $content -replace 'hover:border-purple-(\d+)', 'hover:border-blue-$1'
    $content = $content -replace 'hover:border-fuchsia-(\d+)', 'hover:border-green-$1'
    $content = $content -replace 'hover:border-pink-(\d+)', 'hover:border-green-$1'
    
    $content = $content -replace 'dark:bg-violet-(\d+)', 'dark:bg-blue-$1'
    $content = $content -replace 'dark:bg-purple-(\d+)', 'dark:bg-blue-$1'
    $content = $content -replace 'dark:bg-fuchsia-(\d+)', 'dark:bg-green-$1'
    $content = $content -replace 'dark:bg-pink-(\d+)', 'dark:bg-green-$1'
    $content = $content -replace 'dark:bg-amber-(\d+)', 'dark:bg-teal-$1'
    
    $content = $content -replace 'dark:text-violet-(\d+)', 'dark:text-blue-$1'
    $content = $content -replace 'dark:text-purple-(\d+)', 'dark:text-blue-$1'
    $content = $content -replace 'dark:text-fuchsia-(\d+)', 'dark:text-green-$1'
    $content = $content -replace 'dark:text-pink-(\d+)', 'dark:text-green-$1'
    $content = $content -replace 'dark:text-amber-(\d+)', 'dark:text-teal-$1'
    
    $content = $content -replace 'dark:border-violet-(\d+)', 'dark:border-blue-$1'
    $content = $content -replace 'dark:border-purple-(\d+)', 'dark:border-blue-$1'
    $content = $content -replace 'dark:border-fuchsia-(\d+)', 'dark:border-green-$1'
    $content = $content -replace 'dark:border-pink-(\d+)', 'dark:border-green-$1'
    $content = $content -replace 'dark:border-amber-(\d+)', 'dark:border-teal-$1'
    
    $content = $content -replace 'dark:ring-violet-(\d+)', 'dark:ring-blue-$1'
    $content = $content -replace 'dark:ring-purple-(\d+)', 'dark:ring-blue-$1'
    
    $content = $content -replace 'dark:hover:bg-violet-(\d+)', 'dark:hover:bg-blue-$1'
    $content = $content -replace 'dark:hover:bg-purple-(\d+)', 'dark:hover:bg-blue-$1'
    $content = $content -replace 'dark:hover:bg-fuchsia-(\d+)', 'dark:hover:bg-green-$1'
    $content = $content -replace 'dark:hover:bg-pink-(\d+)', 'dark:hover:bg-green-$1'
    
    $content = $content -replace 'dark:hover:text-violet-(\d+)', 'dark:hover:text-blue-$1'
    $content = $content -replace 'dark:hover:text-purple-(\d+)', 'dark:hover:text-blue-$1'
    $content = $content -replace 'dark:hover:text-fuchsia-(\d+)', 'dark:hover:text-green-$1'
    $content = $content -replace 'dark:hover:text-pink-(\d+)', 'dark:hover:text-green-$1'
    
    # تغيير أسماء التدرجات
    $content = $content -replace 'from-violet-600 to-fuchsia-600', 'from-blue-600 to-green-600'
    $content = $content -replace 'from-fuchsia-600 to-pink-600', 'from-green-600 to-teal-600'
    $content = $content -replace 'from-amber-600 to-orange-600', 'from-teal-600 to-blue-600'
    $content = $content -replace 'from-purple-600 to-pink-600', 'from-blue-600 to-teal-600'
    $content = $content -replace 'from-indigo-600 to-violet-600', 'from-blue-600 to-green-600'
    $content = $content -replace 'from-violet-600 to-fuchsia-600', 'from-blue-600 to-green-600'
    $content = $content -replace 'from-fuchsia-600 to-amber-600', 'from-green-600 to-teal-600'
    $content = $content -replace 'from-violet-600 via-fuchsia-600 to-amber-600', 'from-blue-600 via-green-600 to-teal-600'
    
    # تغيير ألوان Hex
    foreach ($old in $colorMappings.Keys) {
        $new = $colorMappings[$old]
        $content = $content -replace $old, $new
    }
    
    # حفظ الملف إذا تغير
    if ($content -ne $originalContent) {
        $content | Set-Content $file.FullName -NoNewline
        Write-Host "تم تحديث: $($file.FullName)" -ForegroundColor Yellow
    }
}

Write-Host "`nتم تحديث جميع الملفات بنجاح!" -ForegroundColor Green
Write-Host "الخطوات التالية:" -ForegroundColor Cyan
Write-Host "1. احذف مجلد .next: rmdir /s .next" -ForegroundColor White
Write-Host "2. أعد تشغيل الخادم: npm run dev" -ForegroundColor White
Write-Host "3. تأكد من ظهور الألوان الجديدة (أزرق، أخضر، سماوي)" -ForegroundColor White