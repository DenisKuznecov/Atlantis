import regExp from './regExp';

/**
 * Validate input field email adress value.
 * @param {String} email
 * @returns {Object}
 */
export function validateEmail(email) {
  return regExp.email.test(email);
}

/**
 * Validate input field password value.
 * @param {String} email
 * @returns {Object}
 */
export function validatePass(password) {
  return regExp.password.test(password);
}