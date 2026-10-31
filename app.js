// Addition using form input

function addValues(val1, val2) {
  return val1 + val2;
}

function formChangedAddition() {
  var add_value_1 = Number(document.getElementById("add_val_1").value);
  var add_value_2 = Number(document.getElementById("add_val_2").value);
  document.getElementById("add_val_1_out").innerHTML = add_value_1;
  document.getElementById("add_val_2_out").innerHTML = add_value_2;
  document.getElementById("sum_calc").innerHTML = addValues(
    add_value_1,
    add_value_2,
  );
}
formChangedAddition();

// Hours to seconds using form input

function hoursToSeconds(num_hours) {
  return num_hours * 3600;
}

function formChangedHoursToSeconds() {
  var num_hours = Number(document.getElementById("hours_to_seconds").value);
  document.getElementById("hours_to_seconds_out").innerHTML =
    hoursToSeconds(num_hours);
}
formChangedHoursToSeconds();

// Concatenate strings

function concatenateStrings(str1, str2) {
  return str1 + str2;
}

function formChangedConcat() {
  var str1 = document.getElementById("concat_str_1").value;
  var str2 = document.getElementById("concat_str_2").value;
  document.getElementById("concat_str_out").innerHTML = concatenateStrings(
    str1,
    str2,
  );
}
formChangedConcat();

// Promises, used for API calls

const userName = document.querySelector(".name");
const emailRef = document.querySelector(".email");

// Method 1, runs in background
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    userName.innerHTML = data.username;
  });

// Method 2, forces script to wait until complete
async function emailValue() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  emailRef.innerHTML = data.email;
}

emailValue();
