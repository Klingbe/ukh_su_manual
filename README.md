# Stroke Unit Manual Halle – App

Handy-App zum **Stroke Unit Manual** der Klinik und Poliklinik für Neurologie, Universitätsmedizin Halle (Saale).
Verbindliche Behandlungsstandards der Stroke Unit für Ärztinnen, Ärzte und Pflege – mit Suche, Lyse-Rechner, Flussdiagrammen und Quiz.

**Zugang nur mit Passwort.** Der Inhalt ist verschlüsselt (AES-256) und ohne Passwort nicht lesbar. Das Passwort erhalten Mitarbeitende der Stroke Unit über die Leitung der Stroke Unit.

## App öffnen

**https://klingbe.github.io/ukh_su_manual/**

## Auf dem Handy einrichten (einmalig, ca. 1 Minute)

1. Link im Browser öffnen (iPhone: Safari, Android: Chrome).
2. Passwort eingeben, **„Auf diesem Gerät 30 Tage merken“** anhaken, „Öffnen“.
3. Zum Home-Bildschirm hinzufügen:
   - **iPhone:** Teilen-Symbol (□↑) → „Zum Home-Bildschirm“
   - **Android:** Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“
4. Ab jetzt über das Symbol **„SU Manual“** starten – im Vollbild wie eine normale App.

## Gut zu wissen

- **Offline:** Nach dem ersten Öffnen funktioniert die App auch ohne Netz.
- **Updates kommen automatisch:** Bei Verbindung lädt die App beim Start die neueste Version. Nichts löschen, nichts neu installieren. Auf der Startseite erscheint bei neuen Inhalten der Hinweis **„Neu“**.
- **Persönliche Einstellungen** (Schriftgröße, zuletzt geöffnet, Quiz-Fortschritt) bleiben nur auf dem eigenen Gerät gespeichert. Es werden keine Namen oder Nutzungsdaten übertragen.
- **Nicht für Patientendaten.** Die App enthält keine patientenbezogenen Daten und speichert keine.
- **Hinweis:** Das Manual ersetzt nicht Leitlinien, Fachinformationen und die Rücksprache mit dem Oberarzt. Maßgeblich ist im Zweifel die freigegebene Word-/PDF-Fassung des Manuals.

## Probleme?

| Problem | Lösung |
|---|---|
| Alte Version wird angezeigt | App ganz schließen (aus dem App-Umschalter wischen) und neu öffnen |
| Passwort wird jedes Mal abgefragt | Beim Anmelden „30 Tage merken“ anhaken; privaten Modus/Inkognito nicht verwenden |
| Symbol fehlt oder öffnet mit Adressleiste | Symbol löschen und Schritt 3 wiederholen |
| Passwort vergessen oder geändert | bei der Leitung der Stroke Unit nachfragen |

Rückmeldungen, Fehler und Vorschläge bitte an die Leitung der Stroke Unit.

---

## Für die Pflege dieses Repositorys

| Datei | Zweck | Ändert sich |
|---|---|---|
| `index.html` | die verschlüsselte App (Manual, Quiz, Rechner) | bei jedem Update |
| `.staticrypt.json` | Salz der Verschlüsselung – nötig, damit „30 Tage merken“ über Updates erhalten bleibt (kein Geheimnis) | nie |
| `sw.js` | Offline-Speicher (Service Worker) | nie |
| `manifest.webmanifest`, `icon-*.png` | Name und Symbol auf dem Home-Bildschirm | nie |
| `.nojekyll` | GitHub Pages liefert die Dateien unverändert aus | nie |

**Monatliches Update:** neue `index.html` ersetzt die alte („Add file“ → „Upload files“ → „Commit changes“). GitHub Pages veröffentlicht automatisch; die neue Version ist nach wenigen Minuten online.

**Einrichtung (einmalig):** Settings → Pages → „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.

**Niemals hochladen:** die Word-Datei des Manuals oder eine unverschlüsselte App-Fassung – dieses Repository ist öffentlich.

Stand und Version der App stehen unten auf der Startseite der App.
