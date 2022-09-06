'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// async timeout
const p = document.getElementById('p');
p.innerHTML = 'test test';
// 5 second timeout
setTimeout(() => {
  p.innerHTML = 'It updated!';
}, 5000);
p.innerHTML = 'before update';

const img = document.querySelector('.img');
// img.src = 'img/img-1.jpg';

// url
// https://restcountries.com/v2/
const apiURL = 'https://restcountries.com/v3.1/name/usa';
const getCountry = country => {
  // XML HTTP Request
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);
    // render country 1
    renderCountry(data);

    // // get neighbor country
    const [neighbor] = data.borders;

    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', () => {
      const [data2] = JSON.parse(request2.responseText);
      renderCountry(data2);
    });
  });
};

// XML call
const renderCountry = data => {
  const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>${data.population} people</span></p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
  `;
  // html insert adjacent
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// getCountry('germany');
// getCountry('usa');

// modern AJAX call
// promise: used a placeholder for a future result of an async function
// promise does not need events or callback functions
// promises can be chained instead of nested call backs
// consume a promise, chain promise
const getCountryData = country => {
  // fetch request for a promise
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`);
  // .then function for a promise
  request
    // json function to be able to read the response body
    .then(
      response => response.json()
      // promise second argument is the error function
      // err => alert(err)
    )
    // chain .then methods because .json function returns another promise
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    // chain promise from the second country fetch request
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
    })
    // catch errors in the entire promise .then() chain
    .catch(err => {
      console.error('Error', err);
      renderError('Something went wrong', err);
    })
    // finaly promise method. finaly is always called wether promise fails or passes
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryData('usa');
// getCountryData('canada');

// handling rejected promises
btn.addEventListener('click', () => {
  getCountryData('germany');
});

getCountryData('abc');
