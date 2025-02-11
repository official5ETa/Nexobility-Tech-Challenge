```
+-----------------------+
|  tincident            |
+-----------------------+
| _id (ObjectId)        |  <-- Primärschlüssel
| date (Date)           |  <-- Zeitpunkt des Vorfalls
| location (String)     |  <-- Adresse des Vorfalls
| value (Number)        |  <-- Warenwert in Euro
| description (String)  |  <-- Mehrzeilige Beschreibung
| files (Array)         |  <-- Hashes von Bildern/Dokumenten
| address_id (ObjectId) |  <-- Fremdschlüssel zu taddress
+-----------------------+
        │
        ├──+-------------------------+
        │  |  taddress               |  <-- 1:1 tincident
        │  +-------------------------+
        │  | _id (ObjectId)          |  <-- Primärschlüssel
        │  | street (String)         |  <-- Straße
        │  | house_number (String)   |  <-- Hausnummer
        │  | city (String)           |  <-- Stadt
        │  | zip_code (String)       |  <-- Postleitzahl
        │  | country (String)        |  <-- Land
        │  +-------------------------+
        │
        ├──+-------------------------+
        │  |  tincidentsuspect       |  <-- Zwischentabelle zwischen tincident und tsuspect
        │  +-------------------------+
        │  | _id (ObjectId)          |  <-- Primärschlüssel
        │  | incident_id (ObjectId)  |  <-- Fremdschlüssel zu tincident
        │  | suspect_id (ObjectId)   |  <-- Fremdschlüssel zu tsuspect
        │  +-------------------------+
        │        │
        │        ├──+-------------------------+
        │        │  |  tsuspect               |  <-- Verschachteltes Objekt
        │        │  +-------------------------+
        │        │  | _id (ObjectId)          |  <-- Primärschlüssel
        │        │  | gender (String)         |  'männlich' | 'weiblich'
        │        │  | height (String)         |  'klein' | 'normal' | 'groß' | 'sehr groß'
        │        │  | build (String)          |  'dünn' | 'schlank' | 'gewichtig' | 'kräftig'
        │        │  | features (Array)        |  [ 'Tätowierung', 'Schmuck', 'Cap', 'Tasche', 'Brille', 'Maske' ]
        │        │  | additionalInfo (String) |  <-- Weitere Merkmale
        │        │  | images (Array)          |  <-- Hashes von Täter-Bildern
        │        │  +-------------------------+
        │
        ├──+-------------------------+
        │  |  tincidentvehicle       |  <-- Zwischentabelle zwischen tincident und tvehicle
        │  +-------------------------+
        │  | _id (ObjectId)          |  <-- Primärschlüssel
        │  | incident_id (ObjectId)  |  <-- Fremdschlüssel zu tincident
        │  | vehicle_id (ObjectId)   |  <-- Fremdschlüssel zu tvehicle
        │  +-------------------------+
        │        │
        │        ├──+-------------------------+
        │        │  |  tvehicle               |  <-- Verschachteltes Objekt
        │        │  +-------------------------+
        │        │  | _id (ObjectId)          |  <-- Primärschlüssel
        │        │  | type (String)           |  'Kleinkraftrad' | 'Motorrad' | 'Kleinstwagen' | 'Kombi' | 'SUV' | 'Pickup' | 'LKW'
        │        │  | licensePlate (String)   |  <-- Kennzeichen des Fahrzeugs
        │        │  | color (String)          |  <-- Farbe des Fahrzeugs
        │        │  | additionalInfo (String) |  <-- Weitere Details
        │        │  +-------------------------+
```