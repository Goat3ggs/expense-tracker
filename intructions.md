MVP Flow
Components -> State -> API Logic -> useEffect/Memo/Callback/custom hooks -> Store Data -> React Charts -> Rendering -> Error Handling -> Polish

MVP

- User logs in
- User can add income/expenses and update the charts by doing so
- User can complete predifined categoryes (for Food, Bills, Rent, Salary)
- CRUD (create new sheet, read, update info(maybe), delete)
- App display base dashboard:
  - currend sold (Total income - Total expenses)
  - tranzactions history
  - simple filtering (by month)
- Data persistence:
  - every transaction must be saved in localStorage with unique ID and associated with userID that is logged in

Ticket 1: UI & Componente Statice ():

    - Creează structura de bază: Dashboard, TransactionForm, TransactionList, SummaryCards.
    - Construiește UI-ul folosind date "mock" (hardcodate) pentru a vedea cum arată aplicația.
    - Instalează o librărie simplă de grafice (ex: recharts) și afișează un grafic static.

Ticket 2: Custom Hook & State Global ():

    - Creează fișierul useLocalStorage.js (Custom Hook) pentru a citi/scrie date în browser.
    - În App.jsx, inițializează state-ul principal transactions folosind acest custom hook.
    - Creează state-uri pentru input-urile din formular (titlu, sumă, categorie, tip: venit/cheltuială).

Ticket 3: Logica Tranzacțiilor & useCallback ():

    - Implementează funcția de adăugare a unei tranzacții (cu validare simplă).
    - Implementează funcția de ștergere a unei tranzacții.
    - Atenție: Îmbracă funcția de ștergere în useCallback înainte de a o trimite ca prop către TransactionList pentru a preveni re-renderizările inutile.

Ticket 4: Statistici & useMemo ():

    - Calculează Veniturile Totale, Cheltuielile Totale și Soldul Curent pe baza listei de tranzacții.
    - Atenție: Îmbracă aceste calcule în useMemo. Nu vrei ca aplicația să recalculeze toți banii de la zero dacă utilizatorul doar deschide un meniu de filtrare.
    - Conectează datele calculate la componenta de grafic.

Ticket 5: Filtrare & Polish ():

    - Adaugă funcționalitatea de filtrare pe luni sau categorii (folosind date derivate tot cu useMemo).
    - Verifică UI-ul (stări de Empty/Error dacă nu există tranzacții).
    - Asigură-te că aplicația arată bine pe mobil.
