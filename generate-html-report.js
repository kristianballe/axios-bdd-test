import reporter from 'cucumber-html-reporter';
import fs from 'fs';

// Optional: timestamp to avoid overwriting previous reports
const date = new Date().toISOString().replace(/:/g, '-');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',       // JSON generated from your test run
  output: `cucumber_report.html`, // HTML file generated in the same folder
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "QA",
    "Browser": "Chrome",
    "Platform": "Windows 10",
  }
};

// Only generate report if JSON exists
if (fs.existsSync(options.jsonFile)) {
  reporter.generate(options);
  console.log(`HTML report generated: ${options.output}`);
} else {
  console.log('JSON report not found. Run tests first.');
}
