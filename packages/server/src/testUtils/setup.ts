import { startServer } from "../startServer";

module.exports = async () => {
  // Call your initialization methods here.
  if (!process.env.TEST_HOST) {
    const app = await startServer();
    const { port }: any = app.address();
    process.env.TEST_HOST = `http://127.0.0.1:${port}`;
  }
  return null;
};