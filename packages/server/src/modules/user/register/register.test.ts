import { Connection } from "typeorm";
import * as faker from "faker";
import { 
  emailNotLongEnough,
  invalidEmail,
  passwordNotLongEnough
} from '@lspr/common';

import { User } from "../../../entity/User";
import { duplicateEmail, duplicatePhone } from "../../../utils/errorMessages";
import { TestClient } from "../../../utils/TestClient";
import { createTestConn } from "../../../testUtils/createTestConn";

faker.seed(Date.now() + 5);
const email = faker.internet.email();
const password = faker.internet.password();
const role = "user";

const client = new TestClient(process.env.TEST_HOST as string);

let conn: Connection;
beforeAll(async () => {
  conn = await createTestConn();
});
afterAll(async () => {
  conn.close();
});

describe("Register user", () => {
  it("check for duplicate emails", async () => {
    // make sure we can register a user
    const response = await client.register(email, password, role);
    expect(response.data).toEqual({ register: null });
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);

    const response2 = await client.register(email, password, role);
    expect(response2.data.register).toHaveLength(1);
    expect(response2.data.register[0]).toEqual({
      path: "email",
      message: duplicateEmail
    });
  });

  it("check for duplicate usernames", async () => {
    // make sure we can register a user
    const response = await client.register(email, password, role);
    expect(response.data).toEqual({ register: null });
    const users = await User.find({ where: { name } });
    expect(users).toHaveLength(1);
    const user = users[0];
    // expect(user.country).toEqual(country);
    // expect(user.username).toEqual(username);
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);

    const response2 = await client.register(email, password, role);
    expect(response2.data.register).toHaveLength(1);
    expect(response2.data.register[0]).toEqual({
      path: "phone",
      message: duplicatePhone
    });
  });

  it("check bad email", async () => {
    const response3 = await client.register("b", password, role);
    expect(response3.data).toEqual({
      register: [
        {
          path: "email",
          message: emailNotLongEnough
        },
        {
          path: "email",
          message: invalidEmail
        }
      ]
    });
  });

  it("check bad password", async () => {
    // catch bad password
    const response4 = await client.register(faker.internet.email(), "ad", role);
    expect(response4.data).toEqual({
      register: [
        {
          path: "password",
          message: passwordNotLongEnough
        }
      ]
    });
  });

  it("check bad password and bad email", async () => {
    const response5 = await client.register("df", "ad", role);
    expect(response5.data).toEqual({
      register: [
        {
          path: "email",
          message: emailNotLongEnough
        },
        {
          path: "email",
          message: invalidEmail
        },
        {
          path: "password",
          message: passwordNotLongEnough
        }
      ]
    });
  });
});