import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
import "cypress-mochawesome-reporter";

dotenv.config();

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1024,
  viewportHeight: 768,
  video: true, 
  screenshotOnRunFailure: true, 
  e2e: {
    setupNodeEvents(on, config) {

      config.env = {
        username: process.env.CYPRESS_username,
        password: process.env.CYPRESS_password,
        textFirstName: process.env.CYPRESS_TEXT_FIRST_NAME,
        textLastName: process.env.CYPRESS_TEXT_LAST_NAME,
        textPostalCode: process.env.CYPRESS_TEXT_POSTAL_CODE,    
      };

      return config;
    },
    baseUrl: "",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
  },
});
