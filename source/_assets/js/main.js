import 'focus-visible';
import 'lazysizes';
import counterUp from 'counterup2';
import sal from 'sal.js'
import initTabs from './util/initTabs';
import prefersReducedMotion from './util/prefersReducedMotion';


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


    /**
     * Initialize sal
     */
    sal({
      disabled: prefersReducedMotion(),
      selector: '.animate',
    });

    /**
     * Intersection Observer
     */
    if (!prefersReducedMotion()) {
      const accentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
            accentObserver.unobserve(entry.target);

            console.log(entry);
            
            if (entry.target.classList.contains('progress')) {
              const el = document.querySelector( '.progress' )

              // Start counting, do this on DOM ready or with Waypoints.
              counterUp( el, {
                duration: 1000,
                delay: 16,
              } )
            };

          }
        });
      });

      const animateEls = document.querySelectorAll('.progress-bar__overlay, .hero__subtitles, .green-rule, .green-rule__hero, .green-rule__article, .green-rule__tabs, .progress, .card__body');
      animateEls.forEach(el => {
        accentObserver.observe(el);
      });
    }
});