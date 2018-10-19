Param([string]$argCookieName)

$cookieLocation = 'C:\Users\steph\AppData\Local\Google\Chrome\User Data\Default\cookies'
$tempFileName = [System.IO.Path]::GetTempFileName()


$dummie = "select writefile('$tempFileName', encrypted_value) from cookies where host_key like '%amazon.com' and name = '$argCookieName' ORDER BY creation_utc DESC LIMIT 1;" | ./sqlite3.exe "$cookieLocation"
$cookieAsEncryptedBytes = Get-Content -Encoding Byte "$tempFileName"
Remove-Item "$tempFileName"

Add-Type -AssemblyName System.Security
$cookieAsBytes = [System.Security.Cryptography.ProtectedData]::Unprotect($cookieAsEncryptedBytes, $null, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)
$cookie = [System.Text.Encoding]::ASCII.GetString($cookieAsBytes)
$cookie


# site:https://stackoverflow.com/questions/22532870/encrypted-cookies-in-chrome
