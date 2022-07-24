//  class ItcAccordion {
//       constructor(target, config) {
//         this._el = typeof target === 'string' ? document.querySelector(target) : target;
//         const defaultConfig = {
//           alwaysOpen: true
//         };
//         this._config = Object.assign(defaultConfig, config);
//         this.addEventListener();
//       }
//       addEventListener() {
//         this._el.addEventListener('click', (e) => {
//           const elHeader = e.target.closest('.ask_header');
//           if (!elHeader) {
//             return;
//           }
//           if (!this._config.alwaysOpen) {
//             const elOpenItem = this._el.querySelector('.ask_item_show');
//             if (elOpenItem) {
//               elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('ask_item_show') : null;
//             }
//           }
//           elHeader.parentElement.classList.toggle('ask_item_show');
//         });
//       }
//     }

$(document).ready(function () {

	$('.ask_header').click(function () {
			$(this).toggleClass('in').next().slideToggle();
			$('.ask_header').not(this).removeClass('in').next().slideUp();
        });

    });

