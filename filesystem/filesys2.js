//filesys1 refactoring

"use strict";

const {} = require("util");
const fs = require("fs");
//util moudle로부터 promisify를 비구조화하여 내장된 기능 사용
const { promisify } = require("util");

//문자열을 입력받아 쓰고, 쓴 내용을 읽고
const WriteAndRead = async (data = "") => {
  const read = promisify(fs.readFile);
  const write = promisify(fs.writeFile);

  try {
    await write("test.txt", data);
    const content = await read("test.txt");
    return content;
  } catch (e) {
    console.log(e);
  }
};

WriteAndRead("hi, how are you?");
