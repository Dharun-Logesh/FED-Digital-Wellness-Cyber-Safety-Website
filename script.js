document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('hero-btn');

    if (btn) {
        btn.addEventListener('click', function() {
            alert('Welcome! Thanks for getting started.');
        });
    }
});


/* card 1 */
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements for the single card
  const btn = document.getElementById('toggle-button-1');
  const title = document.getElementById('card-title-1');
  const content = document.getElementById('card-content-1');
  const img = document.getElementById('toggle-img-1');

  // Track which content is showing
  let showingAddiction = true;

  btn.addEventListener('click', function() {
    if (showingAddiction) {
      title.textContent = 'Productivity 💡';
      title.classList.remove('text-danger');
      title.classList.add('text-success');
      content.innerHTML = `
        <ul>
          <li>Access to vast information</li>
          <li>Able to solve problems fast</li>
          <li>Learning new skills online</li>
          <li>Stay informed on global events</li>
        </ul>
      `;
      img.src = "../imgs/productivity.jpg";
      img.alt = "Productivity image";
      btn.textContent = 'See Problems';
    } else {
      title.textContent = 'Digital Addiction ⚠️';
      title.classList.remove('text-success');
      title.classList.add('text-danger');
      content.innerHTML = `
        <ul>
          <li>Reduced physical activity</li>
          <li>Poor sleep quality</li>
          <li>Mental health issues</li>
          <li>Excessive screen time</li>
        </ul>
      `;
      img.src = "../imgs/phone-addiction.jpg";
      img.alt = "Phone addiction image";
      btn.textContent = 'See Benefits';
    }
    showingAddiction = !showingAddiction;
  });
});



/* card 2 */
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements for the single card
  const btn = document.getElementById('toggle-button-2');
  const title = document.getElementById('card-title-2');
  const content = document.getElementById('card-content-2');
  const img = document.getElementById('toggle-img-2');

  // Track which content is showing
  let showingAddiction = true;

  btn.addEventListener('click', function() {
    if (showingAddiction) {
      title.textContent = 'Improved Communication 🗣️';
      title.classList.remove('text-danger');
      title.classList.add('text-success');
      content.innerHTML = `
        <ul>
          <li>Access to vast information</li>
          <li>Improved communication</li>
          <li>Learning new skills online</li>
          <li>Enhanced creativity & collaboration</li>
        </ul>
      `;
      img.src = "../imgs/communication.jpg";
      img.alt = "Communication image";
      btn.textContent = 'See Problems';
    } else {
      title.textContent = 'Privacy Concerns 🔐';
      title.classList.remove('text-success');
      title.classList.add('text-danger');
      content.innerHTML = `
        <ul>
          <li>Identity Theft</li>
          <li>Financial loss</li>
          <li>Less trust in digital platforms</li>
          <li>Loss of freedom</li>
        </ul>
      `;
      img.src = "../imgs/privacy.jpg";
      img.alt = "Privacy image";
      btn.textContent = 'See Benefits';
    }
    showingAddiction = !showingAddiction;
  });
});


/* card 3 */
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements for the single card
  const btn = document.getElementById('toggle-button-3');
  const title = document.getElementById('card-title-3');
  const content = document.getElementById('card-content-3');
  const img = document.getElementById('toggle-img-3');

  // Track which content is showing
  let showingAddiction = true;

  btn.addEventListener('click', function() {
    if (showingAddiction) {
      title.textContent = 'Creative Collaboration Boost 🤩';
      title.classList.remove('text-danger');
      title.classList.add('text-success');
      content.innerHTML = `
        <ul>
          <li>Enables content creation</li>
          <li>Able to share ideas</li>
          <li>Work online with others</li>
          <li>Drives innovation</li>
        </ul>
      `;
      img.src = "../imgs/collaboration.jpg";
      img.alt = "Collaboration image";
      btn.textContent = 'See Problems';
    } else {
      title.textContent = 'Cyberbullying 💔';
      title.classList.remove('text-success');
      title.classList.add('text-danger');
      content.innerHTML = `
        <ul>
          <li>Victims suffer emotional trauma</li>
          <li>Decreased self-esteem</li>
          <li>Social withdrawl</li>
          <li>Sometimes, suicidal thoughts</li>
        </ul>
      `;
      img.src = "../imgs/cyberbullying.jpg";
      img.alt = "Cyberbullying image";
      btn.textContent = 'See Benefits';
    }
    showingAddiction = !showingAddiction;
  });
});




/* counter statistics */

// Counter animation for cyber attacks
let currentValue1 = 0;
const intervalTime1 = 29; // $34 per second -- $1 per 29 milliseconds

