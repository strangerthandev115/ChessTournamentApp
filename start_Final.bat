@echo off
set "basePath=C:\Users\mgcan\OneDrive\Desktop\ChessTournamentApp\"
REM Set base path for SearchPlayer
set "searchPlayerPath=%basePath%SearchPlayer\"

REM ask the user if there's a fresh copy of Golden DB
set /p db_copy=Would you like to update the Golden Database? [y/n]  

REM Convert the user input to lowercase for comparison
set "db_copy=%db_copy:~0,1%"
if /i "%db_copy%"=="y" (
    set "db_copy=yes"
)

REM Check if the user input is 'yes' or 'y'
if /i "%db_copy%"=="yes" (
    REM Run the command to convert DBF to CSV
    cd "%basePath%GoldenDBUpdate\"
    if exist "TARATSUP.dbf" (
        echo "Updating Database..."
        move "TARATSUP.dbf" "..\SearchPlayer\"
        cd "..\SearchPlayer\"
        node dbfconverter.js
        echo "Update Successful..."

        REM After dbfconverter.js is run, get the current date to use in file renaming
        for /f "tokens=2-4 delims=- " %%a in ('echo %date%') do (
            set "datestamp=%%c-%%a-%%b"  REM Format the date as yyyy-mmm-dd
        )

        REM Rename the file using the datestamp
        ren "TARATSUP.dbf" "TARATSUP_%datestamp%.dbf"

        REM Move the file to another folder outside of SearchPlayer
        move "TARATSUP_%datestamp%.dbf" "%basePath%ProcessedDBFs\"
    ) else (
        echo "ERROR: Database does not exist in GoldenDBUpdate folder. Please place DBF file into folder."
        timeout /t 10
        exit /b 1
    )
) else (
    echo The Golden Database was not updated.
)

cd "%basePath%"

echo To open the server, please visit the following URL in your favorite web browser. 
echo Server will now start...
timeout /t 5

REM Start Server 
start cmd /k "node server.js"
