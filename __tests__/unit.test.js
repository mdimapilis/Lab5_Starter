// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//phone number true tests
test("correct phone number: ", () => {
  expect((isPhoneNumber("619-555-5555"))).toBe(true);
});

test("correct phone number: ", () => {
  expect((isPhoneNumber("858-555-5555"))).toBe(true);
});

//phone number false tests
test("incorrect phone number: ", () => {
  expect((isPhoneNumber("abcd"))).toBe(false);
});

test("incorrect phone number: ", () => {
  expect((isPhoneNumber("5555555-55sdsdsdsd55"))).toBe(false);
});

//email true tests
test("correct email: ", () => {
  expect((isEmail("testtest@gmail.com"))).toBe(true);
});

test("correct email: ", () => {
  expect((isEmail("cse110@ucsd.edu"))).toBe(true);
});

//email false tests
test("incorrect email: ", () => {
  expect((isEmail("abcd.com"))).toBe(false);
});

test("incorrect email: ", () => {
  expect((isEmail("emailaemaila@cdfidif@.com"))).toBe(false);
});

//strong passowrd tests
test("strong password: ", () => {
  expect((isStrongPassword("sAa4_S31"))).toBe(true);
});

test("strong password: ", () => {
  expect((isStrongPassword("wA2wsfeA2_3er51"))).toBe(true);
});

//weak password tests
test("weak password: ", () => {
  expect((isStrongPassword("2s"))).toBe(false);
});

test("weak password: ", () => {
  expect((isStrongPassword("dvhohgohgohosidhisodhhdiohihgiog"))).toBe(false);
});


//date true tests
test("valid date: ", () => {
  expect((isDate("5/5/2024"))).toBe(true);
});

test("valid date: ", () => {
  expect((isDate("05/23/2024"))).toBe(true);
});

//date false tests
test("invalid date: ", () => {
  expect((isDate("2.4.23"))).toBe(false);
});

test("invalid date: ", () => {
  expect((isDate("5/5/24"))).toBe(false);
});

//color true tests
test("valid color: ", () => {
  expect((isHexColor("FFFFFF"))).toBe(true);
});

test("valid color: ", () => {
  expect((isHexColor("000000"))).toBe(true);
});

//color false tests
test("invalid color: ", () => {
  expect((isHexColor("XXXX"))).toBe(false);
});

test("invalid color: ", () => {
  expect((isHexColor("0"))).toBe(false);
});