function updateCounter1() {
  const counterElement1 = document.getElementById('increasecounter1');
  
  if (counterElement1) { /* ensure code dosen't bereak for no reason */
    currentValue1 ++;
    
    // Update the display
    counterElement1.textContent = `$${currentValue1}`;
  }
}

// Wait for page to load completely before starting
window.addEventListener('load', function() {
  // Start the counter animation
  setInterval(updateCounter1, intervalTime1);
  
  // Start immediately after page loads
  updateCounter1();
});



// Counter animation for cyber attacks
let currentValue2 = 0;
const intervalTime2 = 60; // $34 per second -- $1 per 29 milliseconds
const barrier1 = 50

function updateCounter2() {
  const counterElement2 = document.getElementById('increasecounter2');
  
  if (counterElement2 && currentValue2 < barrier1) { /* ensure code dosen't bereak for no reason */
    currentValue2 ++;
    
    // Update the display
    counterElement2.textContent = `Almost ${currentValue2}%`;
  }
}

// Wait for page to load completely before starting
window.addEventListener('load', function() {
  // Start the counter animation
  setInterval(updateCounter2, intervalTime2);
  
  // Start immediately after page loads
  updateCounter2();
});




let currentValue3 = 0;
const intervalTime3 = 40; // $34 per second -- $1 per 29 milliseconds
const barrier2 = 67

function updateCounter3() {
  const counterElement3 = document.getElementById('increasecounter3');
  
  if (counterElement3 && currentValue3 < barrier2) { /* ensure code dosen't bereak for no reason */
    currentValue3 ++;
    
    // Update the display
    counterElement3.textContent = `${currentValue3}%`;
  }
}

// Wait for page to load completely before starting
window.addEventListener('load', function() {
  // Start the counter animation
  setInterval(updateCounter3, intervalTime3);
  
  // Start immediately after page loads
  updateCounter3();
});



/* stars rating in index.html */

document.querySelectorAll('.star-rating').forEach(starRating => {
  const stars = starRating.querySelectorAll('span');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.remove('bi-star');
          s.classList.add('bi-star-fill');
        } else {
          s.classList.remove('bi-star-fill');
          s.classList.add('bi-star');
        }
      });
    });
  });
});


/* password strength */
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const strengthFill = document.getElementById('strengthFill');
    const strengthLabel = document.getElementById('strengthLabel');
    let length_display = document.getElementById('length-display');
    if (passwordInput && strengthFill && strengthLabel) {
        passwordInput.addEventListener('input', checkPassword);

        function checkPassword() {
            const password = passwordInput.value;
            if (password.length === 0) {
                reset();
                return;
            }
            const analysis = analyzePassword(password);
            updateDisplay(analysis);
        }

        function updateDisplay(analysis) {
            const percentage = ((analysis.strength.level + 1) / 5) * 100;
            strengthFill.style.width = percentage + '%';
            strengthFill.className = 'strength-fill ' + analysis.strength.color; /* to add class of the styles colour into the class in html */
            strengthLabel.textContent = analysis.strength.label;
            length_display.textContent = `Length = ${passwordInput.value.length}`
        }

        function reset() {
            strengthFill.style.width = '0%';
            strengthLabel.textContent = 'Enter a password';
        }
    }
});

function analyzePassword(password) {
    const length = password.length; 

    let strength;
    if (length < 4) strength = { level: 0, label: 'Very Weak', color: 'very-weak' };
    else if (length < 6) strength = { level: 1, label: 'Weak', color: 'weak' };
    else if (length < 8) strength = { level: 2, label: 'Fair', color: 'fair' };
    else if (length < 12) strength = { level: 3, label: 'Good', color: 'good' };
    else strength = { level: 4, label: 'Strong', color: 'strong' };

    return { strength };
}


/* FOMO / JOMO */
const threshold = 35;

    function unfollow() {
        let count = parseInt(document.getElementById('follow-count').textContent);
        if (count > 0) {
            count -= 1;
            document.getElementById('follow-count').textContent = count;
            
            if (count <= threshold) {
                document.getElementById('fomo-text').innerHTML = 
                    'And this is how <span class="text-success" id="emotion">Joy</span> Of Missing Out (<span class="text-success" id="acronym">JOMO</span>) looks like';
                document.getElementById('unfollow-instruction').innerHTML = 'Well done! 😀';
            }
        }
    }

/* progress bar for checklist of routine */

    function updateProgress() {
        const checkboxes = document.querySelectorAll('.special > .form-check-input');

        let checkedCount = 0;
        for(let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked) {
                checkedCount++;
            }
        }
        
        const percentage = Math.round((checkedCount / checkboxes.length) * 100);
        
        const progressBar = document.getElementById('routine-progress');
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
        progressBar.setAttribute('aria-valuenow', percentage);
    }






