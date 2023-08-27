export default function Page() {
  return (
    <div>
      <h1>MCG-App</h1>
      <p>
        Eine App, die Schülern des Marie-Curie-Gymnasiums Dallgow-Döberitz ihren
        Alltag erleichtert.
      </p>
      <p>
        Diese App wurde in der Projektwoche zum 20. Jahrestag des
        Marie-Curie-Gymnasiums erstellt und wird seitdem aktiv weiterentwickelt.
      </p>

      <section>
        <h2>Benutzung</h2>
        <p>
          Die App ist leider noch nicht im Google Play Store oder Apple App
          Store verfügbar, da die dortige Veröffentlichung mit viel Aufwand und
          Kosten verbunden ist. Ihr könnt die App jedoch auf zwei andere Wege
          verwenden:
        </p>
        <h3>Android APK</h3>
        <p>
          Wenn ihr ein Android-Gerät benutzt, könnt ihr euch über die <a target="_blank" rel="noopener noreferrer" href="https://github.com/mcgapp/releases/download/v0.9.5/McgApp-v0.9.5.apk">Releases-Page</a> auf GitHub eine APK-Version der App herunterladen. So könnt ihr die
          MCG-App direkt ohne den Google Play Store installieren. Wenn ihr zum
          ersten Mal eine APK-Datei installiert, müsst ihr zusätzlich das
          "Installieren von Apps aus unbekannten Quellen" o.Ä. in den
          Einstellungen aktivieren.
        </p>
        <h3>Web App</h3>
        <p>
          Wenn ihr ein iOS-Gerät oder einen PC benutzt, oder die APK-Version aus
          anderen Gründen keine Option ist, könnt ihr die App auch firekt ohne
          Installation im Browser als Web-App nutzen. Klickt hierzu auf
          folgenden Link: <a target="_blank" rel="noopener noreferrer" href="https://mcg-app.hafemann.xyz">mcg-app.hafemann.xyz</a>
        </p>
      </section>
      <section>
        <h2>Funktionen</h2>
        <ul>
          <li>Vertretungsplan mit Filterfunktion</li>
          <li>Lehrerliste</li>
          <li>Interaktiver Raumplan</li>
          <li>Notenübersicht</li>
          <li>
            <i>Stundenplan (Coming Soon)</i>
          </li>
          <li>
            <i>Hausaufgaben- und Terminplaner (Coming Soon)</i>
          </li>
        </ul>
        <h3>Vertretungsplan</h3>
        <ul>
          <li>Aktualisierender Vertretungsplan via WebUntis</li>
          <li>Pläne für die nächsten fünf Schultage</li>
          <li>Übersichtliche Darstellung</li>
          <li>Filterfunktion nach Klassen, Kursen und Lehrern</li>
        </ul>
        <h3>Lehrerliste</h3>
        <ul>
          <li>Auflistung aller 66 Lehrer des MCG</li>
          <li>Suchfunktion</li>
          <li>E-Mail-Adresse jedes Lehrers</li>
          <li>Kontaktdaten des Sekretariats</li>
        </ul>
        <h3>Interaktiver Raumplan</h3>
        <ul>
          <li>Grafische Darstellung beider Stockwerke des MCG</li>
          <li>Übersichtliches Layout</li>
          <li>Mehr Informationen über jeden Raum</li>
          <li>
            <i>Suchfunktion zum einfachen Finden von Räumen (Coming Soon)</i>
          </li>
        </ul>
        <h3>Notenübersicht</h3>
        <ul>
          <li>Hinzufügen, Bearbeiten &amp; Löschen von Noten</li>
          <li>Automatische Berechnung des Gesamtdurchschnitts</li>
          <li>Nach Fächern sortierte Liste mit Fächerdurchschnitten</li>
        </ul>
        <h3>Einstellungen</h3>
        <ul>
          <li>Dark-Mode</li>
        </ul>
      </section>
      <section>
        <h2>Credits</h2>
        <h4>Projektleitung</h4>
        <ul>
          <li>Sven Luca Hafemann</li>
        </ul>
        <h4>Programmierung</h4>
        <ul>
          <li>Sven Luca Hafemann</li>
          <li>Tamino Mende</li>
          <li>Lukas Löffelmann</li>
          <li>Jan Luca Heise</li>
        </ul>
        <h4>Digitalisierung des Raumplans</h4>
        <ul>
          <li>Linus Wettach</li>
          <li>Lars Kuhr</li>
          <li>Luka Braunholz</li>
        </ul>
        <h4>Informationsbeschaffung</h4>
        <ul>
          <li>Michael Hennig</li>
          <li>Lukas Löffelmann</li>
        </ul>
      </section>
    </div>
  );
}
