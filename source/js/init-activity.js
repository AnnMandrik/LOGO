const dataValues = document.querySelectorAll('.data__value');

const initActivity = () => {
  dataValues.forEach((el) => {
    const dataLabel = el.parentNode.querySelector('.data__label');

    el.addEventListener('input', () => {
      el.classList.add('data__value--active');
      dataLabel.classList.add('data__label--active');

      if (el.value === '') {
        el.classList.remove('data__value--active');
        dataLabel.classList.remove('data__label--active');
      }
    });
  });
};

export default {initActivity};
