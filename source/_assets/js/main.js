// import 'focus-visible';
// import 'lazysizes';
import initTabs from './util/initTabs';

window.addEventListener('DOMContentLoaded', () => {
  /**
   * Tablists.
   */
  const tablists = document.querySelectorAll('.tabs');
  if (tablists.length) {
    tablists.forEach(tablist => {
      initTabs(tablist);
    });
  }

  /**
   * Mobile table years
   */
  const tableYears = document.querySelectorAll('.table-years');
  if (tableYears.length) {
    tableYears.forEach(year => {

      let buttons = year.querySelectorAll('button');
      let tables = document.querySelectorAll('table.' + year.dataset.tables);

      buttons.forEach(button => {
        button.addEventListener('click', function (e) {
          e.preventDefault();

          // Toggle button active class
          let active = year.querySelector('button.active');
          active.classList.remove('active');
          button.classList.add('active');

          // Change visibility of columns on related tables
          if (tables.length) {
            tables.forEach(table => {

              // Remove active classes from all table cells
              let cells = table.querySelectorAll('td, th');
              if (cells.length) {
                cells.forEach(elem => {
                  elem.classList.remove('active');
                });
              }

              // Add active class to table cells in corresponding column
              let col = button.dataset.col;
              let tds = table.querySelectorAll('tbody td:nth-of-type(' + col + ')');
              if (tds.length) {
                tds.forEach(elem => {
                  elem.classList.add('active');
                });
              }

              // Add active class to table headers in corresponding column
              col++;
              let ths = table.querySelectorAll('thead th:nth-of-type(' + col + ')');
              if (ths.length) {
                ths.forEach(elem => {
                  elem.classList.add('active');
                });
              }
            });
          }
        });
      });
    });
  }
});