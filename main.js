const allBtn = document.querySelectorAll('.btn-js');
const appendContainer = document.getElementById('appendContainer');
const totalPrice = document.querySelector('.total-price');
const grandPrice = document.querySelector('.grand-total-price');

const inputBox = document.querySelector('.text-value');
const applyBtn = document.querySelector('.apply-btn');

const inputValue = inputBox.value;

let count = 0;
let totalPriceTicket = 0;
let grandPriceTicket = 0


function scrollTicketSection() {
    var ticketSection = document.getElementById('ticket-section');

    ticketSection.scrollIntoView({behavior: "smooth"});
}

for (const btns of allBtn) {
    btns.addEventListener('click', () => {
        if(count < 4) {
            btns.style.backgroundColor = '#1DD100';
            btns.disabled = true;
            count++;

            document.querySelector('.increase-seat').innerText = count;

            const decreaseCount = document.querySelector('.decrease-seat');
            let currentDecreaseCount = parseInt(decreaseCount.innerText);

            if (currentDecreaseCount > 0) {
                currentDecreaseCount --;
                decreaseCount.innerText = currentDecreaseCount
            }

            appendHtml(btns.innerText);

            totalPriceTicket += 550;
            totalPrice.innerText = totalPriceTicket;

            grandPriceTicket += 550;
            grandPrice.innerHTML = grandPriceTicket;
        }
    })
}


function appendHtml(btntxt) {
    // Create new HTML content based on the button clicked
    const appendTicket = "<div class = 'flex gap-[8rem]'>" + "<h1 class=''>" + btntxt + "</h1>" + "<h1 class=''>Economy</h1>" + "<h1 class=''>550</h1>" + "</div>"

    appendContainer.innerHTML +=appendTicket;
}