// Quiz answers
const quizobj = {
    q1: "no",    // Using same password is not safe
    q2: "yes",   // Taking breaks is important
    q3: "no",    // Sharing passwords is not safe
    q4: "yes",   // 2FA is more secure
    q5: "no"     // Posting personal info is not safe
};

// Quiz form submission
document.addEventListener('DOMContentLoaded', function() {
    const quizform = document.getElementById('quiz-form');
    const quizresults = document.getElementById('quiz-results');
    const scoredisplay = document.getElementById('quiz-score');
    
    if (!quizform) {
      return; // Exit if form doesn't exist
    }


    function calculateQuizScore() {
        let score = 0;
        for(let question in quizobj) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected?.value === quizobj[question]) { // only if value not undefined or null
                score++;
            }
        }
        return score;
    }
    
    function displayquizresults(score, total) {
        if (quizresults && scoredisplay) {
            scoredisplay.textContent = `${score}/${total}`;
            quizresults.style.display = 'block';
        }
    }
    
    function disablequizform() {
        const inputs = quizform.querySelectorAll('input');
        inputs.forEach(input => input.disabled = true);
        quizform.querySelector('button').disabled = true;
    }


    quizform.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Calculate score
        const score = calculateQuizScore();
        const total = Object.keys(quizobj).length;
        
        // Display results
        displayquizresults(score, total);
        
        // Disable form after submission
        disablequizform();
    });
    
    
});


/* ---------------------------------------- form section ----------------------------------------------------------------------------- */

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const email_friendly = ['.','_','-']





/* name validation */

document.addEventListener("DOMContentLoaded", function() {
  let name = document.getElementById('name')
  let error = document.getElementById('name-error')
  name.addEventListener('input', (event) => {
    valid = true
    error.innerHTML ='<p class="text-danger"></p>'; 
    for (let letter of name.value.split("")){
      if (!alphabet.includes(letter) && letter !== ' '){
        error.innerHTML ='<p class="text-danger">Your name should only contain letters and space</p>';
        event.preventDefault();
        valid = false
        return;
      }
    }
  })
});



/* email validation */
document.addEventListener("DOMContentLoaded", function() {
  let email = document.getElementById('email')
  let error = document.getElementById('email-error')

  email.addEventListener('input', (event) => {
    valid = true
    error.innerHTML = '<p class="text-danger"></p>'

    // Include '@' in allowed characters here
    const allowedChars = [...alphabet, ...numbers, ...email_friendly, '@']

    for(let char of email.value){
      if(!allowedChars.includes(char)){
        error.innerHTML = '<p class="text-danger">Email only allows alphabets, numbers and ".", "_", "-", "@"</p>';
        valid = false;
        return;
      }
    }

    if(email.value.length == 1){
      error.innerHTML = '<p class="text-danger">Format for email is bob@gmail.com</p>';
      valid = false;
      return;
    }

    if(!email.value.includes('@')){
      error.innerHTML = '<p class="text-danger">Format for email is bob@gmail.com</p>';
      valid = false;
      return;
    }

    if(email.value.split('@').length - 1 > 1){
      error.innerHTML = '<p class="text-danger">Email only contains one "@"</p>';
      valid = false;
      return;
    }

    let parts = email.value.split('@')
    if(parts.length !== 2){
      error.innerHTML = '<p class="text-danger">Format for email is bob@gmail.com</p>';
      valid = false;
      return;
    }

    let front = parts[0]
    let back = parts[1]

    if(front.length == 0 || back.length == 0){
      error.innerHTML = '<p class="text-danger">Format for email is bob@gmail.com</p>';
      valid = false;
      return;
    }

    for(let char of front.toLowerCase()){
      if(!(alphabet.includes(char) || numbers.includes(char) || email_friendly.includes(char))){
        error.innerHTML = '<p class="text-danger">Email only allows alphabets, numbers and ".", "_", "-"</p>';
        valid = false;
        return;
      }
    }

    // Allow multiple dots at the back
    let domainParts = back.split('.')
    if(domainParts.length < 2 || domainParts.some(part => part.length === 0)){
      error.innerHTML = '<p class="text-danger">Format for email is bob@gmail.com</p>';
      valid = false;
      return;
    }
  })
});


