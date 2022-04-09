// Implement Error message
export const showError = (input) => {
  const errorContainer = input.parentElement;
  const errorText = errorContainer.querySelector('div');
  errorText.innerHTML = `Please this '${input.name}' form is required`;
};

// Implement Success message
export const success = (input) => {
  const parent = input.parentElement;
  const div = parent.querySelector('div');
  div.innerHTML = '';
};
