// SAVE TO LOCAL STORAGE

const clientName = document.getElementById('name');
const clientEmail = document.getElementById('email');
const clientMessage = document.getElementById('message');

const useLocalStorage = () => {
  const contactMessage = {
    name: clientName.value,
    email: clientEmail.value,
    message: clientMessage.value,
  };
  localStorage.setItem('contactMessage', JSON.stringify(contactMessage));
};

const formInput = document.querySelectorAll('input, textarea');
for (let j = 0; j < formInput.length; j += 1) {
  formInput[j].addEventListener('change', () => {
    useLocalStorage();
  });
}

const formData = JSON.parse(localStorage.getItem('contactMessage'));
if (formData !== null) {
  clientName.value = formData.name;
  clientEmail.value = formData.email;
  clientMessage.value = formData.message;
}