/* age validation */
document.addEventListener("DOMContentLoaded", function() {
  let age = document.getElementById('age')
  let error = document.getElementById('age-error')

  age.addEventListener('input', (event) => {
    valid = true
    error.innerHTML ='<p class="text-danger"></p>'; 
    for (let number of age.value){
      if(!numbers.includes(number)){
        error.innerHTML ='<p class="text-danger">Age has to be a whole number</p>'; 
        event.preventDefault();
        valid = false
        return;
      }
    }
    if (parseInt(age.value) <= 16){
      error.innerHTML ='<p class="text-danger">Age has to be above 16 years old</p>'; 
      event.preventDefault();
      valid = false
      return;
    }
  })
});


/* contact number validation */
document.addEventListener("DOMContentLoaded", function() {
  let contact = document.getElementById('phone_number')
  let error = document.getElementById('contact-error')

  contact.addEventListener('input', (event) => {
    valid = true
    error.innerHTML ='<p class="text-danger"></p>';

    for (let number of contact.value){
      if(!(numbers.includes(number))){
        error.innerHTML ='<p class="text-danger">Phone number only contains numbers</p>'; 
        event.preventDefault();
        valid = false
        return;
      }
    }
    
    if(contact.value.length !== 8){
      error.innerHTML ='<p class="text-danger">Phone number is 8 digits</p>'; 
      event.preventDefault();
      valid = false
      return;
    }
  })
});


/* password validation checker */
document.addEventListener("DOMContentLoaded", function() {
  let password = document.getElementById('password')
  let e_password = document.getElementById('password-error')

  let c_password = document.getElementById('c_password')
  let e_c_password = document.getElementById('c_password-error')

  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '\\', '`', '~', '"', "'"];


  password.addEventListener('input', (event) => {
    valid = true
    e_password.innerHTML ='<p class="text-danger"></p>';
    

    if(password.value.length < 8){
      e_password.innerHTML ='<p class="text-danger">Password has to be longer than 8 characters</p>';
      event.preventDefault();
      valid = false
      return;
    }


    let checklowercase = false;
    let checkuppercase = false;
    let checkdigit = false;
    let checkspecial = false;

    for (let char of password.value){
      if(lowercase.includes(char)){
        checklowercase = true;
      } else if(uppercase.includes(char)){
        checkuppercase = true;
      } else if(digits.includes(char)){
        checkdigit = true;
      } else if(specialChars.includes(char)){
        checkspecial= true;
      }
    }
    if(!checklowercase || !checkuppercase || !checkdigit || !checkspecial){
      e_password.innerHTML ='<p class="text-danger">Password has to contain lowercase, uppercase, digits and special charachter</p>'; 
      event.preventDefault();
      valid = false
      return;
    }
  })

  c_password.addEventListener('input', (event) => {
    valid = true
    e_c_password.innerHTML ='<p class="text-danger"></p>';

    if(password.value !== c_password.value){
      e_c_password.innerHTML ='<p class="text-danger">Passwords do not match</p>';
      event.preventDefault();
      valid = false
      return;
    }

  });

});








/* slider */
document.addEventListener("DOMContentLoaded", function() {
  let slider = document.getElementById("sliderrange");
  let output = document.getElementById("hours");
  // output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value + ' hours';
  }
});

/* char count */

document.addEventListener("DOMContentLoaded", function() {
  let words = document.getElementById('goals');
  let charshow = document.getElementById('char');
  let max = 200;

  words.addEventListener('input', () => {
    let charleft = max - words.value.length;
    charshow.innerHTML = `${charleft} characters remaning`;
  })
});


/* t-c agree */
let termsandconditions = false;
document.addEventListener("DOMContentLoaded", function() {
  let tandc = document.getElementById('t-c');

  tandc.addEventListener('click', () => {
    
    termsandconditions = true;
  })
});






/* date checker */
document.addEventListener("DOMContentLoaded", function() {
  let date = document.getElementById('date');
  let errordate = document.getElementById('error-date')
  

  date.addEventListener('input', (event) => {
    valid = true
    errordate.innerHTML ='<p class="text-danger"></p>';

    let today = new Date()

    if (new Date(date.value) > today){
      errordate.innerHTML ='<p class="text-danger">Latest date you can input is today</p>';
      event.preventDefault();
      valid = false
      return;
    }
  })
});


/* final submit button */
document.addEventListener("DOMContentLoaded", function() {
  let task = document.getElementById('final-submit');
  let error = document.getElementById('t-c_error')

  task.addEventListener('click', (event) => {
    valid = true
    error.innerHTML ='<p class="text-danger"> </p>';
    if (!termsandconditions){
      error.innerHTML ='<p class="text-danger"> Please agree to the terms and Conditions to proceed</p>';
      event.preventDefault();
      valid = false
      return;
    } 
  })
});


document.getElementById('final-submit').addEventListener('click', (event) =>{
  if (valid){
  document.getElementById('submitMessage').style.display = 'block';
}
})

