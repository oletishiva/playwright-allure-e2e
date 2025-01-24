import { allure } from 'allure-playwright';

class Logger {
  info(message: string) {
    console.log(`[INFO] ${message}`);
    allure.attachment('Log', message, 'text/plain');
  }

  error(message: string) {
    console.error(`[ERROR] ${message}`);
    allure.attachment('Error Log', message, 'text/plain');
  }

  addAttribute(key: string, value: string) {
    allure.parameter(key, value);
  }
}

export default new Logger();
